/**
 *  @author lifechat
 *  @time 2021-6-11
 *  @description  webpack讲解 
 *  
 * webpack.config.js webpack的配置文件
 *  作用：指示webpack 干那些活(当你运行webpack指令，会加载里面的配置)
 * 
 *  所有构件工具都是基于nodejs 平台运行的~模块化默认采用commonjs规范
 *  
 */
// resolve用来拼接绝对路径的方法
var webpack = require('webpack');
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename:'index.html',
})

module.exports = {
    // webpack 配置
    //入口起点
    entry:'./src/index.js',
    // 输出
    output:{
        // 输出文件名
        filename:'built.js',
        // 输出路径,__dirname代表当前文件的绝对路径
        path:resolve(__dirname,'build')
    },
    // loader配置
    module:{
        
    },
    // plugins的配置
    plugins:[
        //详细plugins的配置
        htmlPlugin,
    ],
    // 模式
    mode:'development'
}