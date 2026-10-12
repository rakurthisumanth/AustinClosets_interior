import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

interface ConsultationCTAProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
}

export function ConsultationCTA({
  title = "Let's Create a Space You'll Love Coming Home To.",
  description = "Book a free consultation—tell us about your project and our design team will reach out with next steps.",
  buttonLabel = "Book a Free Consultation",
}: ConsultationCTAProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <Image
        src={images.cta.src}
        alt={images.cta.alt}
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="container-site relative z-10 section-pad text-center">
        <Reveal>
          <p className="mb-4 text-[0.68rem] font-medium tracking-[0.22em] uppercase text-taupe">
            Start Your Project
          </p>
          <h2 className="font-display mx-auto max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] tracking-[-0.02em] text-cream text-balance">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
            {description}
          </p>

          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.7rem] tracking-[0.14em] uppercase text-cream/55">
            <li>Free consultation</li>
            <li className="hidden sm:list-item">·</li>
            <li>No obligation</li>
            <li className="hidden sm:list-item">·</li>
            <li>Austin-based designers</li>
          </ul>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact#consultation" variant="light">
              {buttonLabel}
            </Button>
            <a
              href={siteConfig.contact.phoneHref}
              className="text-[0.72rem] font-medium tracking-[0.16em] uppercase text-cream/80 underline-offset-4 transition-colors hover:text-cream hover:underline"
            >
              Or call {siteConfig.contact.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
