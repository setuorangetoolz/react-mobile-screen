import dts from "rollup-plugin-dts";
import del from "rollup-plugin-delete";
import css from "rollup-plugin-css-only";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: "dist/index.js",
        format: "esm",
      },
    ],
    plugins: [resolve(), css(), typescript(), terser()],
    external: [
      "react",
      "styled-components",
      "@mui/material",
      /@mui\/material\/[\w]+/,
    ],
  },
];
