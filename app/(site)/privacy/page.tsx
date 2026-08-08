import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Akusara Digital's privacy policy — how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-ak max-w-[760px]">
        <nav className="text-sm text-ink-soft flex items-center gap-2 mb-8">
          <Link href="/" className="hover:text-brand transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-ink font-semibold">Privacy Policy</span>
        </nav>

        <h1 className="text-[clamp(28px,5vw,44px)] font-black leading-[1.15] tracking-[-0.02em] mb-3">
          Privacy Policy
        </h1>
        <p className="text-ink-soft mb-8">Last updated: August 8, 2026</p>

        <div className="prose-blog">
          <p>
            Akusara Digital ("we") respects your privacy. This policy explains
            how we collect, use, and protect personal data you provide through
            this website.
          </p>

          <h2>Data We Collect</h2>
          <ul>
            <li>
              <strong>Contact form data:</strong> name, WhatsApp number/email,
              service type, and message you send.
            </li>
            <li>
              <strong>Technical data:</strong> IP address, browser type, and
              pages visited (via Vercel Analytics).
            </li>
            <li>
              <strong>Cookies:</strong> we use essential and analytics cookies
              to improve your experience.
            </li>
          </ul>

          <h2>How We Use Your Data</h2>
          <ul>
            <li>Responding to consultation requests you submit.</li>
            <li>Analyzing site traffic to improve content and performance.</li>
            <li>We never sell or rent your data to third parties.</li>
          </ul>

          <h2>Storage &amp; Security</h2>
          <p>
            Form data is sent via Resend (email delivery service) and stored on
            their servers. Analytics data is stored by Vercel Analytics. We
            apply reasonable security practices to protect your data.
          </p>

          <h2>Your Rights</h2>
          <ul>
            <li>Request access, correction, or deletion of your personal data.</li>
            <li>Withdraw consent to data processing at any time.</li>
            <li>Opt out of communications from us.</li>
          </ul>

          <h2>Contact</h2>
          <p>
            For privacy questions, contact us at{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
          </p>

          <blockquote>
            <p>
              <strong>Note:</strong> This page is a basic draft and not a
              substitute for professional legal advice. We recommend having it
              reviewed by a legal professional before official use.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
