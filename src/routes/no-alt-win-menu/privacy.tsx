import * as Meta from "@solidjs/meta";
import { useSearchParams } from "@solidjs/router";
import { CheckIcon, ChevronsUpDownIcon, LanguagesIcon } from "lucide-solid";
import { ComponentProps, createMemo, For } from "solid-js";
import { Dynamic } from "solid-js/web";
import { css } from "styled-system/css";
import { Container, Flex, styled } from "styled-system/jsx";
import { Heading } from "~/components/ui/heading";
import { Link } from "~/components/ui/link";
import { createListCollection, Select } from "~/components/ui/select";
import { Text, TextProps } from "~/components/ui/text";

const LANGUAGES = ["ja", "en"] as const;
type Language = (typeof LANGUAGES)[number];

export default function NoAltWinMenuPrivacyPolicy() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedLanguage = createMemo(() => {
    const langs = searchParams["lang"];
    const lang = Array.isArray(langs) ? langs[0] : langs;
    if (lang && LANGUAGES.includes(lang as Language)) {
      return lang as Language;
    }
  });

  const language = createMemo(() => {
    return selectedLanguage() ?? "en";
  });

  const setLanguage = (language: Language) => {
    setSearchParams({ lang: language });
  };

  const collection = createListCollection({
    items: [
      { label: "日本語", value: "ja" },
      { label: "English", value: "en" },
    ],
  });

  return (
    <Container maxWidth="6xl">
      <Meta.Link
        rel="alternate"
        hreflang="en"
        href="https://noriapi.com/no-alt-win-menu/privacy?lang=en"
      />
      <Meta.Link
        rel="alternate"
        hreflang="ja"
        href="https://noriapi.com/no-alt-win-menu/privacy?lang=ja"
      />
      <Meta.Link
        rel="canonical"
        href="https://noriapi.com/no-alt-win-menu/privacy?lang=en"
      />

      <Flex justifyContent="flex-end" my="4">
        <Select.Root
          positioning={{ sameWidth: true }}
          collection={collection}
          value={[language()]}
          onValueChange={(e) => setLanguage(e.value[0] as Language)}
          class={css({
            display: "flex",
            alignItems: "center",
            gap: "3",
          })}
          defaultOpen={selectedLanguage() == null}
        >
          <Select.Label>
            <LanguagesIcon />
          </Select.Label>
          <Select.Control class={css({ width: "2xs" })}>
            <Select.Trigger>
              <Select.ValueText placeholder="Select Language" />
              <ChevronsUpDownIcon />
            </Select.Trigger>
          </Select.Control>
          <Select.Positioner>
            <Select.Content>
              <For each={collection.items}>
                {(item) => (
                  <Select.Item item={item}>
                    <Select.ItemText>{item.label}</Select.ItemText>
                    <Select.ItemIndicator>
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                )}
              </For>
            </Select.Content>
          </Select.Positioner>
        </Select.Root>
      </Flex>
      <Dynamic component={options[language()]} />
    </Container>
  );
}

const options = {
  ja: Ja,
  en: En,
};

function Ja() {
  return (
    <Main>
      <Meta.Title>プライバシーポリシー | No Alt Win Menu</Meta.Title>
      <Meta.Meta
        name="description"
        content="No Alt Win Menuのプライバシーポリシー"
      />

      <Article>
        <Section variant="head">
          <H1>プライバシーポリシー</H1>
          <P>
            本プライバシーポリシーは、当方が開発・提供するアプリケーション「No
            Alt Win Menu」（以下「本アプリ」）に適用されます。
            ユーザーのプライバシーを尊重し、以下の方針に基づいて情報を取り扱います。
          </P>
        </Section>

        <Section>
          <H2>1. 収集する情報</H2>
          <P>本アプリは、以下の情報を収集する場合があります：</P>
          <Ul>
            <li>
              アプリの使用状況に関する匿名の統計情報（クラッシュログ、操作ログ等）
            </li>
            <li>使用している端末の情報（OSバージョン、画面サイズ等）</li>
          </Ul>
          <P>
            これらの情報には、氏名・住所・メールアドレスなどの個人を特定できる情報は含まれません。
          </P>
        </Section>

        <Section>
          <H2>2. 情報の使用目的</H2>
          <P>収集した情報は、以下の目的で使用されます：</P>
          <Ul>
            <li>アプリの動作安定性向上、不具合の修正</li>
            <li>ユーザー体験の改善（機能改善・最適化）</li>
          </Ul>
        </Section>

        <Section>
          <H2>3. 情報の送信および第三者提供</H2>
          <P>
            本アプリでは、以下の外部サービスを通じて情報を送信・処理する場合があります：
          </P>
          <Ul>
            <li>
              クラッシュレポートサービス（例：Sentry、Microsoft APP Center
              など）
            </li>
          </Ul>
          <P>
            上記のサービスは、匿名化された情報を使用し、個人の特定を目的とした利用は行いません。
          </P>
        </Section>

        <Section>
          <H2>4. 通信について</H2>
          <P>
            本アプリは、クラッシュ情報やアップデート確認などの目的でインターネット通信を行う場合があります。
            通信は必要最小限に限定され、ユーザーの明示的な操作なしに個人情報を送信することはありません。
          </P>
        </Section>

        <Section>
          <H2>5. セキュリティ</H2>
          <P>
            収集された情報は、外部からの不正アクセスや漏えいが起こらないよう、適切な手段により管理されます。
          </P>
        </Section>

        <Section>
          <H2>6. ユーザーの選択肢</H2>
          <P>
            本アプリでは、クラッシュレポートなどの送信を無効にする機能は現在のところ提供していませんが、今後のアップデートで対応を検討しています。
          </P>
        </Section>

        <Section>
          <H2>7. 適用範囲</H2>
          <P>
            このプライバシーポリシーは、「No Alt Win Menu」にのみ適用されます。
          </P>
        </Section>

        <Section>
          <H2>8. お問い合わせ</H2>
          <P>
            本ポリシーに関するご質問・ご意見は、以下のメールアドレスまでご連絡ください：
          </P>
          <MailLink />
        </Section>

        <Section>
          <H2>9. 改定について</H2>
          <P>
            本ポリシーの内容は、必要に応じて変更されることがあります。重要な変更がある場合は、本ページまたはアプリ内で通知します。
          </P>
        </Section>

        <Section>
          <H2>10. 改定履歴</H2>
          <Ul>
            <li>
              <strong>2025年6月10日：</strong> 初版公開
            </li>
          </Ul>
        </Section>

        <footer>
          <P>最終改定日：2025年6月10日</P>
        </footer>
      </Article>
    </Main>
  );
}

