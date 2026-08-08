"use server";

import { z } from "zod";
import { site } from "@/lib/data/site";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contact: z.string().min(5, "Invalid contact"),
  need: z.string().min(1, "Please select your need"),
  message: z.string().min(10, "Please tell us at least 10 characters"),
  // honeypot — must be empty
  company: z.string().max(0, "Spam detected").optional(),
});

export type ContactState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    contact: String(formData.get("contact") ?? ""),
    need: String(formData.get("need") ?? ""),
    message: String(formData.get("message") ?? ""),
    company: String(formData.get("company") ?? ""),
  };

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return {
      status: "error",
      message: "Please fill in all fields 🙂",
      errors,
    };
  }

  // Fallback: if no Resend key, compose WhatsApp message
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? site.contact.email;

  if (!resendKey) {
    // Fallback to WhatsApp deep link (no backend cost)
    const text = `Hello Akusara Digital!\n\nName: ${parsed.data.name}\nContact: ${parsed.data.contact}\nNeed: ${parsed.data.need}\nDetails: ${parsed.data.message}`;
    const waLink = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    return {
      status: "success",
      message: `Email backend not configured. Open WhatsApp: ${waLink}`,
    };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: `Akusara Digital <onboarding@resend.dev>`,
      to: toEmail,
      subject: `New consultation request from ${parsed.data.name}`,
      replyTo: parsed.data.contact,
      html: `
        <h2>New consultation request</h2>
        <p><strong>Name:</strong> ${parsed.data.name}</p>
        <p><strong>Contact:</strong> ${parsed.data.contact}</p>
        <p><strong>Need:</strong> ${parsed.data.need}</p>
        <p><strong>Details:</strong></p>
        <p>${parsed.data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return {
      status: "success",
      message: "Message sent! We'll reply within 24 hours.",
    };
  } catch {
    return {
      status: "error",
      message: "Sorry, sending failed. Try WhatsApp directly.",
    };
  }
}
