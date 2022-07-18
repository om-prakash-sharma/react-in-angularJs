
const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { commonConfig, commonPluginsList } = require('./webpack.config.common');

const mode = 'production';
const rootPath = path.join(__dirname, '.');

module.exports = merge(commonConfig, {
    mode,
    plugins: [

        // load common plugins 
        ...commonPluginsList,

        // generate index.html file
        new HtmlWebpackPlugin({
            inject: false,
            minify: true,
            template: rootPath + '/index.ejs'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: true
            }),

            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        "default",
                        {
                            discardComments: {
                                removeAll: true
                            }
                        }
                    ],
                }
            })
        ]
    },
});