function En() {
  return (
    <Main>
      <Meta.Title>Privacy Policy | No Alt Win Menu</Meta.Title>
      <Meta.Meta
        name="description"
        content="Privacy Policy for No Alt Win Menu"
      />

      <Article>
        <Section variant="head">
          <H1>Privacy Policy</H1>
          <P>
            This privacy policy applies to the application "No Alt Win Menu"
            (hereinafter referred to as "the App") developed and provided by us.
            We are committed to respecting users' privacy and handling data in
            accordance with the following principles.
          </P>
        </Section>

        <Section>
          <H2>1. Information Collected</H2>
          <P>The App may collect the following information:</P>
          <Ul>
            <li>
              Anonymous statistical data regarding app usage (e.g., crash logs,
              operation logs)
            </li>
            <li>Device information (e.g., OS version, screen size)</li>
          </Ul>
          <P>
            This data does not include personally identifiable information such
            as your name, address, or email address.
          </P>
        </Section>

        <Section>
          <H2>2. Purpose of Use</H2>
          <P>Collected information is used for the following purposes:</P>
          <Ul>
            <li>Improving the stability and performance of the App</li>
            <li>
              Enhancing the user experience (feature improvements and
              optimization)
            </li>
          </Ul>
        </Section>

        <Section>
          <H2>3. Information Transmission and Third Parties</H2>
          <P>
            The App may transmit and process data via third-party services,
            including:
          </P>
          <Ul>
            <li>
              Crash reporting services (e.g., Sentry, Microsoft App Center)
            </li>
          </Ul>
          <P>
            These services use anonymized data and are not intended to identify
            individual users.
          </P>
        </Section>

        <Section>
          <H2>4. Network Communication</H2>
          <P>
            The App may communicate with the internet for purposes such as crash
            reporting and update checking. No personally identifiable data is
            transmitted without the user's explicit interaction.
          </P>
        </Section>

        <Section>
          <H2>5. Security</H2>
          <P>
            Collected information is managed appropriately to prevent
            unauthorized access, leakage, or misuse.
          </P>
        </Section>

        <Section>
          <H2>6. User Options</H2>
          <P>
            Currently, the App does not provide an option to disable crash
            reporting, but we are considering offering such a feature in future
            updates.
          </P>
        </Section>

        <Section>
          <H2>7. Scope of Application</H2>
          <P>
            This privacy policy applies solely to the "No Alt Win Menu"
            application.
          </P>
        </Section>

        <Section>
          <H2>8. Contact</H2>
          <P>
            If you have any questions or comments regarding this policy, please
            contact us at:
          </P>
          <MailLink />
        </Section>

        <Section>
          <H2>9. Policy Updates</H2>
          <P>
            This policy may be updated as necessary. Any significant changes
            will be announced on this page or within the App.
          </P>
        </Section>

        <Section>
          <H2>10. Revision History</H2>
          <Ul>
            <li>
              <strong>June 10, 2025:</strong> Initial version published
            </li>
          </Ul>
        </Section>

        <footer>
          <P>Last updated: June 10, 2025</P>
        </footer>
      </Article>
    </Main>
  );
}

function MailLink() {
  return <Link href="mailto:noriapi04@gmail.com">noriapi04@gmail.com</Link>;
}

function H1(props: ComponentProps<"h1">) {
  return <Heading as="h1" size="4xl" my="3" {...props} />;
}

function H2(props: ComponentProps<"h2">) {
  return <Heading as="h2" size="lg" mb="2" {...props} />;
}

const Main = styled("main", {
  base: {
    maxWidth: "4xl",
  },
});

const Article = styled("article", {
  base: {
    my: "5",
  },
});

const Ul = styled("ul", {
  base: {
    listStyleType: "disc",
    listStylePosition: "inside",
  },
});

const Section = styled("section", {
  base: {
    my: "7",
  },
  variants: {
    variant: {
      head: {
        my: "10",
      },
    },
  },
});

function P(props: TextProps) {
  return <Text as="p" my="1.5" {...props} />;
}
