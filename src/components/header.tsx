import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-between gap-4 p-4">
      <Link
        href="/"
        className="relative rounded font-medium text-zinc-800 transition hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-100 dark:hover:text-zinc-50"
      >
        Lance
      </Link>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="relative rounded font-medium text-zinc-800 transition after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-800 after:transition-transform hover:text-zinc-900 hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-100 dark:after:bg-zinc-100 dark:hover:text-zinc-50"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              className="relative rounded font-medium text-zinc-800 transition after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-800 after:transition-transform hover:text-zinc-900 hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-100 dark:after:bg-zinc-100 dark:hover:text-zinc-50"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="relative rounded font-medium text-zinc-800 transition after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-800 after:transition-transform hover:text-zinc-900 hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-100 dark:after:bg-zinc-100 dark:hover:text-zinc-50"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
