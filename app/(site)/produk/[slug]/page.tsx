import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug } from "@/lib/data/products";
import { ProductVisual } from "@/components/shared/product-visual";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return (async () => {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) return { title: "Produk tidak ditemukan" };

    return {
      title: `${product.name} — ${product.badge}`,
      description: product.summary,
      openGraph: {
        title: `${product.name} — Akusara Digital`,
        description: product.summary,
        type: "website",
      },
      alternates: { canonical: `/produk/${slug}` },
    };
  })();
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: product.tag,
    description: product.summary,
    offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
  };

  return (
    <article className="pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="container-ak">
        <nav className="text-sm text-ink-soft flex items-center gap-2 mb-8">
          <Link href="/" className="hover:text-brand transition-colors">Beranda</Link>
          <span>/</span>
          <Link href="/#produk" className="hover:text-brand transition-colors">Produk</Link>
          <span>/</span>
          <span className="text-ink font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* Hero produk */}
      <section className="bg-ivory-deep py-12">
        <div className="container-ak grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="bg-white border border-line rounded-[18px] p-8 shadow-[0_24px_60px_-24px_rgba(122,15,24,0.25)]">
              <ProductVisual visual={product.visual} />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="badge mb-4">{product.badge}</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-[clamp(32px,5vw,56px)] font-black leading-[1.1] tracking-[-0.02em] mb-5">
                {product.name}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-ink-soft text-lg leading-relaxed mb-7">
                {product.longDescription}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-2 mb-7">
                {product.stack.map((s) => (
                  <span
                    key={s}
                    className="bg-white border border-line text-ink text-sm font-bold px-3.5 py-1.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="flex gap-3 flex-wrap">
                <Button asChild variant="red" size="lg">
                  <Link href="/#kontak">Konsultasi proyek serupa</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/#produk">Lihat semua produk</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Feature breakdown */}
      <section className="py-16">
        <div className="container-ak">
          <Reveal>
            <h2 className="text-[clamp(26px,4vw,38px)] font-black mb-3">
              Fitur utama{" "}
              <span className="red-underline">
                {product.name}
                <span className="red-underline-accent" />
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <Separator className="mb-10 bg-line" />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {product.featureDetails.map((f, i) => (
              <Reveal key={i} delay={i * 80} className="h-full">
                <div className="bg-white border border-line rounded-[18px] p-7 h-full transition-all duration-200 hover:shadow-[0_24px_60px_-24px_rgba(122,15,24,0.25)] hover:border-brand">
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 shrink-0 rounded-xl bg-brand text-ivory grid place-items-center font-black text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold mb-2">{f.title}</h3>
                      <p className="text-ink-soft leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Produk lain */}
      <section className="bg-ivory-deep py-16">
        <div className="container-ak">
          <Reveal>
            <h2 className="text-[clamp(26px,4vw,38px)] font-black mb-8">
              Produk lainnya
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className="h-full">
                <Link
                  href={`/produk/${p.slug}`}
                  className="block bg-white border border-line rounded-[18px] p-6 h-full transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(122,15,24,0.25)] hover:border-brand"
                >
                  <span className="badge mb-3">{p.badge}</span>
                  <h3 className="text-xl font-black mb-2">{p.name}</h3>
                  <p className="text-ink-soft text-sm leading-relaxed line-clamp-3">
                    {p.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">
                    Lihat detail <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container-ak max-w-[600px]">
          <Reveal>
            <h2 className="text-[clamp(26px,4vw,42px)] font-black leading-[1.1] mb-4">
              Mau bangun produk seperti{" "}
              <span className="red-underline">
                ini<span className="red-underline-accent" />
              </span>
              ?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-ink-soft text-lg mb-7">
              Ceritakan ide bisnismu — kami bantu wujudkan dari nol sampai
              go-live.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Button asChild variant="red" size="lg">
              <Link href="/#kontak">Konsultasi Gratis Sekarang</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
