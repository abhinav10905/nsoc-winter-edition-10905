import { Logo } from "@/components/logo";
import { footerLinks, season, site, socials } from "@/lib/content";

export function Footer() {
  const links = [...footerLinks, ...socials];
  return (
    <footer className="relative mt-10 border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-sm text-sm text-muted">
            {site.name} · {season.name}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-muted transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
