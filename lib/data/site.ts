export const site = {
  name: "Akusara Digital",
  tagline: "Websites, apps, and digital products that sell.",
  description:
    "Akusara Digital is a digital agency that builds websites, applications, and AI tools that are actually used and actually generate results. See our live products below.",
  url: "https://akusaraproject.my.id",
  locale: "en-US",
  contact: {
    whatsapp: "6281234567890",
    whatsappDisplay: "+62 812-3456-7890",
    email: "halo@akusara.digital",
    location: "Jakarta, Indonesia · Remote across Indonesia",
  },
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Products", href: "/#products" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/#about" },
  ],
  stats: [
    { count: 10, label: "Products Shipped" },
    { count: 12, label: "+ Technologies" },
    { count: 100, label: "% Done In-House" },
  ],
  aboutStats: [
    { count: 10, label: "Products shipped" },
    { count: 37, label: "+ E2E test cases" },
    { count: 12, label: "+ Technologies mastered" },
  ],
  marquee: [
    "WEBSITES",
    "APPS",
    "E-COMMERCE",
    "DASHBOARDS",
    "AI TOOLS",
    "BOOKING SYSTEMS",
    "QA AUTOMATION",
    "UI/UX",
  ],
} as const;

export type Site = typeof site;
