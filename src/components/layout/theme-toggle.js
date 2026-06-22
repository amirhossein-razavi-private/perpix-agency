"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@/components/icon";

export function ThemeToggle({ label = "Toggle theme" }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-primary-400 hover:text-primary-500 transition-all"
    >
      {!mounted ? (
        <span className="w-3.5 h-3.5" />
      ) : (
        <Icon
          name={isDark ? "sun" : "moon"}
          className="text-xs"
        />
      )}
    </button>
  );
}

export default ThemeToggle;
