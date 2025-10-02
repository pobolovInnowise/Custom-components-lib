// const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
//
// module.exports = {
//     mode: 'development',
//     entry: './src/index.tsx',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: "[name].[hash].js"
//     },
//     devServer: {
//         port: 3000,
//     },
//     resolve: {
//         // Убедитесь, что .jsx и .tsx стоят первыми для корректной работы с React/TSX
//         extensions: ['.tsx', '.ts', '.jsx', '.js'],
//     },
//     plugins: [
//         new HTMLWebpackPlugin({template: "./src/index.html"}),
//         new CleanWebpackPlugin()
//     ],
//     module: {
//         rules: [
//             // --- ПРАВИЛО 1: CSS Modules ---
//             {
//                 test: /\.module\.css$/i,
//                 use: [
//                     "style-loader",
//                     {
//                         loader: "css-loader",
//                         options: {
//
//                             modules: {
//                                 localIdentName: '[name]__[local]--[hash:base64:5]',
//                             },
//                             importLoaders: 1
//                         }
//                     }
//                 ]
//             },
//
//             // --- ПРАВИЛО 2: Обычный CSS (глобальный) ---
//             {
//                 test: /\.css$/i,
//                 exclude: /\.module\.css$/,
//                 use: ["style-loader", "css-loader"]
//             },
//
//
//             // Внутри webpack.config.js
//             {
//                 test: /\.(ts|tsx|js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: 'babel-loader'
//             }
//         ]
//     }
// }

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx', // ⚡ заменил на tsx
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[fullhash].js", // ⚡ заменил [hash] → [fullhash] (webpack 5 warning fix)
    },
    devServer: {
        port: 3000,
        historyApiFallback: true, // ⚡ для SPA
        open: true, // автоматически открывает браузер
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    plugins: [
        new HTMLWebpackPlugin({ template: "./src/index.html" }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            // --- CSS Modules ---
            {
                test: /\.module\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                            importLoaders: 1,
                        },
                    },
                ],
            },
            // --- Глобальные CSS ---
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // --- JS / TS / JSX / TSX ---
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
};
