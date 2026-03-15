import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dissidia.oss-cn-beijing.aliyuncs.com",
        pathname: "/portfolio/**",
      },
    ],
  },
};

export default nextConfig;
