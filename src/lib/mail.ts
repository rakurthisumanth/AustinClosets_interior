import nodemailer from "nodemailer";

export type SmtpConfig = {
  contactEmail: string;
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
};

export function getSmtpConfig():
  | { ok: true; config: SmtpConfig }
  | { ok: false; message: string } {
  const contactEmail = process.env.CONTACT_EMAIL?.trim();
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT || 587);
  const secureEnv = process.env.SMTP_SECURE?.trim().toLowerCase();
  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASSWORD?.trim();

  if (!contactEmail || !host || !user || !password) {
    return {
      ok: false,
      message: "Email service is not configured.",
    };
  }

  if (!Number.isFinite(port) || port <= 0) {
    return {
      ok: false,
      message: "Email service is not configured.",
    };
  }

  const secure =
    secureEnv === "true" || secureEnv === "1" || port === 465;

  return {
    ok: true,
    config: {
      contactEmail,
      host,
      port,
      secure,
      user,
      password,
    },
  };
}

export function createMailTransport(config: SmtpConfig) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.password,
    },
  });
}
