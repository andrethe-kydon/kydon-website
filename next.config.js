/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },

  // /ai-university was retired and replaced by /ai-workforce-factory. 308 so
  // search engines transfer the ranking signal rather than treating the new
  // path as unrelated. middleware.ts has no rule for /ai-university, so the
  // request falls through to here.
  async redirects() {
    return [
      {
        source: '/ai-university',
        destination: '/ai-workforce-factory',
        permanent: true,
      },
      // 2026 site refresh: retired pages point to their replacements.
      { source: '/ai-learning-engine', destination: '/ai-learning-platform', permanent: true },
      { source: '/verticals', destination: '/#serve', permanent: true },
      { source: '/verticals/:slug', destination: '/solutions/:slug', permanent: true },
      { source: '/businesses/zillearn', destination: '/platform', permanent: true },
      { source: '/businesses/kydon-learning-systems', destination: 'https://lsi.kydongrp.com', permanent: true },
      { source: '/businesses', destination: '/company', permanent: true },
      { source: '/solutions', destination: '/#serve', permanent: true },
    ];
  },
};

module.exports = nextConfig;