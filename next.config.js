/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.gifer.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
