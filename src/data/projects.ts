import type { Project, ProjectCategory } from "@/types";

export const projects: Project[] = [
  {
    id: "0a",
    slug: "austin-closets-main",
    title: "Austin Closets Main Suite",
    category: "closets-main",
    categoryLabel: "Closets Main",
    location: "Austin, TX",
    image: "/images/project-closets-main.jpg",
    imageAlt: "Signature Closets Main walk-in with island and soft lighting",
    description:
      "A flagship Closets Main installation for a primary suite—designed as a calm, highly organized dressing space with premium finishes.",
    challenge:
      "The homeowners needed a main closet that could handle a full wardrobe without feeling crowded or overly commercial.",
    solution:
      "We planned clear zones for hanging, folded storage, and accessories, then finished the space with warm wood, soft lighting, and a center island for daily routines.",
    materials: ["White oak veneer", "Brushed bronze hardware", "Soft-close drawers", "Integrated LED lighting"],
    gallery: [
      { src: "/images/project-closets-main.jpg", alt: "Closets Main suite overview" },
      { src: "/images/project-closets-main-2.jpg", alt: "Closets Main shelving detail" },
    ],
    beforeImage: "/images/before.jpg",
    afterImage: "/images/project-closets-main.jpg",
    featured: true,
  },
  {
    id: "0b",
    slug: "lake-hills-cabinets",
    title: "Lake Hills Cabinets",
    category: "cabinets",
    categoryLabel: "Cabinets",
    location: "Austin, TX",
    image: "/images/project-cabinets.jpg",
    imageAlt: "Custom cabinet installation with clean modern finishes",
    description:
      "Custom cabinetry designed for a residential kitchen and living area, balancing storage capacity with a refined architectural look.",
    challenge:
      "Standard cabinetry left unused corners and finishes that did not match the rest of the home.",
    solution:
      "We designed full-height and base cabinets with coordinated materials, soft-close hardware, and proportions that align with the surrounding interior.",
    materials: ["Painted maple", "Soft-close hinges", "Quartz countertops", "Brushed nickel pulls"],
    gallery: [
      { src: "/images/project-cabinets.jpg", alt: "Custom cabinets wide view" },
      { src: "/images/project-cabinets-2.jpg", alt: "Cabinet storage detail" },
    ],
    beforeImage: "/images/before.jpg",
    afterImage: "/images/project-cabinets.jpg",
    featured: true,
  },
  {
    id: "1",
    slug: "westlake-walk-in",
    title: "Westlake Walk-In",
    category: "closets",
    categoryLabel: "Closets",
    location: "Austin, TX",
    image: "/images/project-westlake.jpg",
    imageAlt: "Custom walk-in closet with center island and warm lighting",
    description:
      "A primary suite walk-in redesigned for a couple who wanted calm mornings and room for seasonal rotation without visual clutter.",
    challenge:
      "The existing closet lacked zoning, lighting was uneven, and hanging space competed with open shelving in a way that felt unfinished.",
    solution:
      "We introduced a dual-zone layout with a soft island for accessories, integrated LED lighting, and closed cabinetry for lesser-used pieces—preserving a serene, gallery-like feel.",
    materials: ["White oak veneer", "Brushed bronze hardware", "Soft-close drawers", "Integrated LED lighting"],
    gallery: [
      { src: "/images/project-westlake.jpg", alt: "Walk-in closet overview with island" },
      { src: "/images/project-westlake-2.jpg", alt: "Organized closet shelving detail" },
      { src: "/images/project-closets-main-2.jpg", alt: "Closet cabinetry and hanging rails" },
    ],
    beforeImage: "/images/before.jpg",
    afterImage: "/images/project-westlake.jpg",
    featured: true,
  },
  {
    id: "2",
    slug: "highland-primary-suite",
    title: "Highland Primary Suite",
    category: "bedrooms",
    categoryLabel: "Bedrooms",
    location: "Dallas, TX",
    image: "/images/project-bedroom.jpg",
    imageAlt: "Primary bedroom with soft neutrals and custom wall paneling",
    description:
      "A primary bedroom refreshed with custom paneling, integrated storage, and a quieter material palette suited to rest.",
    challenge:
      "The room felt visually busy and lacked storage for a growing wardrobe, making the suite feel transitional rather than settled.",
    solution:
      "We simplified the palette, added a paneled headboard wall with concealed storage, and balanced lighting for both morning routines and evening wind-down.",
    materials: ["Linen upholstery", "Matte lacquer cabinetry", "Natural stone accents", "Warm brass fixtures"],
    gallery: [
      { src: "/images/project-bedroom.jpg", alt: "Primary bedroom wide view" },
      { src: "/images/project-bedroom-2.jpg", alt: "Bedroom seating and soft textiles" },
      { src: "/images/project-bedroom-3.jpg", alt: "Bedroom detail with layered bedding" },
    ],
    beforeImage: "/images/before-alt.jpg",
    afterImage: "/images/project-bedroom.jpg",
    featured: true,
  },
  {
    id: "3",
    slug: "river-oaks-living",
    title: "River Oaks Living Room",
    category: "living-rooms",
    categoryLabel: "Living Rooms",
    location: "Houston, TX",
    image: "/images/project-living.jpg",
    imageAlt: "Sophisticated living room with layered seating and natural light",
    description:
      "A formal living room reimagined for everyday gathering—elegant enough for entertaining, comfortable enough for weeknights.",
    challenge:
      "The space was underused due to a stiff layout and finishes that felt disconnected from the rest of the home.",
    solution:
      "We redesigned circulation, introduced a custom media wall, and layered textiles and lighting so the room feels inviting without losing its architectural presence.",
    materials: ["Performance textiles", "White oak millwork", "Travertine surfaces", "Custom drapery"],
    gallery: [
      { src: "/images/project-living.jpg", alt: "Living room seating arrangement" },
      { src: "/images/project-living-2.jpg", alt: "Living room natural light view" },
      { src: "/images/project-living-3.jpg", alt: "Living space detail with soft furnishings" },
    ],
    beforeImage: "/images/before-alt-2.jpg",
    afterImage: "/images/project-living.jpg",
    featured: true,
  },
  {
    id: "4",
    slug: "cedar-park-studio",
    title: "Cedar Park Studio Office",
    category: "home-offices",
    categoryLabel: "Home Offices",
    location: "Cedar Park, TX",
    image: "/images/project-office.jpg",
    imageAlt: "Home office with custom desk and open shelving",
    description:
      "A compact home office designed for deep work, video calls, and storage that stays out of sight when the day ends.",
    challenge:
      "The client needed a productive workspace in a guest room footprint without making the room feel like a corporate cubicle.",
    solution:
      "We built a wall-to-wall desk system with concealed filing, open display for books, and lighting tuned for screen work and evening wind-down.",
    materials: ["Walnut veneer", "Matte black hardware", "Acoustic paneling", "Task and ambient lighting"],
    gallery: [
      { src: "/images/project-office.jpg", alt: "Home office desk and shelving" },
      { src: "/images/project-office-2.jpg", alt: "Bright workspace with built-ins" },
      { src: "/images/project-office-3.jpg", alt: "Office interior detail" },
    ],
    beforeImage: "/images/before-alt.jpg",
    afterImage: "/images/project-office.jpg",
    featured: true,
  },
  {
    id: "5",
    slug: "mueller-mudroom",
    title: "Mueller Family Mudroom",
    category: "storage",
    categoryLabel: "Storage",
    location: "Austin, TX",
    image: "/images/project-storage.jpg",
    imageAlt: "Custom mudroom and pantry storage with open shelving",
    description:
      "A hardworking entry and storage corridor designed to absorb daily life—bags, shoes, and sports gear—without visual chaos.",
    challenge:
      "The family’s entry had become a drop zone with no dedicated zones, creating clutter at the front of the home.",
    solution:
      "We designed closed cubbies, a bench with boot storage, and tall cabinetry for bulk items, finished to match adjoining millwork.",
    materials: ["Painted maple cabinetry", "Durable quartz bench top", "Hooks and woven baskets", "Porcelain tile flooring"],
    gallery: [
      { src: "/images/project-storage.jpg", alt: "Organized custom storage wall" },
      { src: "/images/project-storage-2.jpg", alt: "Cabinetry storage detail" },
      { src: "/images/project-storage-3.jpg", alt: "Home entry architecture context" },
    ],
    beforeImage: "/images/before.jpg",
    afterImage: "/images/project-storage.jpg",
    featured: false,
  },
  {
    id: "6",
    slug: "lakeway-residence",
    title: "Lakeway Full Residence",
    category: "full-interiors",
    categoryLabel: "Full Interiors",
    location: "Lakeway, TX",
    image: "/images/project-full.jpg",
    imageAlt: "Open luxury residence with cohesive interior design",
    description:
      "A multi-room interior renovation unifying living spaces, bedrooms, and custom storage under one material story.",
    challenge:
      "Previous renovations left rooms feeling unrelated—different finishes, lighting languages, and storage approaches throughout the home.",
    solution:
      "We established a shared palette of oak, stone, and warm metals, then tailored each room’s function while keeping the visual thread continuous from foyer to suite.",
    materials: ["White oak flooring", "Limewash walls", "Natural stone", "Custom millwork throughout"],
    gallery: [
      { src: "/images/project-full.jpg", alt: "Open living and dining interior" },
      { src: "/images/project-full-2.jpg", alt: "Modern living area with stone accents" },
      { src: "/images/project-full-3.jpg", alt: "Residence foyer and corridor" },
    ],
    beforeImage: "/images/before-alt-2.jpg",
    afterImage: "/images/project-full.jpg",
    featured: true,
  },
  {
    id: "7",
    slug: "south-congress-closet",
    title: "South Congress Reach-In",
    category: "closets",
    categoryLabel: "Closets",
    location: "Austin, TX",
    image: "/images/project-reachin.jpg",
    imageAlt: "Reach-in closet system with custom organizers",
    description:
      "A reach-in closet maximized for a young professional who needed clarity and capacity in a compact footprint.",
    challenge:
      "Limited depth and a single hanging rod left clothing piled and accessories without a home.",
    solution:
      "We introduced double hanging, shallow drawers, and adjustable shelves with a lighter finish to keep the small space feeling open.",
    materials: ["Soft-white laminate", "Satin nickel pulls", "Velvet-lined trays", "Adjustable shelving"],
    gallery: [
      { src: "/images/project-reachin.jpg", alt: "Reach-in closet organizers" },
      { src: "/images/project-closets-main-2.jpg", alt: "Closet shelving detail" },
    ],
    beforeImage: "/images/before-alt.jpg",
    afterImage: "/images/project-reachin.jpg",
  },
  {
    id: "8",
    slug: "plano-guest-bedroom",
    title: "Plano Guest Retreat",
    category: "bedrooms",
    categoryLabel: "Bedrooms",
    location: "Plano, TX",
    image: "/images/project-guest.jpg",
    imageAlt: "Guest bedroom with calm neutrals and layered bedding",
    description:
      "A guest bedroom designed to feel hotel-calm while remaining practical for visiting family.",
    challenge:
      "The room needed storage for guests without looking like a spare closet overflow space.",
    solution:
      "We added a built-in wardrobe wall, softened the palette, and specified durable textiles that still feel elevated.",
    materials: ["Performance linen", "Painted built-ins", "Oak nightstands", "Soft ambient lighting"],
    gallery: [
      { src: "/images/project-guest.jpg", alt: "Guest bedroom overview" },
      { src: "/images/project-bedroom-2.jpg", alt: "Bedroom corner with soft light" },
    ],
    beforeImage: "/images/before-alt-2.jpg",
    afterImage: "/images/project-guest.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: ProjectCategory | "all"): Project[] {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
}
