import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-cream">
      <div className="container-wide section-pad !pb-10 !pt-12 md:!pt-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/65 md:mt-6">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-cream/80 md:hidden">
              <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
              <a href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:contents">
            <div className="lg:col-span-2">
              <h3 className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-cream/45">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2.5 md:mt-5 md:space-y-3">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-cream/75 transition-colors hover:text-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-cream/45">
                Services
              </h3>
              <ul className="mt-4 space-y-2.5 md:mt-5 md:space-y-3">
                {siteConfig.footerServices.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-cream/75 transition-colors hover:text-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden md:block lg:col-span-3">
            <h3 className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-cream/45">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="transition-colors hover:text-cream"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-cream"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs text-cream/45 md:mt-16 md:pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cream/80">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
