const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');

const proConfig = {
  // resolve: {
  //   alias: {
  //     Pages: path.join(__dirname, 'src/Pages'),
  //     Components: path.join(__dirname, 'src/Components'),
  //     Routes: path.join(__dirname, 'src/Routes'),
  //     Actions: path.join(__dirname, 'src/Redux/Actions'),
  //     Reducers: path.join(__dirname, 'src/Redux/Reducers'),
  //     Redux: path.join(__dirname, 'src/Redux'),
  //     public: path.join(__dirname, 'public'),
  //   }
  // },

  devtool: 'cheap-module-source-map',
  // entry: {
  //   app: [
  //     path.join(__dirname, 'src/index.jsx')
  //   ],
  //   vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  // },
  // output: {
  //   path: path.join(__dirname, './dist'),
  //   filename: '[name].[chunkhash].js',
  //   chunkFilename: '[name].[chunkhash].js',
  //   publicPath: '/'
  // },
  // module: {
  //   rules: [

  //     {
  //       test: /\.js|\.jsx$/,
  //       use: ['babel-loader'],
  //       include: path.join(__dirname, 'src')
  //     },

  //     {
  //       test: /\.css$/,
  //       use: [
  //         // MiniCssExtractPlugin.loader,
  //         'style-loader', 
  //         'css-loader'
  //       ]
  //     },

  //     {
  //       test: /\.(png|jpg|gif)$/,
  //       use: [{
  //         loader: 'url-loader',
  //         options: {
  //           limit: 8192
  //         }
  //       }]
  //     },


  //   ]
  // },
  plugins: [
    new CleanWebpackPlugin(['dist/*.*']),

    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: path.join(__dirname, 'src/index.html')
    // }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    // new MiniCssExtractPlugin({
    //   filename: "css/style.css",
    //   chunkFilename: "[id].css"
    // }),



    // new webpack.HashedModuleIdsPlugin(),



    // new UglifyJSPlugin()

  ],

  optimization: {
    splitChunks: {
      // 包含了入口之间共享的所有代码
      cacheGroups: {
        commons: {
          name: "vendor",
          chunks: "initial",
          minChunks: 2
        },

        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /node_modules\/(.*)\.js/
        },

        styles: {
          name: 'styles',
          test: /\.(scss|css)$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    },

    runtimeChunk: {
      "name": "runtime"
    },

    minimizer: [
      new UglifyJSPlugin(),
      // new UglifyJSPlugin({
      //   sourceMap: false,
      //   uglifyOptions: {
      //     mangle: true,
      //   },
      // }),
    ]
  },


};

module.exports = merge(commonConfig, proConfig);