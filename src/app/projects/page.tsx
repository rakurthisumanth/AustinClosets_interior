import type { Metadata } from "next";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse AustinClosets project gallery—custom closets, bedrooms, living rooms, home offices, storage, and full residential interiors.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description:
      "A curated gallery of residential interior projects across closets, bedrooms, living rooms, offices, and more.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work that feels lived in."
        description="Browse each project, then click any image to drag the before-and-after comparison."
        image={images.hero.projects.src}
        imageAlt={images.hero.projects.alt}
      />

      <section className="section-pad bg-cream">
        <div className="container-wide">
          <ProjectGallery />
        </div>
      </section>

      <ConsultationCTA
        title="Inspired by a project?"
        description="Let's discuss how a similar approach could work in your home."
      />
    </>
  );
}
