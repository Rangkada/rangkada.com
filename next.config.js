/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: 'https',
        hostname: 'blog.rangkada.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
