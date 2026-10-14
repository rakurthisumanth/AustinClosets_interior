import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      url: `/projects/${project.slug}`,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-charcoal">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-charcoal/25" />
        <div className="container-wide relative z-10 flex min-h-[70vh] flex-col justify-end pb-16 pt-32">
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-cream/70">
            {project.categoryLabel}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-cream">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-bronze">
              Overview
            </p>
            <p className="mt-5 text-lg leading-relaxed text-stone md:text-xl">
              {project.description}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={1}>
            <dl className="space-y-6 border-t border-border pt-6">
              <div>
                <dt className="text-[0.68rem] tracking-[0.16em] uppercase text-stone">
                  Category
                </dt>
                <dd className="mt-2 text-charcoal">{project.categoryLabel}</dd>
              </div>
              <div>
                <dt className="text-[0.68rem] tracking-[0.16em] uppercase text-stone">
                  Materials
                </dt>
                <dd className="mt-2 text-charcoal">
                  <ul className="space-y-1">
                    {project.materials.map((material) => (
                      <li key={material}>{material}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="container-wide grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl text-charcoal">Design Challenge</h2>
            <p className="mt-5 text-base leading-relaxed text-stone md:text-lg">
              {project.challenge}
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-3xl text-charcoal">Design Solution</h2>
            <p className="mt-5 text-base leading-relaxed text-stone md:text-lg">
              {project.solution}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-wide">
          <Reveal>
            <h2 className="font-display mb-10 text-3xl text-charcoal md:text-4xl">
              Project Gallery
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <Reveal
                key={image.src}
                className={index === 0 ? "md:col-span-2" : undefined}
                delay={(index % 3) as 0 | 1 | 2}
              >
                <div
                  className={
                    index === 0
                      ? "image-reveal relative aspect-[16/10] overflow-hidden"
                      : "image-reveal relative aspect-[4/5] overflow-hidden"
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="container-wide">
          <Reveal>
            <h2 className="font-display mb-8 text-center text-3xl text-charcoal md:text-4xl">
              Before & After
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <BeforeAfterSlider
              beforeSrc={project.beforeImage}
              afterSrc={project.afterImage}
              beforeAlt={`${project.title} before renovation`}
              afterAlt={`${project.title} after renovation`}
            />
          </Reveal>
          <div className="mt-12 text-center">
            <Button href="/contact#consultation-form">Start a Similar Project</Button>
            <p className="mt-6">
              <Link
                href="/projects"
                className="text-[0.68rem] tracking-[0.16em] uppercase text-stone hover:text-charcoal"
              >
                ← Back to all projects
              </Link>
            </p>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
