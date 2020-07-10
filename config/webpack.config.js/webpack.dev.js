const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const common = require('./webpack.common.js');

module.exports = {
  ...common,
  mode: 'development',
  devServer: {
    contentBase: '../../build',
  },
  // Add development plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
  ],
  devtool: 'eval-source-map',

  performance: {
    hints: false,
  },
};
