import Link from "next/link";
import { Logo } from "./logo";
import { site } from "@/lib/data/site";

const footerLinks = [
  { label: "Layanan", href: "/#layanan" },
  { label: "Produk", href: "/#produk" },
  { label: "Cara Kerja", href: "/#cara-kerja" },
  { label: "Blog", href: "/blog" },
  { label: "Kontak", href: "/#kontak" },
];

const legalLinks = [
  { label: "Kebijakan Privasi", href: "/privasi" },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-[#d9c9c0] py-11 pb-[30px]">
      <div className="container-ak">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="footer-brand">
            <Logo light />
            <p className="text-[13px] mt-1.5 text-[#a89080] max-w-xs">
              {site.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm font-semibold">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-ivory transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-[#a89080] mt-7 pt-5 border-t border-white/10">
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ivory transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <p className="text-[13px] text-[#a89080] w-full text-center mt-6 pt-[22px] border-t border-white/10">
          &copy; {year} Akusara Digital. Dibuat dengan ♥ di Indonesia.
        </p>
      </div>
    </footer>
  );
}
