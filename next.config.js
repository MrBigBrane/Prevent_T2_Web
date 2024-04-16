/** @type {import('next').NextConfig} */

const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    console.log('Current NODE_ENV:', process.env.NODE_ENV);  // This will output the environment mode
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      enforce: "pre",
      exclude: /(node_modules|bower_components|\.spec\.js)/,
      use: [{ loader: path.resolve("loaders/strip-code-loader.js") }],
    });
    return config;
  },
};

module.exports = nextConfig;
