/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brits.prismic.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
