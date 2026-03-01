import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const configRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  turbopack: {
    root: configRoot,
  },
};

export default nextConfig;
