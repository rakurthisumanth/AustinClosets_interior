import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-charcoal">
      <Image
        src={images.hero.home.src}
        alt={images.hero.home.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,25,24,0.45)_0%,rgba(26,25,24,0.28)_40%,rgba(26,25,24,0.72)_100%)]" />

      <div className="container-wide relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="max-w-3xl">
          <p className="mb-5 text-[0.68rem] font-medium tracking-[0.24em] uppercase text-cream/70">
            Custom Home Interiors
          </p>
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.03em] text-cream text-balance">
            Spaces Designed Around You.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/80 md:text-lg">
            Thoughtfully designed interiors that bring together beauty,
            functionality, and your personal style.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" variant="light" className="min-w-[14rem] shadow-sm">
              Book a Consultation
            </Button>
            <Button href="/projects" variant="secondary" className="min-w-[14rem]">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
