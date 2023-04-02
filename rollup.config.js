import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";
import scss from "rollup-plugin-scss";
import postcss from "postcss";
import postcssPresetEnv from "postcss-preset-env";
import aspectRatio from "postcss-aspect-ratio-polyfill";

export default defineConfig({
    input: "src/scripts/main.js",
    output: {
        file: "build/scripts/main.min.js",
        format: "iife",
    },
    plugins: [
        babel({ babelHelpers: "bundled", presets: ["@babel/preset-env"] }),
        terser(),
        scss({
            output: "./build/styles/main.min.css",
            runtime: require("sass"),
            watch: "./src/styles",
            processor: () => postcss([postcssPresetEnv, aspectRatio]),
            outputStyle: "compressed",
            sourceMap: true,
        }),
    ],
});
