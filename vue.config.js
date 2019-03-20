const mock = require('./mock')
const path = require('path')
 
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        before: mock
    },
    chainWebpack(config) {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('$components', resolve('src/components'))
            .set('$api', resolve('src/api'))
            .set('$assets', resolve('src/assets'))

        config.module
            .rule('pug')
            .test(/\.pug$/)
            .use('pug-plain-loader')
                .loader('pug-plain-loader')
                .end()
    }
}