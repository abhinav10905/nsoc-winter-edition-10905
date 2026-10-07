import { FolderGit2, GitPullRequest, Trophy, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { about, pillars } from "@/lib/content";

const icons = {
  projects: FolderGit2,
  guidance: GitPullRequest,
  recognition: Trophy,
  community: Users,
} as const;

export function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <p className="eyebrow">{about.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {about.heading}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <dl className="grid gap-3 pt-3 sm:grid-cols-2">
            {about.facts.map((f) => (
              <div key={f.label} className="glass rounded-2xl p-5">
                <dt className="font-mono text-xs uppercase tracking-widest text-primary">{f.label}</dt>
                <dd className="mt-2 text-sm text-foreground">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <Reveal key={p.title} delay={0.1 + i * 0.08}>
                <article className="glass group h-full rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
