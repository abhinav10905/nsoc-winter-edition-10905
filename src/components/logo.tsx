import { Snowflake } from "lucide-react";
import { site } from "@/lib/content";

/**
 * Wordmark placeholder. To use the official logo, drop `logo_light.png` /
 * `logo_dark.png` (from nsoc.in) into /public and swap the icon for <Image>.
 */
export function Logo() {
  return (
    <span className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30">
        <Snowflake className="size-5" aria-hidden />
      </span>
      {site.short}
    </span>
  );
}
