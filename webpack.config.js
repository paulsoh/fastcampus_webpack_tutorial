const resolve = require('path').resolve;

module.exports = {
  context: resolve('js'),
  entry: "./routes.js",
  output: {
    path: resolve('dist'),
    filename: './bundle.js',
    publicPath: '/dist/',
  },
  devtool: 'eval',
}
