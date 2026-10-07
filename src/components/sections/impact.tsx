import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { impactNote, stats } from "@/lib/content";

export function Impact() {
  return (
    <section id="impact" className="section">
      <Reveal className="glass relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 size-80 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        />
        <p className="eyebrow relative">Track record</p>
        <div className="relative mt-6 flex flex-wrap items-start justify-center gap-x-16 gap-y-10">
          {stats.map((s) => (
            <div key={s.label} className="max-w-xs">
              <div className="frost-text font-display text-6xl font-semibold tabular-nums sm:text-8xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm text-muted sm:text-base">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="relative mx-auto mt-10 max-w-xl text-sm text-muted sm:text-base">{impactNote}</p>
      </Reveal>
    </section>
  );
}
