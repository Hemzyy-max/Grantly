import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const nextConfig: NextConfig = {
  typedRoutes: true,
  output: "export",
  basePath: isGitHubPages ? "/Grantly" : "",
  assetPrefix: isGitHubPages ? "/Grantly/" : undefined,
};
export default nextConfig;
