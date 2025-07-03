"use client";

import { cn } from "@/lib/utils";
import { IconCornerDownRight } from "@tabler/icons-react";
import { motion, Variants } from "motion/react";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import ImageFadeIn from "./image-fade-in";

const animation: Variants = {
  hover: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
  release: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};
const wordVariants: Variants = {
  initial: {
    opacity: 0,
    y: -8,
  },
  hover: { opacity: 1, y: 0 },
  release: {
    opacity: 0,
    y: -8,
  },
};

export default function ProjectCard({
  slug,
  title,
  tagline,
  year,
  type,
  src,
  alt,
  className,
}: {
  slug: string;
  title: string;
  tagline: string;
  year: string | number;
  type: string;
  src: string;
  alt: string;
  className?: string;
}) {
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const taglineRef = useRef<HTMLDivElement>(null);
  const taglineWords = useMemo(() => tagline.split(/(\s+)/), [tagline]);

  const active = hovering || focused;

  return (
    <Link
      href={`/project/${slug}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={cn(
        "group relative flex flex-col gap-3 rounded-xl bg-zinc-100 p-2 transition-shadow focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none sm:rounded-2xl lg:p-4 dark:bg-black",
        className,
      )}
    >
      <div className="w-full overflow-hidden rounded-md sm:rounded-lg">
        <ImageFadeIn
          width={1928}
          height={1446}
          className="w-full transition duration-500 group-hover:scale-103"
          sizes="(max-width: 639px) 100vw, (max-width: 1535px) 50vw, 644px"
          src={src}
          alt={alt}
          loading="lazy"
        />
      </div>
      <div className="space-y-1 p-2">
        <div className="text-muted flex w-full items-center justify-between gap-4 text-sm font-medium">
          <p>{type}</p>
          <p>{year}</p>
        </div>
        <p className="font-display text-main text-2xl font-bold">{title}</p>
      </div>
      <motion.div
        initial={{
          clipPath: "inset(0 0 calc(100% - 48px) calc(100% - 48px) round 24px)",
        }}
        animate={
          active
            ? { clipPath: "inset(0 round 24px)" }
            : {
                clipPath:
                  "inset(0 0 calc(100% - 48px) calc(100% - 48px) round 24px)",
              }
        }
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="text-body absolute top-4 right-4 isolate flex max-w-[calc(100%-2rem)] justify-end rounded-3xl bg-white before:absolute before:-z-10 before:size-[150%] before:bg-white lg:top-8 lg:right-8 lg:max-w-[calc(100%-4rem)] dark:bg-black dark:before:bg-black"
      >
        <motion.div
          ref={taglineRef}
          variants={animation}
          animate={active ? "hover" : "release"}
          initial="initial"
          className="max-w-full items-center px-4 py-3.5 text-sm"
        >
          {taglineWords.map((word, index) => {
            if (word === " ")
              return (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline"
                >
                  {word}
                </motion.span>
              );
            return (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-flex"
              >
                {word}
              </motion.span>
            );
          })}
        </motion.div>
        <motion.span
          initial={{ opacity: 1, y: 0 }}
          animate={
            active
              ? { opacity: 0, y: 8 }
              : { opacity: 1, y: 0, transition: { delay: 0.3 } }
          }
          className="absolute top-3 right-3"
        >
          <IconCornerDownRight />
        </motion.span>
      </motion.div>
    </Link>
  );
}
