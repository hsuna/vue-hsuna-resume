const path = require("path");

module.exports = {
    publicPath: './',
    assetsDir: 'static',//放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
    outputDir: 'dist',// 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 修改压缩规则，可以移除开发环境相关的代码
            config.optimization.minimizer[0].options.terserOptions.compress = {
                drop_console: true,
                drop_debugger: true,
            }
        }

        return {
            devtool: "production" === process.env.NODE_ENV ? false : undefined,
            resolve: {
                alias: {
                    src: path.join(__dirname, 'src')
                }
            }
        };
    }
}