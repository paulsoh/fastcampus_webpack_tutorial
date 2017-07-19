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
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: '/node_modules/',
      },
    ],
  },
  devtool: env.dev ? 'eval' : 'source-map',
})
