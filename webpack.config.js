const resolve = require('path').resolve;

module.exports = (env) => ({
  context: resolve('js'),
  entry: "./routes.js",
  output: {
    path: resolve('dist'),
    filename: './bundle.js',
    publicPath: '/dist/',
    pathinfo: true,
  },
  devtool: env.dev ? 'eval' : 'source-map',
})
