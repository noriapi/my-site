import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";
import blue from "@park-ui/panda-preset/colors/blue";
import green from "@park-ui/panda-preset/colors/green";
import indigo from "@park-ui/panda-preset/colors/indigo";
import neutral from "@park-ui/panda-preset/colors/neutral";
import orange from "@park-ui/panda-preset/colors/orange";
import purple from "@park-ui/panda-preset/colors/purple";

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
      tokens: {
        colors: {
          blue: blue.tokens,
          green: green.tokens,
          orange: orange.tokens,
          purple: purple.tokens,
        },
      },
      semanticTokens: {
        colors: {
          blue: blue.semanticTokens,
          green: green.semanticTokens,
          orange: orange.semanticTokens,
          purple: purple.semanticTokens,
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
      slotRecipes: {
        alert: {
          base: {
            root: {
              background: "colorPalette.a2",
              borderColor: "colorPalette.5",
            },
            icon: {
              color: "colorPalette.emphasized",
            },
            title: {
              color: "colorPalette.emphasized",
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
        scrollBehavior: "smooth",
        lineHeight: "1.9",
      },
      "*::selection": {
        bg: "colorPalette.a4",
      },
    },
  },
  outdir: "styled-system",
  jsxFramework: "solid",
});
