const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    client: './src/client/client.js',
    bundle: './src/shared/bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build/dist'),
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'build/dist'),
    filename: "[name].js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};