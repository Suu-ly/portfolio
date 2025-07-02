"use client";

import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [backdrop, setBackdrop] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setBackdrop(y > 96);
  });
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-between gap-4 p-4">
      <div
        role="presentation"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 h-[200%] bg-gradient-to-b from-transparent via-transparent via-30% to-transparent to-50% transition duration-1000",
          backdrop && "from-background via-background/20",
        )}
      >
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-full mask-b-from-10% mask-b-to-20% backdrop-blur-none transition-all duration-1000",
            backdrop && "backdrop-blur-sm",
          )}
        ></div>
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-full mask-t-from-90% mask-b-from-20% mask-b-to-30% backdrop-blur-none transition-all duration-1000",
            backdrop && "backdrop-blur-xs",
          )}
        ></div>
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-full mask-t-from-80% mask-t-to-90% mask-b-from-30% mask-b-to-40% backdrop-blur-none transition-all duration-1000",
            backdrop && "backdrop-blur-[2px]",
          )}
        ></div>
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-full mask-t-from-70% mask-t-to-80% mask-b-from-40% mask-b-to-50% backdrop-blur-none transition-all duration-1000",
            backdrop && "backdrop-blur-[1px]",
          )}
        ></div>
      </div>
      <Link
        href="/"
        className="hover:text-main relative rounded font-medium text-zinc-800 transition focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-100"
      >
        Lance
      </Link>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="hover:text-main relative rounded font-medium text-zinc-800 transition after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-800 after:transition-transform hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-100 dark:after:bg-zinc-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              className="hover:text-main relative rounded font-medium text-zinc-800 transition after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-800 after:transition-transform hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-100 dark:after:bg-zinc-100"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-main relative rounded font-medium text-zinc-800 transition after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-800 after:transition-transform hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-100 dark:after:bg-zinc-100"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
