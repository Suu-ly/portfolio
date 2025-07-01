import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx"],
  images: {
    remotePatterns: [
      new URL(
        "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/**",
      ),
    ],
  },
};

// Merge MDX config with Next.js config
export default nextConfig;
