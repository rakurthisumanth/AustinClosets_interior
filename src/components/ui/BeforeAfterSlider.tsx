"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
  /** horizontal = left/right (desktop), vertical = up/down (mobile) */
  orientation?: "horizontal" | "vertical";
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
  orientation = "horizontal",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const isVertical = orientation === "vertical";
  // Start with Before fully visible, then ease so After also shows in the opening view.
  const [position, setPosition] = useState(isVertical ? 100 : 50);

  const updateFromPointer = useCallback(
    (clientX: number, clientY: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const next = isVertical
        ? ((clientY - rect.top) / rect.height) * 100
        : ((clientX - rect.left) / rect.width) * 100;
      setPosition(Math.min(100, Math.max(0, next)));
    },
    [isVertical],
  );

  useEffect(() => {
    if (!isVertical) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setPosition(50);
      return;
    }

    // Before first, then reveal After so both appear in the starting display.
    const start = performance.now();
    const from = 100;
    const to = 50;
    const duration = 900;
    let frame = 0;

    const tick = (now: number) => {
      if (dragging.current) return;
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setPosition(from + (to - from) * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isVertical, beforeSrc, afterSrc]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (!dragging.current) return;
      updateFromPointer(event.clientX, event.clientY);
    };
    const onUp = () => {
      dragging.current = false;
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [updateFromPointer]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full select-none overflow-hidden bg-ivory-deep touch-none",
        isVertical
          ? "h-full min-h-[70svh]"
          : "aspect-[16/10] max-h-[34rem] md:aspect-[16/9] md:max-h-[32rem]",
        className,
      )}
      onPointerDown={(event) => {
        dragging.current = true;
        (event.currentTarget as HTMLElement).setPointerCapture?.(event.pointerId);
        updateFromPointer(event.clientX, event.clientY);
      }}
    >
      {/* After is the base layer */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="100vw"
        className={cn(
          "object-cover",
          isVertical ? "object-[center_55%]" : "object-center",
        )}
        draggable={false}
        priority
      />

      {/* Before reveals from top (vertical) or from left (horizontal) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: isVertical
            ? `inset(0 0 ${100 - position}% 0)`
            : `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="100vw"
          className={cn(
            "object-cover",
            isVertical ? "object-[center_60%]" : "object-center",
          )}
          draggable={false}
          priority
        />
      </div>

      {/* Divider + drag handle */}
      {isVertical ? (
        <div
          className="absolute inset-x-0 z-10 h-px bg-cream"
          style={{ top: `${position}%` }}
        >
          <button
            type="button"
            aria-label="Drag up and down to compare before and after"
            className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/80 bg-charcoal/85 text-cream backdrop-blur-sm"
            style={{ touchAction: "none" }}
          >
            <span aria-hidden className="text-sm tracking-widest">
              ↕
            </span>
          </button>
        </div>
      ) : (
        <div
          className="absolute inset-y-0 z-10 w-px bg-cream"
          style={{ left: `${position}%` }}
        >
          <button
            type="button"
            aria-label="Drag to compare before and after"
            className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/80 bg-charcoal/80 text-cream backdrop-blur-sm"
            style={{ touchAction: "none" }}
          >
            <span aria-hidden className="text-xs tracking-widest">
              ↔
            </span>
          </button>
        </div>
      )}

      <span className="absolute left-4 top-4 z-10 bg-charcoal/70 px-3 py-1.5 text-[0.62rem] tracking-[0.18em] uppercase text-cream backdrop-blur-sm">
        Before
      </span>
      {isVertical ? (
        <span
          className="absolute left-4 z-10 bg-charcoal/70 px-3 py-1.5 text-[0.62rem] tracking-[0.18em] uppercase text-cream backdrop-blur-sm"
          style={{ top: `calc(${position}% + 0.75rem)` }}
        >
          After
        </span>
      ) : (
        <span className="absolute right-4 top-4 z-10 bg-charcoal/70 px-3 py-1.5 text-[0.62rem] tracking-[0.18em] uppercase text-cream backdrop-blur-sm">
          After
        </span>
      )}

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="sr-only"
        aria-label="Before and after comparison"
        aria-orientation={isVertical ? "vertical" : "horizontal"}
      />
    </div>
  );
}
