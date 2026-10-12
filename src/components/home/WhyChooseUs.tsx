import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Personalized Design",
    description:
      "Every plan begins with your lifestyle, habits, and the architecture of your home—not a catalog template.",
  },
  {
    title: "Premium Materials",
    description:
      "We specify finishes and hardware chosen for longevity, tactile quality, and a quiet sense of luxury.",
  },
  {
    title: "Expert Craftsmanship",
    description:
      "Measured, fabricated, and installed by specialists who treat details as part of the design.",
  },
  {
    title: "End-to-End Service",
    description:
      "From first consultation through final installation, one team guides the process with clarity.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-charcoal text-cream">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Why AustinClosets"
            title="Design that feels considered."
            description="Luxury is not excess—it is clarity, craft, and spaces that support the way you live."
            light
          />
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) as 0 | 1 | 2}>
              <div className="border-t border-cream/15 pt-6">
                <span className="font-display text-3xl text-taupe/80">
                  0{index + 1}
                </span>
                <h3 className="font-display mt-5 text-2xl">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
