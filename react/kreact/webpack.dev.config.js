const path = require('path');
const webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      Pages: path.join(__dirname, 'src/Pages'),
      Components: path.join(__dirname, 'src/Components'),
      Routes: path.join(__dirname, 'src/Routes'),
      Actions: path.join(__dirname, 'src/Redux/Actions'),
      Reducers: path.join(__dirname, 'src/Redux/Reducers'),
      Redux: path.join(__dirname, 'src/Redux'),
      public: path.join(__dirname, 'public'),
    }
  },

  /*入口*/
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/indexDev.jsx')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },

  devtool: 'inline-source-map',
  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js', //这里生产环境应该用chunkhash替换hash
    chunkFilename: '[name].[chunkhash].js'
  },
  //loader 让 webpack 能够去处理那些非 JavaScript 文件
  module: {
    rules: [{
        test: /(\.jsx|\.js)$/,
        include: path.join(__dirname, 'src'),
        use: ['babel-loader?cacheDirectory=true'],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules&localIdentName=[local]-[hash:base64:5]', 'postcss-loader']
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  //插件
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),

    new webpack.optimize.SplitChunksPlugin({
      name: 'vendor'
    })
  ],

  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true
  }
};