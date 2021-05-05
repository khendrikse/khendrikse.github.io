const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  target: 'serverless',
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    return config;
  },
  exportPathMap: () => ({
    '/': { page: '/' }
  })
};

module.exports = withPlugins([optimizedImages], nextConfig);
