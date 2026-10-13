# AustinClosets

Premium luxury interior design website for a USA-based custom home interiors studio.

Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## Brand

**AustinClosets** — original brand identity for this project.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Images

All website images are stored locally in `public/images/`.

No remote Unsplash links are used in the app. To replace a photo, overwrite the matching file in `public/images/` (keep the same filename).

## Environment variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (digits only, international format) |
| `CONTACT_EMAIL` | Zoho inbox that receives consultation requests |
| `SMTP_HOST` | Zoho SMTP host (`smtppro.zoho.com` / `smtppro.zoho.in` for domain mail) |
| `SMTP_PORT` | `587` (TLS) or `465` (SSL) |
| `SMTP_SECURE` | `false` for 587, `true` for 465 |
| `SMTP_USER` | Full Zoho mailbox used to send (usually same as CONTACT_EMAIL) |
| `SMTP_PASSWORD` | Zoho password or Application-Specific Password (required if MFA is on) |

### Zoho + Vercel setup

1. In Zoho Mail, confirm SMTP access for `contact@austinclosetstx.com`.
2. If MFA is enabled, generate an **Application-Specific Password**.
3. For a **paid domain mailbox**, prefer `smtppro.zoho.com` (or `smtppro.zoho.in` if your Zoho data center is India).
4. Add the same env vars in **Vercel → Project Settings → Environment Variables** (Production + Preview).
5. Redeploy after saving env vars.

If SMTP is missing or invalid, `POST /api/contact` returns an error (it no longer silently reports success).

## Content editing

CMS-ready data files live in `src/data/`:

- `site.ts` — company info, stats, navigation, contact
- `services.ts` — service offerings
- `projects.ts` — portfolio projects
- `testimonials.ts` — client quotes
- `images.ts` — shared hero / section imagery paths

## Pages

- `/` Home
- `/about` About
- `/services` Services
- `/projects` Project gallery
- `/projects/[slug]` Project detail
- `/contact` Consultation form

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
