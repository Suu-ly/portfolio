import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import { ComponentProps, useMemo } from "react";

interface TextRevealProps extends ComponentProps<typeof motion.p> {
  label: string;
  as: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  triggerOnView?: boolean;
  showInAccessibility?: boolean;
}
const animation: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.04,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const letterVariants: Variants = {
  initial: { y: "110%" },
  animate: {
    y: 0,
    transition: {
      ease: [0.76, 0, 0.24, 1],
      duration: 0.5,
    },
  },
  exit: {
    y: "-110%",
    transition: {
      ease: [0.76, 0, 0.24, 1],
      duration: 0.4,
    },
  },
};

export default function TextReveal({
  label,
  as,
  triggerOnView,
  showInAccessibility,
  className,
  ...rest
}: TextRevealProps) {
  const letters = useMemo(() => label.split(""), [label]);
  const Comp = useMemo(() => motion[as], [as]);

  return (
    <Comp
      className={cn("[clip-path:inset(15%_0%_-15%_0%)]", className)} //-15% to prevent clipping of text descenders
      {...rest}
      variants={animation}
      whileInView={triggerOnView ? "animate" : undefined}
      viewport={{ once: true, amount: "all" }}
      initial="initial"
      animate={triggerOnView ? "initial" : "animate"}
      exit="exit"
    >
      {showInAccessibility && <span className="sr-only">{label}</span>}
      {letters.map((letter, index) => {
        if (letter === " ")
          return (
            <motion.span
              key={label + index}
              variants={letterVariants}
              aria-hidden="true"
            >
              {letter}
            </motion.span>
          );
        return (
          <motion.span
            key={label + index}
            variants={letterVariants}
            className="inline-block"
            aria-hidden="true"
          >
            {letter}
          </motion.span>
        );
      })}
    </Comp>
  );
}
