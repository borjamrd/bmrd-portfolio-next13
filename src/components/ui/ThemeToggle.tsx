"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { FC } from "react";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      suppressHydrationWarning
      className="active:rotate-45 text-slate-900 dark:text-slate-100 scale-100 transition-all py-2 pl-3 pr-4 rounded md:p-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
