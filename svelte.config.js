import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
const dev = process.argv.includes('dev');
console.log(dev);

const config = {
  kit: {
    adapter: adapter({
      pages: 'docs', 
      assets: 'docs', 
    }),
    paths: {
      base: dev ? '' : '/test',
    }
  },
  extensions: [".svelte", ".svelte.md", ".md", ".svx"],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".svelte.md", ".md", ".svx"],
      smartypants: { dashes: "oldschool" },
    }),
  ],
};

export default config;
