const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
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

  entry: {
    app: [
      // path.join(__dirname, 'src/index.jsx')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js', //这里生产环境应该用chunkhash替换hash
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },

  module: {
    rules: [

      {
        test: /(\.jsx|\.js)$/,
        include: path.join(__dirname, 'src'),
        use: ['babel-loader?cacheDirectory=true'],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),


  ],
}

module.exports = commonConfig;