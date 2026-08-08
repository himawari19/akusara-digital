import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Products } from "@/components/sections/products";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { CtaBand } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Process />
      <About />
      <CtaBand />
      <Contact />
    </>
  );
}
