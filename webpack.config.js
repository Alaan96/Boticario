const HTMLWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        loader: 'file-loader',
        options:{
          name: '[name].[ext]',
          outputPath: 'assets/'
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'nosotros.html',
      template: './src/nosotros.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'productos.html',
      template: './src/productos.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'contacto.html',
      template: './src/contacto.html'
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}