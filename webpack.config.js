const path = require("path");

const CSSLoaders = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [CSSLoaders],
  },
};
