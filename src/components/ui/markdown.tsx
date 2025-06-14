import { styled } from "styled-system/jsx";
import { Heading, type HeadingProps } from "./heading";
import { Link } from "./link";
import { Text, type TextProps } from "./text";
import type { ComponentProps } from "solid-js";

export const A = Link;

export function H1(props: HeadingProps) {
  return <Heading {...props} size="4xl" my="3" />;
}

export function H2(props: HeadingProps) {
  return <Heading {...props} size="lg" mt="7" mb="2" />;
}

export function P(props: TextProps) {
  return <Text {...props} my="1.5" />;
}

export function Ul(props: ComponentProps<typeof styled.ul>) {
  return (
    <styled.ul {...props} listStyleType="disc" listStylePosition="inside" />
  );
}

export const components = {
  a: A,
  h1: H1,
  h2: H2,
  p: P,
  ul: Ul,
};
