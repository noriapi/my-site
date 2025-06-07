import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";
import indigo from "@park-ui/panda-preset/colors/indigo";
import neutral from "@park-ui/panda-preset/colors/neutral";

export default defineConfig({
  preflight: true,
  presets: [
    createPreset({
      accentColor: indigo,
      grayColor: neutral,
      radius: "xs",
    }),
  ],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  conditions: {
    extend: {
      dark: [".dark &", "@media (prefers-color-scheme: dark)"],
    },
  },
  theme: { extend: {} },
  globalCss: {
    extend: {
      html: {
        "--global-font-body":
          "Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, BIZ UDPGothic, Meiryo, sans-serif",
      },
    },
  },
  jsxFramework: "solid",
  outdir: "styled-system",
});
