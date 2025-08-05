"use client";

import { useMediaQuery } from "@/lib/use-media-query";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion, Transition } from "motion/react";
import { useState } from "react";

const SPRING_SETTINGS: Transition = {
  type: "spring",
  stiffness: 150,
};

export default function ContactButton() {
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const isSm = useMediaQuery("(min-width: 640px)");
  const isLg = useMediaQuery("(min-width: 1024px)");

  const active = hovering || focused;
  const iconSize = isLg ? 60 : isSm ? 40 : 32;

  return (
    <a
      href="mailto:lanceyeo13@gmail.com?subject=We%20Would%20Like%20To%20Work%20With%20You&body=What%20do%20you%20need%20help%20with%3F"
      target="_blank"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="group flex w-full flex-col gap-32 rounded-xl bg-zinc-950 p-6 pr-4 ring-zinc-900 ring-offset-4 ring-offset-zinc-900 transition-shadow duration-300 hover:ring-4 hover:ring-zinc-700 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none sm:gap-48 sm:p-8 sm:pr-6 lg:gap-64"
    >
      <p className="text-sm font-medium text-sky-500 sm:text-lg">
        Let&apos;s work together
      </p>
      <div className="relative flex items-center justify-between text-zinc-50">
        <motion.div
          role="presentation"
          animate={active ? { width: iconSize } : { width: 0 }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="relative isolate"
        >
          <motion.span
            initial={{ height: 0, width: 0 }}
            animate={
              active
                ? { height: iconSize, width: iconSize }
                : { height: 0, width: 0 }
            }
            transition={
              active
                ? SPRING_SETTINGS
                : { duration: 0.2, ease: [0.33, 1, 0.68, 1] }
            }
            className="absolute top-1/2 left-1/2 -z-10 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-zinc-900"
          >
            <motion.span
              animate={active ? { x: 0, y: 0 } : { x: -16, y: 16 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <IconArrowUpRight
                className="lg:size-8"
                aria-label="Arrow pointing up right"
              />
            </motion.span>
          </motion.span>
        </motion.div>
        <motion.p
          animate={
            active ? { marginLeft: isLg || isSm ? 16 : 8 } : { marginLeft: 0 }
          }
          transition={SPRING_SETTINGS}
          className="font-display grow text-2xl font-bold sm:text-4xl lg:text-6xl"
        >
          Contact Me
        </motion.p>
        <motion.div
          animate={
            active
              ? { height: 0, width: 0 }
              : { height: iconSize, width: iconSize }
          }
          transition={
            active
              ? { duration: 0.2, ease: [0.33, 1, 0.68, 1] }
              : SPRING_SETTINGS
          }
          className="absolute top-1/2 right-0 inline-flex size-8 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-zinc-900 sm:size-10 lg:size-15"
        >
          <motion.span
            animate={active ? { x: 16, y: -16 } : { x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <IconArrowUpRight
              className="lg:size-8"
              aria-label="Arrow pointing up right"
            />
          </motion.span>
        </motion.div>
      </div>
    </a>
  );
}
