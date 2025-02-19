import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: { dirs: ['app', 'libs', 'components'] },
};

export default nextConfig;
