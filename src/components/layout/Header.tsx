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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border bg-white transition-shadow duration-500",
        scrolled && "shadow-[0_1px_0_rgba(26,25,24,0.06)]",
      )}
    >
      <div className="container-wide flex h-[4.25rem] items-center justify-between md:h-[5.75rem]">
        <Logo className="max-w-[72%] sm:max-w-none" />

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

        <div className="hidden lg:block" data-consult-cta>
          <Button
            href="/contact#consultation-form"
            variant="primary"
            className="!py-3 !px-5"
          >
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          className="relative z-50 -mr-1 flex h-11 w-11 items-center justify-center text-charcoal lg:hidden"
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
          "fixed inset-0 top-[4.25rem] bg-cream transition-all duration-400 lg:hidden md:top-[5.75rem]",
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
      >
        <nav
          className="container-wide flex h-[calc(100dvh-4.25rem)] flex-col pb-[calc(1rem+env(safe-area-inset-bottom))] pt-5 md:h-[calc(100dvh-5.75rem)] md:pt-8"
          aria-label="Mobile"
        >
          <p className="mb-4 text-[0.62rem] font-medium tracking-[0.2em] uppercase text-bronze md:hidden">
            Menu
          </p>

          <div className="flex flex-1 flex-col overflow-y-auto">
            {siteConfig.navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "border-b border-border py-3.5 font-display text-[1.75rem] leading-none transition-colors md:py-4 md:text-[2rem]",
                    active ? "text-charcoal" : "text-stone",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-6 border-t border-border pt-5 md:mt-8 md:pt-6">
            <Button
              href="/contact#consultation-form"
              className="w-full !py-4"
              onClick={closeMenu}
            >
              Book a Free Consultation
            </Button>
            <a
              href={siteConfig.contact.phoneHref}
              className="mt-4 block text-center text-[0.78rem] tracking-[0.06em] text-stone"
            >
              Call {siteConfig.contact.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
