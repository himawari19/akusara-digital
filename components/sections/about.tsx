import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { Counter } from "@/components/shared/counter";
import { aboutPoints } from "@/lib/data/process";
import { site } from "@/lib/data/site";

const TEAM_IMAGE =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=75&auto=format&fit=crop";

export function About() {
  return (
    <section id="about" className="py-[100px] bg-ivory-deep">
      <div className="container-ak">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal>
              <p className="text-brand font-extrabold uppercase tracking-[0.14em] text-[13px] mb-3.5">
                About Us
              </p>
            </Reveal>
            <Reveal>
              <h2 className="text-[clamp(30px,4vw,46px)] font-black leading-[1.12] tracking-[-0.01em] mb-5">
                Small, agile, and hands-on in every project
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-ink-soft text-[17px] mb-5.5 leading-relaxed">
                Akusara Digital is a small team that takes digital products
                from zero to running. We're not brokers — we write the code,
                test it, and maintain it ourselves. That's why quality holds
                and communication never breaks.
              </p>
            </Reveal>
            <Reveal>
              <ul className="flex flex-col gap-3">
                {aboutPoints.map((p, i) => (
                  <li key={i} className="text-[15px] font-semibold">
                    <span className="text-brand">✓ </span>
                    <strong className="text-ink">{p.strong}</strong>
                    {p.text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="relative rounded-[24px] overflow-hidden border border-line shadow-[0_40px_80px_-40px_rgba(122,15,24,0.35)]">
                <Image
                  src={TEAM_IMAGE}
                  alt="The Akusara Digital team working together"
                  width={1200}
                  height={800}
                  className="object-cover w-full h-[340px]"
                />
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-white border border-line rounded-[18px] p-7">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {site.aboutStats.map((s) => (
                    <div key={s.label}>
                      <strong className="text-[32px] font-black text-brand block leading-none">
                        <Counter target={s.count} suffix="+" />
                      </strong>
                      <span className="text-[13px] text-ink-soft font-semibold block mt-1.5">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
