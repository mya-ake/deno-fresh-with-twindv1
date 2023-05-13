import * as esbuild from "https://deno.land/x/esbuild@v0.17.18/mod.js";

const url = new URL("./../tailwind.config.ts", import.meta.url);
const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile(url);
const ts = decoder.decode(data);
const result = await esbuild.transform(ts, {
  loader: "ts",
  platform: "node",
  format: "cjs",
});

const { code } = result;

const outputUrl = new URL("./../tailwind.config.cjs", import.meta.url);
await Deno.writeTextFile(outputUrl, `// deno-lint-ignore-file\n${code}`)

Deno.exit(0);
