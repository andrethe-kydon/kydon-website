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
    ];
  },
};

module.exports = nextConfig;