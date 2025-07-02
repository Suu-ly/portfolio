import Footer from "@/components/footer";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-svh flex-col">
      <main className="grow">
        <section className="flex h-full w-screen flex-col items-center justify-center gap-12 py-32">
          <div className="p-4 text-center">
            <h1 className="font-display mb-4 text-5xl font-bold text-zinc-900 lg:text-6xl dark:text-zinc-50">
              Page Not Found!
            </h1>
            <p className="text-lg text-zinc-700 lg:text-xl dark:text-zinc-300">
              The page you are looking for seems to be missing.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-zinc-900 p-4 pr-6 text-xl text-zinc-50 transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none sm:flex dark:bg-zinc-800"
          >
            Back to Home
          </Link>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
