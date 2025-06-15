import { ark } from "@ark-ui/solid";
import type { ComponentProps } from "solid-js";
import { cva } from "styled-system/css";
import { styled } from "styled-system/jsx";

export const link = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    color: "fg.default",
    cursor: "pointer",
    fontWeight: "medium",
    gap: "1",
    transitionDuration: "normal",
    transitionTimingFunction: "default",
    "& svg": {
      width: "1em",
      height: "1em",
    },
  },

  variants: {
    variant: {
      trad: {
        color: "colorPalette.emphasized",
        textDecoration: "underline 0.1em transparent",
        textUnderlineOffset: "0.125em",
        _hover: {
          textDecorationColor: "colorPalette.emphasized",
        },
      },
      navbar: {
        px: "3",
        borderTopWidth: "medium",
        borderBottomWidth: "medium",
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        transitionProperty: "border-bottom-color",
        _hover: {
          backgroundColor: "gray.a3",
        },
        ["&.active"]: {
          borderBottomColor: "colorPalette.default",
        },
      },
      park: {
        textDecoration: "underline 0.1em transparent",
        textUnderlineOffset: "0.125em",
        transitionProperty: "text-decoration-color",
        _hover: {
          textDecorationColor: "colorPalette.default",
        },
      },
    },
  },

  defaultVariants: {
    variant: "trad",
  },
});

export type LinkProps = ComponentProps<typeof Link>;
export const Link = styled(ark.a, link);
