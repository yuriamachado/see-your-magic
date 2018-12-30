const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                {
                loader: 'style-loader',
                },
                {
                loader: 'css-loader',
                },
                {
                loader: 'sass-loader',
                },
                {
                    // Loader for webpack to process CSS with PostCSS
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                },
            ]
            },
            {
                test: /\.sass$/,
                use: [
                {
                    loader: 'style-loader',
                    options: {
                    sourceMap: true,
                    },
                },
                {
                    loader: 'css-loader',
                    options: {
                    modules: true,
                    importLoaders: true,
                    localIdentName: '[path]___[name]__[local]',
                    },
                },
                {
                    loader: 'resolve-url-loader',
                    },
                    {
                    // Loader for webpack to process CSS with PostCSS
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                        return [
                        require('autoprefixer')
                        ];
                    }
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].less",
            chunkFilename: "[id].css"
        })
    ]
};