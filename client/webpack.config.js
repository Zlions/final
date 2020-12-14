const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry: {
        index: './src/index',
        demo: './src/demo'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.mjs', '.js', '.json', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname, './src/'),
        publicPath: '/',
        port: 3000,
        hot: true,
        stats: {
            colors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // jsx/js文件的正则
                exclude: /node_modules/, // 排除 node_modules 文件夹
                use: {
                    // loader 是 babel
                    loader: 'babel-loader',
                    options: {
                        // babel 转义的配置选项
                        babelrc: false,
                        presets: [
                            // 添加 preset-react
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'), { modules: false }]
                        ],
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'demo.html',
            chunks: ['demo']
        }),
    ]
}