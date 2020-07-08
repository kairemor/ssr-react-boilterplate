const common = require('./webpack.common.js');

module.exports = {
  ...common,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
};
