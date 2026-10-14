"use client";

const motifs = [
  { label: "Closets", icon: "hanger", side: "left", top: "6%", delay: "0s" },
  { label: "Kitchen", icon: "kitchen", side: "right", top: "10%", delay: "0.8s" },
  { label: "Cabinets", icon: "cabinet", side: "left", top: "28%", delay: "1.4s" },
  { label: "Living", icon: "sofa", side: "right", top: "32%", delay: "0.4s" },
  { label: "Bedrooms", icon: "bed", side: "left", top: "50%", delay: "1.9s" },
  { label: "Offices", icon: "desk", side: "right", top: "54%", delay: "1.1s" },
  { label: "Storage", icon: "closet", side: "left", top: "72%", delay: "0.6s" },
  {
    label: "Interior Design",
    icon: "home",
    side: "right",
    top: "76%",
    delay: "2.2s",
  },
] as const;

function MotifIcon({ type }: { type: (typeof motifs)[number]["icon"] }) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    className: "h-10 w-10",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "hanger":
      return (
        <svg {...common}>
          <path d="M24 10a4 4 0 0 1 4 4c0 2-4 4-4 6" />
          <path d="M8 28l16-8 16 8" />
          <path d="M12 28h24" />
        </svg>
      );
    case "kitchen":
      return (
        <svg {...common}>
          <rect x="10" y="14" width="28" height="24" rx="1.5" />
          <path d="M16 14v24M24 14v10M32 14v24" />
          <circle cx="24" cy="30" r="3" />
        </svg>
      );
    case "cabinet":
      return (
        <svg {...common}>
          <rect x="9" y="8" width="30" height="32" rx="1.5" />
          <path d="M24 8v32M9 18h30M9 28h30" />
          <circle cx="20" cy="23" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="28" cy="23" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "sofa":
      return (
        <svg {...common}>
          <path d="M10 28v-4a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v4" />
          <path d="M8 28h32v6H8z" />
          <path d="M14 20v-2a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2" />
          <path d="M12 34v2M36 34v2" />
        </svg>
      );
    case "bed":
      return (
        <svg {...common}>
          <path d="M8 28h32v6H8z" />
          <path d="M10 28v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6" />
          <path d="M8 34v2M40 34v2" />
          <path d="M12 18h8" />
        </svg>
      );
    case "desk":
      return (
        <svg {...common}>
          <path d="M8 22h32" />
          <path d="M12 22v14M36 22v14" />
          <path d="M18 22v6h12v-6" />
          <circle cx="24" cy="16" r="3" />
        </svg>
      );
    case "closet":
      return (
        <svg {...common}>
          <rect x="10" y="8" width="28" height="32" rx="1.5" />
          <path d="M24 8v32" />
          <path d="M16 16h4M28 16h4M16 22h6M28 22h6" />
          <circle cx="20" cy="28" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="28" cy="28" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="M8 22L24 10l16 12" />
          <path d="M12 20v16h24V20" />
          <path d="M20 36V26h8v10" />
        </svg>
      );
  }
}

export function ProjectsAtmosphere() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block"
      aria-hidden
    >
      <div className="projects-rail projects-rail-left" />
      <div className="projects-rail projects-rail-right" />

      {motifs.map((motif) => (
        <div
          key={`${motif.side}-${motif.label}`}
          className={`projects-float absolute ${
            motif.side === "left" ? "left-3 2xl:left-7" : "right-3 2xl:right-7"
          }`}
          style={{ top: motif.top, animationDelay: motif.delay }}
        >
          <div className="projects-float-card pointer-events-auto cursor-default">
            <MotifIcon type={motif.icon} />
            <span>{motif.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
