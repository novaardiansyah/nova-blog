import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'personal-v4-dev.novadev.my.id',
      },
      {
        protocol: 'https',
        hostname: 'personal-v4.novadev.my.id',
      }
    ],
  },
};

export default nextConfig;
