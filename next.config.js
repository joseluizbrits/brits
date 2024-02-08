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
      {
        protocol: "https",
        hostname: "images.prismic.io",
        port: "",
        pathname: "/brits/*",
      },
    ],
  },
};

module.exports = nextConfig;
