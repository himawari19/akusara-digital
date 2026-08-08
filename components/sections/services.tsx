import { Reveal } from "@/components/shared/reveal";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section id="layanan" className="py-[100px]">
      <div className="container-ak">
        <Reveal>
          <p className="text-brand font-extrabold uppercase tracking-[0.14em] text-[13px] mb-3.5">
            Layanan Kami
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-[clamp(30px,4vw,46px)] font-black leading-[1.12] tracking-[-0.01em] mb-4.5">
            Satu tim, semua kebutuhan digitalmu
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-ink-soft text-[17px] max-w-[620px] mb-13">
            Dari ide sampai jalan — kami pegang semua. Tidak ada lempar tanggung
            jawab antar vendor.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 50} className="h-full">
              <article className="bg-white border border-line rounded-[18px] p-7.5 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(122,15,24,0.25)] hover:border-brand h-full">
                <div className="text-[34px] mb-4 bg-ivory-deep w-16 h-16 grid place-items-center rounded-2xl">
                  {s.icon}
                </div>
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
