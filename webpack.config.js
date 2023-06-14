const path = require('path');
// MiniCssExtractPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/main.js?[hash:8]',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'postcss-loader'
                ], 
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg|ico)$/i,
                type: 'asset',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: {
                        list: [
                            "...", // important, to correctly handle the default tags like 'src'
                            {
                                tag: "img",
                                attribute: "data-src",
                                type: "src",
                            },
                        ]
                    }
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/style.css?[hash:8]'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // inject: 'body'
        }),
    ],
    devServer: {
        host: 'localhost', 
        port: '4040',  
        open: true 
    },
    mode:'development',
    devtool: 'cheap-module-source-map'
};