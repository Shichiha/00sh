import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import image from "@astrojs/image";


export default defineConfig({
  integrations: [tailwind(), image(), compress(
    {
      css: true,
      js: true,
      html: true,
      img: true,
      svg: true,
    }
  )],
});