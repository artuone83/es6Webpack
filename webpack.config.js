module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist/js`,
    filename: 'bundle.js'
  },
  watch: false,
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 8888
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
        }
      }
    ]
  }
};
