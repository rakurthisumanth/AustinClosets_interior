import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects().slice(0, 5);

  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        <Reveal>
          <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title="Featured projects."
              description="A look at recent residential interiors—custom closets, living spaces, bedrooms, and rooms designed to feel completely at home."
            />
            <Button href="/projects" variant="ghost" className="self-start">
              Explore Our Projects
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-12">
          {featured.map((project, index) => {
            const wide = index === 0 || index === 3;
            return (
              <Reveal
                key={project.id}
                className={wide ? "md:col-span-7" : "md:col-span-5"}
                delay={(index % 3) as 0 | 1 | 2}
              >
                <ProjectCard
                  project={project}
                  aspect={wide ? "aspect-[16/11]" : "aspect-[4/5]"}
                  priority={index === 0}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
