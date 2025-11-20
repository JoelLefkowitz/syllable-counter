const { nodeResolve } = require("@rollup/plugin-node-resolve");
const ts = require("rollup-plugin-ts");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
  input: "src/index.ts",
  output: { format: "cjs", file: "dist/index.js" },
  plugins: [ts(), nodeResolve(), commonjs()],
};
