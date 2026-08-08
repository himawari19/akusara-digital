import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: readonly string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  const span = items.join(" \u2022 ") + " \u2022 ";
  return (
    <div className={cn("marquee-band", className)} aria-hidden="true">
      <div className="marquee-track">
        <span className="font-extrabold text-[15px] tracking-[0.12em] whitespace-nowrap">
          {span}
        </span>
        <span className="font-extrabold text-[15px] tracking-[0.12em] whitespace-nowrap">
          {span}
        </span>
      </div>
    </div>
  );
}
