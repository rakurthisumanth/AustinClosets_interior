"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  const item = testimonials[active];

  return (
    <section className="section-pad bg-ivory">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Client Voices"
            title="Experiences worth coming home to."
            description="Homeowners share what mattered most—design quality, communication, and craftsmanship."
            className="mb-8 md:mb-12"
          />
        </Reveal>

        <Reveal delay={1}>
          <div className="mx-auto max-w-3xl">
            <blockquote
              key={item.id}
              className="border border-border bg-cream px-5 py-7 text-left animate-[fadeSlide_0.55s_ease] sm:px-8 sm:py-10 sm:text-center md:px-14 md:py-14"
            >
              <p className="font-display text-[1.35rem] leading-snug text-charcoal sm:text-2xl sm:leading-relaxed md:text-[1.85rem]">
                “{item.quote}”
              </p>
              <footer className="mt-6 border-t border-border pt-5 sm:mt-10 sm:pt-6">
                <cite className="not-italic">
                  <span className="block text-sm font-medium tracking-wide text-charcoal">
                    {item.name}
                  </span>
                  <span className="mt-1 block text-sm text-stone">
                    {item.role} · {item.location}
                  </span>
                </cite>
              </footer>
            </blockquote>

            <div
              className="mt-6 flex items-center justify-center gap-3 sm:mt-8"
              role="tablist"
              aria-label="Testimonial reviews"
            >
              {testimonials.map((review, index) => (
                <button
                  key={review.id}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Show review from ${review.name}`}
                  onClick={() => setActive(index)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    index === active
                      ? "w-8 bg-charcoal"
                      : "w-2.5 bg-charcoal/25 hover:bg-charcoal/45",
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
