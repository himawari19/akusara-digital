import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Blog — Insights on Building Digital Products",
  description:
    "Articles and lessons from building digital products: websites, apps, AI, and QA automation.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-28 pb-20">
      <div className="container-ak">
        <Reveal>
          <p className="text-brand font-extrabold uppercase tracking-[0.14em] text-[13px] mb-3.5">
            Blog
          </p>
        </Reveal>
        <Reveal>
          <h1 className="text-[clamp(32px,5vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-5">
            Insights from{" "}
            <span className="red-underline">
              building products
              <span className="red-underline-accent" />
            </span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-ink-soft text-lg max-w-[620px] mb-12">
            Articles on web, apps, AI, and QA — from real experience building
            and maintaining digital products.
          </p>
        </Reveal>

        {posts.length === 0 ? (
          <Reveal>
            <div className="bg-white border border-line rounded-[18px] p-12 text-center">
              <p className="text-3xl mb-3">📝</p>
              <p className="text-ink-soft">
                No articles yet. Check back soon!
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block bg-white border border-line rounded-[18px] p-7 h-full card-lift"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-xs font-semibold text-ink-soft">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="text-ink-soft text-xs">·</span>
                    <span className="text-xs font-semibold text-ink-soft">
                      {post.readingTime} min read
                    </span>
                  </div>
                  <h2 className="text-xl font-black mb-2.5 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-ink-soft text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-ivory-deep text-ink-soft text-xs font-bold px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
