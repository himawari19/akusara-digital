import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return (async () => {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: "Article not found" };

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.date,
      },
      alternates: { canonical: `/blog/${slug}` },
    };
  })();
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Akusara Digital" },
  };

  return (
    <article className="pt-24 md:pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-ak max-w-[760px]">
        <nav className="text-sm text-ink-soft flex items-center gap-2 mb-8">
          <Link href="/" className="hover:text-brand transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-ink font-semibold truncate max-w-[200px]">
            {post.title}
          </span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <time className="text-sm font-semibold text-ink-soft">
            {new Date(post.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span className="text-ink-soft text-sm">·</span>
          <span className="text-sm font-semibold text-ink-soft">
            {post.readingTime} min read
          </span>
        </div>

        <h1 className="text-[clamp(28px,5vw,44px)] font-black leading-[1.15] tracking-[-0.02em] mb-5">
          {post.title}
        </h1>
        <p className="text-ink-soft text-lg leading-relaxed mb-7">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-7">
          {post.tags.map((t) => (
            <span
              key={t}
              className="bg-ivory-deep text-ink-soft text-xs font-bold px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <Separator className="mb-8 bg-line" />

        <div className="prose-blog">
          <MDXRemote source={post.content} />
        </div>

        <Separator className="my-10 bg-line" />

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">← All articles</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
