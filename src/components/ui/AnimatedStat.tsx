"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  label: string;
}

export function AnimatedStat({ value, suffix = "+", label }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (prefersReduced) {
            setDisplay(value);
          } else {
            setStarted(true);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!started) return;

    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <div ref={ref} className="px-3 py-8 text-center sm:px-6 sm:py-11">
      <p className="font-display text-[2.5rem] leading-none tracking-[-0.02em] text-charcoal sm:text-5xl md:text-6xl">
        {display}
        <span className="text-bronze">{suffix}</span>
      </p>
      <p className="mt-3 text-[0.58rem] font-medium tracking-[0.14em] uppercase text-stone sm:mt-3.5 sm:text-[0.68rem] sm:tracking-[0.18em]">
        {label}
      </p>
    </div>
  );
}
