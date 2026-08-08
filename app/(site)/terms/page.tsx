import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using Akusara Digital's website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-ak max-w-[760px]">
        <nav className="text-sm text-ink-soft flex items-center gap-2 mb-8">
          <Link href="/" className="hover:text-brand transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-ink font-semibold">Terms &amp; Conditions</span>
        </nav>

        <h1 className="text-[clamp(28px,5vw,44px)] font-black leading-[1.15] tracking-[-0.02em] mb-3">
          Terms &amp; Conditions
        </h1>
        <p className="text-ink-soft mb-8">Last updated: August 8, 2026</p>

        <div className="prose-blog">
          <p>
            By accessing and using {site.name}'s website ("the Site"), you
            agree to the following terms and conditions.
          </p>

          <h2>1. Services</h2>
          <p>
            {site.name} provides website development, applications,
            e-commerce, AI tools, and QA automation services. Service details
            are agreed separately in a work contract for each project.
          </p>

          <h2>2. Site Usage</h2>
          <ul>
            <li>You agree not to misuse the Site or our services.</li>
            <li>
              Site content (text, design, code) is owned by {site.name} and
              protected by copyright.
            </li>
            <li>
              Copying or distributing content without written permission is
              prohibited.
            </li>
          </ul>

          <h2>3. Contact Form</h2>
          <p>
            Information submitted through the contact form is used to respond
            to your consultation request. See our{" "}
            <Link href="/privacy">Privacy Policy</Link> for data processing
            details.
          </p>

          <h2>4. Portfolio &amp; Products</h2>
          <p>
            Products shown on the Site are real work we built and launched.
            Product names and details belong to clients or our internal
            products.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            The Site is provided "as is". {site.name} is not liable for
            indirect damages arising from Site usage.
          </p>

          <h2>6. Terms Changes</h2>
          <p>
            We may update these terms at any time. Changes take effect once
            published on the Site.
          </p>

          <h2>7. Governing Law</h2>
          <p>These terms are subject to the laws of the Republic of Indonesia.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Email{" "}
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
