/**
 * Single source of truth for every piece of copy and data on the page.
 *
 * Rule from the brief: use the content of the CURRENT nsoc.in home page and
 * do not invent data. Sources used here:
 *   - the organiser's task brief (PDF): about text, 3,500+ contributors,
 *     Winter Edition dates, contact email
 *   - nsoc.in <meta> description
 *   - the Netlify copy of the NSoC app (nsoc-code.netlify.app): features,
 *     four-step process, sponsors and social links. This copy is from the
 *     earlier Spring '26 season, so VERIFY these against www.nsoc.in and
 *     edit below if anything has changed. Season-specific numbers from it
 *     (sprint length, expected counts, prize pool) are deliberately NOT used.
 */

export type Stat = { value: number; suffix: string; label: string };
export type Link = { label: string; href: string };
export type Sponsor = { name: string; focus: string; href?: string; logo?: string };

export const site = {
  name: "Nexus Spring of Code",
  short: "NSoC",
  url: "https://www.nsoc.in",
  email: "connect.nsoc@gmail.com",
  description:
    "Nexus Spring of Code (NSoC) is an open source contribution program designed to help developers explore open source, collaborate on real projects, and grow their development skills. Discover beginner-friendly issues, contribute to projects, and become part of the open source community.",
} as const;

export const season = {
  name: "Winter Edition",
  startsAt: "2026-10-15T00:00:00+05:30",
  startLabel: "15 October",
  endLabel: "30 December",
} as const;

export const nav: Link[] = [
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Impact", href: "#impact" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

export const joinCta: Link = { label: "Join now", href: site.url };

export const about = {
  eyebrow: "About NSoC",
  heading: "Open source, without the guesswork",
  paragraphs: [
    "Many students want to start contributing to open source but do not know where to begin, how to contribute, or what real open source projects look like.",
    "NSoC solves this by hosting real projects, contributed by companies and by students, where participants can contribute, get their pull requests reviewed, and learn by building alongside the community.",
  ],
  facts: [
    {
      label: "What we do",
      value: "Host open source projects and guide students through real contributions.",
    },
    {
      label: "Who it is for",
      value: "Student developers and beginners who want to start open source.",
    },
  ],
} as const;

export const pillars = [
  {
    icon: "projects",
    title: "Real projects",
    body: "Project admins provide actual codebases; every closed issue ships to real users.",
  },
  {
    icon: "guidance",
    title: "Structured guidance",
    body: "Admins mentor contributors through review processes with context and feedback.",
  },
  {
    icon: "recognition",
    title: "Earned recognition",
    body: "Points awarded per merged PR, a public leaderboard, and profiles showcasing built work.",
  },
  {
    icon: "community",
    title: "A real community",
    body: "Connecting builders, maintainers, and contributors.",
  },
] as const;

export const steps = [
  { title: "Register", body: "Create your profile and select a track." },
  { title: "Explore", body: "Browse curated open issues." },
  { title: "Contribute", body: "Submit PRs and earn points per merge." },
  { title: "Win", body: "Claim prizes, swag and job referrals." },
] as const;

export const stats: Stat[] = [
  { value: 3500, suffix: "+", label: "Contributors in the previous NSoC cohort" },
];

export const impactNote =
  "Supported by multiple sponsors and community partners from different countries.";

export const sponsors: Sponsor[] = [
  { name: "Unstop", focus: "Community, Tech, Events" },
  { name: "Arkham Experience", focus: "AI, Gaming, Web3" },
  { name: "Extension Shield", focus: "Security" },
];

export const sponsorsNote = "More coming soon";

export const socials: Link[] = [
  { label: "Discord", href: "https://discord.gg/bZ47fac2jn" },
  { label: "Instagram", href: "https://www.instagram.com/nsoc.in" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nso-code" },
  { label: "YouTube", href: "https://www.youtube.com/@nsoc-in" },
  { label: "WhatsApp", href: "https://chat.whatsapp.com/Cs6bcCYUD5zLXmElzX9HOq" },
  { label: "GitHub", href: "https://github.com/deepanshu-prajapati01" },
];

export const footerLinks: Link[] = [
  { label: "nsoc.in", href: site.url },
  { label: site.email, href: `mailto:${site.email}` },
];
