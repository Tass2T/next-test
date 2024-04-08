/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "24.media.tumblr.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
