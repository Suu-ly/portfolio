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
    <div className="flex min-h-svh flex-col">
      <main className="grow space-y-32 pt-32 pb-8 sm:pb-16 lg:py-32">
        <section className="flex w-full flex-col items-center justify-center p-4 text-center">
          <h1 className="font-display animate-slide-in mb-8 text-6xl font-bold text-zinc-900 lg:text-8xl dark:text-zinc-50">
            Lance
          </h1>
          <p className="animate-slide-in animation-delay-75 text-lg text-zinc-700 lg:text-xl dark:text-zinc-300">
            Full-stack web developer and designer.
          </p>
        </section>
        <MaxWidthWrapper>
          <h2 className="font-display animate-slide-in animation-delay-150 mb-8 text-2xl font-bold text-zinc-900 lg:mb-16 dark:text-zinc-50">
            Recent Works
          </h2>
          <div className="animate-slide-in animation-delay-225 grid gap-4 sm:grid-cols-2 sm:gap-y-8 lg:gap-y-16">
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
    </div>
  );
}
