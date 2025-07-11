import isAbsoluteUrl from "is-absolute-url";
import { Show, splitProps } from "solid-js";
import { type IconVariantProps, icon } from "styled-system/recipes";
import ExternalLinkIcon from "~icons/lucide/external-link";
import {
  Link as StyledLink,
  type LinkProps as StyledLinkProps,
} from "./styled/link";

export interface LinkProps extends StyledLinkProps {
  icon?: IconVariantProps;
  external?: boolean;
}

export function Link(props: LinkProps) {
  const [, omitChildren] = splitProps(props, ["children"]);

  const isExternal = () =>
    props.external || (props.href != null && isAbsoluteUrl(props.href));

  const targetProps = () => (isExternal() ? { target: "_blank" } : {});

  return (
    <StyledLink {...omitChildren} {...targetProps}>
      {props.children}
      <Show when={isExternal()}>
        <ExternalLinkIcon class={icon(props.icon)} />
      </Show>
    </StyledLink>
  );
}
