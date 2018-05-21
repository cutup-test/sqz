var path = require('path');
var webpack = require('webpack'); 

module.exports = {
  mode: 'none',
  entry: './app/assets/scripts/App.js',
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}