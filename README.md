# Fresh with Twind v1

## What I want to do

I would like to make Tailwind CSS class name suggestions work in Fresh.
[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) is intented to work.

![Screenshot of Tailwind CSS IntelliSense functioning](https://github.com/mya-ake/deno-fresh-with-twindv1/blob/main/docs_assets/screenshot.png)

## How to work

### Introduction

Tailwind CSS IntelliSense refers to `tailwind.config.cjs` (or `tailwind.config.js`). And Tailwind preset of Twind receives the same config as Tailwind CSS. Therefore, I would like to make it common.

In Deno, in order to load a js file, `require` function must be created and loaded using `createRequire` funciton in `node:module`. And since Fresh's Twind Plugin is included in the client-side runtime, `node:module` cannot be used. Therefore, `require` function cannot be used.

### Solution

I solved the problem by creating `tailwind.config.ts` and transpiling it to `tailwind.config.cjs` using esbuild. Twind uses `tailwind.config.ts` and Tailwind CSS Intellisense uses `tailwind.config.cjs`.

If it is changed the configuration, run `deno task build:tailwind_config`.


## Version at the time of operation check

- Deno: 1.33.2
- Fresh: v1.1.5
- Twind: v1.1.3

```
$ deno --version                 
deno 1.33.2 (release, aarch64-apple-darwin)
v8 11.4.183.1
typescript 5.0.3
```

