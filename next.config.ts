import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Enable static exports for the App Router.
   */
  output: 'export',

  distDir: 'hi',
  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
