const path = require("path");

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
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [CSSLoaders, ImageFilesLoaders, FontLoaders],
  },
};
