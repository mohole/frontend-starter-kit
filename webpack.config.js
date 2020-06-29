// Main imports | DON'T CHANGE
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const pkg = require('./package.json');

// Project related settings
const ENV = process.env.NODE_ENV || 'development';
const dist = './dist';
const port = 8080;

// Webpack configuration | DON'T CHANGE
module.exports = {
  entry: {
    main: './src/index.js'
  },
  mode: ENV,
  output: {
    path: path.join(__dirname, dist),
    filename: 'bundle.js',
    chunkFilename: 'bundle.[chunk].js'
  },
  plugins: [
    new WebpackNotifierPlugin({
      title: pkg.displayName,
      alwaysNotify: true
    }),
    new HtmlWebpackPlugin({
      title: pkg.displayName,
      template: './src/html/index.html'
    })
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, dist),
    watchContentBase: true,
    watchOptions: {
      poll: true
    },
    compress: true,
    port: port,
    host: 'localhost',
    hot: true,
    inline: true
  }
};