var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname + '/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devServer: {
    historyApiFallback: true,
    contentBase:        './public',
    inline:             true,
    progress:           true,
    port:               3000
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
