import type { Metadata } from "next";
import Image from "next/image";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AustinClosets services: Closets Main, cabinets, custom closets, living rooms, bedrooms, home offices, storage, and complete interior design.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description:
      "Thoughtful design and exceptional spaces—custom closets, bedrooms, living rooms, offices, and full residential interiors.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Thoughtful Design. Exceptional Spaces."
        description="Custom residential interiors designed around how you live—beautifully planned, carefully crafted, and built to last."
        image={images.hero.services.src}
        imageAlt={images.hero.services.alt}
      />

      <section className="section-pad bg-cream">
        <div className="container-wide space-y-20 md:space-y-28">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={service.id}
                id={service.slug}
                className="scroll-mt-28"
              >
                <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-x-0 lg:gap-y-10">
                  <Reveal
                    className={
                      reverse
                        ? "lg:col-span-6 lg:col-start-7"
                        : "lg:col-span-6"
                    }
                  >
                    <div className="image-reveal relative aspect-[16/11] overflow-hidden md:aspect-[5/4]">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>

                  <Reveal
                    className={
                      reverse
                        ? "lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:pt-2"
                        : "lg:col-span-5 lg:col-start-8 lg:pt-2"
                    }
                    delay={1}
                  >
                    <div className="flex h-full flex-col">
                      <p className="mb-3 text-[0.68rem] font-medium tracking-[0.22em] uppercase text-bronze">
                        {number}
                      </p>
                      <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] text-charcoal">
                        {service.name}
                      </h2>
                      <p className="mt-5 text-base leading-relaxed text-stone md:text-lg">
                        {service.description}
                      </p>
                      <ul className="mt-8 space-y-3.5">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex gap-3 text-sm leading-relaxed text-charcoal-soft"
                          >
                            <span
                              className="mt-2 h-px w-4 shrink-0 bg-bronze"
                              aria-hidden
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-10 pt-2">
                        <Button
                          href="/contact#consultation"
                          variant="ghost"
                          className="!px-8"
                        >
                          Discuss Your Project
                        </Button>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ConsultationCTA
        title="Have a room—or a whole home—in mind?"
        description="Tell us what you're envisioning and we'll help shape the next steps."
        buttonLabel="Discuss Your Project"
      />
    </>
  );
}
