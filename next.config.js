const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  images: {
    disableStaticImages: true
  },
  target: 'serverless',
  cleanDistDir: false,
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
