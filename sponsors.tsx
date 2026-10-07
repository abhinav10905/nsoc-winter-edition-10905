import { Reveal } from "@/components/reveal";
import { sponsors, sponsorsNote } from "@/lib/content";

/** Renders nothing if `sponsors` in lib/content.ts is empty. */
export function Sponsors() {
  if (sponsors.length === 0) return null;
  return (
    <section id="sponsors" className="section">
      <Reveal className="text-center">
        <p className="eyebrow">Sponsors &amp; partners</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          Backed by the community
        </h2>
      </Reveal>
      <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {sponsors.map((s, i) => {
          const body = (
            <>
              {s.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.logo} alt={s.name} loading="lazy" className="max-h-12 object-contain" />
              ) : (
                <span className="font-display text-xl font-semibold">{s.name}</span>
              )}
              <span className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">{s.focus}</span>
            </>
          );
          const cls =
            "glass flex h-full min-h-32 flex-col items-center justify-center rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10";
          return (
            <li key={s.name}>
              <Reveal delay={i * 0.08} className="h-full">
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {body}
                  </a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </Reveal>
            </li>
          );
        })}
      </ul>
      <p className="mt-8 text-center text-sm text-muted">{sponsorsNote}</p>
    </section>
  );
}
