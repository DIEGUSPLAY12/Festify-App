import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Festify-App',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
