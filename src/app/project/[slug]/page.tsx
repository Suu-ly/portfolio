import Footer from "@/components/footer";
import NextProject from "@/components/next-project";
import fs from "fs";
import { Metadata } from "next";
import { join } from "path";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const { properties } = await import(`@/app/content/${slug}.tsx`);

  return {
    title: properties.title,
    description: properties.tagline,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
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
  // Sort all the project imports by the date
  allProjects.sort(
    (a, b) => b.importVal.properties.date - a.importVal.properties.date,
  );
  const currentPageIndex = allProjects.findIndex((val) => val.slug === slug);
  const Project = allProjects[currentPageIndex].importVal.default;
  // Get the properties of the next project
  const nextProjectProps =
    allProjects[(currentPageIndex + 1) % allProjects.length];

  return (
    <>
      <Project />
      <Footer>
        <NextProject
          alt={nextProjectProps.importVal.properties.coverAlt}
          slug={nextProjectProps.slug}
          src={nextProjectProps.importVal.properties.coverImg}
          title={nextProjectProps.importVal.properties.title}
          year={nextProjectProps.importVal.properties.date.getFullYear()}
        />
      </Footer>
    </>
  );
}

export function generateStaticParams() {
  const files = fs.readdirSync(join(process.cwd(), "src/app/content/"));
  return files
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => ({ slug: file.slice(0, -4) }));
}

export const dynamicParams = false;
