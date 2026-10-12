import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectGallery() {
  return (
    <div className="masonry">
      {projects.map((project, index) => (
        <div key={project.id} className="masonry-item">
          <ProjectCard
            project={project}
            clickable={false}
            aspect={index % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/5]"}
          />
        </div>
      ))}
    </div>
  );
}
