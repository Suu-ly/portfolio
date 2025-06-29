"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxFade({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0.2]);

  return (
    <motion.div ref={containerRef} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}
