import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";

export function IntroSection() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="order-2 lg:order-1 lg:col-span-5">
          <p className="mb-4 text-[0.68rem] font-medium tracking-[0.22em] uppercase text-bronze">
            Our Approach
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.1] tracking-[-0.02em] text-charcoal text-balance">
            Designed for the way you live.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-stone md:text-lg">
            <p>
              Every home tells a different story. We begin with yours—how you
              move through each room, what you keep close, and how you want your
              space to feel at the end of the day.
            </p>
            <p>
              From there, our designers craft personalized interiors around your
              lifestyle, architecture, preferences, and budget—balancing beauty
              with the quiet order of well-planned storage and millwork.
            </p>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2 lg:col-span-7" delay={1}>
          <div className="image-reveal relative aspect-[4/5] overflow-hidden md:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={images.intro.src}
              alt={images.intro.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
