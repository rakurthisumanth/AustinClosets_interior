import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  {
    title: "Free Design Consultation",
    text: "Share your goals and get expert guidance with no obligation.",
  },
  {
    title: "Custom Craftsmanship",
    text: "Measured, fabricated, and installed to fit your home perfectly.",
  },
  {
    title: "Austin-Based Studio",
    text: "Local designers who understand Texas homes and lifestyles.",
  },
];

export function HighlightStrip() {
  return (
    <section className="section-pad bg-charcoal text-cream !py-16 md:!py-20">
      <div className="container-wide">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-[0.68rem] font-medium tracking-[0.22em] uppercase text-taupe">
              Why Homeowners Choose Us
            </p>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] text-cream">
              Beautiful spaces start with a conversation.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) as 0 | 1 | 2}>
              <article className="border-t border-cream/15 pt-6">
                <h3 className="font-display text-2xl text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
