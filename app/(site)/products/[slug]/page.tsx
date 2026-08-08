import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug } from "@/lib/data/products";
import { ProductImage } from "@/components/shared/product-image";
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
    if (!product) return { title: "Product not found" };

    return {
      title: `${product.name} — ${product.badge}`,
      description: product.summary,
      openGraph: {
        title: `${product.name} — Akusara Digital`,
        description: product.summary,
        type: "website",
        images: [product.image],
      },
      alternates: { canonical: `/products/${slug}` },
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
    image: product.image,
  };

  return (
    <article className="pt-24 md:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="container-ak">
        <nav className="text-sm text-ink-soft flex items-center gap-2 mb-8">
          <Link href="/" className="hover:text-brand transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#products" className="hover:text-brand transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-ink font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* Product hero */}
      <section className="bg-ivory-deep py-12">
        <div className="container-ak grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[16/11] rounded-[18px] overflow-hidden border border-line shadow-[0_24px_60px_-24px_rgba(122,15,24,0.25)]">
              <ProductImage
                src={product.image}
                alt={`${product.name} — ${product.badge}`}
              />
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
                  <Link href="/#contact">Build something similar</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/#products">See all products</Link>
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
              Key features of{" "}
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
                <div className="bg-white border border-line rounded-[18px] p-7 h-full card-lift">
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 shrink-0 rounded-xl bg-brand text-white grid place-items-center font-black text-lg">
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

      {/* Other products */}
      <section className="bg-ivory-deep py-16">
        <div className="container-ak">
          <Reveal>
            <h2 className="text-[clamp(26px,4vw,38px)] font-black mb-8">
              Other products
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className="h-full">
                <Link
                  href={`/products/${p.slug}`}
                  className="block bg-white border border-line rounded-[18px] overflow-hidden h-full card-lift"
                >
                  <div className="relative aspect-[16/9] bg-ivory-deep">
                    <ProductImage
                      src={p.image}
                      alt={`${p.name} — ${p.badge}`}
                    />
                  </div>
                  <div className="p-6">
                    <span className="badge mb-3">{p.badge}</span>
                    <h3 className="text-xl font-black mb-2">{p.name}</h3>
                    <p className="text-ink-soft text-sm leading-relaxed line-clamp-3">
                      {p.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">
                      View case study <span aria-hidden="true">→</span>
                    </span>
                  </div>
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
              Want to build something like{" "}
              <span className="red-underline">
                this<span className="red-underline-accent" />
              </span>
              ?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-ink-soft text-lg mb-7">
              Tell us your idea — we'll help bring it from zero to go-live.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Button asChild variant="red" size="lg">
              <Link href="/#contact">Free Consultation Now</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
