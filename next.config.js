/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
    ],
  },
  transpilePackages: ['three'],
}
module.exports = nextConfig
