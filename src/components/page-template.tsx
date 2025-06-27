import { cn } from "@/lib/utils";
import { IconCornerDownRight } from "@tabler/icons-react";
import Footer from "./footer";

interface TemplateProps {
  coverImg: string;
  coverAlt: string;
  title: string;
  type: string;
  year: string | number;
  tagline: string;
  about: string;
  roles: string[];
  tools: string[];
  url: string;
  footerChild?: React.ReactNode;
  children?: React.ReactNode;
}

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={cn(
        "mx-auto max-w-[1600px] px-4 lg:px-12 2xl:px-32",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default function PageTemplate({
  coverImg,
  coverAlt,
  title,
  type,
  year,
  tagline,
  about,
  roles,
  tools,
  url,
  footerChild,
  children,
}: TemplateProps) {
  return (
    <>
      <main>
        <MaxWidthWrapper className="mt-24 mb-8 sm:mb-16">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="text-xs font-medium text-zinc-600 sm:text-base lg:text-lg dark:text-zinc-400">
              {type}
            </span>
            <span className="rounded-full border border-zinc-600 px-4 py-1 text-xs font-medium text-zinc-600 sm:text-base lg:px-6 lg:py-1.5 lg:text-lg dark:border-zinc-400 dark:text-zinc-400">
              {year}
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold text-zinc-900 sm:text-6xl lg:text-8xl dark:text-zinc-50">
            {title}
          </h1>
          <div className="grid grid-cols-2 gap-8 sm:mt-16 sm:gap-16">
            <p className="col-span-2 self-center text-sm text-zinc-600 sm:col-span-1 sm:text-2xl dark:text-zinc-400">
              {tagline}
            </p>
            <a
              href={url}
              target="_blank"
              className="group hidden items-center gap-3 justify-self-start rounded-xl bg-zinc-900 p-4 pr-6 text-xl text-sky-50 transition-colors hover:bg-zinc-800 sm:flex dark:bg-zinc-800"
            >
              <IconCornerDownRight className="size-5 transition-transform group-hover:translate-x-1" />
              Visit Site
            </a>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-2 text-sm font-medium text-sky-800 sm:text-base dark:text-sky-500">
                About
              </p>
              <p className="text-zinc-700 sm:text-lg dark:text-zinc-300">
                {about}
              </p>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-8 sm:col-span-1 lg:gap-16">
              <div className="sm:col-span-2 lg:col-span-1">
                <p className="mb-2 text-sm font-medium text-sky-800 sm:text-base dark:text-sky-500">
                  Role
                </p>
                <div className="flex flex-col">
                  {roles.map((role) => (
                    <p
                      key={role}
                      className="text-zinc-700 sm:text-lg dark:text-zinc-300"
                    >
                      {role}
                    </p>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <p className="mb-2 text-sm font-medium text-sky-800 sm:text-base dark:text-sky-500">
                  Tools
                </p>
                <div className="flex flex-col">
                  {tools.map((tool) => (
                    <p
                      key={tool}
                      className="text-zinc-700 sm:text-lg dark:text-zinc-300"
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <a
              href={url}
              target="_blank"
              className="group col-span-2 inline-flex items-center gap-3 rounded-xl bg-zinc-900 px-6 py-5 text-sky-50 transition-colors hover:bg-zinc-800 sm:hidden dark:bg-zinc-800"
            >
              <IconCornerDownRight className="size-5 transition-transform group-hover:translate-x-1" />
              Visit Site
            </a>
          </div>
        </MaxWidthWrapper>
        <div className="relative mx-auto mb-8 aspect-[4/3] w-full max-w-[1600px] overflow-hidden sm:mb-16">
          <img
            src={coverImg}
            alt={coverAlt}
            className="absolute size-full object-cover"
          />
        </div>
        <div className="bg-zinc-100 py-8 sm:py-16 dark:bg-zinc-800">
          <MaxWidthWrapper className="space-y-8 lg:space-y-16">
            {children}
          </MaxWidthWrapper>
        </div>
      </main>
      <Footer>{footerChild}</Footer>
    </>
  );
}
