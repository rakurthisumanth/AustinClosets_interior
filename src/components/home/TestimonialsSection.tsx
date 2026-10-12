import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Client Voices"
            title="Experiences worth coming home to."
            description="Homeowners share what mattered most—design quality, communication, and craftsmanship."
            className="mb-14"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={(index % 2 === 0 ? 0 : 1) as 0 | 1}>
              <blockquote className="flex h-full flex-col justify-between border border-border bg-cream p-8 md:p-10">
                <p className="font-display text-xl leading-relaxed text-charcoal md:text-2xl">
                  “{item.quote}”
                </p>
                <footer className="mt-8 border-t border-border pt-6">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
