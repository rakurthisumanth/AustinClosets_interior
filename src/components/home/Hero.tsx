import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-charcoal md:min-h-[100svh]">
      <Image
        src={images.hero.home.src}
        alt={images.hero.home.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105 animate-[heroZoom_18s_ease-out_forwards] motion-reduce:animate-none motion-reduce:scale-100"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,25,24,0.55)_0%,rgba(26,25,24,0.35)_38%,rgba(26,25,24,0.82)_100%)]" />

      <div className="container-wide relative z-10 flex min-h-[92svh] flex-col justify-end pb-12 pt-24 md:min-h-[100svh] md:pb-24 md:pt-40">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex max-w-full items-center gap-2.5 border border-cream/25 bg-black/30 px-3 py-2 backdrop-blur-sm md:mb-6 md:gap-3 md:px-4">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#25D366]" aria-hidden />
            <p className="text-[0.58rem] font-medium tracking-[0.12em] uppercase text-cream/90 md:text-[0.65rem] md:tracking-[0.18em]">
              Free consultation · Serving Austin & beyond
            </p>
          </div>

          <h1 className="font-display text-[clamp(2.2rem,9.5vw,5.5rem)] leading-[1.02] tracking-[-0.03em] text-cream text-balance">
            Spaces Designed Around You.
          </h1>
          <p className="mt-4 max-w-lg text-[0.92rem] leading-relaxed text-cream/85 md:mt-6 md:text-lg">
            Closets, cabinets, and complete interiors crafted to match how you
            live—beautifully organized, thoughtfully finished, and uniquely yours.
          </p>

          <div className="mt-7 flex flex-col gap-2.5 md:mt-10 md:flex-row md:items-center md:gap-4">
            <Button
              href="/contact#consultation-form"
              variant="light"
              className="w-full !py-3.5 shadow-sm md:w-auto md:min-w-[14rem] md:!py-3.5"
            >
              Book a Free Consultation
            </Button>
            <Button
              href="/projects"
              variant="secondary"
              className="w-full !py-3.5 md:w-auto md:min-w-[14rem] md:!py-3.5"
            >
              View Our Work
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-y-2 text-[0.62rem] tracking-[0.1em] uppercase text-cream/60 md:mt-10 md:flex md:flex-wrap md:items-center md:gap-x-6 md:text-[0.72rem] md:tracking-[0.12em]">
            <span>{siteConfig.stats.projectsCompleted}+ Projects</span>
            <span>{siteConfig.stats.happyClients}+ Happy Clients</span>
            <span className="col-span-2 md:col-auto">Custom Closets & Cabinets</span>
          </div>
        </div>
      </div>
    </section>
  );
}
