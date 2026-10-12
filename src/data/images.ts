/**
 * Central image registry — all assets live in /public/images.
 * Replace files in public/images to update photography site-wide.
 */
export const images = {
  hero: {
    home: {
      src: "/images/hero-home.jpg",
      alt: "Sunlit living room with tailored furnishings and warm wood accents",
    },
    about: {
      src: "/images/hero-about.jpg",
      alt: "Open-plan residence with layered textures and natural light",
    },
    services: {
      src: "/images/hero-services.jpg",
      alt: "Serene bedroom with custom built-in cabinetry",
    },
    projects: {
      src: "/images/hero-projects.jpg",
      alt: "Modern luxury interior with sculptural seating and stone surfaces",
    },
    contact: {
      src: "/images/hero-contact.jpg",
      alt: "Architectural home exterior with warm evening light",
    },
  },
  intro: {
    src: "/images/intro-closet.jpg",
    alt: "Custom walk-in closet with soft lighting and organized shelving",
  },
  beforeAfter: {
    before: {
      src: "/images/before.jpg",
      alt: "Room before renovation with unused layout",
    },
    after: {
      src: "/images/after.jpg",
      alt: "Room after custom interior design with refined finishes",
    },
  },
  about: {
    studio: {
      src: "/images/about-studio.jpg",
      alt: "Design studio workspace with material samples and drawings",
    },
    philosophy: {
      src: "/images/about-philosophy.jpg",
      alt: "Quiet corner of a luxury living space with tailored seating",
    },
    team: {
      src: "/images/about-team.jpg",
      alt: "Designers reviewing finishes in a finished residence",
    },
  },
  cta: {
    src: "/images/cta.jpg",
    alt: "Inviting home foyer with natural materials and soft light",
  },
} as const;
