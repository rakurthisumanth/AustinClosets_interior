import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className, light = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex flex-col leading-none",
        light ? "text-cream" : "text-charcoal",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="font-display text-[1.55rem] tracking-[0.02em]">
        AustinClosets
      </span>
      <span className="mt-0.5 text-[0.62rem] font-medium tracking-[0.28em] uppercase opacity-70 transition-opacity group-hover:opacity-100">
        Custom Interiors
      </span>
    </Link>
  );
}
