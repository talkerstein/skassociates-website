import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export is opt-in via env flag — Vercel deploys as a full Next.js app by default.
  // To regenerate the WordPress-ready HTML bundle, run: NEXT_OUTPUT=export npm run build
  ...(process.env.NEXT_OUTPUT === "export" && {
    output: "export" as const,
    trailingSlash: true,
    images: { unoptimized: true },
  }),
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
