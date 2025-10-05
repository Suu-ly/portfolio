"use client";

import { useMediaQuery } from "@/lib/use-media-query";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { Separator } from "./ui/separator";

const HeaderLink = ({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) => {
  const isActive = usePathname() === href;

  return (
    <Link
      href={href}
      className={cn(
        "hover:text-main text-body after:bg-body hover:after:bg-main relative inline-block w-13 rounded text-center font-medium transition-all after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-100",
        className,
        isActive && "text-main font-bold",
      )}
    >
      {label}
    </Link>
  );
};

const links = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
];
const variants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.075,
    },
  },
  exit: {
    transition: {
      staggerDirection: -1,
      staggerChildren: 0.05,
      delayChildren: 0.075,
    },
  },
};

const menuVariants: Variants = {
  exit: {
    filter: "blur(1.5rem)",
    opacity: 0,
    transform: "translateY(-2rem)",
    transition: {
      duration: 0.5,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
  animate: {
    filter: "blur(0rem)",
    opacity: 1,
    transform: "translateY(0rem)",
    transition: {
      duration: 0.75,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
};

export default function Header({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement>;
}) {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  const handleHeaderClick = () => {
    if (isDesktop || !open) return;
    setOpen(false);
  };

  return (
    <header
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 p-4",
        !isDesktop &&
          "transition-[height] duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]",
        open && !isDesktop ? "h-full" : "h-14",
      )}
      onClick={handleHeaderClick}
    >
      <div
        role="presentation"
        className="from-background via-background/30 pointer-events-none absolute inset-0 -z-10 h-full bg-gradient-to-b via-70% to-transparent"
      >
        <div className="absolute inset-x-0 top-0 h-full mask-b-from-20% mask-b-to-40% backdrop-blur-sm"></div>
        <div className="absolute inset-x-0 top-0 h-full mask-t-from-80% mask-b-from-40% mask-b-to-60% backdrop-blur-xs"></div>
        <div className="absolute inset-x-0 top-0 h-full mask-t-from-60% mask-t-to-80% mask-b-from-60% mask-b-to-80% backdrop-blur-[2px]"></div>
        <div className="absolute inset-x-0 top-0 h-full mask-t-from-40% mask-t-to-60% mask-b-from-80% backdrop-blur-[1px]"></div>
      </div>
      <div className="flex justify-between gap-4">
        <Link
          href="/"
          className="hover:text-main relative rounded font-medium text-zinc-800 transition focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-100"
        >
          Lance
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden sm:block">
            <ul className="flex gap-6">
              {links.map((navItem) => (
                <li key={navItem.href}>
                  <HeaderLink {...navItem} />
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="hover:text-main text-body relative inline-block w-13 cursor-pointer rounded text-center font-medium transition-all after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-800 after:transition-transform hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none sm:hidden dark:text-zinc-100 dark:after:bg-zinc-100"
          >
            Menu
          </button>
          <Separator
            className="my-1.5 h-auto self-stretch"
            orientation="vertical"
          />
          <ThemeSwitcher />
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <div className="text-main pt-12 sm:hidden">
            <nav>
              <motion.ul
                className="flex flex-col gap-12"
                variants={variants}
                animate="animate"
                initial="exit"
                exit="exit"
              >
                {links.map((navItem) => (
                  <motion.li key={navItem.href} variants={menuVariants}>
                    <HeaderLink
                      {...navItem}
                      className={`w-auto text-4xl after:h-0.5`}
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
