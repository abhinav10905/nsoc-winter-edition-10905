"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useUI } from "@/store/ui";

type Flake = { x: number; y: number; r: number; vy: number; drift: number; phase: number };

/**
 * Fixed, pointer-transparent snowfall. Cheap by design: one canvas, DPR capped,
 * flake count scales with viewport area, pauses when the tab is hidden and is
 * skipped entirely for users who prefer reduced motion.
 */
export function SnowCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const enabled = useUI((s) => s.snow);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const color = resolvedTheme === "dark" ? "255,255,255" : "120,170,215";
    let w = 0;
    let h = 0;
    let flakes: Flake[] = [];
    let raf = 0;
    let t = 0;

    const make = (initial: boolean): Flake => ({
      x: Math.random() * w,
      y: initial ? Math.random() * h : -10,
      r: Math.random() * 2.2 + 0.6,
      vy: Math.random() * 0.7 + 0.25,
      drift: Math.random() * 0.6 + 0.2,
      phase: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(140, Math.round((w * h) / 14000));
      flakes = Array.from({ length: count }, () => make(true));
    };

    const frame = () => {
      t += 0.01;
      ctx.clearRect(0, 0, w, h);
      for (const f of flakes) {
        f.y += f.vy;
        f.x += Math.sin(t + f.phase) * f.drift;
        if (f.y > h + 10) Object.assign(f, make(false));
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color},${0.35 + f.r / 5})`;
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(frame);
    };

    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [enabled, resolvedTheme]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40"
    />
  );
}
