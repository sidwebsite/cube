const path = require('path');
// MiniCssExtractPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/main.js?[hash:8]',
        clean: true
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
                type: 'asset/resource',
                parser: {
                    dataUrlCondition: {
                        maxSize: 1024
                    }
                },
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: {
                        list: [
                            {
                                tag: "img",
                                attribute: "data-src",
                                type: "src",
                            }
                        ]
                    },
                    minimize: false
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
            minify: false
        }),
    ],
    devServer: {
        host: 'localhost', 
        port: '4040',  
        open: true 
    },
};