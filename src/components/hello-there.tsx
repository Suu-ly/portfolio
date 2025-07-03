"use client";

import { motion } from "motion/react";

export default function HelloThere() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring" }}
      className="w-fit rounded-full bg-zinc-950 px-10 py-4 text-lg font-medium text-zinc-300 dark:bg-zinc-900"
    >
      Hello there!
    </motion.div>
  );
}
