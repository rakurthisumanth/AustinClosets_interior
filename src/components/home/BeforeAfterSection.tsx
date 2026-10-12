import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";

export function BeforeAfterSection() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Transformation"
            title="Before & after."
            description="Drag the divider to see how thoughtful design and custom craftsmanship reshape everyday spaces."
            align="center"
            className="mb-12"
          />
        </Reveal>
        <Reveal delay={1}>
          <BeforeAfterSlider
            beforeSrc={images.beforeAfter.before.src}
            afterSrc={images.beforeAfter.after.src}
            beforeAlt={images.beforeAfter.before.alt}
            afterAlt={images.beforeAfter.after.alt}
          />
        </Reveal>
      </div>
    </section>
  );
}
