import { A } from "@solidjs/router";
import { splitProps } from "solid-js";
import {
  Link as StyledLink,
  type LinkProps as StyledLinkProps,
} from "./styled/link";
import { Assign } from "styled-system/types";

export type LinkProps = Assign<
  StyledLinkProps,
  {
    href: string;
    replace?: boolean | undefined;
    noScroll?: boolean | undefined;
    state?: unknown | undefined;
    inactiveClass?: string | undefined;
    activeClass?: string | undefined;
    end?: boolean | undefined;
  }
>;

export function Link(props: LinkProps) {
  const [anchorProps, linkProps] = splitProps(props, [
    "href",
    "replace",
    "noScroll",
    "state",
    "inactiveClass",
    "activeClass",
    "end",
  ]);

  return (
    <StyledLink
      {...linkProps}
      asChild={(linkProps) => <A {...anchorProps} {...linkProps} />}
    />
  );
}
