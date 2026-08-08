import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { Counter } from "@/components/shared/counter";
import { Marquee } from "@/components/shared/marquee";
import { ParallaxHeroBg } from "@/components/shared/parallax-hero-bg";
import { site } from "@/lib/data/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ivory">
      <ParallaxHeroBg />
      <div className="relative z-2 container-ak w-full pt-[140px] pb-[90px]">
        <Reveal>
          <span className="inline-block bg-ivory-deep border border-line text-brand-deep font-bold text-sm px-4 py-2 rounded-full mb-6">
            🌶️ Digital Agency — Jakarta, Indonesia
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-[-0.02em] font-black max-w-[900px]">
            Kami membangun{" "}
            <span className="red-underline">
              produk digital
              <span className="red-underline-accent" />
            </span>{" "}
            yang bikin bisnis kamu{" "}
            <span className="red-stamp">naik level</span>.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-[clamp(16px,2vw,20px)] text-ink-soft max-w-[640px] my-6 md:my-7">
            Website, aplikasi, e-commerce, sampai tools AI — bukan sekadar
            tampilan cantik, tapi benar-benar dipakai, dirawat, dan menghasilkan.
            Semua produk di bawah ini sudah pernah kami buat &amp; jalankan.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="flex gap-4 flex-wrap">
            <Button asChild variant="red" size="lg">
              <Link href="/#produk">Lihat Produk Kami</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#kontak">Diskusi Gratis</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <div className="flex gap-11 mt-14 flex-wrap">
            {site.stats.map((s) => (
              <div key={s.label} className="stat">
                <strong className="text-4xl font-black text-brand block leading-[1.1]">
                  <Counter target={s.count} />
                </strong>
                <span className="text-ink-soft text-sm font-semibold">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <Marquee items={site.marquee} className="relative z-3 mt-auto" />
    </section>
  );
}
