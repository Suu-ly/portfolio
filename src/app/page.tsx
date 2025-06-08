"use client";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentProps, CSSProperties, useMemo, useRef } from "react";

const MAGNITUDES = [0.724, 0.261, 0.957, 0.385, 0.773, 0.183];

const Card = ({
  progress,
  index,
  total,
  ...rest
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
} & ComponentProps<typeof motion.div>) => {
  const magnitude = MAGNITUDES[index % 6];
  const dir = Math.floor(magnitude * 100) % 2 === 0 ? 1 : -1;
  const dirIndex = index % 2 === 0 ? 1 : -1;
  const rotate = useTransform(
    progress,
    [
      (index - 2) * (1 / total),
      (index - 1) * (1 / total),
      (index + 1) * (1 / total),
      (index + 2) * (1 / total),
    ],
    [
      `${magnitude * 9 * -dir}deg`,
      `${magnitude * 3 * -dir}deg`,
      `${magnitude * 3 * dir}deg`,
      `${magnitude * 9 * dir}deg`,
    ],
    { clamp: false }
  );
  const x = useTransform(
    progress,
    [(index - 1) * (1 / total), (index + 1) * (1 / total)],
    [`${(1 / magnitude) * 12}%`, `${-(1 / magnitude) * 12}%`],
    { clamp: false }
  );
  const y = useTransform(
    progress,
    [(index - 1) * (1 / total), (index + 1) * (1 / total)],
    [
      `${(1 / magnitude) * 2 * dir * dirIndex}%`,
      `${(1 / magnitude) * 2 * -dir * dirIndex}%`,
    ],
    { clamp: false }
  );

  return (
    <motion.div
      {...rest}
      className="w-[calc(100vw-2rem)] max-w-4xl h-160 rounded-lg bg-red-400 border-white border-8 shrink-0"
      style={{ rotate, x: index % 2 === 0 ? x : undefined, y }}
    />
  );
};

export default function Home() {
  const regionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: regionRef,
    offset: ["start end", "end start"],
  });
  const array = useMemo(() => Array.from({ length: 4 }), []);

  const x = useTransform(
    scrollYProgress,
    [0, 1 / (1 + array.length * 0.5), 1],
    [
      "20%",
      `-${50 - Math.min(9, array.length) * 5}%`,
      `-${200 - (Math.min(9, array.length) - 1) * 10}%`,
    ],
    { clamp: false }
  );

  const mappedProgress = useTransform(
    scrollYProgress,
    [
      1 / (1 + array.length * 0.5),
      (array.length * 0.5) / (1 + array.length * 0.5),
    ],
    [0, 1],
    {
      clamp: false,
    }
  );

  return (
    <main>
      <div className="h-screen w-screen flex items-center justify-center">
        Welcome
      </div>
      <div
        ref={regionRef}
        className="h-(--elements)"
        style={
          { "--elements": `${100 + array.length * 50}vh` } as CSSProperties
        }
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <h1 className="text-4xl font-medium absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Works
          </h1>
          <motion.div
            className="relative h-full flex gap-12 left-full min-w-fit items-center py-32 px-16 before:absolute before:left-80 before:h-20 before:w-[200%] before:bg-background"
            style={{ x }}
          >
            {array.map((_, index) => (
              <Card
                key={index}
                progress={mappedProgress}
                index={index}
                total={array.length}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="h-screen w-screen flex items-center justify-center">
        Contact me
      </div>
    </main>
  );
}
