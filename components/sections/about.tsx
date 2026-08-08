import { Reveal } from "@/components/shared/reveal";
import { Counter } from "@/components/shared/counter";
import { FlipCard } from "@/components/shared/flip-card";
import { aboutPoints } from "@/lib/data/process";
import { site } from "@/lib/data/site";

export function About() {
  return (
    <section id="tentang" className="py-[100px] bg-ivory-deep">
      <div className="container-ak">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div className="about-left">
            <Reveal>
              <p className="text-brand font-extrabold uppercase tracking-[0.14em] text-[13px] mb-3.5">
                Tentang Kami
              </p>
            </Reveal>
            <Reveal>
              <h2 className="text-[clamp(30px,4vw,46px)] font-black leading-[1.12] tracking-[-0.01em] mb-5">
                Kecil, gesit, dan
                <br />
                tangan pertama di semua proyek
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-ink-soft text-[17px] mb-5.5 leading-relaxed">
                Akusara Digital adalah tim kecil yang mengerjakan produk digital
                dari nol sampai jalan. Kami bukan broker — kami yang menulis
                kodenya, mengujinya, dan merawatnya. Karena itu kualitas terjaga
                dan komunikasi tidak pernah putus.
              </p>
            </Reveal>
            <Reveal>
              <ul className="flex flex-col gap-3">
                {aboutPoints.map((p, i) => (
                  <li key={i} className="text-[15px] font-semibold">
                    <span className="text-brand">✔ </span>
                    <strong className="text-ink">{p.strong}</strong>
                    {p.text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <FlipCard
                frontLabel="Kami suka"
                frontEmojis="💻 🤖 🧪 📈"
                backLabel="Kami anti"
                backEmojis="😴 🐛 💸 🧱"
              />
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
