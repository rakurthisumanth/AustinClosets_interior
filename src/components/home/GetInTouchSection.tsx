import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function GetInTouchSection() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-wide">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-4 text-[0.68rem] font-medium tracking-[0.22em] uppercase text-bronze">
                Get in Touch
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-charcoal text-balance">
                Ready to talk about your space?
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-stone md:text-lg">
                Reach out by phone or email, or request a consultation and our
                design team will get back to you.
              </p>
              <div className="mt-8">
                <Button href="/contact">Book a Free Consultation</Button>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="grid gap-8 border-t border-border pt-8 sm:grid-cols-3 sm:gap-6">
                <li>
                  <p className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-stone">
                    Phone
                  </p>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="mt-3 block text-base text-charcoal transition-colors hover:text-bronze"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <p className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-stone">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-3 block text-base text-charcoal transition-colors hover:text-bronze"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <p className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-stone">
                    Location
                  </p>
                  <p className="mt-3 text-base text-charcoal">
                    {siteConfig.contact.address}
                    <br />
                    {siteConfig.contact.city}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
