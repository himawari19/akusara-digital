# Rencana: Migrasi Akusara Digital → Next.js 15 + Tailwind v4 + shadcn/ui

## Tujuan
Ubah landing page statis (3 file HTML/CSS/JS vanilla) menjadi project **Next.js 15 (App Router) + TypeScript + Tailwind v4 + shadcn/ui**, multi-halaman (landing + detail produk + blog + legal), form kontak pakai backend email (Resend), siap deploy ke **Vercel**. Desain & konten现有 dipertahankan 1:1.

## A. Tech Stack (final)
- **Next.js 15** App Router, React 19, TypeScript, Turbopack
- **Tailwind CSS v4** (via `@tailwindcss/postcss`), token desain pakai `@theme` di `globals.css`
- **shadcn/ui** — primitives: Button, Input, Select, Textarea, Label, Card, Sheet (mobile nav), Dialog. Custom visual components dibangun manual (ProductVisual, FlipCard, Marquee, ParallaxHero)
- **Resend** SDK — server action kirim email form kontak → `halo@akusara.digital`
- **zod + react-hook-form** — validasi form (via shadcn Form)
- **MDX** (`next-mdx-remote/rsc` + `gray-matter`) — blog, file `.mdx` di `content/blog/`
- **Vercel Analytics** (opsional, sekali `pnpm i @vercel/analytics`)
- Deploy: GitHub → Vercel, env `RESEND_API_KEY` + `CONTACT_EMAIL`

## B. Pemetaan Design System (CSS lama → Tailwind v4 token)
`globals.css` pakai `@import "tailwindcss"` + `@theme`:
| Variabel lama | Token Tailwind v4 |
|---|---|
| `--red:#a31621` | `--color-brand: #a31621` |
| `--red-deep:#7a0f18` | `--color-brand-deep` |
| `--red-bright:#d92b3a` | `--color-brand-bright` |
| `--ivory:#faf6f1` | `--color-ivory` |
| `--ivory-deep:#f2eae0` | `--color-ivory-deep` |
| `--ink:#26160f` | `--color-ink` |
| `--ink-soft:#6e5d55` | `--color-ink-soft` |
| `--line:#e5d9cb` | `--color-line` |
| `--radius:18px` | `--radius` |

Font: pertahankan system stack (`Segoe UI, system-ui...`) untuk kesetiaan visual. Animasi kompleks (marquee, flip 3D, browser-mockup, reveal) → utility classes custom di `globals.css` + komponen React.

## C. Struktur Folder
```
akusara-digital/
├─ app/
│  ├─ layout.tsx              # root: metadata, fonts, globals, Navbar+Footer via group
│  ├─ globals.css            # Tailwind v4 + @theme + custom utilities
│  ├─ sitemap.ts             # auto sitemap
│  ├─ robots.ts              # robots.txt
│  ├─ opengraph-image.tsx    # OG default
│  └─ (site)/                # route group (shared Nav+Footer layout)
│     ├─ layout.tsx
│     ├─ page.tsx            # LANDING (Hero+Services+Products+Process+About+CTA+Contact)
│     ├─ produk/[slug]/page.tsx   # case study produk (generateStaticParams + generateMetadata)
│     ├─ blog/
│     │  ├─ page.tsx         # index artikel
│     │  └─ [slug]/page.tsx  # artikel MDX
│     ├─ privasi/page.tsx
│     └─ syarat-ketentuan/page.tsx
├─ components/
│  ├─ ui/                    # shadcn primitives
│  ├─ layout/                # navbar, footer, mobile-nav (Sheet)
│  ├─ sections/              # hero, services, products, process, about, cta-band, contact
│  └─ shared/                # reveal, counter, marquee, flip-card, parallax-hero, product-card, product-visual
├─ lib/
│  ├─ data/                  # site.ts, services.ts, products.ts, process.ts (typed)
│  ├─ content.ts             # blog MDX loader (gray-matter + fs)
│  ├─ actions/contact.ts     # server action: Resend
│  └─ utils.ts               # cn()
├─ content/blog/*.mdx        # 1-2 artikel starter
├─ public/ (favicon.svg, og)
├─ _legacy/                  # index.html/css/js lama (referensi, dihapus di akhir)
├─ package.json, next.config.ts, tsconfig.json, postcss.config.mjs, components.json
└─ .env.example, README.md
```

