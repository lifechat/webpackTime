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
const {resolve} = require('path');
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
        rules:[
            // 详细loader配置
            {
                // 匹配那些文件，不同文件需要不同的loader处理
                test:/\.css$/,
                // 使用那些node进行处理
                use:[
                    // 执行顺序从右到左，从下到上，依次执行
                    //创建style标签 将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    'css-loader',
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    // 将less文件编译为css文件
                    'less-loader'
                ]
            }
        ]
    },
    // plugins的配置
    plugins:[
        //详细plugins的配置

    ],
    // 模式
    mode:'development'
}