import type { Metadata } from "next";
import Image from "next/image";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AustinClosets—our philosophy, approach, and commitment to crafting personalized luxury home interiors.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      "Designing spaces with purpose. Discover the story, philosophy, and craft behind AustinClosets.",
    url: "/about",
  },
};

const team = [
  {
    name: "Studio Lead",
    role: "Principal Designer",
    focus: "Concept development & residential planning",
  },
  {
    name: "Design Associate",
    role: "Interior Designer",
    focus: "Materials, finishes & spatial detailing",
  },
  {
    name: "Project Lead",
    role: "Installation Manager",
    focus: "Fabrication coordination & site excellence",
  },
];

export default function AboutPage() {
  const { stats } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="About AustinClosets"
        title="Designing Spaces With Purpose."
        description="We create personalized residential interiors that feel elegant, functional, and unmistakably yours."
        image={images.hero.about.src}
        imageAlt={images.hero.about.alt}
      />

      <section className="section-pad bg-cream !pt-10 md:!pt-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="container-wide grid items-center gap-8 md:gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="order-2 lg:order-1 lg:col-span-6">
            <div className="image-reveal relative aspect-[16/10] overflow-hidden md:aspect-[4/3]">
              <Image
                src={images.about.studio.src}
                alt={images.about.studio.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2 lg:col-span-6" delay={1}>
            <p className="mb-3 text-[0.62rem] font-medium tracking-[0.18em] uppercase text-bronze md:mb-4 md:text-[0.68rem] md:tracking-[0.22em]">
              Our Story
            </p>
            <h2 className="font-display text-[clamp(1.75rem,6vw,3.25rem)] leading-[1.1] text-charcoal">
              A studio devoted to livable luxury.
            </h2>
            <div className="mt-4 space-y-3.5 text-[0.95rem] leading-relaxed text-stone md:mt-6 md:space-y-4 md:text-lg">
              <p>
                AustinClosets was founded on a simple belief: the most
                beautiful homes are the ones that support real life. We design
                custom closets, living spaces, bedrooms, offices, and
                whole-home interiors for clients who value craft and calm.
              </p>
              <p>
                Based in the United States and rooted in residential design, we
                partner closely with homeowners—listening first, designing with
                intention, and delivering spaces that feel refined without
                feeling precious.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-ivory">
        <div className="container-wide grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <AnimatedStat
            value={stats.yearsExperience}
            label="Years Experience"
          />
          <AnimatedStat value={stats.projectsCompleted} label="Projects" />
          <AnimatedStat value={100} suffix="%" label="Custom Design" />
        </div>
      </section>

      <section className="section-pad bg-cream !py-12 md:!py-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="container-wide grid gap-6 md:gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-3 text-[0.62rem] font-medium tracking-[0.18em] uppercase text-bronze md:mb-4 md:text-[0.68rem] md:tracking-[0.22em]">
              Philosophy
            </p>
            <h2 className="font-display text-[clamp(1.7rem,6vw,3rem)] leading-[1.12] text-charcoal">
              Beauty should serve the way you live.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={1}>
            <p className="text-[0.95rem] leading-relaxed text-stone md:text-lg">
              We believe luxury interiors are defined by clarity—proportion,
              material honesty, and storage that disappears into architecture.
              Our philosophy favors warm neutrals, lasting craftsmanship, and
              rooms that feel composed rather than staged.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-ivory !py-12 md:!py-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="container-wide grid items-center gap-8 md:gap-12 lg:grid-cols-12">
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <p className="mb-3 text-[0.62rem] font-medium tracking-[0.18em] uppercase text-bronze md:mb-4 md:text-[0.68rem] md:tracking-[0.22em]">
              Our Approach
            </p>
            <h2 className="font-display text-[clamp(1.7rem,6vw,3rem)] text-charcoal">
              Listen. Design. Refine. Deliver.
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-stone md:mt-6 md:text-lg">
              Collaboration is central to our process. We translate your
              routines and preferences into drawings, material boards, and
              custom millwork—then guide fabrication and installation with the
              same care we bring to concept design.
            </p>
          </Reveal>
          <Reveal className="order-1 lg:order-2 lg:col-span-7" delay={1}>
            <div className="image-reveal relative aspect-[16/10] overflow-hidden md:aspect-[5/4]">
              <Image
                src={images.about.philosophy.src}
                alt={images.about.philosophy.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream !py-12 md:!py-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-3 text-[0.62rem] font-medium tracking-[0.18em] uppercase text-bronze md:mb-4 md:text-[0.68rem] md:tracking-[0.22em]">
                Commitment to Quality
              </p>
              <h2 className="font-display text-[clamp(1.7rem,6vw,3rem)] text-charcoal">
                Details you can feel every day.
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-stone md:mt-6 md:text-lg">
                From soft-close drawers to finish alignment and lighting
                placement, quality is measured in the moments you live with the
                work—not just the day of installation. We partner with trusted
                fabricators and installers to protect that standard.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-ivory !py-12 md:!py-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="container-wide">
          <Reveal>
            <div className="mb-8 flex flex-col gap-6 md:mb-12 md:gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="mb-3 text-[0.62rem] font-medium tracking-[0.18em] uppercase text-bronze md:mb-4 md:text-[0.68rem] md:tracking-[0.22em]">
                  Our Team
                </p>
                <h2 className="font-display text-[clamp(1.7rem,6vw,3rem)] text-charcoal">
                  Designers and makers, side by side.
                </h2>
              </div>
              <div className="image-reveal relative hidden aspect-[16/10] w-full max-w-md overflow-hidden lg:block">
                <Image
                  src={images.about.team.src}
                  alt={images.about.team.alt}
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.role} delay={(index % 3) as 0 | 1 | 2}>
                <article className="border-t border-border pt-5 md:pt-6">
                  <h3 className="font-display text-xl text-charcoal md:text-2xl">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[0.65rem] tracking-[0.14em] uppercase text-bronze md:text-[0.68rem] md:tracking-[0.16em]">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-stone md:mt-4">
                    {member.focus}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center md:mt-16">
            <h3 className="font-display text-[clamp(1.55rem,5vw,2.75rem)] text-charcoal">
              Let&apos;s Design Something Beautiful Together.
            </h3>
            <div className="mt-6 md:mt-8">
              <Button
                href="/contact#consultation-form"
                className="w-full !py-3.5 sm:w-auto"
              >
                Book a Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA
        title="Ready to begin your project?"
        description="Share a few details about your home and our design team will reach out."
      />
    </>
  );
}
