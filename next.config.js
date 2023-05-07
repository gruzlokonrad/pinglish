/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER: "GTM-N29C9GT",
    NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-RD9PQKFH7S"
  }
}

module.exports = nextConfig
