// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tsconfigPaths from "vite-tsconfig-paths";

import solidJs from "@astrojs/solid-js";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tsconfigPaths({ root: "./" })],
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  integrations: [solidJs(), mdx(), icon()],

  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
  },
});