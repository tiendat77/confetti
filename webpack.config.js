const path = require('path');

module.exports = {
  mode: 'production',
  entry: './build/test.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};