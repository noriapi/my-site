import * as Meta from "@solidjs/meta";
import { ComponentProps } from "solid-js";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { container } from "styled-system/patterns";
import { Heading } from "~/components/ui/heading";
import { Text, TextProps } from "~/components/ui/text";

export default function NoAltWinMenuPrivacyPolicy() {
  return (
    <main class={container({ maxWidth: "6xl" })}>
      <Meta.Title>プライバシーポリシー | No Alt Win Menu</Meta.Title>
      <Meta.Meta
        name="description"
        content="No Alt Win Menuのプライバシーポリシー"
      />

      <article class={css({ my: "5" })}>
        <section class={css({ my: "10" })}>
          <Heading as="h1" size="4xl" my="3">
            No Alt Win Menu
          </Heading>
          <P>
            本プライバシーポリシーは、当方が開発・提供するアプリケーション「No
            Alt Win Menu」（以下「本アプリ」）に適用されます。
            ユーザーのプライバシーを尊重し、以下の方針に基づいて情報を取り扱います。
          </P>
        </section>

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
            <br />
            <a href="mailto:examPle@examPle.com">examPle@examPle.com</a>
          </P>
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
      </article>
    </main>
  );
}

function H2(props: ComponentProps<"h2">) {
  return <Heading as="h2" size="lg" mb="2" {...props} />;
}

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
});

function P(props: TextProps) {
  return <Text as="p" my="1.5" {...props} />;
}
