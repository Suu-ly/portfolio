import { PageProperties } from "@/lib/types";
import { cn } from "@/lib/utils";
import { IconCornerDownRight } from "@tabler/icons-react";
import ImageFadeIn from "./image-fade-in";
import NextProject from "./next-project";

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={cn(
        "mx-auto max-w-[1600px] px-4 md:px-16 2xl:px-32",
        className,
      )}
    >
      {children}
    </section>
  );
};

function VideoTablet({ src }: { src: string }) {
  return (
    <div className="w-full rounded-xl bg-zinc-950 p-2 sm:rounded-2xl lg:rounded-4xl lg:p-4">
      <video
        loop
        muted
        playsInline
        autoPlay
        aria-label="Video showcase of website"
        className="aspect-video w-full overflow-hidden rounded-lg sm:rounded-xl lg:rounded-[20px]"
        src={src}
      />
    </div>
  );
}

function MobileScreenshots({
  first,
  firstAlt,
  second,
  secondAlt,
  third,
  thirdAlt,
}: {
  first: string;
  firstAlt: string;
  second: string;
  secondAlt: string;
  third: string;
  thirdAlt: string;
}) {
  return (
    <div className="flex gap-8 sm:gap-16 2xl:gap-32">
      <ImageFadeIn
        width={428}
        height={926}
        sizes="(max-width: 639px) 288px, (max-width: 1535px) 428px, 364px"
        src={first}
        alt={firstAlt}
        className="border-border w-full overflow-hidden rounded-lg border-2 lg:rounded-xl"
        loading="lazy"
      />
      <ImageFadeIn
        width={428}
        height={926}
        sizes="(max-width: 639px) 288px, (max-width: 1535px) 428px, 364px"
        src={second}
        alt={secondAlt}
        className="border-border w-full overflow-hidden rounded-lg border-2 lg:rounded-xl"
        loading="lazy"
      />
      <ImageFadeIn
        width={428}
        height={926}
        sizes="(max-width: 639px) 288px, (max-width: 1535px) 428px, 364px"
        src={third}
        alt={thirdAlt}
        className="border-border hidden w-full overflow-hidden rounded-lg border-2 sm:inline lg:rounded-xl"
        loading="lazy"
      />
    </div>
  );
}

function VideoPlayer({ src }: { src: string }) {
  return (
    <video
      className="border-border aspect-video w-full rounded-lg border-2 lg:rounded-xl"
      loop
      muted
      playsInline
      autoPlay
      aria-label="Video showcase of website"
      src={src}
    />
  );
}

function DesktopScreenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <ImageFadeIn
      width={1920}
      height={1080}
      sizes="(max-width: 1535px) 100vw, 1344px"
      className="w-full rounded-lg lg:rounded-xl"
      src={src}
      alt={alt}
      loading="lazy"
    />
  );
}

interface TemplateProps extends PageProperties {
  children?: React.ReactNode;
}

function PageTemplate({
  coverImg,
  coverAlt,
  title,
  type,
  date,
  tagline,
  about,
  roles,
  tools,
  url,
  children,
}: TemplateProps) {
  return (
    <main className="space-y-8 pt-24 sm:space-y-16 lg:space-y-32 lg:pt-32 dark:bg-zinc-950">
      <MaxWidthWrapper>
        <div className="sm:mb-16 lg:mb-32">
          <div className="animate-slide-in mb-4 flex items-center justify-between gap-4">
            <span className="text-muted text-xs font-medium sm:text-base lg:text-lg">
              {type}
            </span>
            <span className="text-muted rounded-full border border-zinc-600 px-4 py-1 text-xs font-medium sm:text-base lg:px-6 lg:py-1.5 lg:text-lg dark:border-zinc-400">
              {date.getFullYear()}
            </span>
          </div>
          <h1 className="font-display animate-slide-in animation-delay-75 text-main text-4xl font-bold sm:text-6xl lg:text-8xl">
            {title}
          </h1>
        </div>
        <div className="animate-slide-in animation-delay-150 grid grid-cols-2 gap-8 sm:gap-16">
          <p className="text-muted col-span-2 self-center text-sm sm:col-span-1 sm:text-2xl">
            {tagline}
          </p>
          <a
            href={url}
            target="_blank"
            className="group hidden items-center gap-3 justify-self-start rounded-xl bg-zinc-900 p-4 pr-6 text-xl text-zinc-50 transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none sm:flex dark:bg-zinc-800"
          >
            <IconCornerDownRight className="size-5 transition-transform group-hover:translate-x-1" />
            Visit Site
          </a>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-accent mb-2 text-sm font-medium sm:text-base">
              About
            </p>
            <p className="text-body sm:text-lg">{about}</p>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-8 sm:col-span-1 lg:gap-16">
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-accent mb-2 text-sm font-medium sm:text-base">
                Role
              </p>
              <div className="flex flex-col">
                {roles.map((role) => (
                  <p key={role} className="text-body sm:text-lg">
                    {role}
                  </p>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-accent mb-2 text-sm font-medium sm:text-base">
                Tools
              </p>
              <div className="flex flex-col">
                {tools.map((tool) => (
                  <p key={tool} className="text-body sm:text-lg">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <a
            href={url}
            target="_blank"
            className="group col-span-2 inline-flex items-center gap-3 rounded-xl bg-zinc-900 px-6 py-5 text-zinc-50 transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none sm:hidden dark:bg-zinc-800"
          >
            <IconCornerDownRight className="size-5 transition-transform group-hover:translate-x-1" />
            Visit Site
          </a>
        </div>
      </MaxWidthWrapper>
      <div className="animate-slide-in animation-delay-225 mx-auto w-full max-w-[1600px]">
        <ImageFadeIn
          width={1928}
          height={1446}
          priority
          sizes="(max-width: 1600px) 100vw, 1600px"
          src={coverImg}
          alt={coverAlt}
          className="w-full"
        />
      </div>
      <div className="bg-zinc-100 py-8 sm:py-16 lg:py-32 dark:bg-zinc-800">
        <MaxWidthWrapper className="space-y-8 sm:space-y-16 lg:space-y-32">
          {children}
        </MaxWidthWrapper>
      </div>
    </main>
  );
}

export {
  DesktopScreenshot,
  MobileScreenshots,
  NextProject,
  PageTemplate,
  VideoPlayer,
  VideoTablet,
};
