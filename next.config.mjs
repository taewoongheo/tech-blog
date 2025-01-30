import createMDX from '@next/mdx';

/** This allows .md and .mdx files to act as pages, routes, or imports in your application. */

const idProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: idProd ? '/tech-blog' : '',
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: '/public/images/',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
