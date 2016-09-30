module.exports = {
  entry: './public/main.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  watch: true,
  /*
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000
  }
  */
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
