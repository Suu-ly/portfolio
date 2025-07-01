import ContactButton from "@/components/contact-button";
import Footer from "@/components/footer";
import { MaxWidthWrapper } from "@/components/page-template";
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
      <main className="dark:bg-gradient-to-t dark:from-zinc-950 dark:to-zinc-900 dark:to-40%">
        <section className="flex w-screen items-center justify-center py-32">
          <div className="p-4 text-center">
            <h1 className="font-display mb-8 text-8xl font-bold text-zinc-900 dark:text-zinc-50">
              Lance
            </h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300">
              Full-stack web developer and designer currently working at Tiktok.
            </p>
          </div>
        </section>
        <MaxWidthWrapper className="py-8 sm:py-16 lg:py-32">
          <h2 className="font-display mb-16 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Recent Works
          </h2>
          <div className="grid gap-x-4 gap-y-16 sm:grid-cols-2">
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
        </MaxWidthWrapper>
      </main>
      <Footer>
        <ContactButton />
      </Footer>
    </>
  );
}
