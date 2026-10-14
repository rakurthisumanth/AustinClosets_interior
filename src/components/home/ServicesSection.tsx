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
          <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-8">
            <SectionHeading
              eyebrow="What We Design"
              title="Interiors shaped with intention."
              description="From custom closets to complete residential interiors, every project is guided by proportion, craft, and the way you live."
            />
            <Button
              href="/services"
              variant="ghost"
              className="w-full self-start sm:w-auto md:self-auto"
            >
              All Services
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3">
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
