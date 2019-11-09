const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/',

    configureWebpack: config => {
        return {
            resolve: {
                extensions: ['.js', '.vue', '.json', '.less'],
                alias: {
                    'vue$': 'vue/dist/vue.esm.js',
                    '@': resolve('src')
                }
            }
        }
    },

    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    },

    devServer: {
        port: 8088,
        proxy: 'http://127.0.0.1:8080/'
    }
};