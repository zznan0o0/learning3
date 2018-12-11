const path = require('path');
const webpack = require("webpack");

module.exports = {
  resolve: {
    alias: {
      Pages: path.join(__dirname, 'src/Pages'),
      Components: path.join(__dirname, 'src/Components'),
      Routes: path.join(__dirname, 'src/Routes'),
      Actions: path.join(__dirname, 'src/Redux/Actions'),
      Reducers: path.join(__dirname, 'src/Redux/Reducers'),
      Redux: path.join(__dirname, 'src/Redux')
    }
  },

  /*入口*/
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.jsx')
  ],

  devtool: 'inline-source-map',
  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  //loader 让 webpack 能够去处理那些非 JavaScript 文件
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      include: path.join(__dirname, 'src'),
      use: ['babel-loader?cacheDirectory=true'],
    }]
  },
  //插件
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true
  }
};