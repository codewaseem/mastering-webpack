const devConfig = require("./config/webpack/development.config");
const prodConfig = require("./config/webpack/production.config");

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    return devConfig;
  }

  if (argv.mode === "production") {
    return prodConfig;
  }
};
