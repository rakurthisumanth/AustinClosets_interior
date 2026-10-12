import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <section className="section-pad bg-cream pt-36">
      <div className="container-site max-w-3xl">
        <h1 className="font-display text-4xl text-charcoal md:text-5xl">
          Terms of Use
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-stone">
          <p>
            By using the {siteConfig.name} website, you agree to browse content
            for informational purposes and to submit consultation requests in good
            faith. Project visuals and descriptions are representative examples
            and do not constitute a contractual offer.
          </p>
          <p>
            Design services, pricing, and timelines are confirmed only through
            direct communication with our studio. Website content may be updated
            without notice.
          </p>
          <p>
            This page is a placeholder intended for launch readiness and should be
            reviewed by legal counsel before public production use.
          </p>
        </div>
      </div>
    </section>
  );
}
