import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="section-pad bg-cream pt-36">
      <div className="container-site max-w-3xl">
        <h1 className="font-display text-4xl text-charcoal md:text-5xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-stone">
          <p>
            {siteConfig.name} respects your privacy. Information submitted through
            our consultation form—such as your name, email, phone number, and
            project details—is used solely to respond to your inquiry and provide
            related design services.
          </p>
          <p>
            We do not sell personal information. Form submissions may be processed
            through email delivery providers configured by the studio. You may
            contact us at {siteConfig.contact.email} to request updates or
            deletion of your information where applicable.
          </p>
          <p>
            This page is a placeholder policy intended for launch readiness and
            should be reviewed by legal counsel before public production use.
          </p>
        </div>
      </div>
    </section>
  );
}
