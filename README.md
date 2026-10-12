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
| `CONTACT_EMAIL` | Inbox for consultation requests |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASSWORD` | Email delivery |

If SMTP is not configured, `POST /api/contact` still validates and accepts requests, then logs them server-side.

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
