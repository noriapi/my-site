import * as Meta from "@solidjs/meta";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-solid";
import { For } from "solid-js";
import { css } from "styled-system/css";
import { Box, HStack } from "styled-system/jsx";
import { container } from "styled-system/patterns/container.mjs";
import { Carousel } from "~/components/ui/carousel";
import { Heading } from "~/components/ui/heading";
import { IconButton } from "~/components/ui/icon-button";
import { Kbd } from "~/components/ui/kbd";
import { Text } from "~/components/ui/text";

import altSrc1x from "~/assets/images/no-alt-win-menu-alt-ja.png?h=300&format=webp&imagetools";
import altSrc2x from "~/assets/images/no-alt-win-menu-alt-ja.png?h=600&format=webp&imagetools";
import altSrc3x from "~/assets/images/no-alt-win-menu-alt-ja.png?h=900&format=webp&imagetools";
import winSrc1x from "~/assets/images/no-alt-win-menu-win-ja.png?h=300&format=webp&imagetools";
import winSrc2x from "~/assets/images/no-alt-win-menu-win-ja.png?h=600&format=webp&imagetools";
import winSrc3x from "~/assets/images/no-alt-win-menu-win-ja.png?h=900&format=webp&imagetools";

const altSrcset = `${altSrc1x}, ${altSrc2x} 2x, ${altSrc3x} 3x`;
const winSrcset = `${winSrc1x}, ${winSrc2x} 2x, ${winSrc3x} 3x`;

export default function NoAltWinMenu() {
  return (
    <main class={container({ maxWidth: "6xl" })}>
      <Meta.Title>No Alt Win Menu ― メニュー表示させないアプリ</Meta.Title>
      <Meta.Link rel="icon" href="/no-alt-win-menu/favicon.ico" />
      <Meta.Meta
        name="description"
        content="AltキーやWinキーを離したときにメニューを表示させないアプリ、No Alt Win Menuの紹介。"
      />

      <Box mt="10">
        <Heading as="h1" size="5xl">
          No Alt Win Menu
        </Heading>
        <Text>AltキーやWinキーを離したときにメニューを表示させないアプリ</Text>
      </Box>

      <HStack overflow="scroll" width="full" my="20">
        <img
          srcset={altSrcset}
          alt="alt"
          class={css({
            height: "300px",
            objectFit: "contain",
            borderRadius: "l3",
          })}
        />

        <img
          srcset={winSrcset}
          alt="win"
          class={css({
            height: "300px",
            objectFit: "contain",
            borderRadius: "l3",
          })}
        />
      </HStack>

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
