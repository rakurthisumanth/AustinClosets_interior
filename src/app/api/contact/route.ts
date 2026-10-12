import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  hasValidationErrors,
  validateContactForm,
} from "@/lib/validation";
import type { ContactFormData } from "@/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactFormData>;

    const data: ContactFormData = {
      firstName: String(body.firstName || ""),
      lastName: String(body.lastName || ""),
      email: String(body.email || ""),
      phone: String(body.phone || ""),
      projectType: String(body.projectType || ""),
      budget: String(body.budget || ""),
      location: String(body.location || ""),
      message: String(body.message || ""),
    };

    const errors = validateContactForm(data);
    if (hasValidationErrors(errors)) {
      return NextResponse.json(
        { message: "Please correct the highlighted fields.", errors },
        { status: 400 },
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;

    const smtpConfigured = Boolean(
      contactEmail && smtpHost && smtpUser && smtpPassword,
    );

    if (smtpConfigured) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
      });

      const subject = `New consultation request — ${data.firstName} ${data.lastName}`;
      const text = [
        "New consultation request from AustinClosets website",
        "",
        `Name: ${data.firstName} ${data.lastName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Project Type: ${data.projectType}`,
        `Budget: ${data.budget || "Not specified"}`,
        `Location: ${data.location || "Not specified"}`,
        "",
        "Message:",
        data.message || "(none)",
      ].join("\n");

      await transporter.sendMail({
        from: smtpUser,
        to: contactEmail,
        replyTo: data.email,
        subject,
        text,
      });
    } else {
      // Development / pre-SMTP mode — log request so the form remains usable.
      console.info("[contact] SMTP not configured. Consultation request:", {
        ...data,
        receivedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      message: "Thank you. We've received your request and will be in touch shortly.",
      delivered: smtpConfigured,
    });
  } catch (error) {
    console.error("[contact] Failed to process request:", error);
    return NextResponse.json(
      { message: "Unable to process your request right now." },
      { status: 500 },
    );
  }
}
