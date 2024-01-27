/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'SFCampbell\'s Kasm Workspaces',
    description: 'Custom Kasm workspaces by SFCampbell.',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.kasmweb.com/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
