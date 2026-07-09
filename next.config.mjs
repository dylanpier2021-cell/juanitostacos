/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Every page in this site is statically generated at build time (SSG).
  // We deploy to Vercel, so next/image optimization works out of the box.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Linting is run separately; do not let a stray lint rule break a client build.
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
