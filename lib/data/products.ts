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
  image: string;
  liveUrl?: string;
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&q=75&auto=format&fit=crop`;

export const products: Product[] = [
  {
    slug: "ackita",
    name: "AcKita",
    badge: "Booking Platform",
    tag: "E-Commerce",
    summary:
      "AC service platform: online booking, damage photo uploads, distance-based delivery fees via Google Maps, Midtrans payments (QRIS & cards), live order tracking, plus loyalty & referral programs. Includes a full admin suite: orders, technicians, finance, inventory, CRM & broadcast.",
    longDescription:
      "AcKita is an end-to-end platform for AC service businesses. Customers book online, upload damage photos for faster diagnosis, and pay directly via Midtrans (QRIS & cards). Delivery fees are calculated automatically from Google Maps distance. On the admin side, a complete back-office is available: order management, technicians, finance, inventory, CRM, and WhatsApp/push broadcasts. Loyalty & referral programs are integrated to drive retention.",
    features: [
      "Booking + QRIS & card payments",
      "Live order tracking & WA/push notifications",
      "Complete admin back-office",
    ],
    featureDetails: [
      {
        title: "Integrated Booking & Payments",
        description:
          "Customers book a service slot, upload damage photos, and pay via Midtrans (QRIS & cards) — all in one flow.",
      },
      {
        title: "Live Order Tracking",
        description:
          "WhatsApp & push notifications for every order status change, from scheduled to completed.",
      },
      {
        title: "Admin Back-Office Suite",
        description:
          "Manage orders, technicians, finance, inventory, CRM, and broadcasts — all from one dashboard.",
      },
      {
        title: "Loyalty & Referral",
        description:
          "Automatic loyalty program and referral system to bring customers back and bring their friends.",
      },
    ],
    stack: ["Next.js", "React", "Tailwind", "SQLite", "Midtrans"],
    image: img("photo-1581092918056-0c4c3acd3789"),
  },
  {
    slug: "arema-tailor",
    name: "Arema Tailor",
    badge: "Landing Page",
    tag: "Website",
    summary:
      "Premium tailor & alteration website in Kebon Jeruk: clear package pricing, before/after gallery, and a SmartWAForm that composes WhatsApp messages from name, service type, and visit date. Result: friction-free booking via WhatsApp.",
    longDescription:
      "Arema Tailor is a landing page for a premium tailor & alteration business in Kebon Jeruk. The site shows transparent package pricing, a before/after gallery, and customer testimonials. Its standout feature: a SmartWAForm that automatically composes a complete WhatsApp message from the customer's name, service type, and visit date — the customer just taps send, and the owner receives a structured message without typing. Local SEO and Google structured data are included.",
    features: [
      "Booking funnel straight to WhatsApp",
      "Gallery & testimonials",
      "Local SEO + Google structured data",
    ],
    featureDetails: [
      {
        title: "SmartWAForm",
        description:
          "A smart form that composes a structured WhatsApp message (name, service, date) — customer taps, owner receives.",
      },
      {
        title: "Before/After Gallery",
        description:
          "Portfolio gallery and customer testimonials that build trust at a glance.",
      },
      {
        title: "Local SEO",
        description:
          "Google Business Profile optimization, structured data, and local keywords to rank in Kebon Jeruk searches.",
      },
    ],
    stack: ["React", "Vite", "CSS"],
    image: img("photo-1556742049-0cfed4f6a45d"),
  },
  {
    slug: "dompet-kita",
    name: "Dompet Kita",
    badge: "Finance App",
    tag: "App",
    summary:
      "Personal & family finance tracker: per-member workspaces, income/expense tracking, savings goals, and budgets. A smart guardian flags transactions 2.5× above your average and warns when budgets hit 80%.",
    longDescription:
      "Dompet Kita is a finance tracking app for individuals and families. Every member has their own workspace to log income, expenses, savings goals, and budgets. Its signature feature is a smart guardian: transactions worth 2.5× your average are automatically flagged as anomalies, and budgets at 80% usage trigger an early warning — so users notice before overspending. A savings goal calculator turns vague plans into concrete numbers.",
    features: [
      "Multi-workspace family finance",
      "Automatic spending & budget alerts",
      "Savings goal calculator",
    ],
    featureDetails: [
      {
        title: "Family Workspaces",
        description:
          "Each family member gets their own workspace — income, expenses, and budgets stay neatly separated.",
      },
      {
        title: "Smart Guardian",
        description:
          "Transactions 2.5× above average are flagged automatically, and budgets at 80% trigger early warnings.",
      },
      {
        title: "Savings Goal Calculator",
        description:
          "Plan savings goals with a calculator that shows exactly how much to set aside each month.",
      },
    ],
    stack: ["Next.js", "Prisma", "Postgres"],
    image: img("photo-1563013544-824ae1b704d3"),
  },
  {
    slug: "qa-daily",
    name: "QA Daily",
    badge: "SaaS QA",
    tag: "SaaS",
    summary:
      "Testing & bug tracking platform for engineering teams: test case library, execution sessions with pass/fail verdicts, full bug tracker, health score dashboard, burndown charts, and automated weekly reports — with Excel & PDF export.",
    longDescription:
      "QA Daily is a SaaS platform for engineering teams to manage testing and bug tracking. Features include an organized test case library, test session execution with pass/fail verdicts per step, a full-lifecycle bug tracker (open → in-progress → resolved → closed), health score and burndown dashboards for quality visibility, and automated weekly reports. Everything exports to Excel and PDF for stakeholder reporting.",
    features: [
      "Test case library & execution sessions",
      "Full-lifecycle bug tracking",
      "Automated dashboards & reports",
    ],
    featureDetails: [
      {
        title: "Test Case Library",
        description:
          "Organize test cases per module with tags and priority. Execute sessions with pass/fail verdicts per step.",
      },
      {
        title: "Bug Tracker Lifecycle",
        description:
          "Full bug lifecycle: open, in-progress, resolved, closed — with assignment, severity, and comments.",
      },
      {
        title: "Dashboards & Reports",
        description:
          "Health score, burndown charts, and automated weekly reports with Excel & PDF export.",
      },
    ],
    stack: ["Next.js", "Prisma", "Recharts", "Postgres"],
    image: img("photo-1551288049-bebda4e38f71"),
  },
  {
    slug: "mysitehub",
    name: "MySiteHub",
    badge: "Dashboard",
    tag: "Tool",
    summary:
      "Manage all your websites & web apps from one dashboard: live previews in device simulators (desktop/tablet/mobile), uptime & SSL expiry monitoring, plus a brute-force-protected admin CRUD.",
    longDescription:
      "MySiteHub is a management dashboard for all your websites and web apps in one place. Preview sites live inside device simulators (desktop, tablet, mobile) without opening new tabs. It also monitors uptime and SSL expiry with warnings before certificates lapse. The admin side includes complete CRUD with brute-force protection (rate limiting) against credential guessing attacks.",
    features: [
      "Live multi-device previews",
      "Uptime & SSL monitoring",
      "Secure admin + rate limiting",
    ],
    featureDetails: [
      {
        title: "Multi-Device Live Preview",
        description:
          "Preview websites inside desktop, tablet, and mobile simulators — no new tabs needed.",
      },
      {
        title: "Uptime & SSL Monitoring",
        description:
          "Automatic uptime and SSL expiry monitoring with early warnings before certificates expire.",
      },
      {
        title: "Secure Admin",
        description:
          "Admin CRUD with brute-force protection (rate limiting) against credential guessing.",
      },
    ],
    stack: ["Next.js", "Tailwind", "Vercel KV"],
    image: img("photo-1460925895917-afdab827c52f"),
  },
  {
    slug: "himagent",
    name: "Himagent",
    badge: "AI Tool",
    tag: "AI",
    summary:
      "Upload an app screenshot, get a structured Excel test plan. AI detects UI modules and generates positive, negative, and boundary test cases — downloadable as .xlsx in seconds, saving hours of manual work.",
    longDescription:
      "Himagent is an AI tool that turns app screenshots into structured Excel test plans. Just upload a screenshot; AI detects the UI modules present, then generates positive, negative, and boundary test cases for each module. Results download as a .xlsx file. It supports multiple AI models (Gemini, OpenAI, Claude, and more) and export formats — saving hours of manual test-writing.",
    features: [
      "Screenshot → Excel test plan",
      "Gemini, OpenAI, Claude & more",
      "Multi-format export",
    ],
    featureDetails: [
      {
        title: "Screenshot → Test Plan",
        description:
          "AI detects UI modules from screenshots and generates positive, negative, and boundary test cases automatically.",
      },
      {
        title: "Multi-Model AI",
        description:
          "Supports Gemini, OpenAI, Claude, and other models — pick what fits your needs.",
      },
      {
        title: "Multi-Format Export",
        description:
          "Download results as .xlsx and other formats, ready for your QA team.",
      },
    ],
    stack: ["Python", "Flask", "AI API", "Excel"],
    image: img("photo-1620712943543-bcc4688e7485"),
  },
  {
    slug: "drama-studio-ai",
    name: "Drama Studio AI",
    badge: "AI Studio",
    tag: "AI",
    summary:
      "A local studio that turns one story idea into a viral short-drama series: story bible, 60–90 second episode scripts with 3-second hooks and cliffhangers, down to shot breakdowns ready for TikTok & YouTube Shorts.",
    longDescription:
      "Drama Studio AI is a local studio that turns one story idea into a viral short-drama series. From an idea, AI generates a story bible, episode scripts of 60–90 seconds with a 3-second hook and cliffhanger endings, and shot breakdowns ready for TikTok & YouTube Shorts production. It includes Indonesian-local trope templates that resonate with local audiences, plus exports and production-ready prompts for creative teams.",
    features: [
      "Idea → viral episode scripts",
      "Indonesian-local trope templates",
      "Production-ready exports",
    ],
    featureDetails: [
      {
        title: "Idea → Viral Scripts",
        description:
          "From one story idea, AI generates a story bible and 60–90 second episodes with 3-second hooks + cliffhangers.",
      },
      {
        title: "Local Trope Templates",
        description:
          "Tropes and story patterns familiar to Indonesian audiences for more relatable content.",
      },
      {
        title: "Shot Breakdowns",
        description:
          "Export scripts and shot breakdowns ready for TikTok & YouTube Shorts production.",
      },
    ],
    stack: ["FastAPI", "Next.js", "AI"],
    image: img("photo-1677442136019-21780ecad995"),
  },
  {
    slug: "qa-automation-suite",
    name: "QA Automation Suite",
    badge: "QA Suite",
    tag: "QA",
    summary:
      "Nine testing projects with real results: 37+ Playwright+Pytest test cases, 23 Cypress cases, 40+ API tests — all with published HTML reports. Proof that we test products before shipping them.",
    longDescription:
      "QA Automation Suite is a collection of nine testing projects that prove Akusara Digital's testing capabilities. It covers 37+ Playwright + Pytest test cases for E2E, 23 Cypress cases for web apps, and 40+ API tests for endpoints. All tests come with published HTML reports that anyone can view — transparent evidence of our work. This suite is our quality-first philosophy in action: every product is automation-tested before it ships.",
    features: [
      "E2E with Playwright & Cypress",
      "API & performance testing",
      "Auto-published reports",
    ],
    featureDetails: [
      {
        title: "E2E Testing",
        description:
          "37+ Playwright + Pytest cases and 23 Cypress cases for end-to-end web app testing.",
      },
      {
        title: "API & Performance Testing",
        description:
          "40+ API tests for endpoints, plus k6 performance tests to measure load capacity.",
      },
      {
        title: "Auto-Published Reports",
        description:
          "HTML reports auto-published on every run — transparent test evidence.",
      },
    ],
    stack: ["Playwright", "Cypress", "Jest", "k6"],
    image: img("photo-1611095790444-1dfa35e37b52"),
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
