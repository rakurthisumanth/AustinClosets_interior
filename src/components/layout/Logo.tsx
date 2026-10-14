import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

interface LogoProps {
  className?: string;
  light?: boolean;
}

const services = ["Custom Closets", "Kitchen", "Cabinets"] as const;

export function Logo({ className, light = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex flex-col justify-center leading-none",
        light ? "text-cream" : "text-charcoal",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="font-display text-[1.3rem] tracking-[0.03em] transition-opacity duration-300 sm:text-[1.45rem] md:text-[1.6rem]">
        AustinClosets
      </span>

      <span
        className={cn(
          "mt-1 h-px w-8 transition-all duration-300 group-hover:w-14 sm:mt-1.5 sm:w-10",
          light ? "bg-cream/45" : "bg-bronze/70",
        )}
        aria-hidden
      />

      <span
        className={cn(
          "mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[0.52rem] font-medium tracking-[0.12em] uppercase sm:mt-2 sm:gap-x-2 sm:text-[0.58rem] sm:tracking-[0.16em] md:text-[0.62rem] md:tracking-[0.18em]",
          light ? "text-cream/70" : "text-stone",
        )}
      >
        {services.map((item, index) => (
          <span key={item} className="inline-flex items-center gap-x-2">
            {index > 0 ? (
              <span
                className={cn(
                  "h-1 w-1 rounded-full",
                  light ? "bg-cream/40" : "bg-bronze/80",
                )}
                aria-hidden
              />
            ) : null}
            <span className="transition-colors duration-300 group-hover:text-inherit">
              {item}
            </span>
          </span>
        ))}
      </span>
    </Link>
  );
}
