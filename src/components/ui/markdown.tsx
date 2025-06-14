import { styled } from "styled-system/jsx";
import { Heading, type HeadingProps } from "./heading";
import { Link } from "./link";
import { Text, type TextProps } from "./text";
import type { ComponentProps } from "solid-js";

export const A = Link;

export function H1(props: HeadingProps) {
  return <Heading {...props} size="3xl" my="3" />;
}

export function H2(props: HeadingProps) {
  return (
    <Heading
      {...props}
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

export const components = {
  a: A,
  h1: H1,
  h2: H2,
  p: P,
  ul: Ul,
  li: Li,
};
