const { build } = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const cssPlugin = require("esbuild-css-modules-plugin");
const { devDependencies } = require("./package.json");

build({
  bundle: true,
  entryPoints: ["src/index.tsx"],
  logLevel: "info",
  treeShaking: true,
  minify: true,
  target: ["es6", "node12.22.0"],
  plugins: [cssPlugin(), sassPlugin({ type: "style" })],
  external: [...Object.keys(devDependencies)],
  outfile: "./docs/public/vanilla-js-search.js",
  format: "esm",
});