## D. Migrasi Interaksi (index.js → React)
| Fungsi lama | Implementasi baru |
|---|---|
| Nav scrolled + burger menu | `Navbar` (client) scroll listener + `Sheet` shadcn untuk mobile |
| Scroll reveal (IntersectionObserver) | `Reveal` client wrapper, prop `delay` |
| Parallax hero shapes (rAF) | `ParallaxHero` client, data-depth, rAF, stop saat off-screen |
| Counter animasi (easeOutCubic) | `Counter` client, count-once on reveal |
| Form compose WA | **Server Action** `submitContact` + zod + Resend, state UI (loading/ok/err) |
| Footer year | `new Date().getFullYear()` di Server Component |
| Marquee | CSS keyframes (tetap) di `globals.css` |
| Flip card | CSS-only `group-hover` (tanpa JS), a11y `tabindex` |

## E. Data (lib/data/)
- `products.ts` — 8 produk (AcKita, Arema Tailor, Dompet Kita, QA Daily, MySiteHub, Himagent, Drama Studio AI, QA Automation Suite) bertipe `Product { slug, name, badge, tag, summary, longDescription, features[], stack[], visual{logo, bars[], row[]}, links? }`
- `services.ts` — 6 layanan
- `process.ts` — 4 step
- `site.ts` — nav links, contact (WA/email/lokasi), social

## F. Halaman Baru (selain landing)
1. **`/produk/[slug]`** — case study: hero produk, tech stack chips, feature breakdown, mockup, CTA kontak. `generateStaticParams` dari data, `generateMetadata` SEO per-produk, `notFound()` slug invalid.
2. **`/blog`** + **`/blog/[slug]`** — index + artikel MDX. Loader `content.ts` baca `.mdx`, parse frontmatter (title/description/date/tags), sort desc. Render pakai `next-mdx-remote/rsc`. 1-2 artikel starter (placeholder).
3. **`/privasi`** & **`/syarat-ketentuan`** — konten legal Indonesia (draft dasar, ditandai perlu review hukum).

## G. SEO & Structured Data
- Root `metadata` (title template, description, OG, Twitter, metadataBase)
- `generateMetadata` per produk & blog
- JSON-LD: `Organization` di root, `Article` di blog, `Product` opsional
- `sitemap.ts` (landing + semua produk + semua blog + legal), `robots.ts`
- `opengraph-image` default + dynamic per-konten (opsional)

## H. Langkah Eksekusi (berurutan)
1. **Scaffold**: pindah `index.*` → `_legacy/`, init `create-next-app@latest .` (TS+Tailwind+App), pasang shadcn/ui, install deps (resend, zod, react-hook-form, next-mdx-remote, gray-matter, @vercel/analytics)
2. **Design system**: `globals.css` @theme tokens + custom utilities (marquee, flip, browser-mockup, reveal)
3. **Data layer**: `lib/data/*` + `lib/utils.ts`
4. **Shared components**: Reveal, Counter, Marquee, FlipCard, ParallaxHero, ProductVisual, ProductCard
5. **Layout**: root layout + (site) group + Navbar + Footer + MobileNav
6. **Landing sections**: Hero, Services, Products, Process, About, CTA, Contact (form → server action)
7. **Product detail pages** + routing
8. **Blog**: MDX loader + index + article page + starter content
9. **Legal pages**
10. **SEO**: sitemap, robots, JSON-LD, metadataBase, OG image
11. **Polish & QA**: responsive (960/720bp), reduced-motion, lighthouse, a11y
12. **Deploy prep**: `.env.example`, `README.md` (deploy Vercel), `git init` + initial commit

## I. Catatan
- Karena project sekarang **bukan git repo**, saya akan `git init` di akhir sebelum push.
- `RESEND_API_KEY` & `CONTACT_EMAIL` di-set di Vercel dashboard (saya siapkan `.env.example` + fallback agar form tidak crash saat key belum ada).
- Font sistem dipertahankan; upgrade ke variable font (mis. Plus Jakarta Sans) bisa add-on terpisah.
- Semua copy/teks Indonesia dipertahankan verbatim dari `index.html`.
- `.env.local` lokal tidak di-commit.

Siap mulai eksekusi dari langkah 1 bila disetujui.