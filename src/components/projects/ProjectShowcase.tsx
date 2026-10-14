"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { ProjectsAtmosphere } from "@/components/projects/ProjectsAtmosphere";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

export function ProjectShowcase() {
  const [active, setActive] = useState<Project | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <div className="relative">
      <ProjectsAtmosphere />

      <div className="relative z-10 flex flex-col gap-10 md:gap-20">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) as 0 | 1 | 2}>
            <article className="mx-auto w-full max-w-5xl">
              <button
                type="button"
                onClick={() => setActive(project)}
                className="group relative block w-full cursor-pointer overflow-hidden bg-ivory-deep text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
                aria-label={`View before and after for ${project.title}`}
              >
                <div className="relative aspect-[4/5] w-full cursor-pointer sm:aspect-[16/10] md:aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 960px"
                    className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                  <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-end p-4 md:inset-0 md:items-center md:justify-center md:p-0 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                    <span className="bg-cream px-4 py-2.5 text-[0.62rem] font-medium tracking-[0.16em] uppercase text-charcoal shadow-[0_10px_30px_rgba(26,25,24,0.25)] md:px-5 md:py-3 md:text-[0.68rem] md:tracking-[0.18em] md:transition-transform md:duration-300 md:group-hover:scale-[1.02]">
                      See Before & After
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-8">
                    <p className="text-[0.62rem] tracking-[0.16em] uppercase text-cream/75 md:text-[0.65rem] md:tracking-[0.18em]">
                      {project.categoryLabel}
                    </p>
                    <h2 className="font-display mt-1.5 text-[1.65rem] leading-tight text-cream md:mt-2 md:text-3xl">
                      {project.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 max-w-2xl text-sm leading-relaxed text-cream/80 md:line-clamp-none md:text-base">
                      {project.description}
                    </p>
                    <p className="mt-3 text-[0.65rem] font-medium tracking-[0.14em] uppercase text-cream/90 md:hidden">
                      Tap image to compare →
                    </p>
                  </div>
                </div>
              </button>
            </article>
          </Reveal>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-charcoal/70 backdrop-blur-sm md:items-center md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[92dvh] w-full overflow-y-auto bg-cream shadow-[0_24px_80px_rgba(26,25,24,0.35)] md:max-h-none md:max-w-5xl md:overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-cream px-4 py-4 md:static md:px-8 md:py-5">
              <div className="min-w-0">
                <p className="text-[0.65rem] tracking-[0.18em] uppercase text-bronze">
                  {active.categoryLabel}
                </p>
                <h3
                  id={titleId}
                  className="font-display mt-1 text-xl text-charcoal md:text-3xl"
                >
                  {active.title}
                </h3>
                <p className="mt-1 text-sm text-stone">
                  Drag to compare before and after.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="shrink-0 cursor-pointer px-3 py-2 text-[0.68rem] font-medium tracking-[0.16em] uppercase text-stone transition-colors hover:text-charcoal"
                aria-label="Close before and after view"
              >
                Close
              </button>
            </div>

            <div className="p-3 pb-[calc(1rem+env(safe-area-inset-bottom))] md:p-6 md:pb-6">
              <BeforeAfterSlider
                beforeSrc={active.beforeImage}
                afterSrc={active.afterImage}
                beforeAlt={`${active.title} — before`}
                afterAlt={`${active.title} — after`}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
