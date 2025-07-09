import type { ComponentProps } from "solid-js";
import { cva } from "styled-system/css";
import { styled } from "styled-system/jsx";
import {
  Callout,
  CalloutBody,
  CalloutTitle,
  type CalloutProps,
} from "./callout";
import { Heading, type HeadingProps } from "./heading";
import { Link } from "./link";
import { Text, type TextProps } from "./text";

export const A = Link;

export function H1(props: HeadingProps) {
  return <Heading {...props} as="h1" size="3xl" my="3" />;
}

export function H2(props: HeadingProps) {
  return (
    <Heading
      {...props}
      as="h2"
      size="2xl"
      mt="14"
      mb="2"
      borderBottomWidth="1px"
      borderColor="border.default"
      pb="2"
    />
  );
}

export function P(props: TextProps) {
  return <Text {...props} my="1rem" />;
}

export function Ul(props: ComponentProps<typeof styled.ul>) {
  return (
    <styled.ul {...props} listStyleType="disc" listStylePosition="inside" />
  );
}

export function Li(props: ComponentProps<typeof styled.li>) {
  return <styled.li {...props} my="1" />;
}

function StyledCallout(props: CalloutProps) {
  return <Callout css={{ my: "1rem" }} {...props} />;
}

export const components = {
  a: A,
  h1: H1,
  h2: H2,
  p: P,
  ul: Ul,
  li: Li,
  callout: StyledCallout,
  "callout-title": CalloutTitle,
  "callout-body": CalloutBody,
};

const mdContainerRecipe = cva({
  base: {
    "& code:not(pre > code)": {
      alignItems: "center",
      bg: "bg.subtle",
      borderRadius: "l2",
      color: "fg.default",
      display: "inline-flex",
      fontWeight: "medium!",
      fontFamily: "var(--fonts-code)",
      whiteSpace: "pre",

      // outline
      borderWidth: "1px",

      // md
      minHeight: "6",
      textStyle: "sm",
      px: "1",
      py: "1px",
    },
  },
});

export const MdContainer = styled("div", mdContainerRecipe);
