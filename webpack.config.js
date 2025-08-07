const path = require("node:path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.jsx"],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src/app"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@features": path.resolve(__dirname, "src/features"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
    },
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [
    new HTMLPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
};
