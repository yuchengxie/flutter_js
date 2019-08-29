// 用webpack4从零开始构建react脚手架
const path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    // 入口文件
    entry:'./src/index.js',
    // 出口文件
    output:{
        filename:'bundle.js',//打包后的文件名
        path:path.resolve('dist')//打包后的目录
    },
    // //处理对应模块
    // module:'',
    // // 对应的插件
    plugins:[
        // 通过new一下这个类来使用插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',// 在src目录下创建一个index.html页面当做模板来用
            hash:true,//会在打包好的bundle.js后面加上hash串
        })
    ],
    // // 开发服务器配置
    // devServer:{},
    // // 模式配置
    // mode:'development'
}