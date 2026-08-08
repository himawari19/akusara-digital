import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ProductImage({
  src,
  alt,
  className,
  priority = false,
}: ProductImageProps) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl " + (className ?? "")
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover img-zoom"
        priority={priority}
      />
    </div>
  );
}
