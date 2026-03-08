import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
