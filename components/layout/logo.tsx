import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className, light = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 font-extrabold text-xl",
        light ? "text-ivory" : "text-ink",
        className
      )}
    >
      <span className="w-[38px] h-[38px] rounded-[10px] bg-brand text-ivory grid place-items-center text-xl font-black shadow-[0_6px_14px_-6px_rgba(163,22,33,0.6)]">
        A
      </span>
      <span className="logo-text">
        Akusara<em className="not-italic text-brand">Digital</em>
      </span>
    </Link>
  );
}
