export const site = {
  name: "Akusara Digital",
  tagline: "Website, aplikasi, dan produk digital yang menjual.",
  description:
    "Akusara Digital adalah agency digital: membangun website, aplikasi, dan tools AI yang benar-benar dipakai dan menghasilkan. Lihat produk kami yang sudah jalan.",
  url: "https://akusara.digital",
  locale: "id-ID",
  contact: {
    whatsapp: "6281234567890",
    whatsappDisplay: "+62 812-3456-7890",
    email: "halo@akusara.digital",
    location: "Jakarta, Indonesia · Remote di seluruh Indonesia",
  },
  nav: [
    { label: "Layanan", href: "/#layanan" },
    { label: "Produk", href: "/#produk" },
    { label: "Cara Kerja", href: "/#cara-kerja" },
    { label: "Tentang", href: "/#tentang" },
  ],
  stats: [
    { count: 10, label: "Produk Rilis" },
    { count: 12, label: "+ Teknologi" },
    { count: 100, label: "% Dikerjakan" },
  ],
  aboutStats: [
    { count: 10, label: "Produk dirilis" },
    { count: 37, label: "+ Test case E2E" },
    { count: 12, label: "+ Teknologi dikuasai" },
  ],
  marquee: [
    "WEBSITE",
    "APLIKASI",
    "E-COMMERCE",
    "DASHBOARD",
    "AI TOOLS",
    "BOOKING SYSTEM",
    "QA AUTOMATION",
    "UI/UX",
  ],
} as const;

export type Site = typeof site;
