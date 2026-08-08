"use client";

import * as React from "react";
import { useActionState } from "react";
import { Loader2, Send, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/shared/reveal";
import { submitContact, type ContactState } from "@/lib/actions/contact";
import { site } from "@/lib/data/site";

const initialState: ContactState = { status: "idle", message: "" };

const needs = [
  "Website / Landing Page",
  "Web App / Booking System",
  "AI Tools & Automation",
  "E-Commerce",
  "QA & Automation Testing",
  "Other",
];

export function Contact() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  return (
    <section id="contact" className="py-[100px]">
      <div className="container-ak">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <Reveal>
              <p className="text-brand font-extrabold uppercase tracking-[0.14em] text-[13px] mb-3.5">
                Get in Touch
              </p>
            </Reveal>
            <Reveal>
              <h2 className="text-[clamp(30px,4vw,46px)] font-black leading-[1.12] tracking-[-0.01em] mb-4.5">
                Start your project today.
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-ink-soft text-[17px] mb-7">
                We reply within 24 hours. Your first consultation is free — no
                obligation.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex flex-col gap-3.5">
                <a
                  className="flex items-center gap-4 bg-white border border-line rounded-[14px] px-5 py-4 transition-all hover:translate-x-1 hover:border-brand hover:shadow-[0_24px_60px_-24px_rgba(122,15,24,0.25)]"
                  href={`https://wa.me/${site.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="w-[46px] h-[46px] rounded-xl bg-ivory-deep grid place-items-center shrink-0">
                    <MessageCircle className="h-5 w-5 text-brand" />
                  </span>
                  <div>
                    <strong className="block text-[15px]">WhatsApp</strong>
                    <small className="text-ink-soft text-[13px]">
                      {site.contact.whatsappDisplay}
                    </small>
                  </div>
                </a>
                <a
                  className="flex items-center gap-4 bg-white border border-line rounded-[14px] px-5 py-4 transition-all hover:translate-x-1 hover:border-brand hover:shadow-[0_24px_60px_-24px_rgba(122,15,24,0.25)]"
                  href={`mailto:${site.contact.email}`}
                >
                  <span className="w-[46px] h-[46px] rounded-xl bg-ivory-deep grid place-items-center shrink-0">
                    <Mail className="h-5 w-5 text-brand" />
                  </span>
                  <div>
                    <strong className="block text-[15px]">Email</strong>
                    <small className="text-ink-soft text-[13px]">
                      {site.contact.email}
                    </small>
                  </div>
                </a>
                <div className="flex items-center gap-4 bg-white border border-line rounded-[14px] px-5 py-4">
                  <span className="w-[46px] h-[46px] rounded-xl bg-ivory-deep grid place-items-center shrink-0">
                    <MapPin className="h-5 w-5 text-brand" />
                  </span>
                  <div>
                    <strong className="block text-[15px]">Location</strong>
                    <small className="text-ink-soft text-[13px]">
                      {site.contact.location}
                    </small>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <form
              action={formAction}
              className="bg-white border border-line rounded-[18px] p-8.5 flex flex-col gap-4.5 shadow-[0_24px_60px_-24px_rgba(122,15,24,0.25)]"
              noValidate
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="text-sm font-bold text-ink flex flex-col gap-2 flex-1">
                  Name
                  <Input name="name" placeholder="Your name" required />
                </label>
                <label className="text-sm font-bold text-ink flex flex-col gap-2 flex-1">
                  WhatsApp / Email
                  <Input
                    name="contact"
                    placeholder="WhatsApp number or email"
                    required
                  />
                </label>
              </div>

              <label className="text-sm font-bold text-ink flex flex-col gap-2">
                What do you need?
                <Select name="need" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your need…" />
                  </SelectTrigger>
                  <SelectContent>
                    {needs.map((n) => (
                      <SelectItem key={n} value={n}>
                        {n}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </label>

              <label className="text-sm font-bold text-ink flex flex-col gap-2">
                Tell us about your project
                <Textarea
                  name="message"
                  rows={4}
                  placeholder="Your idea, goal, or problem to solve…"
                  required
                />
              </label>

              {/* Honeypot — hidden from humans */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <Button type="submit" variant="red" size="lg" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send — Free Consultation
                  </>
                )}
              </Button>

              {state.message && (
                <p
                  aria-live="polite"
                  className={`text-sm font-bold min-h-5 ${
                    state.status === "error"
                      ? "text-brand"
                      : state.status === "success"
                        ? "text-brand"
                        : "text-ink-soft"
                  }`}
                >
                  {state.message}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
