import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi Akusara Digital — bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.",
  alternates: { canonical: "/privasi" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-ak max-w-[760px]">
        <nav className="text-sm text-ink-soft flex items-center gap-2 mb-8">
          <Link href="/" className="hover:text-brand transition-colors">Beranda</Link>
          <span>/</span>
          <span className="text-ink font-semibold">Kebijakan Privasi</span>
        </nav>

        <h1 className="text-[clamp(28px,5vw,44px)] font-black leading-[1.15] tracking-[-0.02em] mb-3">
          Kebijakan Privasi
        </h1>
        <p className="text-ink-soft mb-8">
          Terakhir diperbarui: 8 Agustus 2026
        </p>

        <div className="prose-blog">
          <p>
            Akusara Digital ("kami") menghargai privasi Anda. Kebijakan ini menjelaskan
            bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi yang Anda
            berikan melalui situs ini.
          </p>

          <h2>Data yang Kami Kumpulkan</h2>
          <ul>
            <li><strong>Data form kontak:</strong> nama, nomor WhatsApp/email, jenis kebutuhan, dan pesan yang Anda kirim.</li>
            <li><strong>Data teknis:</strong> alamat IP, jenis browser, dan halaman yang dikunjungi (via Vercel Analytics).</li>
            <li><strong>Cookies:</strong> kami menggunakan cookies esensial dan analitik untuk meningkatkan pengalaman Anda.</li>
          </ul>

          <h2>Bagaimana Kami Menggunakan Data</h2>
          <ul>
            <li>Merespons permintaan konsultasi yang Anda kirim.</li>
            <li>Menganalisis lalu lintas situs untuk perbaikan konten dan performa.</li>
            <li>Tidak menjual atau menyewakan data Anda kepada pihak ketiga.</li>
          </ul>

          <h2>Penyimpanan &amp; Keamanan</h2>
          <p>
            Data form dikirim melalui Resend (penyedia layanan email) dan disimpan di
            server mereka. Data analitik disimpan oleh Vercel Analytics. Kami menerapkan
            praktik keamanan wajar untuk melindungi data Anda.
          </p>

          <h2>Hak Anda</h2>
          <ul>
            <li>Meminta akses, perubahan, atau penghapusan data pribadi Anda.</li>
            <li>Menarik persetujuan pemrosesan data kapan saja.</li>
            <li>Berhenti menerima komunikasi dari kami.</li>
          </ul>

          <h2>Kontak</h2>
          <p>
            Untuk pertanyaan terkait privasi, hubungi kami di{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
          </p>

          <blockquote>
            <p>
              <strong>Catatan:</strong> Halaman ini adalah draft dasar dan bukan pengganti
              nasihat hukum profesional. Disarankan untuk dikonsultasikan dengan ahli hukum
              sebelum digunakan secara resmi.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
