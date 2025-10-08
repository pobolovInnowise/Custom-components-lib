import path from "path";
import { fileURLToPath } from "url";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "production",
    entry: "./src/index.ts", // ← здесь экспортируй все компоненты
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: {
            name: "MyComponentLibrary", // можешь поменять на своё имя
            type: "umd", // универсальный формат — работает в CJS/ESM
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
    plugins: [new CleanWebpackPlugin()],
    devtool: "source-map",
};
