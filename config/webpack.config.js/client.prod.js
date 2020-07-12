const baseConfig = require('./client.base');

module.exports = {
  ...baseConfig,
  mode: 'production',
  devtool: 'source-map',
};
