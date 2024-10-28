import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  treeshake: false,
  sourcemap: true,
  clean: true,
  external: ["react"],
  format: ["cjs", "esm"],
  dts: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
