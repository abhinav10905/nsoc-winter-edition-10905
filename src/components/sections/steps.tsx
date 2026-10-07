import { Reveal } from "@/components/reveal";
import { steps } from "@/lib/content";

export function Steps() {
  return (
    <section id="process" className="section">
      <Reveal className="text-center">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          Four steps to your first merge
        </h2>
      </Reveal>
      <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-9 -z-10 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
        />
        {steps.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 0.1} className="h-full">
              <div className="glass h-full rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/25">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
