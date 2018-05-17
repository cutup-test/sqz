var path = require('path');

module.exports = {
  mode: 'none',
  entry: './app/assets/index.js',
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
            presets: ['react', 'es2015', 'stage-1']
          }
        }
      }
    ]
  }
}