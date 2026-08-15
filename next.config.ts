import type { NextConfig } from "next";
import {
  LIVE_TO_NEXT_REDIRECTS,
  expandRedirects,
} from "./src/lib/liveRedirects";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "dialiqo.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return expandRedirects(LIVE_TO_NEXT_REDIRECTS);
  },
};

export default nextConfig;
