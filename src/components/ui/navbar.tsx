import { css } from "styled-system/css";
import { Container, HStack } from "styled-system/jsx";
import { Link, LinkProps } from "./link";

export function Navbar() {
  return (
    <nav
      class={css({
        position: "sticky",
        borderBottomWidth: "medium",
      })}
    >
      <Container maxWidth="6xl">
        <HStack gap="10" minHeight="3rem" alignItems="stretch">
          <HStack flexGrow="1" alignItems="stretch">
            <LinkItem href="/no-alt-win-menu">No Alt Win Menu</LinkItem>
          </HStack>
          <HStack alignItems="stretch">
            <LinkItem href="/about" textStyle="md">
              noriapi
            </LinkItem>
          </HStack>
        </HStack>
      </Container>
    </nav>
  );
}

function LinkItem(props: LinkProps) {
  return <Link textStyle="xl" variant="navbar" {...props} />;
}
