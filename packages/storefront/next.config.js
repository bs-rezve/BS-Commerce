const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dummyjson.com'],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['cdn.shopify.com'],
}
};

const withTM = require("next-transpile-modules")(["marketplace"]);
module.exports = withTM(nextConfig);

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['dummyjson.com', 'cdn.shopify.com'],
  },
}
