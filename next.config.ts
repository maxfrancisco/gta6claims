import type { NextConfig } from "next";

// Static export: every page is pre-built to HTML at deploy time and served
// from Cloudflare Pages' free CDN. No server, no per-request cost.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
