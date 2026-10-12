import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedAttract() {
  const featured = getFeaturedProjects().slice(0, 4);

  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        <Reveal>
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Inspiration"
              title="Spaces that feel like home."
              description="Explore recent AustinClosets projects—custom closets, cabinets, and interiors designed for real life."
            />
            <Button href="/projects" variant="ghost" className="self-start">
              See All Projects
            </Button>
          </div>
        </Reveal>

        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {featured.map((project, index) => (
            <Reveal
              key={project.id}
              className="w-[78%] shrink-0 snap-start sm:w-[48%] lg:w-[38%]"
              delay={(index % 3) as 0 | 1 | 2}
            >
              <Link href="/projects" className="group block">
                <div className="image-reveal relative aspect-[4/5] overflow-hidden bg-ivory-deep">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 80vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-[0.65rem] tracking-[0.18em] uppercase text-white/75">
                      {project.categoryLabel}
                    </p>
                    <h3 className="font-display mt-1 text-2xl">{project.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{project.location}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
