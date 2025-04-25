import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://savegnago.vteximg.com.br/**"),
      new URL(
        "https://ktvdbmgiklmhvzsyzcdk.supabase.co/storage/v1/object/public/products/**"
      ),
    ],
  },
};

export default nextConfig;
