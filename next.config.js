const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const isProd = (process.env.NODE_ENV || 'production') === 'production';
const webpack = require('webpack');
const assetPrefix = isProd ? 'https://khendrikse.github.io/' : '';

const nextConfig = {
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    return config;
  },
  exportPathMap: () => ({
    '/': { page: '/' }
  }),
};

module.exports = withPlugins([optimizedImages], nextConfig);
