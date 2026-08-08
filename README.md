# Akusara Digital — Website Agency

Website resmi Akusara Digital. Dibangun dengan Next.js 15, Tailwind CSS v4, dan shadcn/ui.

## Tech Stack

- **Next.js 15** (App Router, Turbopack, React 19)
- **TypeScript** strict mode
- **Tailwind CSS v4** (`@theme` design tokens)
- **shadcn/ui** (Radix primitives)
- **Resend** (email backend untuk form kontak)
- **MDX** (blog via `next-mdx-remote`)
- **Vercel Analytics**

## Mulai Cepat

```bash
# Install dependencies
npm install

# Salin env
cp .env.example .env.local
# Isi RESEND_API_KEY (opsional — tanpa ini form fallback ke WhatsApp)

# Jalankan dev server
npm run dev
```

Buka http://localhost:3000

## Build Produksi

```bash
npm run build
npm start
```

## Struktur Project

```
app/
├─ (site)/              # Route group dengan Navbar+Footer
│  ├─ page.tsx          # Landing page
│  ├─ produk/[slug]/    # Case study per produk (8 halaman)
│  ├─ blog/             # Blog index + artikel
│  ├─ privasi/          # Kebijakan Privasi
│  └─ syarat-ketentuan/ # Syarat & Ketentuan
├─ layout.tsx           # Root layout + metadata
├─ globals.css          # Design system (Tailwind v4 @theme)
├─ sitemap.ts           # Auto sitemap.xml
├─ robots.ts            # robots.txt
└─ opengraph-image.tsx  # OG image dinamis
components/
├─ ui/                  # shadcn primitives
├─ layout/              # Navbar, Footer, Logo
├─ sections/            # Hero, Services, Products, Process, About, CTA, Contact
└─ shared/              # Reveal, Counter, Marquee, FlipCard, ParallaxHero, ProductCard
lib/
├─ data/                # site, services, products, process (typed)
├─ content.ts           # Blog MDX loader
├─ actions/contact.ts   # Server action (Resend email)
└─ utils.ts             # cn()
content/blog/*.mdx      # Artikel blog
```

## Deploy ke Vercel

1. Push repo ke GitHub
2. Import project di [vercel.com/new](https://vercel.com/new)
3. Set environment variables:
   - `RESEND_API_KEY` — API key Resend
   - `CONTACT_EMAIL` — email tujuan form kontak
4. Deploy

## Tambah Blog Post

Buat file `.mdx` baru di `content/blog/`:

```mdx
---
title: "Judul Artikel"
description: "Deskripsi singkat untuk SEO"
date: "2026-08-10"
tags: ["tag1", "tag2"]
---

Konten artikel di sini...
```

## Tambah Produk

Edit `lib/data/products.ts`, tambah objek `Product` baru. Halaman detail otomatis ter-generate di `/produk/[slug]`.

## Catatan

- File lama (HTML/CSS/JS vanilla) disimpan di `_legacy/` untuk referensi
- Form kontak punya fallback: jika `RESEND_API_KEY` tidak diset, form akan compose pesan WhatsApp
- Semua halaman di-prerender sebagai static (SSG) untuk performa maksimal
