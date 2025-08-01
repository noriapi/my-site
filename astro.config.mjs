// @ts-check
import cloudflare from "@astrojs/cloudflare";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import sectionize from "@hbsnow/rehype-sectionize";
import remarkCallout from "@r4ai/remark-callout";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
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

  markdown: {
    remarkPlugins: [
      [
        remarkCallout,
        {
          root: calloutFn("callout"),
          title: calloutFn("callout-title"),
          body: calloutFn("callout-body"),
        },
      ],
    ],
    rehypePlugins: [
      rehypeHeadingIds,
      [
        sectionize,
        {
          properties: {
            // デフォルトで付与される `heading` クラスを上書き
            className: undefined,
          },
        },
      ],
    ],
  },
});

/**
 * @param {string} tagName
 */
function calloutFn(tagName) {
  /** @param {{ type: string; isFoldable: boolean; defaultFolded?: boolean; title?: string }} callout */
  return (callout) => ({
    tagName,
    properties: callout,
  });
}
