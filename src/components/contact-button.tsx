"use client";

import { useMediaQuery } from "@/lib/use-media-query";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function ContactButton() {
  const [hovering, setHovering] = useState(false);
  const isSm = useMediaQuery("(min-width: 640px)");
  const isLg = useMediaQuery("(min-width: 1024px)");

  const iconSize = isLg ? 60 : isSm ? 40 : 32;

  return (
    <a
      href="mailto:lanceyeo13@gmail.commailto:lanceyeo13@gmail.com?subject=We%20Would%20Like%20To%20Work%20With%20You&body=What%20do%20you%20need%20help%20with%3F"
      target="_blank"
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
      className="group flex w-full flex-col gap-32 rounded-xl bg-zinc-950 p-6 pr-4 ring-zinc-900 ring-offset-4 ring-offset-zinc-900 transition-shadow duration-300 hover:ring-4 hover:ring-zinc-700 sm:gap-48 sm:p-8 sm:pr-6 lg:gap-64"
    >
      <p className="text-sm font-medium text-sky-500 sm:text-lg">
        Let&apos;s work together
      </p>
      <div className="flex items-center justify-between text-zinc-50">
        <motion.div
          role="presentation"
          animate={hovering ? { width: iconSize } : { width: 0 }}
          className="relative isolate"
        >
          <motion.span
            animate={
              hovering
                ? { height: iconSize, width: iconSize }
                : { height: 0, width: 0 }
            }
            transition={{ type: "spring", stiffness: 150 }}
            className="absolute top-1/2 left-1/2 -z-10 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-zinc-900"
          >
            <motion.span
              animate={hovering ? { x: 0, y: 0 } : { x: -16, y: 16 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <IconArrowUpRight className="lg:size-8" />
            </motion.span>
          </motion.span>
        </motion.div>
        <motion.p
          animate={hovering ? { marginLeft: 16 } : { marginLeft: 0 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="font-display grow text-2xl font-bold sm:text-4xl lg:text-6xl"
        >
          Contact Me
        </motion.p>
        <motion.div
          role="presentation"
          animate={hovering ? { width: 0 } : { width: iconSize }}
          className="relative isolate"
        >
          <motion.span
            animate={
              hovering
                ? { height: 0, width: 0 }
                : { height: iconSize, width: iconSize }
            }
            transition={{ type: "spring", stiffness: 150 }}
            className="absolute top-1/2 left-1/2 -z-10 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-zinc-900"
          >
            <motion.span
              animate={hovering ? { x: 16, y: -16 } : { x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <IconArrowUpRight className="lg:size-8" />
            </motion.span>
          </motion.span>
        </motion.div>
      </div>
    </a>
  );
}
