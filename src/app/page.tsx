"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  MotionValue,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ComponentProps,
  CSSProperties,
  PointerEvent,
  ReactNode,
  useMemo,
  useRef,
} from "react";

const MAGNITUDES = [0.724, 0.261, 0.957, 0.385, 0.773, 0.183];
const ROTATE_MAGNITUDE = 0.05;

const Card = ({
  progress,
  index,
  total,
  children,
  className,
  ...rest
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
} & ComponentProps<typeof motion.div> & { children?: ReactNode }) => {
  const magnitude = MAGNITUDES[index % 6];
  const mapRange = [
    (index - 2) * (1 / total),
    (index - 1) * (1 / total),
    (index + 1) * (1 / total),
    (index + 2) * (1 / total),
  ];
  const dir = Math.floor(magnitude * 100) % 2 === 0 ? 1 : -1;
  const dirIndex = index % 2 === 0 ? 1 : -1;
  const rotateZ = useTransform(
    progress,
    mapRange,
    [
      `${magnitude * 12 * -dir}deg`,
      `${magnitude * 3 * -dir}deg`,
      `${magnitude * 3 * dir}deg`,
      `${magnitude * 12 * dir}deg`,
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
    mapRange,
    [
      `${(1 / magnitude) * 4 * dir * dirIndex}%`,
      `${(1 / magnitude) * 2 * dir * dirIndex}%`,
      `${(1 / magnitude) * 2 * -dir * dirIndex}%`,
      `${(1 / magnitude) * 4 * -dir * dirIndex}%`,
    ],
    { clamp: false }
  );

  const rawX = useMotionValue(0);
  const rotateX = useSpring(rawX);
  const shadowX = useTransform(() => rotateX.get() * 3);
  const rawY = useMotionValue(0);
  const rotateY = useSpring(rawY);
  const shadowY = useTransform(() => rotateY.get() * 3);
  const rawGradientX = useMotionValue(50);
  const gradientX = useSpring(rawGradientX);
  const rawGradientY = useMotionValue(50);
  const gradientY = useSpring(rawGradientY);
  const background = useTransform(
    () =>
      `radial-gradient(farthest-corner circle at ${gradientX.get()}% ${gradientY.get()}%, rgba(255,255,255,0.8) 10%, rgba(255,255,255,0.65) 20%, rgba(255,255,255,0) 90%)`
  );

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const percentageX = ((event.clientX - rect.left) / rect.width) * 100;
    const percentageY = ((event.clientY - rect.top) / rect.height) * 100;
    const offsetX = percentageX - 50;
    const offsetY = percentageY - 50;

    rawY.set(-offsetX * ROTATE_MAGNITUDE);
    rawX.set(offsetY * ROTATE_MAGNITUDE);
    gradientX.set(50 + percentageX / 4 - 12.5);
    gradientY.set(50 + percentageY / 3 - 16.67);
  };

  const onPointerLeave = () => {
    rawY.set(0);
    rawX.set(0);
    gradientX.set(50);
    gradientY.set(50);
  };

  return (
    <motion.div
      style={{ rotateZ, x: index % 2 === 0 ? x : undefined, y }}
      className="perspective-midrange group isolate relative"
    >
      <motion.div
        {...rest}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "w-[calc(100vw-8rem)] relative min-w-72 max-w-4xl h-160 rounded-2xl bg-slate-800 border-slate-200 border-2 shrink-0 will-change-transform",
          className
        )}
        style={{ rotateX, rotateY }}
      >
        {children}
        <motion.div
          role="presentation"
          className="absolute inset-0 mix-blend-overlay duration-500 group-hover:opacity-20 opacity-0 transition-opacity will-change-background rounded-2xl pointer-events-none"
          style={{ background }}
        />
      </motion.div>
      <motion.div
        role="presentation"
        className="absolute inset-0 -z-10 duration-500 group-hover:opacity-50 blur-2xl opacity-0 transition-opacity bg-black rounded-2xl scale-102"
        style={{ rotateX: shadowX, rotateY: shadowY }}
      />
    </motion.div>
  );
};

export default function Home() {
  const regionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: regionRef,
    offset: ["start end", "end start"],
  });
  const array = useMemo(() => Array.from({ length: 5 }), []);

  const x = useTransform(
    scrollYProgress,
    [0, 0.75 / (2 + array.length * 0.5), 1],
    [
      "20%",
      `-${30 - (Math.min(6, array.length) - 1) * 5}%`,
      `-${200 - (Math.min(9, array.length) - 1) * 10}%`,
    ],
    { clamp: false }
  );

  const mappedProgress = useTransform(
    scrollYProgress,
    [
      1 / (2 + array.length * 0.5),
      (1 + array.length * 0.5) / (2 + array.length * 0.5),
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
          <h1 className="text-6xl font-display font-medium absolute dark:text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Recent Works
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
              ></Card>
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
