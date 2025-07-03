"use client";

import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function ImageFadeIn({
  className,
  alt,
  imageClassName,
  ...rest
}: ImageProps & { imageClassName?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "flex animate-pulse items-center justify-center overflow-hidden bg-zinc-200 transition-colors duration-300 dark:bg-zinc-800",
        loaded && "animate-none bg-transparent dark:bg-transparent",
        className,
      )}
    >
      <Image
        {...rest}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={cn(
          "object-cover opacity-0 transition-opacity duration-300",
          loaded && "opacity-100",
          imageClassName,
        )}
      />
    </div>
  );
}
