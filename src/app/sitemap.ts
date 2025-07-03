import fs from "fs";
import type { MetadataRoute } from "next";
import { join } from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const allSlugs = fs
    .readdirSync(join(process.cwd(), "src/app/content/"))
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => ({
      url: `https://lanceyeo.com/project/${file.slice(0, -4)}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
    }));

  return [
    {
      url: "https://lanceyeo.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: "https://lanceyeo.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: "https://lanceyeo.com/works",
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    ...allSlugs,
  ];
}

// Enforces that this route is used as static rendering
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = "force-static";

// Ensures that this endpoint is invalidated and re-executed every X minutes
// so that when new deployments happen, the data is refreshed
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = false;
