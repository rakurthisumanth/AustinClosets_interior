import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We understand your space, lifestyle, requirements, and budget.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our designers develop a personalized concept for your space.",
  },
  {
    number: "03",
    title: "Approval",
    description:
      "You review the design, materials, finishes, and details.",
  },
  {
    number: "04",
    title: "Installation",
    description: "Our team brings the approved design to life.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="A clear path from idea to installation."
            description="A simple process designed to keep decisions confident and the journey calm."
          />
        </Reveal>

        <Reveal delay={1}>
          <div className="process-track mt-14 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible">
            {steps.map((step) => (
              <article
                key={step.number}
                className="min-w-[16rem] border-l border-border pl-6 lg:min-w-0"
              >
                <p className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-bronze">
                  {step.number}
                </p>
                <h3 className="font-display mt-4 text-2xl text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
