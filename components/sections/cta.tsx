import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <span
        className="absolute text-[140px] opacity-[0.08] -top-8 right-15 select-none"
        aria-hidden="true"
      >
        ★
      </span>
      <span
        className="absolute text-[90px] opacity-[0.08] -bottom-5 left-10 select-none"
        aria-hidden="true"
      >
        ★
      </span>
      <div className="max-w-[760px] mx-auto text-center px-6 py-24 relative z-1">
        <Reveal>
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-black leading-[1.1] mb-4.5">
            Have an idea? We're ready to{" "}
            <span className="red-underline">
              execute
              <span className="red-underline-accent" />
            </span>
            .
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-lg opacity-90 mb-8">
            Tell us about your business — we reply within 24 hours with clear
            direction.
          </p>
        </Reveal>
        <Reveal>
          <Button asChild variant="ivory" size="lg">
            <Link href="/#contact">Free Consultation Now</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
