// import resolve from "@rollup/plugin-node-resolve";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import importCss from "rollup-plugin-import-css";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import css from "rollup-plugin-css-only";
const packageJson = require("./package.json");
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // resolve(),
      nodeResolve(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist",
      }),
      babel({
        exclude: "node_modules/**", // Exclude node_modules
      }),
      commonjs(),
      // css(),
      peerDepsExternal(),
      replace({
        preventAssignment: false,
        "process.env.NODE_ENV": '"development"',
      }),
      postcss({
        extensions: [".css"],
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts.default()],
  },
];
