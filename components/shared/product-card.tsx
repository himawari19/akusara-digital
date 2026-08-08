import Link from "next/link";
import type { Product } from "@/lib/data/products";
import { ProductImage } from "./product-image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article
      className={cn(
        "group bg-white border border-line rounded-[18px] overflow-hidden flex flex-col card-lift",
        className
      )}
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[16/10] bg-ivory-deep">
          <ProductImage
            src={product.image}
            alt={`${product.name} — ${product.badge}`}
          />
        </div>
      </Link>
      <div className="p-6 flex flex-col gap-3.5 flex-1">
        <div className="flex items-center gap-3">
          <span className="badge">{product.badge}</span>
          <h3 className="text-2xl font-black tracking-tight">
            {product.name}
          </h3>
        </div>
        <p className="text-ink-soft text-[15px] leading-relaxed">
          {product.summary}
        </p>
        <ul className="flex flex-col gap-2">
          {product.features.map((f, i) => (
            <li
              key={i}
              className="text-sm font-semibold text-ink pl-6 relative before:absolute before:left-0 before:content-['✓'] before:text-brand before:font-black"
            >
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-3.5 border-t border-dashed border-line">
          <div className="flex flex-wrap gap-2">
            {product.stack.map((s) => (
              <span
                key={s}
                className="bg-ivory-deep text-ink-soft text-xs font-bold px-3 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-deep transition-colors"
          >
            View case study
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
