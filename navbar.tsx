"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { joinCta, nav, sponsors } from "@/lib/content";
import { cn } from "@/lib/utils";
import { useUI } from "@/store/ui";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const open = useUI((s) => s.menuOpen);
  const setOpen = useUI((s) => s.setMenuOpen);
  // Hide the Sponsors link while that section has no data.
  const links = nav.filter((l) => l.href !== "#sponsors" || sponsors.length > 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6",
          scrolled || open ? "glass shadow-lg shadow-black/5" : "border border-transparent",
        )}
      >
        <a href="#top" aria-label="NSoC home" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-primary/10 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm" className="ml-1 hidden sm:inline-flex">
            <a href={joinCta.href} target="_blank" rel="noopener noreferrer">
              {joinCta.label}
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 flex max-w-6xl flex-col rounded-3xl p-2 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base hover:bg-primary/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href={joinCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-2xl bg-primary px-4 py-3 text-center text-base font-medium text-primary-foreground"
            >
              {joinCta.label}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
