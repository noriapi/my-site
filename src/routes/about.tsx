import * as Meta from "@solidjs/meta";
import { ParentProps, splitProps } from "solid-js";
import { css } from "styled-system/css";
import { Box, Center, HstackProps, styled } from "styled-system/jsx";
import { HStack } from "styled-system/jsx/hstack.mjs";
import { container } from "styled-system/patterns";
import { Card } from "~/components/ui/card";
import { Heading } from "~/components/ui/heading";
import { Link } from "~/components/ui/link";
import { Text } from "~/components/ui/text";

export default function About() {
  return (
    <main class={container({ maxWidth: "6xl" })}>
      <Meta.Title>noriapiのホーム</Meta.Title>
      <Meta.Link
        rel="icon"
        type="image/png"
        href="/noriapi/favicon-96x96.png"
        sizes="96x96"
      />
      <Meta.Link rel="icon" type="image/svg+xml" href="/noriapi/favicon.svg" />
      <Meta.Link rel="shortcut icon" href="/noriapi/favicon.ico" />
      <Meta.Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/noriapi/apple-touch-icon.png"
      />
      <Meta.Link rel="manifest" href="/noriapi/site.webmanifest" />

      <Box mt="10" textAlign="center">
        <Ojisan mb="2">
          <Heading as="h1" size="2xl" css={fineTextStyles}>
            noriapiのホーム
          </Heading>
        </Ojisan>

        <Text>noriapiのホームページです。</Text>
      </Box>

      <styled.section mt="28">
        <Ojisan mb="6">
          <Heading as="h2" size="2xl" css={fineTextStyles}>
            作ったもの
          </Heading>
        </Ojisan>

        <Center>
          <ul>
            <li>
              <Card.Root>
                <Card.Header>
                  <Link href="/no-alt-win-menu" fontSize="xl">
                    No Alt Win Menu
                  </Link>
                </Card.Header>
                <Card.Body fontSize="sm">
                  AltキーやWinキーを押したときに表示されるメニューを抑制するアプリ
                </Card.Body>
              </Card.Root>
            </li>
          </ul>
        </Center>
      </styled.section>
    </main>
  );
}

const fineTextStyles = css.raw({
  fontFamily:
    "MS Gothic, MS PGothic, var(--global-font-body, var(--font-fallback))",
  fontStyle: "italic",
  fontOpticalSizing: "none",
  fontSmooth: "never",
  fontSmoothing: "none",
});

function Ojisan(props: HstackProps) {
  const [, hstackProps] = splitProps(props, ["children"]);

  return (
    <HStack justifyContent="center" gap="5" {...hstackProps}>
      <OjisanSolo />
      {props.children}
      <OjisanSolo />
    </HStack>
  );
}

function OjisanSolo() {
  return (
    <img
      src="/noriapi/favicon.ico"
      alt="ojisan"
      class={css({ width: "10", height: "10", transform: "skew(-10deg)" })}
    />
  );
}
