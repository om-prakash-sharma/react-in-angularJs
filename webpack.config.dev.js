
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { commonConfig, commonPluginsList } = require('./webpack.config.common');

const mode = 'development';
const rootPath = path.join(__dirname, '.');
const { PORT } = process.env;

module.exports = merge(commonConfig, {
    mode,
    plugins: [

        // load common plugins 
        ...commonPluginsList,

        // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),

        // generate dynamic index.html file
        new HtmlWebpackPlugin({
            template: rootPath + '/index.ejs'
        })
    ],
    devServer: {
        // host: '0.0.0.0',
        historyApiFallback: true,
        open: true,
        static: {
            directory: rootPath,
            watch: {
                ignored: [
                    path.resolve(__dirname, 'node_modules')
                ]
            }
        },
        client: {
            overlay: true,
            progress: true,
            webSocketTransport: 'ws',
        },
        webSocketServer: 'ws',
        onListening(devServer) {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }
            const { port } = devServer.server.address();
            console.log('Web Server is listening on port:', port);
        },
        proxy: {
            '/api': {
                target: 'https://localhost',
                secure: false
            },
            '/socket.io': {
                target: 'https://localhost',
                secure: false,
                ws: true,
            }
        },
        port: PORT || 4000,
        compress: true,
        hot: false
    }
}); 