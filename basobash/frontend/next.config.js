/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Enable Fast Refresh
    if (!isServer) {
      config.optimization.moduleIds = "named";
    }
    return config;
  },
};
module.exports = nextConfig;
