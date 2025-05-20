import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable ESLint during build
  eslint: {
    // Skip ESLint during builds (both local and on Vercel)
    ignoreDuringBuilds: true,
  },
  // Other config options here
};

export default nextConfig;
