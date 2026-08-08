export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "🖥️",
    title: "Website & Landing Page",
    description:
      "Company profile, landing page jualan, atau situs toko yang cepat, aman, dan muncul di Google. Dirancang untuk konversi, bukan cuma hiasan.",
  },
  {
    icon: "📱",
    title: "Aplikasi Web & Booking System",
    description:
      "Platform booking, aplikasi internal, dashboard admin, sampai sistem pembayaran (QRIS & kartu) — seperti AcKita yang kami bangun dari nol.",
  },
  {
    icon: "🤖",
    title: "Tools AI & Otomasi",
    description:
      "Generator konten, test case otomatis dari screenshot, sampai studio drama viral berbasis AI. Otomasi yang menghilangkan kerja manual berulang.",
  },
  {
    icon: "🛒",
    title: "E-Commerce & Marketplace",
    description:
      "Toko online lengkap: keranjang, checkout, pembayaran terintegrasi, dan manajemen produk/stok — siap pakai dengan data sungguhan.",
  },
  {
    icon: "🧪",
    title: "QA & Automation Testing",
    description:
      "Sebelum diluncurkan, kami uji dulu: automation E2E, API testing, performance test — jadi tidak ada kejutan jelek setelah go-live.",
  },
  {
    icon: "🚀",
    title: "Maintenance & Growth",
    description:
      "Setelah rilis kami rawat: update, monitoring, SEO, dan perbaikan terus-menerus supaya produkmu tetap laku dan lancar.",
  },
];
