import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { ProductCard } from "@/components/shared/product-card";
import { products } from "@/lib/data/products";
import { Button } from "@/components/ui/button";

export function Products() {
  return (
    <section id="products" className="py-[100px] bg-ivory-deep">
      <div className="container-ak">
        <Reveal>
          <p className="text-brand font-extrabold uppercase tracking-[0.14em] text-[13px] mb-3.5">
            Our Products
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-[clamp(30px,4vw,46px)] font-black leading-[1.12] tracking-[-0.01em] mb-4.5">
            Not just a portfolio. These are products{" "}
            <span className="red-underline">
              that actually run
              <span className="red-underline-accent" />
            </span>
            .
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-ink-soft text-[17px] max-w-[620px] mb-13">
            Every product below was built, tested, and launched by us — from
            landing pages to platforms with payments and their own admin.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px]">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80} className="h-full">
              <ProductCard product={p} className="h-full" />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/#contact">Discuss your project with us</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
