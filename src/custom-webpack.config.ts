const { EnvironmentPlugin } = require('webpack');

require('dotenv').config();

module.exports = {
  output: {
    crossOriginLoading: 'anonymous'
  },
  plugins: [
    new EnvironmentPlugin([
      'BACK_HOST_URL',
      'BACK_HOST_SOCKET_URL',
      'COOKIE_EXPIRE_DAYS',
      'DOMAIN'
    ])
  ]
}
