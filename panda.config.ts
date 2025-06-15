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
      radius: "md",
    }),
  ],
  include: ["./src/**/*.{ts,tsx,js,jsx,astro}"],
  exclude: [],
  conditions: {
    extend: {},
  },
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          fg: {
            link: {
              value: {
                _light: indigo.tokens.light["10"].value,
                _dark: indigo.tokens.dark["11"].value,
              },
            },
          },
        },
      },
    },
  },
  globalCss: {
    extend: {
      html: {
        "--global-font-body":
          "Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, BIZ UDPGothic, Meiryo, sans-serif",
      },
      "*::selection": {
        bg: "colorPalette.a4",
      },
    },
  },
  outdir: "styled-system",
  jsxFramework: "solid",
});
