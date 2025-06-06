import { Title } from "@solidjs/meta";
import { css } from "styled-system/css";
import { Box, Center, styled } from "styled-system/jsx";
import { container } from "styled-system/patterns";
import { Card } from "~/components/ui/card";
import { Heading } from "~/components/ui/heading";
import { Link } from "~/components/ui/link";
import { Text } from "~/components/ui/text";

export default function About() {
  return (
    <main class={container({ maxWidth: "6xl" })}>
      <Title>noriapiのホーム</Title>

      <Box mt="10" textAlign="center">
        <Heading as="h1" size="2xl" mb="2" css={fineTextStyles}>
          noriapiのホーム
        </Heading>

        <Text>noriapiのホームページです。</Text>
      </Box>

      <styled.section mt="20">
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          mb="4"
          css={fineTextStyles}
        >
          作ったもの
        </Heading>

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
