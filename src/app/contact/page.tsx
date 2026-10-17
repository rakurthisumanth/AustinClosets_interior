import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { HashScroll } from "@/components/ui/HashScroll";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation with AustinClosets. Tell us about your custom closet, bedroom, living room, office, or full interior project.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description:
      "Let's talk about your space. Request a consultation with our design team.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <HashScroll />

      <section
        id="consultation"
        className="relative scroll-mt-24 overflow-hidden bg-cream pb-16 pt-28 md:scroll-mt-28 md:pb-24 md:pt-36"
      >
        <Image
          src="/images/contact-bg-v1.jpg"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_40%]"
          aria-hidden
        />
        {/* Light wash so photo shows through but text stays readable */}
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(250,248,245,0.94)_0%,rgba(250,248,245,0.88)_42%,rgba(250,248,245,0.72)_100%)]"
          aria-hidden
        />

        <div className="container-wide relative z-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left column */}
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <p className="mb-3 text-[0.68rem] font-medium tracking-[0.22em] uppercase text-bronze">
              Get in Touch
            </p>
            <h1 className="font-display text-[clamp(1.45rem,3.2vw,2.25rem)] leading-[1.2] tracking-[-0.02em] text-charcoal">
              <span className="block">Custom Closets</span>
              <span className="block">Beautiful Kitchens</span>
              <span className="block">Exceptional Cabinetry</span>
            </h1>
            <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-stone md:mt-5 md:text-base">
              Share a few details and a member of our design team will follow up
              to schedule your consultation.
            </p>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:gap-10 lg:mt-10 lg:flex-col lg:gap-6">
              <ContactChip
                href={siteConfig.contact.phoneHref}
                label="Phone"
                value={siteConfig.contact.phone}
                icon="phone"
              />
              <ContactChip
                href={`mailto:${siteConfig.contact.email}`}
                label="Email"
                value={siteConfig.contact.email}
                icon="email"
              />
            </div>
          </Reveal>

          {/* Right column — form card */}
          <Reveal
            className="order-1 lg:order-2 lg:col-span-7"
            delay={1}
          >
            <div
              id="consultation-form"
              className="scroll-mt-28 border border-border/70 bg-white p-5 shadow-[0_20px_60px_rgba(26,25,24,0.08)] sm:p-8 md:p-10"
            >
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactChip({
  href,
  label,
  value,
  icon,
}: {
  href: string;
  label: string;
  value: string;
  icon: "phone" | "email";
}) {
  return (
    <a href={href} className="group flex items-start gap-3.5">
      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-taupe text-cream transition-transform duration-300 group-hover:scale-105">
        {icon === "phone" ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
          </svg>
        )}
      </span>
      <span>
        <span className="block text-[0.62rem] font-medium tracking-[0.16em] uppercase text-bronze">
          {label}
        </span>
        <span className="mt-1 block text-[0.95rem] text-charcoal transition-colors group-hover:text-bronze">
          {value}
        </span>
      </span>
    </a>
  );
}
