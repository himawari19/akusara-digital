export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Diskusi & Konsultasi",
    description:
      "Kami dengar dulu masalah bisnismu. Gratis, tanpa komitmen — kami bantu tentukan yang paling pas.",
  },
  {
    num: "02",
    title: "Desain & Rencana",
    description:
      "Sketsa, alur, dan anggaran jelas di depan. Tidak ada biaya tersembunyi di tengah jalan.",
  },
  {
    num: "03",
    title: "Bangun & Uji",
    description:
      "Kami koding, lalu kami uji sendiri — termasuk automation testing, supaya jarang bug di layananmu.",
  },
  {
    num: "04",
    title: "Rilis & Rawat",
    description:
      "Luncurkan, pantau, dan terus kami tingkatkan. Produk yang bagus itu yang hidup dan diperbarui.",
  },
];

export interface AboutPoint {
  text: string;
  strong: string;
}

export const aboutPoints: AboutPoint[] = [
  {
    text: "berhasil kami rilis — dari landing page sampai platform pembayaran",
    strong: "10+ produk",
  },
  {
    text: "— website, aplikasi, dashboard, sampai tools AI generatif",
    strong: "Full-stack & AI",
  },
  {
    text: "— setiap produk diuji dengan automation sebelum dikirim",
    strong: "Quality-first",
  },
  {
    text: "— ngobrol langsung dengan yang mengerjakan",
    strong: "Tanpa vendor perantara",
  },
];
