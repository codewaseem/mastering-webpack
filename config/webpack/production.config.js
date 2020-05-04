const baseConfig = require("./base.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      title: "Production Mode",
    }),
  ],
};
