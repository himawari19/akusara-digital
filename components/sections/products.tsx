import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { ProductCard } from "@/components/shared/product-card";
import { products } from "@/lib/data/products";
import { Button } from "@/components/ui/button";

export function Products() {
  return (
    <section id="produk" className="py-[100px] bg-ivory-deep">
      <div className="container-ak">
        <Reveal>
          <p className="text-brand font-extrabold uppercase tracking-[0.14em] text-[13px] mb-3.5">
            Produk Kami
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-[clamp(30px,4vw,46px)] font-black leading-[1.12] tracking-[-0.01em] mb-4.5">
            Bukan cuma portofolio. Ini produk yang{" "}
            <span className="red-underline">
              beneran jalan<span className="red-underline-accent" />
            </span>
            .
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-ink-soft text-[17px] max-w-[620px] mb-13">
            Setiap produk di bawah pernah kami bangun, uji, dan jalankan — dari
            landing page sampai platform dengan pembayaran &amp; admin sendiri.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px]">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/#kontak">Diskusi proyekmu dengan kami</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
