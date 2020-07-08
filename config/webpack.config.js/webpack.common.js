const path = require('path');

module.exports = {
  entry: {
    client: './src/client/client.js',
    bundle: './src/shared/bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '..', '..', 'build/'),
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, '..', '..', 'build/'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
      },
    ],
  },
};
