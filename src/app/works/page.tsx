import ContactButton from "@/components/contact-button";
import Footer from "@/components/footer";
import { MaxWidthWrapper } from "@/components/page-template";
import ProjectCard from "@/components/project-card";
import fs from "fs";
import { Metadata } from "next";
import { join } from "path";

export const metadata: Metadata = {
  title: "All Works",
  description: "Check out some of my past projects",
  openGraph: {
    url: "/works",
  },
};

export default async function Works() {
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
      <main className="grow space-y-8 pt-24 pb-8 sm:space-y-16 sm:pb-16 lg:space-y-32 lg:py-32">
        <section className="flex w-full items-center justify-center">
          <div className="text-main font-display flex gap-2 text-center">
            <h1 className="animate-slide-in text-5xl font-bold sm:text-6xl lg:text-8xl">
              All Works
            </h1>
            <p className="animate-slide-in animation-delay-75 text-lg lg:text-xl">
              {String(allProjects.length).padStart(2, "0")}
            </p>
          </div>
        </section>
        <MaxWidthWrapper>
          <div className="animate-slide-in animation-delay-150 grid gap-4 sm:grid-cols-2 sm:gap-y-8 lg:gap-y-16">
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
