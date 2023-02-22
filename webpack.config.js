const path = require("path");

module.exports = {
  target: "node",
  entry: "./src/extension.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "extension.js",
    libraryTarget: "commonjs2",
    devtoolModuleFilenameTemplate: "../[resource-path]",
  },
  devtool: "source-map",
  externals: { vscode: "commonjs vscode" },
  resolve: { extensions: [".ts", ".js", ".json"] },
  module: {
    rules: [
      {
        test: /\.ts$/u,
        exclude: /node_modules/u,
        use: [{ loader: "ts-loader" }],
      },
    ],
  },
};