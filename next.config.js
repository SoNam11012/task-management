/** @type {import('next').NextConfig} */

const nextConfig = {
  // Completely disable ESLint during builds
  eslint: {
    // Skip ESLint during builds
    ignoreDuringBuilds: true,
  },
  // Disable type checking during builds for faster builds
  typescript: {
    // Skip type checking during builds
    ignoreBuildErrors: true,
  },
  // Other config options
  reactStrictMode: true,
};

module.exports = nextConfig;
