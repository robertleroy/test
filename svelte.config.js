import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
// import { base } from '$app/paths';
// const dev = process.argv.includes('dev');
// console.log(dev);

const config = {
  kit: {
    adapter: adapter(),   
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/test' : '',
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
