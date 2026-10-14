"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const IDLE_MS = 4500;
const HIDE_ON = ["/contact"];

type Point = { x: number; y: number };

export function ConsultGuide() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [tip, setTip] = useState<Point>({ x: 0, y: 0 });

  const hide = useCallback(() => {
    setVisible(false);
    document
      .querySelectorAll("[data-consult-cta]")
      .forEach((el) => el.classList.remove("consult-cta-pulse"));
  }, []);

  const showNearCta = useCallback(() => {
    const cta = document.querySelector<HTMLElement>("[data-consult-cta]");
    if (!cta) {
      setVisible(false);
      return;
    }

    const rect = cta.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
      setVisible(false);
      return;
    }

    setTip({
      x: rect.left + rect.width / 2,
      y: rect.bottom + 18,
    });
    setVisible(true);
    cta.classList.add("consult-cta-pulse");
  }, []);

  useEffect(() => {
    if (HIDE_ON.some((route) => pathname.startsWith(route))) {
      hide();
      return;
    }

    const desktop = window.matchMedia("(min-width: 1024px)");
    if (!desktop.matches) {
      hide();
      return;
    }

    let timer: ReturnType<typeof setTimeout> | null = null;

    const arm = () => {
      if (!desktop.matches) {
        hide();
        return;
      }
      hide();
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        showNearCta();
      }, IDLE_MS);
    };

    const onBreakpoint = () => {
      if (!desktop.matches) hide();
      else arm();
    };

    arm();
    window.addEventListener("mousemove", arm, { passive: true });
    window.addEventListener("mousedown", arm, { passive: true });
    window.addEventListener("scroll", arm, { passive: true });
    window.addEventListener("keydown", arm);
    window.addEventListener("touchstart", arm, { passive: true });
    window.addEventListener("resize", hide);
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      if (timer) clearTimeout(timer);
      hide();
      window.removeEventListener("mousemove", arm);
      window.removeEventListener("mousedown", arm);
      window.removeEventListener("scroll", arm);
      window.removeEventListener("keydown", arm);
      window.removeEventListener("touchstart", arm);
      window.removeEventListener("resize", hide);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [pathname, hide, showNearCta]);

  if (!visible) return null;

  return (
    <div
      className="consult-guide pointer-events-none fixed inset-0 z-[55]"
      aria-hidden
    >
      <div
        className="consult-guide-beacon"
        style={{ left: tip.x, top: tip.y }}
      >
        <span className="consult-orbit consult-orbit-a" />
        <span className="consult-orbit consult-orbit-b" />
        <span className="consult-spark consult-spark-1" />
        <span className="consult-spark consult-spark-2" />
        <span className="consult-spark consult-spark-3" />

        <div className="consult-guide-arrow">
          <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden>
            <circle cx="16" cy="16" r="15" className="consult-guide-ring" />
            <path
              d="M16 24V12M11 17l5-5 5 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="consult-guide-label">Book a Consultation</span>
        </div>
      </div>
    </div>
  );
}
