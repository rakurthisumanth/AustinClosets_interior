import type { Metadata } from "next";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { FeaturedAttract } from "@/components/home/FeaturedAttract";
import { Hero } from "@/components/home/Hero";
import { HighlightStrip } from "@/components/home/HighlightStrip";
import { IntroSection } from "@/components/home/IntroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: "AustinClosets Custom Interiors",
  },
  description:
    "AustinClosets designs Closets Main, custom cabinets, bedrooms, living rooms, home offices, and complete residential interiors across the United States.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AustinClosets Custom Interiors",
    description: siteConfig.description,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <IntroSection />
      <HighlightStrip />
      <ServicesSection />
      <FeaturedAttract />
      <WhyChooseUs />
      <ProcessSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <ConsultationCTA />
    </>
  );
}
