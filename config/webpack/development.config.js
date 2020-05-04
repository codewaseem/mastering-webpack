const baseConfig = require("./base.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...baseConfig,
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      title: "Development Mode",
    }),
  ],
};
