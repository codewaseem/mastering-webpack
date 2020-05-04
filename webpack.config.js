const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const configs = require("./config/webpack");

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
let plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: "Output Management",
  }),
];

let loaders = {
  rules: [CSSLoaders, ImageFilesLoaders, FontLoaders],
};

let config = {
  entry: {
    app: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(process.cwd(), "dist"),
  },
  devServer: {
    contentBase: "./dist",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

module.exports = (env, argv) => {
  const mode = argv.mode || "development";
  const currentConfig = configs[mode];

  config = {
    ...config,
    ...currentConfig,
    plugins: [
      ...plugins,
      ...currentConfig.plugins,
      argv.analyze && new BundleAnalyzerPlugin(),
    ],
    module: { ...loaders, ...currentConfig.loaders },
  };

  return config;
};
