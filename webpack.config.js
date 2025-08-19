const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? 'js/[name].[contenthash].js' : '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { sourceMap: !isProd } },
          { loader: 'sass-loader', options: { sourceMap: !isProd } }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        loader: 'file-loader',
        options: { name: '[name].[ext]', outputPath: 'assets/' }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new HTMLWebpackPlugin({ filename: 'nosotros.html', template: './src/nosotros.html' }),
    new HTMLWebpackPlugin({ filename: 'productos.html', template: './src/productos.html' }),
    new HTMLWebpackPlugin({ filename: 'contacto.html', template: './src/contacto.html' }),
    ...(isProd ? [new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' })] : [])
  ],
  optimization: isProd
    ? {
        minimizer: [new TerserPlugin({ parallel: true }), new OptimizeCSSAssetsPlugin({})]
      }
    : {},
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true
  }
}
