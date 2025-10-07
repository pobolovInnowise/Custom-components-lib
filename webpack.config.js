// import path from "path";
// import { fileURLToPath } from "url";
// import { CleanWebpackPlugin } from "clean-webpack-plugin";
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
//
// export default {
//     mode: "production",
//     entry: "./src/index.ts",
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "index.js",
//         library: {
//             name: "MyComponentLibrary",
//             type: "umd",
//         },
//         globalObject: "this",
//         clean: true,
//     },
//     resolve: {
//         extensions: [".tsx", ".ts", ".jsx", ".js"],
//     },
//     externals: {
//         react: "react",
//         "react-dom": "react-dom"
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.module\.css$/i,
//                 use: [
//                     "style-loader",
//                     {
//                         loader: "css-loader",
//                         options: {
//                             modules: {
//                                 localIdentName: "[name]__[local]--[hash:base64:5]",
//                             },
//                             importLoaders: 1,
//                         },
//                     },
//                 ],
//             },
//             {
//                 test: /\.css$/i,
//                 exclude: /\.module\.css$/,
//                 use: ["style-loader", "css-loader"],
//             },
//             {
//                 test: /\.(ts|tsx|js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: "babel-loader",
//             },
//         ],
//     },
//     plugins: [
//         new CleanWebpackPlugin(),
//     ],
// };

import path from "path";
import { fileURLToPath } from "url";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "development", // для локального теста
    entry: "./src/index.tsx", // запускаем твой App
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.module\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]--[hash:base64:5]",
                            },
                            importLoaders: 1,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html", // временный html
        }),
        new CleanWebpackPlugin(),
    ],
};