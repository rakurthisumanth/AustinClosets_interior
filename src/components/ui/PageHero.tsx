import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  eyebrow?: string;
  compact?: boolean;
}

export function PageHero({
  title,
  description,
  image,
  imageAlt,
  eyebrow,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-charcoal",
        compact ? "min-h-[42vh] md:min-h-[48vh]" : "min-h-[72vh]",
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/45 to-charcoal/25" />
      <div
        className={cn(
          "container-wide relative z-10",
          compact ? "pb-10 pt-28 md:pb-14 md:pt-32" : "pb-16 pt-32 md:pb-20 md:pt-40",
        )}
      >
        {eyebrow ? (
          <p className="mb-4 text-[0.68rem] font-medium tracking-[0.22em] uppercase text-cream/70">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.05] tracking-[-0.02em] text-cream text-balance">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
