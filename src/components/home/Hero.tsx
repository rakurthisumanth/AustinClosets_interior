import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-charcoal">
      <Image
        src={images.hero.home.src}
        alt={images.hero.home.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105 animate-[heroZoom_18s_ease-out_forwards] motion-reduce:animate-none motion-reduce:scale-100"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,25,24,0.5)_0%,rgba(26,25,24,0.32)_38%,rgba(26,25,24,0.78)_100%)]" />

      <div className="container-wide relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 border border-cream/25 bg-black/25 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" aria-hidden />
            <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-cream/90">
              Free consultation · Serving Austin & beyond
            </p>
          </div>

          <p className="mb-5 text-[0.68rem] font-medium tracking-[0.24em] uppercase text-cream/70">
            Custom Home Interiors
          </p>
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.03em] text-cream text-balance">
            Spaces Designed Around You.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/85 md:text-lg">
            Closets, cabinets, and complete interiors crafted to match how you
            live—beautifully organized, thoughtfully finished, and uniquely yours.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href="/contact#consultation"
              variant="light"
              className="min-w-[14rem] shadow-sm"
            >
              Book a Free Consultation
            </Button>
            <Button href="/projects" variant="secondary" className="min-w-[14rem]">
              View Our Work
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.72rem] tracking-[0.12em] uppercase text-cream/60">
            <span>{siteConfig.stats.projectsCompleted}+ Projects</span>
            <span className="hidden h-3 w-px bg-cream/25 sm:block" aria-hidden />
            <span>{siteConfig.stats.happyClients}+ Happy Clients</span>
            <span className="hidden h-3 w-px bg-cream/25 sm:block" aria-hidden />
            <span>Custom Closets & Cabinets</span>
          </div>
        </div>
      </div>
    </section>
  );
}
