import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-[0.62rem] font-medium tracking-[0.18em] uppercase md:mb-4 md:text-[0.68rem] md:tracking-[0.22em]",
            light ? "text-cream/70" : "text-bronze",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-[clamp(1.75rem,6vw,3.25rem)] leading-[1.12] tracking-[-0.02em] text-balance md:text-[clamp(2rem,4vw,3.25rem)]",
          light ? "text-cream" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3.5 text-[0.95rem] leading-relaxed md:mt-5 md:text-lg",
            light ? "text-cream/75" : "text-stone",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
