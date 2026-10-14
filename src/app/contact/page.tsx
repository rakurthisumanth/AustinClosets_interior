import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { HashScroll } from "@/components/ui/HashScroll";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";
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
      <PageHero
        eyebrow="Consultation"
        title="Let's Talk About Your Space."
        description="Tell us a little about your project and we'll get back to you."
        image={images.hero.contact.src}
        imageAlt={images.hero.contact.alt}
        compact
      />

      <section
        id="consultation"
        className="scroll-mt-24 section-pad bg-cream !pt-8 pb-24 md:scroll-mt-28 md:!pt-16 md:pb-[clamp(4.5rem,8vw,7.5rem)]"
      >
        <div className="container-wide grid gap-8 md:gap-14 lg:grid-cols-12">
          <Reveal className="order-2 lg:order-1 lg:col-span-4">
            <p className="mb-3 text-[0.62rem] font-medium tracking-[0.18em] uppercase text-bronze md:mb-4 md:text-[0.68rem] md:tracking-[0.22em]">
              Get in Touch
            </p>
            <h2 className="font-display text-[1.85rem] text-charcoal md:text-4xl">
              We&apos;d love to hear about your home.
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-stone md:mt-5 md:text-base">
              Share a few details and a member of our design team will follow up
              to schedule your consultation.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-border pt-6 text-sm sm:grid-cols-2 lg:mt-10 lg:grid-cols-1 lg:gap-6 lg:pt-8">
              <div className="border border-border bg-white px-4 py-3 md:border-0 md:bg-transparent md:px-0 md:py-0">
                <p className="text-[0.65rem] tracking-[0.16em] uppercase text-stone">
                  Phone
                </p>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="mt-1.5 block text-charcoal transition-colors hover:text-bronze md:mt-2"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="border border-border bg-white px-4 py-3 md:border-0 md:bg-transparent md:px-0 md:py-0">
                <p className="text-[0.65rem] tracking-[0.16em] uppercase text-stone">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-1.5 block break-all text-charcoal transition-colors hover:text-bronze md:mt-2"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6" delay={1}>
            <div
              id="consultation-form"
              className="scroll-mt-24 border border-border bg-ivory p-4 sm:p-6 md:scroll-mt-28 md:p-10"
            >
              <p className="mb-4 text-[0.62rem] font-medium tracking-[0.18em] uppercase text-bronze md:hidden">
                Consultation Form
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
