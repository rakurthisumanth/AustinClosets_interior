import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";

interface ConsultationCTAProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
}

export function ConsultationCTA({
  title = "Let's Create a Space You'll Love Coming Home To.",
  description = "Tell us about your project and our design team will get in touch with you.",
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
      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="container-site relative z-10 section-pad text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] tracking-[-0.02em] text-cream text-balance">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
            {description}
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="light">
              {buttonLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
