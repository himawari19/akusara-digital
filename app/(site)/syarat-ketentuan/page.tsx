import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan penggunaan layanan dan situs Akusara Digital.",
  alternates: { canonical: "/syarat-ketentuan" },
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-ak max-w-[760px]">
        <nav className="text-sm text-ink-soft flex items-center gap-2 mb-8">
          <Link href="/" className="hover:text-brand transition-colors">Beranda</Link>
          <span>/</span>
          <span className="text-ink font-semibold">Syarat &amp; Ketentuan</span>
        </nav>

        <h1 className="text-[clamp(28px,5vw,44px)] font-black leading-[1.15] tracking-[-0.02em] mb-3">
          Syarat &amp; Ketentuan
        </h1>
        <p className="text-ink-soft mb-8">
          Terakhir diperbarui: 8 Agustus 2026
        </p>

        <div className="prose-blog">
          <p>
            Dengan mengakses dan menggunakan situs {site.name} ("Situs"), Anda menyetujui
            syarat dan ketentuan berikut.
          </p>

          <h2>1. Layanan</h2>
          <p>
            {site.name} menyediakan jasa pengembangan website, aplikasi, e-commerce, tools
            AI, dan QA automation. Detail layanan disepakati secara terpisah dalam
            kontrak kerja untuk setiap proyek.
          </p>

          <h2>2. Penggunaan Situs</h2>
          <ul>
            <li>Anda setuju untuk tidak menyalahgunakan Situs atau layanan kami.</li>
            <li>Konten situs (teks, desain, kode) adalah milik {site.name} dan dilindungi hak cipta.</li>
            <li>Dilarang menyalin atau mendistribusikan konten tanpa izin tertulis.</li>
          </ul>

          <h2>3. Form Kontak</h2>
          <p>
            Informasi yang Anda kirim melalui form kontak digunakan untuk merespons
            permintaan konsultasi. Lihat{" "}
            <Link href="/privasi">Kebijakan Privasi</Link> untuk detail pemrosesan data.
          </p>

          <h2>4. Portofolio &amp; Produk</h2>
          <p>
            Produk yang ditampilkan di Situs adalah karya nyata yang kami bangun dan
            jalankan. Nama dan detail produk adalah milik klien atau produk internal kami.
          </p>

          <h2>5. Batasan Tanggung Jawab</h2>
          <p>
            Situs disediakan "sebagaimana adanya". {site.name} tidak bertanggung jawab atas
            kerugian tidak langsung yang timbul dari penggunaan Situs.
          </p>

          <h2>6. Perubahan Syarat</h2>
          <p>
            Kami dapat memperbarui syarat ini sewaktu-waktu. Perubahan berlaku sejak
            dipublikasikan di Situs ini.
          </p>

          <h2>7. Hukum yang Berlaku</h2>
          <p>
            Syarat ini tunduk pada hukum Republik Indonesia.
          </p>

          <h2>Kontak</h2>
          <p>
            Pertanyaan mengenai syarat ini? Email{" "}
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
