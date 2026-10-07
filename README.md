# DELOYEMENT LINK
https://nsoc-winter-edition-10905-ayh4.vercel.app/

# NSoC · Winter Edition

A redesigned landing page for [Nexus Spring of Code](https://www.nsoc.in) with a **Winter Edition** theme, built for the NSoC Developer Selection Task.

**Live demo:** _add your Vercel/Netlify link here_
**Author:** Abhinav Jain · [GitHub](https://github.com/abhinav10905)

---

## Highlights

- **Winter theme in both modes**
  - Light: frosted ice-blue daylight, white glass cards, pale mountain ridges.
  - Dark: midnight sky, drifting aurora, twinkling stars, deep silhouetted ridges and pines.
  - NSoC orange is kept as the single warm accent against the ice palette.
- **Motion**
  - GSAP timeline for the staged hero entrance.
  - Motion (Framer Motion) for scroll reveals, parallax mountain layers, count-up stat and the mobile menu.
  - Live countdown to the Winter Edition start (15 October 2026, IST).
  - Ambient canvas snowfall with an on/off toggle.
  - Snow-coloured `canvas-confetti` burst on contact form submit.
- **Responsive** from small phones to wide desktops, with a collapsible mobile menu.
- **Dark / light mode** via `next-themes`, following the system setting by default and switchable from the navbar.
- **Accessible**: semantic landmarks, skip link, visible focus rings, labelled and announced form errors, `aria-pressed` / `aria-expanded` states, and full `prefers-reduced-motion` support (no snowfall, confetti or entrance animation).
- **Fast**: statically prerendered, fonts self-hosted (no render-blocking font request), the hero is pure SVG/CSS with no image payload, and the snow canvas is DPR-capped, scales with viewport area and pauses on hidden tabs.

## Page sections

Hero · About (what we do, who it is for, four feature cards) · How it works (four steps) · Track record (animated 3,500+ stat) · Winter Edition dates with countdown · Sponsors & partners · Contact form · Footer with social links.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript 5 |
| Runtime / package manager | Bun |
| Styling & UI | Tailwind CSS v4, Radix UI (`radix-ui`), Lucide React, next-themes, tailwind-merge, clsx, class-variance-authority |
| Animation | Motion v12, GSAP, canvas-confetti, tw-animate-css |
| State | Zustand (snow toggle, mobile menu) |
| Forms & validation | React Hook Form, Zod (`@hookform/resolvers`) |
| Feedback | Sonner |
| Code quality | ESLint 9, Conventional Commits (Commitizen via `bun commit`), commitlint |

Installed but not used on this page, because it has nothing to fetch or tabulate: Axios.

## Getting started

Requires [Bun](https://bun.sh) 1.x.

```bash
bun install
bun dev            # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `bun dev` | Start the dev server |
| `bun run build` | Production build |
| `bun start` | Serve the production build |
| `bun run lint` | ESLint |
| `bun run typecheck` | `tsc --noEmit` |
| `bun commit` | Guided Conventional Commit (Commitizen) |

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, metadata, ThemeProvider, Toaster
│   ├── page.tsx              # page composition
│   └── globals.css           # Winter design tokens (light + dark), utilities
├── components/
│   ├── sections/             # hero, about, steps, impact, season,
│   │                         # sponsors, contact, footer
│   ├── ui/                   # button (CVA), sonner wrapper
│   ├── navbar.tsx            # glass navbar + mobile menu
│   ├── snow-canvas.tsx       # snowfall
│   ├── countdown.tsx         # season countdown
│   ├── count-up.tsx          # animated stat
│   ├── reveal.tsx            # scroll-reveal wrapper
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx      # theme + snow toggles
│   └── logo.tsx
├── lib/
│   ├── content.ts            # all copy and data (single source of truth)
│   └── utils.ts              # cn()
└── store/
    └── ui.ts                 # Zustand store
```

## Editing content

Everything shown on the page lives in `src/lib/content.ts`: copy, stats, features, steps, sponsors, social links and dates. Components only render it, so updating the site never means touching layout code. Sections with empty data (for example, sponsors) hide themselves.

### Content sources

The brief requires using the current nsoc.in content without inventing data. nsoc.in is client-rendered and returns only a loading screen to non-browser fetches, so content was assembled from:

1. the task brief (about text, 3,500+ contributors, Winter Edition dates, contact email)
2. nsoc.in's meta description
3. the Netlify copy of the NSoC app (features, four-step process, sponsors, social links), which is from the earlier Spring '26 season

Season-specific figures from that copy (sprint length, expected counts, prize pool) are intentionally not used. **Check `content.ts` against www.nsoc.in and update anything that has changed.** The "Join now" button points to https://www.nsoc.in; change `joinCta` if there is a direct sign-up URL.

### Logo

The navbar and footer use a snowflake wordmark placeholder. To use the official logo, add `logo_light.png` and `logo_dark.png` to `public/` and swap the icon in `src/components/logo.tsx` for a `next/image`.

## Deployment

1. Push this repository to GitHub (public).
2. Import it on [Vercel](https://vercel.com) (or Netlify). Bun is detected from `bun.lock`; no environment variables are required.
3. Deploy and add the live URL at the top of this README.

## Commit convention

Commits follow [Conventional Commits](https://www.conventionalcommits.org). Use `bun commit` for a guided prompt, for example `feat: add sponsors section` or `fix: correct countdown timezone`.

## Browser support

Current versions of Chrome, Edge, Firefox and Safari on desktop, Android and iOS. Frosted-glass blur and some colour effects degrade gracefully on older browsers.

## Acknowledgements

Built for the Nexus Spring of Code developer selection task. NSoC name, program content and sponsor names belong to their respective owners.
