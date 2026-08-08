import Link from "next/link";
import { Logo } from "./logo";
import { site } from "@/lib/data/site";

const footerLinks = [
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Process", href: "/#process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-[#d9c9c0] py-11 pb-[30px]">
      <div className="container-ak">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <Logo light />
            <p className="text-[13px] mt-1.5 text-[#a89080] max-w-xs">
              {site.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm font-semibold">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-[#a89080] mt-7 pt-5 border-t border-white/10">
          {legalLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <p className="text-[13px] text-[#a89080] w-full text-center mt-6 pt-[22px] border-t border-white/10">
          &copy; {year} Akusara Digital. Made with ♥ in Indonesia.
        </p>
      </div>
    </footer>
  );
}
