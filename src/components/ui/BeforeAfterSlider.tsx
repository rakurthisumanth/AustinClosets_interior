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
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (!dragging.current) return;
      updateFromClientX(event.clientX);
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
  }, [updateFromClientX]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[16/11] w-full select-none overflow-hidden bg-ivory-deep touch-none",
        className,
      )}
      onPointerDown={(event) => {
        dragging.current = true;
        updateFromClientX(event.clientX);
      }}
    >
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 70vw"
        className="object-cover"
        draggable={false}
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover"
          draggable={false}
        />
      </div>

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

      <span className="absolute left-4 top-4 z-10 bg-charcoal/70 px-3 py-1.5 text-[0.62rem] tracking-[0.18em] uppercase text-cream backdrop-blur-sm">
        Before
      </span>
      <span className="absolute right-4 top-4 z-10 bg-charcoal/70 px-3 py-1.5 text-[0.62rem] tracking-[0.18em] uppercase text-cream backdrop-blur-sm">
        After
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="sr-only"
        aria-label="Before and after comparison"
      />
    </div>
  );
}
