export interface ProductVisual {
  logo: string;
  bars: number[]; // widths %, 3 items
  row: number[]; // widths %, 2-3 items
}

export interface Product {
  slug: string;
  name: string;
  badge: string;
  tag: string;
  summary: string;
  longDescription: string;
  features: string[];
  featureDetails: { title: string; description: string }[];
  stack: string[];
  visual: ProductVisual;
  liveUrl?: string;
}

export const products: Product[] = [
  {
    slug: "ackita",
    name: "AcKita",
    badge: "Booking Platform",
    tag: "E-Commerce",
    summary:
      "Platform servis AC: booking online, upload foto kerusakan, hitung ongkir dari jarak Google Maps, bayar via Midtrans (QRIS & kartu), tracking order live, plus loyalty & referral. Lengkap dengan admin suite: order, teknisi, keuangan, inventori, sampai CRM & broadcast.",
    longDescription:
      "AcKita adalah platform end-to-end untuk bisnis servis AC. Pelanggan bisa booking online, unggah foto kerusakan untuk mempercepat diagnosa, dan bayar langsung via Midtrans (QRIS & kartu). Ongkir dihitung otomatis dari jarak Google Maps. Di sisi admin, tersedia back-office lengkap: manajemen order, teknisi, keuangan, inventori, CRM, dan broadcast WhatsApp/push. Loyalty & referral program terintegrasi untuk retensi pelanggan.",
    features: [
      "Booking + pembayaran QRIS & kartu",
      "Live order tracking & notifikasi WA/push",
      "Admin back-office lengkap",
    ],
    featureDetails: [
      {
        title: "Booking & Pembayaran Terintegrasi",
        description:
          "Pelanggan booking jadwal servis, unggah foto kerusakan, dan bayar via Midtrans (QRIS & kartu) — semua dalam satu alur.",
      },
      {
        title: "Live Order Tracking",
        description:
          "Notifikasi WhatsApp & push notification untuk setiap perubahan status order, dari terjadwal sampai selesai.",
      },
      {
        title: "Admin Back-Office Suite",
        description:
          "Manajemen order, teknisi, keuangan, inventori, CRM, dan broadcast — semua dalam satu dashboard.",
      },
      {
        title: "Loyalty & Referral",
        description:
          "Program loyalitas otomatis dan sistem referral untuk mendorong pelanggan kembali dan merekomendasikan ke lain.",
      },
    ],
    stack: ["Next.js", "React", "Tailwind", "SQLite", "Midtrans"],
    visual: { logo: "AC", bars: [92, 76, 84], row: [38, 38, 38] },
  },
  {
    slug: "arema-tailor",
    name: "Arema Tailor",
    badge: "Landing Page",
    tag: "Website",
    summary:
      "Website penjahit & permak premium di Kebon Jeruk: paket harga jelas, galeri sebelum/sesudah, dan SmartWAForm yang langsung menyusun pesan WhatsApp dari nama, jenis jasa, dan tanggal kunjungan. Hasil: booking lewat WA tanpa ribet.",
    longDescription:
      "Arema Tailor adalah landing page untuk bisnis penjahit & permak premium di Kebon Jeruk. Website menampilkan paket harga transparan, galeri before/after, dan testimoni pelanggan. Fitur unggulannya: SmartWAForm yang otomatis menyusun pesan WhatsApp lengkap dari input nama, jenis jasa, dan tanggal kunjungan — pelanggan tinggal klik kirim, pemilik langsung terima pesan terstruktur tanpa perlu ketik manual. Dilengkapi SEO lokal dan structured data Google.",
    features: [
      "Booking funnel langsung ke WhatsApp",
      "Galeri & testimoni",
      "SEO lokal + Google struktur data",
    ],
    featureDetails: [
      {
        title: "SmartWAForm",
        description:
          "Form cerdas yang menyusun pesan WhatsApp terstruktur (nama, jasa, tanggal) — pelanggan klik, pemilik langsung terima.",
      },
      {
        title: "Galeri Before/After",
        description:
          "Galeri pekerjaan dengan format sebelum/sesudah dan testimoni pelanggan untuk membangun trust.",
      },
      {
        title: "SEO Lokal",
        description:
          "Optimasi Google Business Profile, structured data, dan keyword lokal agar muncul saat dicari di Kebon Jeruk.",
      },
    ],
    stack: ["React", "Vite", "CSS"],
    visual: { logo: "AT", bars: [88, 70, 80], row: [40, 40] },
  },
  {
    slug: "dompet-kita",
    name: "Dompet Kita",
    badge: "Finance App",
    tag: "Aplikasi",
    summary:
      "Aplikasi catatan keuangan pribadi/keluarga: workspace per anggota, catat pemasukan-pengeluaran, target tabungan, dan budget. Punya \"pengawas pintar\": transaksi yang 2,5× di atas rata-rata langsung ditandai, budget 80% juga diberi peringatan.",
    longDescription:
      "Dompet Kita adalah aplikasi catatan keuangan untuk pribadi dan keluarga. Setiap anggota punya workspace sendiri untuk mencatat pemasukan, pengeluaran, target tabungan, dan budget. Fitur andalannya adalah \"pengawas pintar\": transaksi yang nilainya 2,5× di atas rata-rata otomatis ditandai sebagai anomali, dan budget yang sudah terpakai 80% diberi peringatan dini — supaya pengguna sadar sebelum kehabisan. Kalkulator target tabungan membantu merencanakan tujuan keuangan secara konkret.",
    features: [
      "Multi-workspace keluarga",
      "Alert pengeluaran & budget otomatis",
      "Kalkulator target tabungan",
    ],
    featureDetails: [
      {
        title: "Multi-Workspace Keluarga",
        description:
          "Tiap anggota keluarga punya workspace sendiri — pemasukan, pengeluaran, dan budget terpisah rapi.",
      },
      {
        title: "Pengawas Pintar",
        description:
          "Transaksi 2,5× di atas rata-rata ditandai otomatis, dan budget di 80% diberi peringatan dini.",
      },
      {
        title: "Kalkulator Target Tabungan",
        description:
          "Rencanakan tujuan tabungan dengan kalkulator yang menghitung berapa perlu disisihkan tiap bulan.",
      },
    ],
    stack: ["Next.js", "Prisma", "Postgres"],
    visual: { logo: "DK", bars: [90, 80, 86], row: [36, 36, 36] },
  },
  {
    slug: "qa-daily",
    name: "QA Daily",
    badge: "SaaS QA",
    tag: "SaaS",
    summary:
      "Platform manajemen testing & bug tracking untuk tim engineering: pustaka test case, eksekusi session dengan verdict pass/fail, bug tracker lengkap, dashboard health score, burndown, dan laporan mingguan otomatis — plus export Excel & PDF.",
    longDescription:
      "QA Daily adalah SaaS untuk tim engineering mengelola testing dan bug tracking. Fitur meliputi pustaka test case terorganisir, eksekusi test session dengan verdict pass/fail per langkah, bug tracker full lifecycle (open → in-progress → resolved → closed), dashboard health score dan burndown chart untuk visibilitas kualitas, serta laporan mingguan otomatis. Semua bisa di-export ke Excel dan PDF untuk pelaporan stakeholder.",
    features: [
      "Test case & eksekusi session",
      "Bug tracking full lifecycle",
      "Dashboard & laporan otomatis",
    ],
    featureDetails: [
      {
        title: "Pustaka Test Case",
        description:
          "Kelola test case terorganisir per modul, dengan tag dan prioritas. Eksekusi session dengan verdict pass/fail per langkah.",
      },
      {
        title: "Bug Tracker Lifecycle",
        description:
          "Bug tracking full lifecycle: open, in-progress, resolved, closed — dengan assignment, severity, dan komentar.",
      },
      {
        title: "Dashboard & Laporan",
        description:
          "Health score, burndown chart, dan laporan mingguan otomatis dengan export Excel & PDF.",
      },
    ],
    stack: ["Next.js", "Prisma", "Recharts", "Postgres"],
    visual: { logo: "QD", bars: [94, 82, 78], row: [42, 42] },
  },
  {
    slug: "mysitehub",
    name: "MySiteHub",
    badge: "Dashboard",
    tag: "Tool",
    summary:
      "Dashboard untuk mengelola semua website & web app dalam satu tempat: preview langsung dalam simulator perangkat (desktop/tablet/mobile), monitor uptime & masa berlaku SSL, plus admin CRUD dengan proteksi brute-force.",
    longDescription:
      "MySiteHub adalah dashboard manajemen untuk mengelola semua website dan web app dari satu tempat. Pengguna bisa melakukan live preview dalam simulator perangkat (desktop, tablet, mobile) tanpa buka tab terpisah. Selain itu, ada monitor uptime dan masa berlaku SSL yang memberi peringatan sebelum kedaluwarsa. Sisi admin dilengkapi CRUD lengkap dengan proteksi brute-force (rate limiting) agar aman dari serangan tebakan kredensial.",
    features: [
      "Live preview multi-device",
      "Monitor uptime & SSL",
      "Admin aman + rate limiting",
    ],
    featureDetails: [
      {
        title: "Live Preview Multi-Device",
        description:
          "Pratinjau website dalam simulator desktop, tablet, dan mobile — tanpa buka tab baru.",
      },
      {
        title: "Monitor Uptime & SSL",
        description:
          "Pantau uptime dan masa berlaku SSL otomatis, dengan peringatan sebelum kedaluwarsa.",
      },
      {
        title: "Admin Aman",
        description:
          "Admin CRUD dengan proteksi brute-force (rate limiting) untuk mencegah serangan tebakan kredensial.",
      },
    ],
    stack: ["Next.js", "Tailwind", "Vercel KV"],
    visual: { logo: "MS", bars: [86, 74, 80], row: [44, 44] },
  },
  {
    slug: "himagent",
    name: "Himagent",
    badge: "AI Tool",
    tag: "AI",
    summary:
      "Unggah screenshot aplikasi, dapatkan test plan Excel yang terstruktur. AI mendeteksi modul UI, menghasilkan test case positif/negatif/boundary, lalu langsung bisa diunduh sebagai .xlsx — hemat berjam-jam kerja manual.",
    longDescription:
      "Himagent adalah tool AI yang mengubah screenshot aplikasi menjadi test plan Excel terstruktur. Cukup unggah screenshot, AI mendeteksi modul-modul UI yang ada, lalu menghasilkan test case positif, negatif, dan boundary untuk tiap modul. Hasilnya bisa langsung diunduh sebagai file .xlsx. Mendukung berbagai model AI (Gemini, OpenAI, Claude, dll.) dan format export. Hemat berjam-jam kerja manual menyusun test case dari awal.",
    features: [
      "Screenshot → test plan Excel",
      "Support Gemini, OpenAI, Claude, dll.",
      "Export multi-format",
    ],
    featureDetails: [
      {
        title: "Screenshot → Test Plan",
        description:
          "AI mendeteksi modul UI dari screenshot dan menghasilkan test case positif, negatif, dan boundary secara otomatis.",
      },
      {
        title: "Multi-Model AI",
        description:
          "Mendukung Gemini, OpenAI, Claude, dan model lainnya — pilih yang paling sesuai kebutuhan.",
      },
      {
        title: "Export Multi-Format",
        description:
          "Unduh hasil sebagai .xlsx dan format lain, siap pakai langsung oleh tim QA.",
      },
    ],
    stack: ["Python", "Flask", "AI API", "Excel"],
    visual: { logo: "HG", bars: [90, 84, 72], row: [36, 36] },
  },
  {
    slug: "drama-studio-ai",
    name: "Drama Studio AI",
    badge: "AI Studio",
    tag: "AI",
    summary:
      "Studio lokal yang mengubah satu ide cerita jadi serial drama pendek viral: story bible, skrip episode 60–90 detik dengan hook 3 detik dan cliffhanger, sampai breakdown shot siap produksi untuk TikTok & YouTube Shorts.",
    longDescription:
      "Drama Studio AI adalah studio lokal yang mengubah satu ide cerita menjadi serial drama pendek viral. Dari ide, AI menghasilkan story bible, skrip episode berdurasi 60–90 detik dengan hook 3 detik di awal dan cliffhanger di akhir, sampai breakdown shot siap produksi untuk TikTok & YouTube Shorts. Dilengkapi template trope lokal Indonesia yang familiar dengan audiens lokal, serta export dan prompt siap produksi untuk tim kreatif.",
    features: [
      "Ide → skrip episode viral",
      "Template trope lokal Indonesia",
      "Export & prompt siap produksi",
    ],
    featureDetails: [
      {
        title: "Ide → Skrip Viral",
        description:
          "Dari satu ide cerita, AI menghasilkan story bible dan skrip episode 60–90 detik dengan hook 3 detik + cliffhanger.",
      },
      {
        title: "Template Trope Lokal",
        description:
          "Trope dan pola cerita yang familiar dengan audiens Indonesia untuk konten yang lebih relate.",
      },
      {
        title: "Breakdown Shot Siap Produksi",
        description:
          "Export skrip dan breakdown shot siap pakai untuk produksi TikTok & YouTube Shorts.",
      },
    ],
    stack: ["FastAPI", "Next.js", "AI"],
    visual: { logo: "DS", bars: [88, 76, 82], row: [38, 38, 38] },
  },
  {
    slug: "qa-automation-suite",
    name: "QA Automation Suite",
    badge: "QA Suite",
    tag: "QA",
    summary:
      "Sembilan proyek pengujian dengan hasil nyata: 37+ test case Playwright+Pytest, 23 kasus Cypress, 40+ API tests — semua dengan laporan HTML terpublikasi. Ini bukti bahwa kami menguji produk sebelum mengirimkannya.",
    longDescription:
      "QA Automation Suite adalah kumpulan sembilan proyek pengujian yang membuktikan kapabilitas testing Akusara Digital. Mencakup 37+ test case Playwright + Pytest untuk E2E, 23 kasus Cypress untuk web app, dan 40+ API tests untuk endpoint. Semua test dilengkapi laporan HTML terpublikasi yang bisa diakses publik sebagai bukti transparansi. Suite ini adalah manifestasi prinsip kami: setiap produk diuji dengan automation sebelum dikirim ke klien.",
    features: [
      "E2E Playwright & Cypress",
      "API & performance testing",
      "Laporan auto-publish",
    ],
    featureDetails: [
      {
        title: "E2E Testing",
        description:
          "37+ test case Playwright + Pytest dan 23 kasus Cypress untuk pengujian end-to-end aplikasi web.",
      },
      {
        title: "API & Performance Testing",
        description:
          "40+ API tests untuk endpoint, plus performance testing dengan k6 untuk mengukur beban.",
      },
      {
        title: "Laporan Auto-Publish",
        description:
          "Laporan HTML terpublikasi otomatis setiap run — bukti transparansi hasil pengujian.",
      },
    ],
    stack: ["Playwright", "Cypress", "Jest", "k6"],
    visual: { logo: "QS", bars: [84, 78, 70], row: [40, 40] },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
