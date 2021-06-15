/**
 *  @author lifechat
 *  @time 2021-6-11
 *  @description  webpack讲解 
 *  
 * webpack.config.js webpack的配置文件
 *  作用：指示webpack 干那些活(当你运行webpack指令，会加载里面的配置)
 * 
 *  所有构件工具都是基于nodejs 平台运行的~模块化默认采用commonjs规范
 *  Error: webpack://webpackdemo/data:text/javascript,__webpack_public_path___=___webpack_base_uri___=_htmlWebpackPluginPublicPath;?:2
  __webpack_require__.p = __webpack_base_uri__ = htmlWebpackPluginPublicPath;
                                               ^
  ReferenceError: __webpack_base_uri__ is not defined
    配置webpack-dev-server 即可解决
 */
// resolve用来拼接绝对路径的方法
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //配置css加载loader
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');


// 配置htmlplugin
module.exports = {
    // webpack 配置
    //入口起点
    entry: './src/index.js',
    // 输出
    output: {
        // 输出文件名
        filename: '[name][hash].js',
        // 输出路径,__dirname代表当前文件的绝对路径
        path: resolve(__dirname, 'build')
    },
    // loader配置
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    // plugins的配置
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin({
            filename: 'main.[hash].css'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build')
    },
    // 模式
    mode: 'development'
}