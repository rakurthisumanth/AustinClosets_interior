"use client";

import { useEffect } from "react";

/** Smooth-scroll to hash targets after navigation (e.g. /contact#consultation). */
export function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const el = document.getElementById(hash);
      if (!el) return;
      // Wait a tick for layout/images
      window.setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
}
