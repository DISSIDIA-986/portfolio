import type { NextConfig } from "next";

const isGhPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  ...(isGhPages && {
    output: "export",
    basePath: "/portfolio",
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGhPages ? "/portfolio" : "",
  },
  images: {
    ...(isGhPages && { unoptimized: true }),
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
