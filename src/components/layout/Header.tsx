"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border bg-white transition-shadow duration-500",
        scrolled && "shadow-[0_1px_0_rgba(26,25,24,0.06)]",
      )}
    >
      <div className="container-wide flex h-[4.5rem] items-center justify-between md:h-[5.25rem]">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {siteConfig.navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[0.72rem] font-medium tracking-[0.16em] uppercase transition-colors duration-300",
                  active
                    ? "text-charcoal"
                    : "text-stone hover:text-charcoal",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary" className="!py-3 !px-5">
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center text-charcoal lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-6">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-px w-full bg-current transition-opacity duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[14px] h-px w-full bg-current transition-transform duration-300",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-[4.5rem] bg-white transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
        )}
      >
        <nav
          className="container-site flex h-full flex-col justify-between py-10"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-6">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="font-display text-3xl text-charcoal"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Button href="/contact" className="w-full" onClick={closeMenu}>
            Book a Free Consultation
          </Button>
        </nav>
      </div>
    </header>
  );
}
