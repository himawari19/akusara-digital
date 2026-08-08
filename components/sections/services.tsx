import { Reveal } from "@/components/shared/reveal";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section id="services" className="py-[100px]">
      <div className="container-ak">
        <Reveal>
          <p className="text-brand font-extrabold uppercase tracking-[0.14em] text-[13px] mb-3.5">
            Our Services
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-[clamp(30px,4vw,46px)] font-black leading-[1.12] tracking-[-0.01em] mb-4.5">
            One team, all your digital needs
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-ink-soft text-[17px] max-w-[620px] mb-13">
            From idea to launch — we handle everything. No finger-pointing
            between vendors.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 50} className="h-full">
              <article className="bg-white border border-line rounded-[18px] p-7.5 h-full card-lift">
                <span className="text-[13px] font-black text-brand/60 tracking-widest block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[19px] font-extrabold mb-2.5">{s.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
