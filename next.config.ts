import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Budeya',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
