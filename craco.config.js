const path = require('path');
const WebpackBar = require('webpackbar');
module.exports = (arvg) => {
    return {
        webpack: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
            plugins: [
                new WebpackBar(),
            ],
            devServer: (devServerConfig) => {
                return {
                    ...devServerConfig,
                    // 服务开启gzip
                    compress: true,
                    // port: 8898,
                    //   proxy: {
                    //     '/api': {
                    //       target: 'https://test.com/',
                    //       changeOrigin: true,
                    //       xfwd: false,
                    //     }
                    //   }
                }
            },
        },
    }
}