import ContactButton from "@/components/contact-button";
import Footer from "@/components/footer";
import NextProject from "@/components/next-project";
import fs from "fs";
import { join } from "path";

export default async function Home() {
  const allSlugs = fs
    .readdirSync(join(process.cwd(), "src/app/content/"))
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.slice(0, -4));
  const allProjects = await Promise.all(
    allSlugs.map(async (val) => ({
      slug: val,
      importVal: await import(`@/app/content/${val}.tsx`),
    })),
  );
  allProjects.sort(
    (a, b) => b.importVal.properties.date - a.importVal.properties.date,
  );

  return (
    <>
      <main>
        <div className="flex h-screen w-screen items-center justify-center">
          <div className="p-4 text-center">
            <h1 className="font-display mb-8 text-8xl font-bold text-zinc-900 dark:text-zinc-50">
              Lance
            </h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300">
              Full-stack web developer and designer currently working at Tiktok.
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 sm:px-16 lg:px-32">
          <h2 className="font-display text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Recent Works
          </h2>
          {allProjects.map((project) => (
            <NextProject
              key={project.importVal.properties.title}
              alt={project.importVal.properties.coverAlt}
              slug={project.slug}
              src={project.importVal.properties.coverImg}
              title={project.importVal.properties.title}
              year={project.importVal.properties.date.getFullYear()}
            />
          ))}
        </div>
      </main>
      <Footer>
        <ContactButton />
      </Footer>
    </>
  );
}
