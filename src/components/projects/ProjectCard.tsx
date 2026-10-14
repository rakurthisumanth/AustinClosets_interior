import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  priority?: boolean;
  aspect?: string;
  clickable?: boolean;
}

export function ProjectCard({
  project,
  className,
  priority = false,
  aspect = "aspect-[4/5]",
  clickable = true,
}: ProjectCardProps) {
  const content = (
    <div className={cn("image-reveal relative overflow-hidden bg-ivory-deep", aspect)}>
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <p className="text-[0.65rem] tracking-[0.18em] uppercase text-white/80">
          {project.categoryLabel}
        </p>
        <h3 className="font-display mt-1 text-2xl leading-tight">{project.title}</h3>
      </div>
    </div>
  );

  return (
    <article className={cn(clickable && "group", className)}>
      {clickable ? (
        <Link href={`/projects/${project.slug}`} className="block">
          {content}
        </Link>
      ) : (
        <div className="block cursor-default" aria-label={project.title}>
          {content}
        </div>
      )}
    </article>
  );
}
