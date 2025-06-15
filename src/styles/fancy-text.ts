import { css } from "styled-system/css";

export const fancyTextStyles = css.raw({
  fontFamily:
    "MS Gothic, MS PGothic, var(--global-font-body, var(--font-fallback))",
  fontStyle: "italic",
  fontOpticalSizing: "none",
  fontSmooth: "never",
  fontSmoothing: "none",
});
