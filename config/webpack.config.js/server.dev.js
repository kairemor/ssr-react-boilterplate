const baseConfig = require('./server.base');

module.exports = {
  ...baseConfig,
  mode: 'development',
  performance: {
    hints: false,
  },
};
