const path = require("path");

module.exports = {
  entry: "./src/ts/index.ts",
  node: {
    __dirname: false,
  },
  devServer: {
    inline: false
  },
  module: {
    loader: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
  },
};