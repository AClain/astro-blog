// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],

  markdown: {
    remarkPlugins: [remarkMath, remarkBreaks],
    // rehypePlugins: [rehypeKatex],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          loader: { load: ["[tex]/ams"] },
          tex: {
            packages: { "[+]": ["ams", "mathbb"] },
            inlineMath: [["$", "$"]],
            displayMath: [["$$", "$$"]],
          },
        },
      ],
    ],
  },
});
