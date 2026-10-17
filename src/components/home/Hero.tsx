import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      {/* ─── Mobile ─── */}
      <div className="relative min-h-[100svh] md:hidden">
        <Image
          src="/images/hero-home-mobile.jpg"
          alt={images.hero.home.alt}
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        {/* Soft top + stronger bottom so photo stays the focus */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,25,24,0.2)_0%,rgba(26,25,24,0.05)_38%,rgba(26,25,24,0.55)_72%,rgba(26,25,24,0.88)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-16">
          <p className="mb-2 text-[0.6rem] font-medium tracking-[0.22em] uppercase text-cream/70">
            Custom closets · Kitchen · Cabinets
          </p>
          <h1 className="font-display text-[2.55rem] leading-[1.05] tracking-[-0.03em] text-cream">
            Spaces Designed
            <br />
            Around <span className="text-taupe">You.</span>
          </h1>

          <div className="mt-6">
            <Button
              href="/contact#consultation-form"
              variant="sand"
              className="w-full !py-3.5"
            >
              Book a Free Consultation
            </Button>
            <Link
              href="/projects"
              className="mt-3.5 block text-center text-[0.7rem] font-medium tracking-[0.16em] uppercase text-cream/80"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Desktop ─── */}
      <div className="relative hidden min-h-[100svh] md:block">
        <Image
          src={images.hero.home.src}
          alt={images.hero.home.alt}
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,25,24,0.55)_0%,rgba(26,25,24,0.35)_38%,rgba(26,25,24,0.82)_100%)]" />

        <div className="container-wide relative z-10 flex min-h-[100svh] flex-col justify-end pb-24 pt-40">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 border border-cream/25 bg-black/30 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#25D366]" aria-hidden />
              <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-cream/90">
                Free consultation · Serving Austin & beyond
              </p>
            </div>

            <h1 className="font-display text-[clamp(3rem,5.5vw,5.5rem)] leading-[1.02] tracking-[-0.03em] text-cream text-balance">
              Spaces Designed Around You.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/85">
              Closets, cabinets, and complete interiors crafted to match how you
              live—beautifully organized, thoughtfully finished, and uniquely yours.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <Button
                href="/contact#consultation-form"
                variant="light"
                className="min-w-[14rem] !py-3.5 shadow-sm"
              >
                Book a Free Consultation
              </Button>
              <Button
                href="/projects"
                variant="secondary"
                className="min-w-[14rem] !py-3.5"
              >
                View Our Work
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-x-6 text-[0.72rem] tracking-[0.12em] uppercase text-cream/60">
              <span>{siteConfig.stats.yearsExperience}+ Years</span>
              <span>{siteConfig.stats.projectsCompleted}+ Projects</span>
              <span>100% Custom Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
