/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    formats: ["image/jpg"],
  },
  i18n: {
    locales: ["en", "da"],
    defaultLocale: "en",
  },
  images: {
    domains: ["images.unsplash.com"],
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
