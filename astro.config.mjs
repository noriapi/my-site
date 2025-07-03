// @ts-check
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import expressiveCode from "astro-expressive-code";
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

  integrations: [solidJs(), expressiveCode(), mdx(), sitemap()],

  i18n: {
    locales: [...LOCALES],
    defaultLocale: "ja",
  },

  redirects: {
    "/": "/no-alt-win-menu",
  },

  prefetch: true,
});
