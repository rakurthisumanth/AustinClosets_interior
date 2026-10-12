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
        className="scroll-mt-28 section-pad bg-cream !pt-14 md:!pt-16"
      >
        <div className="container-wide grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="mb-4 text-[0.68rem] font-medium tracking-[0.22em] uppercase text-bronze">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl text-charcoal md:text-4xl">
              We&apos;d love to hear about your home.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone">
              Share a few details and a member of our design team will follow up
              to schedule your consultation.
            </p>

            <div className="mt-10 space-y-6 border-t border-border pt-8 text-sm">
              <div>
                <p className="text-[0.68rem] tracking-[0.16em] uppercase text-stone">
                  Phone
                </p>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="mt-2 block text-charcoal transition-colors hover:text-bronze"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div>
                <p className="text-[0.68rem] tracking-[0.16em] uppercase text-stone">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-2 block text-charcoal transition-colors hover:text-bronze"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <p className="text-[0.68rem] tracking-[0.16em] uppercase text-stone">
                  Studio
                </p>
                <p className="mt-2 text-charcoal">
                  {siteConfig.contact.address}
                  <br />
                  {siteConfig.contact.city}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:col-start-6" delay={1}>
            <div className="border border-border bg-ivory p-6 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
