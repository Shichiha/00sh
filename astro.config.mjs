import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";


export default defineConfig({
  outDir: "./build",
  integrations: [tailwind(), compress()],
});