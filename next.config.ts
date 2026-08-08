import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Old Indonesian product routes → new English routes
      {
        source: "/produk/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
      // Old legal routes → new English routes
      {
        source: "/privasi",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/syarat-ketentuan",
        destination: "/terms",
        permanent: true,
      },
      // Old Indonesian blog posts → new English posts
      {
        source: "/blog/kenapa-kami-bangun-produk-dari-nol",
        destination: "/blog/why-we-build-products-from-scratch",
        permanent: true,
      },
      {
        source: "/blog/automation-testing-sebelum-go-live",
        destination: "/blog/automation-testing-before-go-live",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;