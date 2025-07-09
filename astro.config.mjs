// @ts-check
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { LOCALES } from "./src/lib/i18n";

export default defineConfig({
  site: "https://noriapi.com",
  vite: {
    plugins: [
      tsconfigPaths({ root: "./" }),
      Icons({
        compiler: "solid",
      }),
    ],
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  integrations: [solidJs(), mdx(), sitemap()],

  i18n: {
    locales: [...LOCALES],
    defaultLocale: "ja",
  },

  redirects: {
    "/": "/no-alt-win-menu",
  },

  prefetch: true,
});
