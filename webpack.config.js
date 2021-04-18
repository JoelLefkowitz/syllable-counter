const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  experiments: {
    outputModule: true,
  },
  externals: ["child_process"],
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
