import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
const appBasePath = ''; // for production

/** @type {import('next').NextConfig} */
const config = {
  // reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: appBasePath,
  trailingSlash: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: appBasePath,
  },
};

export default withMDX(config);
