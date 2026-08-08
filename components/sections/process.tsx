import { Reveal } from "@/components/shared/reveal";
import { processSteps } from "@/lib/data/process";

export function Process() {
  return (
    <section id="cara-kerja" className="py-[100px]">
      <div className="container-ak">
        <Reveal>
          <p className="text-brand font-extrabold uppercase tracking-[0.14em] text-[13px] mb-3.5">
            Cara Kerja
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-[clamp(30px,4vw,46px)] font-black leading-[1.12] tracking-[-0.01em] mb-13">
            Dari ngobrol santai sampai{" "}
            <span className="red-underline">
              go-live<span className="red-underline-accent" />
            </span>{" "}
            — tanpa drama.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {processSteps.map((step, i) => (
            <Reveal key={step.num} delay={i * 80}>
              <div className="bg-white border border-line rounded-[18px] p-7.5 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(122,15,24,0.25)] h-full">
                <div className="w-13 h-13 rounded-[14px] bg-brand text-ivory grid place-items-center font-black text-[19px] mb-4.5 shadow-[0_8px_18px_-8px_rgba(163,22,33,0.6)]">
                  {step.num}
                </div>
                <h3 className="text-[17px] font-extrabold mb-2">{step.title}</h3>
                <p className="text-ink-soft text-[14.5px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
