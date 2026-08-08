import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { Counter } from "@/components/shared/counter";
import { Marquee } from "@/components/shared/marquee";
import { ParallaxHeroBg } from "@/components/shared/parallax-hero-bg";
import { site } from "@/lib/data/site";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=75&auto=format&fit=crop";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      <ParallaxHeroBg />
      <div className="relative z-2 container-ak w-full pt-[110px] pb-[70px] md:pt-[140px] md:pb-[90px] grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <Reveal>
            <span className="inline-block bg-ivory-deep border border-line text-brand-deep font-bold text-sm px-4 py-2 rounded-full mb-6">
              Digital Agency — Jakarta, Indonesia
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-[clamp(40px,5.5vw,68px)] leading-[1.05] tracking-[-0.02em] font-black max-w-[760px]">
              We build{" "}
              <span className="red-underline">
                digital products
                <span className="red-underline-accent" />
              </span>{" "}
              that take your business to the next level.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-[clamp(16px,2vw,19px)] text-ink-soft max-w-[560px] my-6 md:my-7">
              Websites, apps, e-commerce, and AI tools — not just pretty
              screens, but products that are actually used, maintained, and
              generating results.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex gap-4 flex-wrap">
              <Button asChild variant="red" size="lg">
                <Link href="/#products">See Our Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#contact">Free Consultation</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex gap-x-8 gap-y-5 mt-12 md:gap-11 md:mt-14 flex-wrap">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <strong className="text-3xl md:text-4xl font-black text-brand block leading-[1.1]">
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

        <Reveal delay={250} className="hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 rounded-[24px] bg-brand/5 pulse-ring" />
            <div className="relative rounded-[24px] overflow-hidden border border-line shadow-[0_40px_80px_-40px_rgba(122,15,24,0.35)]">
              <Image
                src={HERO_IMAGE}
                alt="Team building digital products at Akusara Digital"
                width={1200}
                height={900}
                className="kenburns object-cover w-full h-[520px]"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-brand text-white rounded-2xl px-6 py-4 shadow-lg float-slow">
              <strong className="block text-2xl font-black leading-none">
                10+
              </strong>
              <span className="text-xs font-semibold opacity-90">
                products shipped
              </span>
            </div>
          </div>
        </Reveal>
      </div>
      <Marquee items={site.marquee} className="relative z-3 mt-auto" />
    </section>
  );
}
