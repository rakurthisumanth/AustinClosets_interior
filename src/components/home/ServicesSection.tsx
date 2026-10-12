import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-wide">
        <Reveal>
          <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What We Design"
              title="Interiors shaped with intention."
              description="From custom closets to complete residential interiors, every project is guided by proportion, craft, and the way you live."
            />
            <Button href="/services" variant="ghost" className="self-start md:self-auto">
              All Services
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) as 0 | 1 | 2}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
