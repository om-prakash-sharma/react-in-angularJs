
const webpack = require('webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const destPath = path.join(__dirname, 'build');
const { MODE } = process.env;

const esLintPlugin = [
    new ESLintPlugin({
        fix: true,
        emitWarning: false
    })
];

const ruleList = [
    {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    ["@babel/preset-react", { "runtime": "automatic" }]],
            },
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
        },
    },
    {
        test: /\.css$/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: false,
                },
            },
            {
                loader: 'css-loader',
                options: {
                    url: false,
                    sourceMap: true
                }
            }
        ],
    },
    {
        test: /\.s[ac]ss$/i,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: false,
                },
            },
            {
                loader: 'css-loader',
                options: {
                    url: false,
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader'
            }
        ],
    },
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader',
        ],
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            'file-loader',
        ],
    },
    {
        test: /\.html$|\.less$/,
        loader: 'raw-loader'
    },
];

/**
 * add common plugins for dev/prod here, it will be merged with dev/prod config .
 */
const commonPluginsList = [

    // create seprate css file
    new MiniCssExtractPlugin({
        filename: 'sat-bundle.[contenthash].css'
    }),

    new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
        process: { env: { MODE } }
    })
];

/**
 * common webpack config for dev/prod.
 */
const commonConfig = {
    entry: './main.js',
    output: {
        clean: true,
        path: destPath,
        filename: 'sat-bundle.[contenthash].js',
    },
    plugins: [...esLintPlugin],
    module: {
        rules: ruleList
    }
};

module.exports = {
    commonConfig,
    commonPluginsList
};