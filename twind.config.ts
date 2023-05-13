import { defineConfig, TwindConfig } from "twind";
import presetTailwind from "@twind/preset-tailwind";
import { Options } from "$fresh/plugins/twindv1.ts";
import tailwindConfig from "./tailwind.config.ts";

export const config = defineConfig({
  presets: [presetTailwind(tailwindConfig)],
});

export default {
  selfURL: import.meta.url,
  // deno-lint-ignore no-explicit-any
  ...config as TwindConfig<any>,
} as Options;
