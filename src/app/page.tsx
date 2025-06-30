import ContactButton from "@/components/contact-button";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
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
        <section className="flex h-[50vh] w-screen items-center justify-center">
          <div className="p-4 text-center">
            <h1 className="font-display mb-8 text-8xl font-bold text-zinc-900 dark:text-zinc-50">
              Lance
            </h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300">
              Full-stack web developer and designer currently working at Tiktok.
            </p>
          </div>
        </section>
        <section className="bg-zinc-100 dark:bg-zinc-800">
          <div className="mx-auto max-w-[1600px] px-4 py-8 sm:p-16 lg:p-32">
            <h2 className="font-display mb-16 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Recent Works
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {allProjects.map((project) => (
                <ProjectCard
                  key={project.importVal.properties.title}
                  alt={project.importVal.properties.coverAlt}
                  tagline={project.importVal.properties.tagline}
                  slug={project.slug}
                  src={project.importVal.properties.coverImg}
                  title={project.importVal.properties.title}
                  type={project.importVal.properties.type}
                  year={project.importVal.properties.date.getFullYear()}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer>
        <ContactButton />
      </Footer>
    </>
  );
}
