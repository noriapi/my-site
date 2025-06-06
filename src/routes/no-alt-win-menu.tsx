import { Title } from "@solidjs/meta";
import { css } from "styled-system/css";
import { Box, HStack } from "styled-system/jsx";
import { container } from "styled-system/patterns/container.mjs";
import { Heading } from "~/components/ui/heading";
import { Kbd } from "~/components/ui/kbd";
import { Text } from "~/components/ui/text";

export default function NoAltWinMenu() {
  return (
    <main class={container({ maxWidth: "6xl" })}>
      <Title>No Alt Win Menu</Title>

      <Box mt="10">
        <Heading as="h1" size="5xl">
          No Alt Win Menu
        </Heading>
        <Text>
          AltキーやWinキーを押したときに表示されるメニューを抑制するアプリ
        </Text>
      </Box>

      <Box backgroundColor="black.a6" height="400px" my="10">
        ここに大きな画像
      </Box>

      <section class={css({ mt: "10" })}>
        <Heading as="h2" size="xl" mb="3">
          主な機能
        </Heading>

        <ul class={css({ listStyleType: "disc", listStylePosition: "inside" })}>
          <li class={css({ my: "2" })}>
            <Kbd size="lg">Alt</Kbd>キーを離したときにメニューを出させない
          </li>
          <li class={css({ my: "2" })}>
            <Kbd size="lg">Win</Kbd>
            キーを離したときにスタートメニューを出させない
          </li>
          <li class={css({ my: "2" })}>
            <Text as="em" fontWeight="semibold">
              特定のアプリで
            </Text>
            だけメニュー表示を抑制
          </li>
          <li class={css({ my: "2" })}>
            <Text as="em" fontWeight="semibold">
              長押し
            </Text>
            したときだけメニュー表示を抑制
          </li>
        </ul>
      </section>

      <section class={css({ mt: "10" })}>
        <Heading as="h2" size="xl">
          ダウンロード
        </Heading>
        <HStack justifyContent="center" mt="5">
          <Box>Microsoft Store からダウンロード</Box>
        </HStack>
      </section>

      <div>不具合報告</div>
    </main>
  );
}
