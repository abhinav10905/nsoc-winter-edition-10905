import { CalendarDays } from "lucide-react";
import { Countdown } from "@/components/countdown";
import { Reveal } from "@/components/reveal";
import { season } from "@/lib/content";

export function Season() {
  return (
    <section id="season" className="section">
      <Reveal className="text-center">
        <p className="eyebrow">Upcoming season</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          <span className="frost-text">{season.name}</span>
        </h2>
        <p className="mx-auto mt-5 inline-flex items-center gap-2 text-base text-muted sm:text-lg">
          <CalendarDays className="size-5 text-primary" aria-hidden />
          {season.startLabel} to {season.endLabel}
        </p>
      </Reveal>
      <Reveal delay={0.15} className="mx-auto mt-12 max-w-3xl">
        <Countdown />
      </Reveal>
    </section>
  );
}
