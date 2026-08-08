import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * Fills its parent. Parent MUST be `relative` with a defined height
 * (e.g. `aspect-[16/10]`). This component renders nothing extra —
 * it just forwards the sizing to the parent's box.
 */
export function ProductImage({
  src,
  alt,
  className,
  priority = false,
}: ProductImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 600px"
      className={"object-cover " + (className ?? "")}
      priority={priority}
    />
  );
}
