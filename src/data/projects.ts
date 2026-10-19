import type { Project, ProjectCategory } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "lumina-dressing-suite",
    title: "Lumina Dressing Suite",
    category: "closets",
    categoryLabel: "Custom Closets",
    location: "Custom Closet Design",
    image: "/images/project-closets-after.jpg",
    imageAlt: "Warm wood walk-in closet with island, window seat, and LED lighting",
    description:
      "A full closet transformation—from basic painted shelving and stained carpet to a boutique dressing suite with custom wood cabinetry, island storage, and a window seat.",
    challenge:
      "The existing closet had simple white shelving, worn carpet, and little lighting or specialized storage.",
    solution:
      "We rebuilt the space with warm wood cabinetry, illuminated displays, a marble-topped island, glass shoe cabinets, and a cushioned window bench.",
    materials: [
      "Warm wood cabinetry",
      "Marble island top",
      "Integrated LED lighting",
      "Glass display cabinets",
    ],
    gallery: [
      { src: "/images/project-closets-after.jpg", alt: "Finished custom walk-in closet" },
      { src: "/images/project-closets-before.png", alt: "Closet before renovation" },
    ],
    beforeImage: "/images/project-closets-before.png",
    afterImage: "/images/project-closets-after.jpg",
    featured: true,
  },
  {
    id: "1b",
    slug: "amber-living-room",
    title: "Amber Living Room",
    category: "living-rooms",
    categoryLabel: "Living Rooms",
    location: "Living Space Design",
    image: "/images/project-living-after.jpg",
    imageAlt: "Modern living room with orange chair, wood sideboard, and gold accents",
    description:
      "A living room refresh that replaces a cluttered, dated layout with warm modern seating, curated lighting, and a calm material palette.",
    challenge:
      "The original room felt worn and crowded—mismatched patterns, heavy furniture, and little visual calm.",
    solution:
      "We reworked the space with tailored seating, a sculptural coffee table, a wood sideboard, and layered lighting for a collected everyday living room.",
    materials: [
      "Bouclé and velvet seating",
      "Wood sideboard",
      "Stone coffee table",
      "Brass lighting accents",
    ],
    gallery: [
      { src: "/images/project-living-after.jpg", alt: "Finished living room" },
      { src: "/images/ba-living-before-v4.jpg", alt: "Living room before renovation" },
    ],
    beforeImage: "/images/ba-living-before-v4.jpg",
    afterImage: "/images/project-living-after.jpg",
    featured: true,
  },
  {
    id: "2",
    slug: "hearthline-kitchen-cabinets",
    title: "Hearthline Kitchen Cabinets",
    category: "cabinets",
    categoryLabel: "Cabinets",
    location: "Custom Cabinetry",
    image: "/images/ba-cabinets-after.jpg",
    imageAlt: "Modern kitchen with custom wood and gray cabinets and brass pendants",
    description:
      "A kitchen cabinetry project that turns a stripped, unfinished shell into a warm modern cooking space with marble surfaces and custom millwork.",
    challenge:
      "The kitchen was left unfinished—exposed plumbing, stained walls, and an unused island base with no cohesive cabinetry plan.",
    solution:
      "We designed two-tone cabinetry, a wood-clad island, glass-front displays, and brass fixtures that bring warmth and function to every wall.",
    materials: [
      "Painted shaker cabinets",
      "Warm wood island",
      "Marble counters",
      "Brushed brass hardware",
    ],
    gallery: [
      { src: "/images/ba-cabinets-after.jpg", alt: "Finished custom kitchen cabinets" },
      { src: "/images/ba-cabinets-before-v5.jpg", alt: "Kitchen before cabinetry with unfinished island" },
    ],
    beforeImage: "/images/ba-cabinets-before-v5.jpg",
    afterImage: "/images/ba-cabinets-after.jpg",
    featured: true,
  },
  {
    id: "3",
    slug: "meridian-work-studio",
    title: "Meridian Work Studio",
    category: "home-offices",
    categoryLabel: "Home Offices",
    location: "Home Office Design",
    image: "/images/ba-offices-after.jpg",
    imageAlt: "Modern office corridor with glass suites and warm wood accents",
    description:
      "A workspace redesign that replaces a dated office corridor with a polished, light-filled studio environment built for focus and presence.",
    challenge:
      "The original office felt institutional—speckled carpet, flat lighting, and little architectural character.",
    solution:
      "We introduced glass partitions, warm wood accents, refined flooring, and layered lighting to create a composed, professional work atmosphere.",
    materials: [
      "Black-framed glass",
      "Warm wood millwork",
      "Stone flooring",
      "Integrated LED lighting",
    ],
    gallery: [
      { src: "/images/ba-offices-after.jpg", alt: "Finished home office corridor" },
      { src: "/images/ba-offices-before.jpg", alt: "Office hallway before renovation" },
    ],
    beforeImage: "/images/ba-offices-before.jpg",
    afterImage: "/images/ba-offices-after.jpg",
    featured: true,
  },
  {
    id: "4",
    slug: "noir-haven-bedroom",
    title: "Noir Haven Bedroom",
    category: "bedrooms",
    categoryLabel: "Bedrooms",
    location: "Bedroom Interior",
    image: "/images/ba-bedrooms-after.jpg",
    imageAlt: "Luxury bedroom with channel-tufted bed and charcoal accent wall",
    description:
      "A bedroom transformation from a worn, dated room into a calm, layered retreat with custom upholstery and a dramatic feature wall.",
    challenge:
      "The existing bedroom showed years of wear—stained finishes, mismatched bedding, and little design cohesion.",
    solution:
      "We restyled the space with a tall channel headboard, charcoal feature wall, soft textiles, and curated lighting for a restful luxury feel.",
    materials: [
      "Channel-tufted upholstery",
      "Charcoal feature wall",
      "Layered textiles",
      "Brass chandelier",
    ],
    gallery: [
      { src: "/images/ba-bedrooms-after.jpg", alt: "Finished luxury bedroom" },
      { src: "/images/ba-bedrooms-before-v2.jpg", alt: "Bedroom before renovation" },
    ],
    beforeImage: "/images/ba-bedrooms-before-v2.jpg",
    afterImage: "/images/ba-bedrooms-after.jpg",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(
  category: ProjectCategory | "all",
): Project[] {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
}
