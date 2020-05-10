const path = require("path");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./src/index.jsx",
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        test: /.\jsx?$/,
        loader: "babel-loader",
      },
    ],
  },
};
