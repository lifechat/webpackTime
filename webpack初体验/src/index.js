/**
 *  @author lifechat
 *  @time 2021-6-11
 *  @description  webpack讲解 
 *   1. 运行指令
 *   开发环境：webpack ./src/index.js -o ./build/built.js --mod=development
 *    整体打包环境，是开发环境
 *   生产环境：webpack ./src/index.js -o ./build/built.js --mod=production
 *      webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
 *      整体打包环境，是生产环境
 *  2.结论：
 *      1.webpack能处理js/json资源，不能处理css/img等其他资源
 *      2.生产环境和开发环境将ES6模块化编译成游览器能识别的模块化~
 *      3.生产环境比开发环境多一个压缩js代码
 * 
 * tip:webpack 能打包json和js文件，样式文件不能打包
 *      
 */

import data from '../data.json'
import '../index.css'
import '../index.less'
console.log(data)
function addNum(a,b){
    return a+b;
}

console.log(addNum(1,2));