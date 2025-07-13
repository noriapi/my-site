import type { ComponentProps } from "solid-js";
import { cva } from "styled-system/css";
import { styled } from "styled-system/jsx";

import {
  Callout,
  CalloutBody,
  type CalloutProps,
  CalloutTitle,
} from "./callout";
import { Heading, type HeadingProps } from "./heading";
import { Link } from "./link";
import { Text, type TextProps } from "./text";

export const A = Link;

export function H1(props: HeadingProps) {
  // h1 タグは別箇所でページタイトルとしてレンダーするため
  // ここでは h1 も h2 とし、見た目だけ変える。
  return <Heading {...props} as="h2" size="3xl" my="3" scrollMarginTop="6" />;
}

export function H2(props: HeadingProps) {
  return (
    <Heading
      {...props}
      as="h2"
      size="2xl"
      mt="14"
      mb="4"
      borderBottomWidth="1px"
      borderColor="border.default"
      pb="2"
      scrollMarginTop="6"
      css={{
        "h1 + section > &": {
          mt: "0.5",
        },
      }}
    />
  );
}

export function H3(props: HeadingProps) {
  return (
    <Heading
      {...props}
      as="h3"
      size="xl"
      mt="11"
      mb="3"
      scrollMarginTop="6"
      css={{
        "h2 + section > &": {
          mt: "1",
        },
      }}
    />
  );
}

export function H4(props: HeadingProps) {
  return (
    <Heading
      {...props}
      as="h4"
      size="lg"
      mt="11"
      mb="2"
      scrollMarginTop="6"
      css={{
        "h3 + section > &": {
          mt: "1",
        },
      }}
    />
  );
}

export function H5(props: HeadingProps) {
  return (
    <Heading
      {...props}
      as="h5"
      size="md"
      mt="11"
      mb="2"
      scrollMarginTop="6"
      css={{
        "h4 + section > &": {
          mt: "1",
        },
      }}
    />
  );
}

export function H6(props: HeadingProps) {
  return (
    <Heading
      {...props}
      as="h6"
      size="sm"
      mt="8"
      mb="2"
      scrollMarginTop="6"
      css={{
        "h5 + section > &": {
          mt: "1",
        },
      }}
    />
  );
}

export function P(props: TextProps) {
  return (
    <Text
      {...props}
      my="6"
      css={{
        "h1 + &, h2 + &, h3 + &, h4 + &, h5 + &, h6 + &": {
          mt: "0",
        },
      }}
    />
  );
}

export function Ul(props: ComponentProps<typeof styled.ul>) {
  return (
    <styled.ul
      {...props}
      listStyleType="disc"
      listStylePosition="inside"
      my="5"
      ps="1"
      lineHeight="1.7"
    />
  );
}

export function Ol(props: ComponentProps<typeof styled.ol>) {
  return (
    <styled.ol
      {...props}
      listStyleType="decimal"
      listStylePosition="inside"
      my="5"
      ps="1"
      lineHeight="1.7"
    />
  );
}

export function Li(props: ComponentProps<typeof styled.li>) {
  return (
    <styled.li
      {...props}
      my="1"
      css={{
        "&::marker": {
          color: "fg.muted",
          fontWeight: "semibold",
        },
      }}
    />
  );
}

function StyledCallout(props: CalloutProps) {
  return <Callout css={{ my: "6" }} {...props} />;
}

export const components = {
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  ul: Ul,
  ol: Ol,
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
