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
        protocol: 'http',
        hostname: '100.108.9.46',
        port: '7101',
      },
      {
        protocol: 'https',
        hostname: 'personal-v4.novadev.my.id',
      }
    ],
  },
};

export default nextConfig;
