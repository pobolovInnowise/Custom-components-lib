import path from "path";
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: {
            name: "MyComponentLibrary",
            type: "umd",
        },
        clean: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
    externals: {
        react: "react",
        "react-dom": "react-dom",
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
                    MiniCssExtractPlugin.loader,
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
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "index.css",
        }),
    ],
    devtool: "source-map",
};
