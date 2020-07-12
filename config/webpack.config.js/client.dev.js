const webpack = require('webpack');
const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const baseConfig = require('./client.base');

module.exports = {
  ...baseConfig,
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '..', '..', 'build/'),
    compress: true,
    port: 3000,
  },
  // Add development plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
  ],

  devtool: 'inline-source-map',
  performance: {
    hints: false,
  },
};
