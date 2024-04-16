/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          exclude: /(node_modules|bower_components|\.spec\.js)/,
          use: [{ loader: path.resolve("loaders/strip-code-loader.js") }],
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
