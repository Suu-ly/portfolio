"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import ImageFadeIn from "./image-fade-in";

export interface NextProjectProps {
  src: string;
  alt: string;
  title: string;
  year: string | number;
  slug: string;
}

const animation: Variants = {
  base: {
    transition: {
      staggerChildren: 0.02,
    },
  },
  raised: {
    transition: {
      staggerChildren: 0.02,
    },
  },
  below: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const wordVariants: Variants = {
  raised: { y: "-110%" },
  below: { y: "110%" },
  base: {
    y: 0,
    transition: {
      ease: [0.76, 0, 0.24, 1],
      duration: 0.5,
    },
  },
};

export default function NextProject({
  src,
  alt,
  title,
  year,
  slug,
}: NextProjectProps) {
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const active = hovering || focused;
  return (
    <Link
      href={`/project/${slug}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="group flex flex-col items-center gap-4 overflow-hidden rounded-xl bg-zinc-950 p-2 ring-zinc-900 ring-offset-4 ring-offset-zinc-900 transition-shadow duration-300 hover:ring-4 hover:ring-zinc-700 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none sm:flex-row sm:rounded-2xl lg:p-4"
    >
      <div className="relative flex w-full flex-col p-3 text-center sm:gap-1 lg:gap-3">
        <div
          className="absolute inset-0 flex items-center justify-center"
          role="presentation"
        >
          <span className="[clip-path:inset(15%_0%_-15%_0%)]">
            <motion.span
              className="font-display inline-block text-2xl font-bold text-zinc-50 sm:text-4xl lg:text-6xl"
              variants={wordVariants}
              initial="below"
              animate={active ? "base" : "below"}
            >
              View
            </motion.span>
          </span>
        </div>
        <div className="[clip-path:inset(15%_0%_-15%_0%)]">
          <motion.p
            className="inline-block text-sm font-medium text-sky-500 lg:text-2xl"
            variants={wordVariants}
            initial="base"
            animate={active ? "raised" : "base"}
          >
            Next
          </motion.p>
        </div>
        <motion.h3
          className="font-display text-2xl font-bold text-zinc-50 sm:text-4xl 2xl:text-6xl"
          variants={animation}
          initial="base"
          animate={active ? "raised" : "base"}
        >
          {title.split(" ").map((word, index) => (
            <span key={index} className="[clip-path:inset(15%_0%_-15%_0%)]">
              {index > 0 ? " " : null}
              <motion.span variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h3>
        <p className="hidden text-sm font-medium text-zinc-400 [clip-path:inset(15%_0%_-15%_0%)] sm:inline lg:text-2xl">
          <motion.span
            variants={wordVariants}
            initial="base"
            animate={active ? "raised" : "base"}
            className="inline-block"
          >
            {year}
          </motion.span>
        </p>
      </div>
      <div className="w-full overflow-hidden rounded-md sm:rounded-lg">
        <ImageFadeIn
          width={1928}
          height={1446}
          className="w-full transition duration-500 group-hover:scale-103"
          sizes="(max-width: 639px) 100vw, (max-width: 1535px) 50vw, 644px"
          src={src}
          alt={alt}
        />
      </div>
    </Link>
  );
}
