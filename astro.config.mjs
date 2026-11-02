import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// User site: https://<username>.github.io  (base stays "/")
// Keep this URL in sync with site.url in src/config.ts.
export default defineConfig({
  site: "https://matthewleepf.github.io",

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  }
});

