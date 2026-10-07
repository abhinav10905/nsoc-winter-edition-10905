"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { joinCta, season, site } from "@/lib/content";

// Deterministic "random" so server and client markup match (no hydration drift).
const stars = Array.from({ length: 36 }, (_, i) => {
  const a = Math.sin(i * 12.9898) * 43758.5453;
  const b = Math.sin(i * 78.233) * 12543.1234;
  return {
    left: `${(a - Math.floor(a)) * 100}%`,
    top: `${(b - Math.floor(b)) * 55}%`,
    delay: `${((a * b) % 3.5).toFixed(2).replace("-", "")}s`,
  };
});

const trees = [
  { x: 14, h: 62 },
  { x: 38, h: 78 },
  { x: 62, h: 54 },
  { x: 86, h: 70 },
  { x: 106, h: 48 },
];

function Pines({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden fill="currentColor">
      {trees.map(({ x, h }) => (
        <g key={x}>
          <rect x={x - 1.5} y={90 - 8} width="3" height="8" />
          <path d={`M${x} ${90 - h} L${x + 11} ${90 - h * 0.45} H${x - 11} Z`} />
          <path d={`M${x} ${90 - h * 0.78} L${x + 14} ${90 - 8} H${x - 14} Z`} />
        </g>
      ))}
    </svg>
  );
}

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const far = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const mid = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const near = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const copy = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-hero='badge']", { y: 20, opacity: 0, duration: 0.8 })
        .from("[data-hero='word']", { yPercent: 110, opacity: 0, rotate: 4, duration: 1, stagger: 0.09 }, "-=0.45")
        .from("[data-hero='sub']", { y: 24, opacity: 0, duration: 0.9 }, "-=0.55")
        .from("[data-hero='cta']", { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.55");
      gsap.to("[data-hero='flake']", {
        rotate: 360,
        duration: 24,
        ease: "none",
        repeat: -1,
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const words = site.name.split(" ");

  return (
    <section id="top" ref={root} className="relative isolate flex min-h-dvh items-center overflow-hidden">
      {/* sky */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#dbeefb] via-[#eaf5fc] to-background dark:from-[#030816] dark:via-[#071428] dark:to-background" aria-hidden />
      <div className="aurora -z-10" aria-hidden />
      <div className="absolute inset-0 -z-10" aria-hidden>
        {stars.map((s, i) => (
          <span key={i} className="star" style={{ left: s.left, top: s.top, animationDelay: s.delay }} />
        ))}
      </div>

      {/* parallax ridges */}
      <motion.svg style={{ y: far }} viewBox="0 0 1440 400" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 -z-10 h-[46%] w-full" aria-hidden>
        <path fill="var(--ridge-far)" d="M0 220 L140 130 L250 200 L420 70 L560 190 L700 110 L860 210 L1010 90 L1170 190 L1300 120 L1440 200 V400 H0Z" />
      </motion.svg>
      <motion.svg style={{ y: mid }} viewBox="0 0 1440 400" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 -z-10 h-[36%] w-full" aria-hidden>
        <path fill="var(--ridge-mid)" d="M0 260 L120 190 L260 250 L400 150 L560 260 L720 170 L880 270 L1040 160 L1200 250 L1340 190 L1440 250 V400 H0Z" />
      </motion.svg>
      <motion.svg style={{ y: near }} viewBox="0 0 1440 300" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 -z-10 h-[24%] w-full" aria-hidden>
        <path fill="var(--ridge-near)" d="M0 170 C180 110 320 200 520 150 C720 100 860 190 1060 140 C1230 100 1340 150 1440 130 V300 H0Z" />
      </motion.svg>
      <Pines className="absolute -bottom-1 left-0 -z-10 h-32 w-56 text-[var(--pine)] sm:h-48 sm:w-80" />
      <Pines className="absolute -bottom-1 right-0 -z-10 h-28 w-48 -scale-x-100 text-[var(--pine)] sm:h-44 sm:w-72" />

      <motion.div style={{ opacity: copy }} className="mx-auto w-full max-w-6xl px-5 pb-28 pt-32 sm:px-8">
        <div data-hero="badge" className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
          <Snowflake data-hero="flake" className="size-4 text-primary" aria-hidden />
          <span className="font-mono text-xs uppercase tracking-[0.16em]">
            {season.name} · {season.startLabel} – {season.endLabel}
          </span>
        </div>

        <h1 className="mt-7 max-w-4xl font-display text-[clamp(2.6rem,9vw,6.5rem)] font-semibold leading-[0.98] tracking-tight">
          {words.map((w, i) => (
            <span key={w + i} className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] align-bottom">
              <span data-hero="word" className={i >= 2 ? "frost-text inline-block" : "inline-block"}>
                {w}
              </span>
            </span>
          ))}
        </h1>

        <p data-hero="sub" className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {site.description}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild data-hero="cta" size="default" className="h-12 px-7">
            <a href={joinCta.href} target="_blank" rel="noopener noreferrer">
              {joinCta.label} <ArrowRight />
            </a>
          </Button>
          <Button asChild data-hero="cta" variant="glass" className="h-12 px-7">
            <a href="#about">
              Explore the program
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
