import { rollup } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import { rmSync } from "fs";

rmSync("output", { recursive: true, force: true });

for (let i = 0; i <= 3; i++) {
  const result = await rollup({
    input: "input.js",
    plugins: [commonjs({ requireReturnsDefault: "preferred" })],
  });

  await result.write({ file: `output/result${i}.mjs` });
}
