"use client";

import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function ImageFadeIn({ className, alt, ...rest }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...rest}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={cn(
        "opacity-0 transition-opacity duration-300",
        loaded && "opacity-100",
        className,
      )}
    />
  );
}
