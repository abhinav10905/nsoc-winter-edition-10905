"use client";

import { useEffect, useState } from "react";
import { season } from "@/lib/content";

const target = new Date(season.startsAt).getTime();

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return [
    { label: "Days", value: Math.floor(s / 86400) },
    { label: "Hours", value: Math.floor((s % 86400) / 3600) },
    { label: "Minutes", value: Math.floor((s % 3600) / 60) },
    { label: "Seconds", value: s % 60 },
  ];
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const live = now !== null && now >= target;

  if (live) {
    return (
      <p className="font-display text-2xl font-semibold frost-text">
        The {season.name} is live
      </p>
    );
  }

  const items = parts(now === null ? 0 : target - now);

  return (
    <div role="timer" aria-label={`Time until ${season.name} starts`} className="grid grid-cols-4 gap-2 sm:gap-4">
      {items.map((i) => (
        <div key={i.label} className="glass rounded-2xl px-2 py-4 text-center sm:px-4 sm:py-6">
          <div className="font-display text-3xl font-semibold tabular-nums sm:text-5xl">
            {now === null ? "--" : String(i.value).padStart(2, "0")}
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted sm:text-xs">
            {i.label}
          </div>
        </div>
      ))}
    </div>
  );
}
