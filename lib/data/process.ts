export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discuss & Consult",
    description:
      "We listen to your business problem first. Free, no commitment — we help you pick what fits best.",
  },
  {
    num: "02",
    title: "Design & Plan",
    description:
      "Clear sketches, flows, and budget upfront. No hidden costs halfway through.",
  },
  {
    num: "03",
    title: "Build & Test",
    description:
      "We code, then we test it ourselves — including automation testing, so bugs rarely reach your users.",
  },
  {
    num: "04",
    title: "Launch & Maintain",
    description:
      "Deploy, monitor, and keep improving. A great product is one that lives and gets updated.",
  },
];

export interface AboutPoint {
  text: string;
  strong: string;
}

export const aboutPoints: AboutPoint[] = [
  {
    text: "shipped — from landing pages to payment platforms",
    strong: "10+ products",
  },
  {
    text: "— websites, apps, dashboards, even generative AI tools",
    strong: "Full-stack & AI",
  },
  {
    text: "— every product is automation-tested before delivery",
    strong: "Quality-first",
  },
  {
    text: "— you talk directly to the people who do the work",
    strong: "No middlemen",
  },
];
