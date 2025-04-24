import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://savegnago.vteximg.com.br/**")],
  },
};

export default nextConfig;
