import Link from "next/link";
import { MaxWidthWrapper } from "./page-template";
import { Separator } from "./ui/separator";

export default function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <footer className="flex flex-col gap-12 bg-zinc-900 pt-8 pb-4 sm:pt-16 lg:pt-32 lg:pb-8">
      <MaxWidthWrapper className="w-full">{children}</MaxWidthWrapper>
      <div className="mx-4 flex flex-col gap-4 sm:flex-row sm:gap-32 lg:mx-12 2xl:mx-32">
        <nav>
          <span className="mb-2 text-sm font-medium text-zinc-500">
            Explore
          </span>
          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className="relative rounded font-medium text-zinc-300 transition after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-300 after:transition-transform hover:text-zinc-100 hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className="relative rounded font-medium text-zinc-300 transition after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-300 after:transition-transform hover:text-zinc-100 hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="relative rounded font-medium text-zinc-300 transition after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-300 after:transition-transform hover:text-zinc-100 hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Separator className="bg-zinc-700 sm:hidden" />
        <div>
          <span className="mb-2 text-sm font-medium text-zinc-500">
            Follow Me
          </span>
          <ul className="flex gap-8">
            <li>
              <a
                href="https://www.linkedin.com/in/lanceyeo/"
                target="_blank"
                className="relative rounded font-medium text-zinc-300 transition after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-300 after:transition-transform hover:text-zinc-100 hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Suu-ly"
                target="_blank"
                className="relative rounded font-medium text-zinc-300 transition after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-300 after:transition-transform hover:text-zinc-100 hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-4 flex justify-between text-sm font-medium text-zinc-500 lg:mx-12 2xl:mx-32">
        <span>&copy; {new Date().getFullYear()} Lance</span>
        <span>Singapore</span>
      </div>
    </footer>
  );
}
