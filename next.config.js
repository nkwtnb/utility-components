/** @type {import('next').NextConfig} */
const PREFIX = '/utility-components';
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: PREFIX,
  basePath: PREFIX,
}

module.exports = {
  ...nextConfig,
  env: {
    basePath: PREFIX,
  },
}