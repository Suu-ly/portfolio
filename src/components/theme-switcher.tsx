"use client";

import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleThemeSwitch = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className="text-body hover:text-main relative isolate inline-flex size-6 cursor-pointer items-center justify-center rounded-full transition after:absolute after:-top-2 after:-left-2 after:-z-10 after:size-10 after:rounded-full after:transition hover:after:bg-zinc-200/60 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-100 dark:hover:after:bg-zinc-700/50"
    >
      <span className="sr-only">Toggle theme</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-9 1.732a8 8 0 0 0 4.001 14.928l-.001 -16a8 8 0 0 0 -4 1.072" />
      </svg>
    </button>
  );
};
