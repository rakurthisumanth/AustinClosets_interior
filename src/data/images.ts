/**
 * Central image registry — all assets live in /public/images.
 * Replace files in public/images to update photography site-wide.
 */
export const images = {
  hero: {
    home: {
      src: "/images/hero-home-v5.jpg",
      alt: "Golden-hour luxury living room overlooking the water",
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
      src: "/images/hero-contact-v2.jpg",
      alt: "Modern glass home at dusk with lit patio and warm interior",
    },
  },
  intro: {
    src: "/images/intro-closet-v2.jpg",
    alt: "Warm living room with stone media wall, wood beams, and custom built-ins",
  },
  beforeAfter: {
    before: {
      src: "/images/before-v2.jpg",
      alt: "Empty dated living room before renovation",
    },
    after: {
      src: "/images/after-v2.jpg",
      alt: "Finished living room with arched shelves, wood beams, and custom furnishings",
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
    src: "/images/cta-home-v4.jpg",
    alt: "Modern glass home at dusk with lit patio and warm interior",
  },
  contactBackground: {
    src: "/images/contact-bg-v1.jpg",
    alt: "Modern glass home at dusk with lit patio and warm interior",
  },
} as const;
