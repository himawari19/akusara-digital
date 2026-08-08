"use server";

import { z } from "zod";
import { site } from "@/lib/data/site";

const ContactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  contact: z.string().min(5, "Kontak tidak valid"),
  need: z.string().min(1, "Pilih kebutuhanmu"),
  message: z.string().min(10, "Ceritakan minimal 10 karakter"),
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
      message: "Lengkapi semua kolom dulu ya 🙂",
      errors,
    };
  }

  // Fallback: if no Resend key, compose WhatsApp message
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? site.contact.email;

  if (!resendKey) {
    // Fallback to WhatsApp deep link (no backend cost)
    const text = `Halo Akusara Digital!\n\nNama: ${parsed.data.name}\nKontak: ${parsed.data.contact}\nKebutuhan: ${parsed.data.need}\nDetail: ${parsed.data.message}`;
    const waLink = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    return {
      status: "success",
      message: `Backend email belum dikonfigurasi. Buka WhatsApp: ${waLink}`,
    };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: `Akusara Digital <onboarding@resend.dev>`,
      to: toEmail,
      subject: `Konsultasi baru dari ${parsed.data.name}`,
      replyTo: parsed.data.contact,
      html: `
        <h2>Pesan konsultasi baru</h2>
        <p><strong>Nama:</strong> ${parsed.data.name}</p>
        <p><strong>Kontak:</strong> ${parsed.data.contact}</p>
        <p><strong>Kebutuhan:</strong> ${parsed.data.need}</p>
        <p><strong>Detail:</strong></p>
        <p>${parsed.data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return {
      status: "success",
      message: "Pesan terkirim! Kami balas dalam 1×24 jam.",
    };
  } catch {
    return {
      status: "error",
      message: "Maaf, gagal mengirim. Coba WhatsApp langsung ya.",
    };
  }
}
