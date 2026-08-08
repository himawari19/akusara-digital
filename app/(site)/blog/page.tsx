import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Blog — Insight & Insight Digital",
  description:
    "Tulisan, insight, dan pelajaran dari membangun produk digital: website, aplikasi, AI, dan QA automation.",
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
            Insight &amp; pelajaran dari{" "}
            <span className="red-underline">
              membangun produk
              <span className="red-underline-accent" />
            </span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-ink-soft text-lg max-w-[620px] mb-12">
            Tulisan seputar web, aplikasi, AI, dan QA — dari pengalaman nyata
            kami membangun dan merawat produk digital.
          </p>
        </Reveal>

        {posts.length === 0 ? (
          <Reveal>
            <div className="bg-white border border-line rounded-[18px] p-12 text-center">
              <p className="text-3xl mb-3">📝</p>
              <p className="text-ink-soft">
                Belum ada artikel. Kembali lagi segera ya!
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block bg-white border border-line rounded-[18px] p-7 h-full transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(122,15,24,0.25)] hover:border-brand"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-xs font-semibold text-ink-soft">
                      {new Date(post.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="text-ink-soft text-xs">·</span>
                    <span className="text-xs font-semibold text-ink-soft">
                      {post.readingTime} mnt baca
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
