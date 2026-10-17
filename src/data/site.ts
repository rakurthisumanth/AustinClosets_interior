import type { SiteStats } from "@/types";

export const siteConfig = {
  name: "AustinClosets",
  legalName: "AustinClosets LLC",
  tagline: "Spaces Designed Around You.",
  description:
    "AustinClosets designs Closets Main, custom cabinets, bedrooms, living spaces, and home offices for residences across the United States.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.austinclosetstx.com",
  contact: {
    phone: "+1 7373913259",
    phoneHref: "tel:+17373913259",
    /** Digits only, international format. Overridden by NEXT_PUBLIC_WHATSAPP_NUMBER when set. */
    whatsappNumber: "17373913259",
    email: "contact@austinclosetstx.com",
    address: "2140 Westlake Drive, Suite 300",
    city: "Austin, TX 78746",
    region: "United States",
  },
  social: {
    instagram: "https://www.instagram.com/austinclosets/",
  },
  stats: {
    yearsExperience: 5,
    projectsCompleted: 100,
  } satisfies SiteStats,
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  footerServices: [
    { label: "Closets Main", href: "/services#closets-main" },
    { label: "Cabinets", href: "/services#cabinets" },
    { label: "Custom Closets", href: "/services#custom-closets" },
    { label: "Interior Design", href: "/services#complete-interior-design" },
    { label: "Bedrooms", href: "/services#bedrooms" },
  ],
} as const;

export const projectTypeOptions = [
  "Closets Main",
  "Cabinets",
  "Custom Closet",
  "Bedroom",
  "Living Room",
  "Home Office",
  "Storage",
  "Full Interior",
  "Other",
] as const;

export const budgetOptions = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
  "Not Sure",
] as const;

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Closets Main", value: "closets-main" },
  { label: "Cabinets", value: "cabinets" },
  { label: "Closets", value: "closets" },
  { label: "Bedrooms", value: "bedrooms" },
  { label: "Living Rooms", value: "living-rooms" },
  { label: "Home Offices", value: "home-offices" },
  { label: "Storage", value: "storage" },
  { label: "Full Interiors", value: "full-interiors" },
] as const;
