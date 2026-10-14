import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    slug: "closets-main",
    name: "Closets Main",
    shortDescription:
      "Signature closet systems designed as the centerpiece of your wardrobe space.",
    description:
      "Closets Main is our flagship closet offering—fully customized walk-in and primary suite systems planned around how you dress, store, and start each day. We focus on layout, lighting, and finishes that make organization feel effortless and elevated.",
    benefits: [
      "Primary suite and walk-in closet planning",
      "Zoned storage for clothing, accessories, and seasonal items",
      "Premium finishes, hardware, and integrated lighting",
      "Measured, fabricated, and installed end to end",
    ],
    image: "/images/service-closets-main-v2.jpg",
    imageAlt: "Luxury taupe walk-in closet with marble island and LED shelving",
  },
  {
    id: "2",
    slug: "cabinets",
    name: "Cabinets",
    shortDescription:
      "Custom cabinetry for kitchens, baths, living spaces, and built-in storage.",
    description:
      "Our cabinet work combines clean architecture with everyday function—custom kitchen cabinetry, bathroom vanities, media walls, and built-ins designed to match your home’s materials and lifestyle. Every piece is detailed for proportion, durability, and a refined finish.",
    benefits: [
      "Kitchen, bath, and living-area cabinetry",
      "Custom sizes, finishes, and hardware selections",
      "Built-ins that blend with existing architecture",
      "Precision fabrication and professional installation",
    ],
    image: "/images/service-cabinets-v2.jpg",
    imageAlt: "Modern kitchen with custom cabinets, marble counters, and brass pendants",
  },
  {
    id: "3",
    slug: "custom-closets",
    name: "Custom Closets",
    shortDescription:
      "Walk-in and reach-in closet systems tailored to how you dress and organize.",
    description:
      "From serene walk-ins to efficient reach-in systems, we design closet interiors that feel intentional every morning. Every shelf, drawer, and finish is planned around your wardrobe, routines, and the architecture of your home.",
    benefits: [
      "Custom configurations for walk-in and reach-in spaces",
      "Premium finishes, hardware, and lighting options",
      "Island units, jewelry drawers, and specialized storage",
      "Measured, fabricated, and installed by specialists",
    ],
    image: "/images/service-custom-closets-v2.jpg",
    imageAlt: "Custom walk-in closet with island, vanity, and illuminated shelving",
  },
  {
    id: "4",
    slug: "living-spaces",
    name: "Living Spaces",
    shortDescription:
      "Refined living rooms that balance comfort, proportion, and everyday use.",
    description:
      "We shape living rooms that feel collected and calm—spaces meant for gathering, unwinding, and entertaining. Layouts, millwork, and material palettes are developed to suit your lifestyle without sacrificing warmth.",
    benefits: [
      "Furniture planning and spatial flow",
      "Custom millwork and media walls",
      "Layered lighting and textile guidance",
      "Cohesive color and material stories",
    ],
    image: "/images/service-living-v2.jpg",
    imageAlt: "Warm modern living room with built-in shelving and fireplace wall",
  },
  {
    id: "5",
    slug: "bedrooms",
    name: "Bedrooms",
    shortDescription:
      "Restful bedroom interiors with integrated storage and quiet luxury.",
    description:
      "Bedrooms should feel restorative. We design sleep spaces with thoughtful storage, soft material palettes, and proportions that support rest—whether you need a primary suite retreat or refined guest rooms.",
    benefits: [
      "Built-in wardrobes and bedside storage",
      "Primary suite planning and finishes",
      "Soft, durable material selections",
      "Lighting designed for morning and evening rituals",
    ],
    image: "/images/service-bedrooms-v2.jpg",
    imageAlt: "Serene bedroom with sage accent wall and custom furnishings",
  },
  {
    id: "6",
    slug: "home-offices",
    name: "Home Offices",
    shortDescription:
      "Focused workspaces designed for clarity, comfort, and lasting style.",
    description:
      "Whether you need a dedicated office or a quiet niche within an open plan, we create workspaces that support concentration. Cabinetry, surfaces, and lighting are specified for daily use and visual calm.",
    benefits: [
      "Ergonomic layouts and desk systems",
      "Built-in shelving and concealed storage",
      "Acoustic and lighting considerations",
      "Finishes that complement adjoining rooms",
    ],
    image: "/images/service-offices-v2.jpg",
    imageAlt: "Sunlit home office with custom cabinetry and executive desk",
  },
  {
    id: "7",
    slug: "custom-storage",
    name: "Custom Storage",
    shortDescription:
      "Built-in storage solutions that disappear into the architecture.",
    description:
      "Mudrooms, pantries, laundry rooms, and transitional spaces deserve the same care as primary rooms. We design storage that organizes daily life while elevating the look of the home.",
    benefits: [
      "Mudrooms, pantries, and utility rooms",
      "Hidden storage and display millwork",
      "Durable hardware for high-use zones",
      "Solutions scaled to your square footage",
    ],
    image: "/images/service-storage-v2.jpg",
    imageAlt: "Custom mudroom, laundry, and pantry storage with green cabinetry",
  },
  {
    id: "8",
    slug: "complete-interior-design",
    name: "Complete Interior Design",
    shortDescription:
      "End-to-end residential design from concept through installation.",
    description:
      "For whole-home or multi-room projects, we guide every decision—from spatial planning and material selection to furnishings and installation—so the result feels cohesive from entry to suite.",
    benefits: [
      "Full-home concept development",
      "Material, finish, and FF&E coordination",
      "Project management through installation",
      "A single design vision across every room",
    ],
    image: "/images/service-full-interior-v2.jpg",
    imageAlt: "Complete interior design collage across living, kitchen, and suites",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
