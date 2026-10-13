import { NextResponse } from "next/server";
import { createMailTransport, getSmtpConfig } from "@/lib/mail";
import { rateLimit } from "@/lib/rateLimit";
import {
  hasValidationErrors,
  validateContactForm,
} from "@/lib/validation";
import type { ContactFormData } from "@/types";

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limit = rateLimit(`contact:${ip}`, 5, 15 * 60 * 1000);
    if (!limit.allowed) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(limit.retryAfterSec) },
        },
      );
    }

    const body = (await request.json()) as Partial<ContactFormData> & {
      website?: string;
    };

    // Honeypot: real users leave this empty; bots often fill it.
    if (typeof body.website === "string" && body.website.trim()) {
      return NextResponse.json({
        message:
          "Thank you. We've received your request and will be in touch shortly.",
      });
    }

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

    const smtp = getSmtpConfig();
    if (!smtp.ok) {
      console.error("[contact] SMTP configuration missing.");
      return NextResponse.json(
        {
          message:
            "Unable to send your request right now. Please email us directly or try again later.",
        },
        { status: 503 },
      );
    }

    const transporter = createMailTransport(smtp.config);
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
      from: `"AustinClosets Website" <${smtp.config.user}>`,
      to: smtp.config.contactEmail,
      replyTo: data.email,
      subject,
      text,
    });

    return NextResponse.json({
      message:
        "Thank you. We've received your request and will be in touch shortly.",
      delivered: true,
    });
  } catch (error) {
    console.error("[contact] Failed to process request:", error);
    return NextResponse.json(
      { message: "Unable to process your request right now." },
      { status: 500 },
    );
  }
}
