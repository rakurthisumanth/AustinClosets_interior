import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { siteConfig } from "@/data/site";

const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Pinterest", href: siteConfig.social.pinterest },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-cream">
      <div className="container-wide section-pad !pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.68rem] tracking-[0.16em] uppercase text-cream/55 transition-colors hover:text-cream"
                  aria-label={item.label}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-cream/45">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
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
            <ul className="mt-5 space-y-3">
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

          <div className="lg:col-span-3">
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
              <li>
                {siteConfig.contact.address}
                <br />
                {siteConfig.contact.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
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
