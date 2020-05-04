const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const CSSLoaders = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const ImageFilesLoaders = {
  test: /\.(png|svg|jpg|gif)$/,
  use: ["file-loader"],
};

const FontLoaders = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: ["file-loader"],
};

module.exports = {
  entry: {
    app: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(process.cwd(), "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],
  module: {
    rules: [CSSLoaders, ImageFilesLoaders, FontLoaders],
  },
};
