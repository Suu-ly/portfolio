"use client";

import Header from "@/components/header";
import { useLenis } from "lenis/react";
import { animate } from "motion/react";
import { ThemeProvider } from "next-themes";
import { TransitionRouter } from "next-transition-router";
import { useRef } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const Lenis = useLenis();
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const headerRef = useRef<HTMLDivElement>(null!);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TransitionRouter
        auto
        leave={(next) => {
          const node = wrapperRef.current;
          const scrollbarWidth = window.innerWidth - node.clientWidth;
          Lenis?.stop();
          node.style.paddingRight = `${scrollbarWidth}px`;
          headerRef.current.style.marginRight = `${scrollbarWidth}px`;
          animate(
            node,
            { opacity: [1, 0] },
            { duration: 0.15, onComplete: next },
          );
        }}
        enter={(next) => {
          headerRef.current.style.marginRight = "";
          wrapperRef.current.style.paddingRight = "";
          Lenis?.start();
          animate(
            wrapperRef.current,
            { opacity: [0, 1] },
            { duration: 0.3, onComplete: next },
          );
        }}
      >
        <Header ref={headerRef} />
        <div ref={wrapperRef}>{children}</div>
      </TransitionRouter>
    </ThemeProvider>
  );
}
