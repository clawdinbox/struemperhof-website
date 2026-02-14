/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  basePath: '/struemperhof-website',
  assetPrefix: '/struemperhof-website',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
