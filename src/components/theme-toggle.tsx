"use client";

import { useSyncExternalStore } from "react";
import { Moon, Snowflake, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useUI } from "@/store/ui";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const snow = useUI((s) => s.snow);
  const toggleSnow = useUI((s) => s.toggleSnow);
  // Avoids hydration mismatch: theme is only known on the client.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const dark = mounted && resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSnow}
        aria-pressed={snow}
        aria-label={snow ? "Turn snowfall off" : "Turn snowfall on"}
        title="Toggle snowfall"
      >
        <Snowflake className={snow ? "text-primary" : "opacity-50"} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(dark ? "light" : "dark")}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
}
