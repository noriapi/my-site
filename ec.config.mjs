import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { defineEcConfig } from "astro-expressive-code";

export default defineEcConfig({
  plugins: [pluginCollapsibleSections()],
  themes: ["github-light", "github-dark"],
  useDarkModeMediaQuery: false,
  themeCssSelector: (theme) => `.${theme.type}`,
});
