import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Website, Aplikasi & Produk Digital yang Menjual`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "digital agency Indonesia",
    "jasa pembuatan website",
    "aplikasi web Jakarta",
    "booking system",
    "e-commerce Indonesia",
    "tools AI",
    "QA automation",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    title: `${site.name} — Website, Aplikasi & Produk Digital yang Menjual`,
    description:
      "Produk digital yang sudah kami buat dan jalankan: booking platform, e-commerce, dashboard, hingga tools AI.",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Website, Aplikasi & Produk Digital yang Menjual`,
    description:
      "Produk digital yang sudah kami buat dan jalankan: booking platform, e-commerce, dashboard, hingga tools AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  areaServed: "Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
