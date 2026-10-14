"use client";

import { useEffect } from "react";

/** Smooth-scroll to hash targets after navigation (e.g. /contact#consultation). */
export function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const attempt = (tries = 0) => {
        const el = document.getElementById(hash);
        if (!el) {
          if (tries < 12) {
            window.setTimeout(() => attempt(tries + 1), 60);
          }
          return;
        }

        const header = document.querySelector("header");
        const offset = (header?.getBoundingClientRect().height ?? 72) + 12;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: Math.max(0, top),
          behavior: tries === 0 ? "smooth" : "auto",
        });
      };

      // Wait briefly for layout / mobile menu close / images
      window.setTimeout(() => attempt(), 120);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
}
