import ContactButton from "@/components/contact-button";
import Footer from "@/components/footer";
import HelloThere from "@/components/hello-there";
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
        <MaxWidthWrapper className="flex w-full flex-col justify-center p-4">
          <div className="animate-slide-in mb-6 self-start">
            <div className="animate-wiggle self-start">
              <HelloThere />
            </div>
          </div>
          <h1 className="font-display animate-slide-in text-main mb-8 text-6xl font-bold lg:text-8xl">
            Lance Yeo
          </h1>
          <p className="animate-slide-in animation-delay-75 mb-16 text-2xl font-medium text-zinc-800 lg:text-4xl dark:text-zinc-200">
            A full-stack dev who bridges design and development to build things
            that feel <i className="text-accent">just right</i>.
          </p>
          <p className="animate-slide-in animation-delay-150 text-muted text-sm lg:text-lg">
            Currently working as a frontend developer at Tiktok.
          </p>
        </MaxWidthWrapper>
        <MaxWidthWrapper>
          <h2 className="font-display animate-slide-in animation-delay-225 mb-8 text-2xl font-bold text-zinc-900 lg:mb-16 dark:text-zinc-50">
            Recent Works
          </h2>
          <div className="animate-slide-in animation-delay-300 grid gap-4 sm:grid-cols-2 sm:gap-y-8 lg:gap-y-16">
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
