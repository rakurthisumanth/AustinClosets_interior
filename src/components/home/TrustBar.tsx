import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function TrustBar() {
  const { stats } = siteConfig;

  return (
    <section className="border-y border-border bg-cream">
      <div className="container-wide">
        <Reveal>
          <div className="grid grid-cols-3 divide-x divide-border">
            <AnimatedStat
              value={stats.yearsExperience}
              label="Years Experience"
            />
            <AnimatedStat
              value={stats.projectsCompleted}
              label="Projects Completed"
            />
            <AnimatedStat value={100} suffix="%" label="Custom Design" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
