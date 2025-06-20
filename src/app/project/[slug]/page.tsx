import fs from "fs";
import { join } from "path";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Project } = await import(`@/app/content/${slug}.mdx`);

  return (
    <main>
      <Project />
    </main>
  );
}

export function generateStaticParams() {
  const files = fs.readdirSync(join(process.cwd(), "src/app/content/"));
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.slice(0, -4) }));
}

export const dynamicParams = false;
