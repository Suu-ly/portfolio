"use client";

import { useLenis } from "lenis/react";
import { animate } from "motion/react";
import { TransitionRouter } from "next-transition-router";
import { useRef } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const Lenis = useLenis();
  const wrapperRef = useRef<HTMLDivElement>(null!);

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        Lenis?.stop();
        animate(
          wrapperRef.current,
          { opacity: [1, 0] },
          { duration: 0.15, onComplete: next },
        );
      }}
      enter={(next) => {
        Lenis?.start();
        animate(
          wrapperRef.current,
          { opacity: [0, 1] },
          { duration: 0.3, onComplete: next },
        );
      }}
    >
      <div ref={wrapperRef}>{children}</div>
    </TransitionRouter>
  );
}
