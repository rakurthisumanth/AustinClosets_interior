import type { Metadata } from "next";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { GetInTouchSection } from "@/components/home/GetInTouchSection";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Luxury Custom Home Interiors",
  description:
    "AustinClosets designs Closets Main, custom cabinets, bedrooms, living rooms, home offices, and complete residential interiors across the United States.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} | Spaces Designed Around You`,
    description: siteConfig.description,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <GetInTouchSection />
      <ConsultationCTA />
    </>
  );
}
