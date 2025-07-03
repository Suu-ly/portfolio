"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { MouseEvent, useRef } from "react";

const MAGNET_AMOUNT = 0.4;

export default function HelloThere() {
  const helloRef = useRef<HTMLDivElement>(null);
  const xRaw = useMotionValue(0);
  const x = useSpring(xRaw, {
    stiffness: 350,
  });
  const yRaw = useMotionValue(0);
  const y = useSpring(yRaw, {
    stiffness: 350,
  });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!helloRef.current) return;
    const { top, left, width, height } =
      helloRef.current.getBoundingClientRect();

    const middleX = e.clientX - (left + width / 2);
    const middleY = e.clientY - (top + height / 2);

    xRaw.set(middleX * MAGNET_AMOUNT);
    yRaw.set(middleY * MAGNET_AMOUNT);
  };

  const onMouseLeave = () => {
    xRaw.set(0);
    yRaw.set(0);
  };

  return (
    <motion.div
      ref={helloRef}
      initial={{ scale: 0 }}
      style={{ x, y }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="w-fit rounded-full bg-zinc-950 px-10 py-4 text-lg font-medium text-zinc-300 before:absolute before:top-1/2 before:left-0 before:aspect-square before:h-[200%] before:w-full before:-translate-y-1/2 before:scale-200 before:rounded-full dark:bg-zinc-900"
    >
      Hello there!
    </motion.div>
  );
}
