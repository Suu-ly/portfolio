"use client";

import TextReveal from "@/components/text-reveal";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ComponentProps,
  CSSProperties,
  PointerEvent,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const MAGNITUDES = [0.724, 0.561, 0.957, 0.635, 0.563, 0.383];
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
    (index - 2) * (1 / (total - 1)),
    (index + 2) * (1 / (total - 1)),
  ];
  const dir = Math.floor(magnitude * 100) % 2 === 0 ? 1 : -1;
  const dirIndex = index % 2 === 0 ? 1 : -1;
  const rotateZ = useTransform(
    progress,
    mapRange,
    [`${magnitude * 12 * -dir}deg`, `${magnitude * 12 * dir}deg`],
    { clamp: false },
  );
  const x = useTransform(
    progress,
    mapRange,
    [`${(1 / magnitude) * 20}%`, `${-(1 / magnitude) * 24}%`],
    { clamp: false },
  );
  const y = useTransform(
    progress,
    mapRange,
    [
      `${magnitude * 24 * dir * dirIndex}%`,
      `${magnitude * 32 * -dir * dirIndex}%`,
    ],
    { clamp: false },
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
      `radial-gradient(farthest-corner circle at ${gradientX.get()}% ${gradientY.get()}%, rgba(255,255,255,0.8) 0%, rgba(200,200,200,0.65) 20%, rgba(90,90,90,1) 90%)`,
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
      className="group relative isolate origin-bottom will-change-transform perspective-midrange"
    >
      <motion.div
        {...rest}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "border-border relative aspect-[4/3] max-h-[calc(100svh-8rem)] w-[calc(100vw-16rem)] max-w-2xl min-w-72 overflow-hidden rounded-3xl border-2 bg-slate-50 will-change-transform 2xl:max-w-4xl dark:bg-slate-800",
          className,
        )}
        style={{ rotateX, rotateY }}
      >
        {children}
        <motion.div
          role="presentation"
          className="will-change-background pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-40"
          style={{ background }}
        />
      </motion.div>
      <motion.div
        role="presentation"
        className="absolute inset-0 -z-10 scale-102 rounded-2xl bg-black opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{ rotateX: shadowX, rotateY: shadowY }}
      />
    </motion.div>
  );
};

type WorksProps = {
  title: string;
  year: number;
  type: string;
  src: string;
  alt: string;
}[];

export default function RecentWorks({ works }: { works: WorksProps }) {
  const regionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: regionRef,
    offset: ["start end", "end start"],
  });

  const [percentage, setPercentage] = useState([0, 0]);
  const [activeCard, setActiveCard] = useState<number>(-1);
  const timeout = useRef<NodeJS.Timeout | undefined>(undefined);

  useLayoutEffect(() => {
    const onResize = () => {
      const cardSize = Math.max(
        Math.min(
          window.innerWidth >= 1536 ? 896 : 672,
          window.innerWidth - 256,
        ),
        288,
      );
      const containerSize = cardSize * works.length + (works.length - 1) * 32;
      const percentageLeft =
        ((window.innerWidth / 2 + cardSize / 2) * 100) / containerSize;

      const percentageRight =
        100 + ((window.innerWidth / 2 - cardSize / 2) * 100) / containerSize;

      const percentageEnd =
        ((containerSize + window.innerWidth) * 100) / containerSize;
      setPercentage([percentageLeft, percentageRight, percentageEnd]);
    };

    window.addEventListener("resize", onResize);

    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, [works.length]);

  const x = useTransform(
    scrollYProgress,
    [
      0.65 / (2 + works.length * 0.5),
      1.25 / (2 + works.length * 0.5),
      (1 + works.length * 0.5) / (2 + works.length * 0.5),
      1,
    ],
    ["0%", `-${percentage[0]}%`, `-${percentage[1]}%`, `-${percentage[2]}%`],
    { clamp: false },
  );

  const mappedProgress = useTransform(
    scrollYProgress,
    [
      1.25 / (2 + works.length * 0.5),
      (1 + works.length * 0.5) / (2 + works.length * 0.5),
    ],
    [0, 1],
    { clamp: false },
  );

  useMotionValueEvent(mappedProgress, "change", (val) => {
    if (timeout.current) clearTimeout(timeout.current);
    requestAnimationFrame(
      () =>
        (timeout.current = setTimeout(
          () => setActiveCard(Math.round(val * (works.length - 1))),
          0,
        )), // Pushes the setState call to the end of the event loop
    );
  });

  return (
    <div
      ref={regionRef}
      className="h-(--elements) overflow-x-clip"
      style={{ "--elements": `${100 + works.length * 50}vh` } as CSSProperties}
    >
      <AnimatePresence propagate>
        {works.map((project, index) => {
          if (index !== activeCard) return null;
          return (
            <motion.div key={index}>
              <TextReveal
                key={"title" + index}
                as="h2"
                label={project.title}
                className="font-display fixed top-16 left-1/2 z-10 w-full -translate-x-1/2 text-center text-6xl font-bold text-white mix-blend-difference"
              />
              <TextReveal
                key={"type" + index}
                as="h2"
                label={project.type}
                className="fixed bottom-16 left-1/4 z-10 -translate-x-1/2 text-2xl font-semibold text-white mix-blend-difference"
              />
              <TextReveal
                key={"year" + index}
                as="h2"
                label={`${project.year}`}
                className="fixed bottom-16 left-3/4 z-10 -translate-x-1/2 text-2xl font-semibold text-white mix-blend-difference"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
      <div className="sticky top-0 h-screen">
        <h1 className="font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold dark:text-white">
          Recent Works
        </h1>
        {works[activeCard] && (
          <h2 className="sr-only">
            {works[activeCard].title} {works[activeCard].type}{" "}
            {works[activeCard].year}
          </h2>
        )}
        <motion.div
          className="before:bg-background relative left-full flex h-full min-w-fit items-center gap-8 before:absolute before:left-36 before:h-full before:w-[200%]"
          style={{ x }}
        >
          {works.map((project, index) => (
            <Card
              key={index}
              progress={mappedProgress}
              index={index}
              total={works.length}
            >
              <img
                src={project.src}
                className="absolute size-full object-cover"
                alt={project.alt}
              />
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
