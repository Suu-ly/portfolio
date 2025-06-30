import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      new URL(
        "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/**",
      ),
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
