/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    // Force styled-components to use the exact version we want
    config.resolve.alias = {
      ...config.resolve.alias,
      "styled-components": require.resolve("styled-components"),
    }
    return config
  },
}

module.exports = nextConfig
