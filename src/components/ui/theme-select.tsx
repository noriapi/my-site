import { createPrefersDark } from "@solid-primitives/media";
import { makePersisted, storageSync } from "@solid-primitives/storage";
import {
  createEffect,
  createMemo,
  createSignal,
  For,
  onMount,
  splitProps,
  type Signal,
} from "solid-js";
import { Dynamic, Portal } from "solid-js/web";
import { css, cx } from "styled-system/css";
import { flex, hstack, visuallyHidden } from "styled-system/patterns";
import { icon } from "styled-system/recipes";
import CheckIcon from "~icons/lucide/check";
import MoonIcon from "~icons/lucide/moon";
import SunIcon from "~icons/lucide/sun";
import SunMoonIcon from "~icons/lucide/sun-moon";
import { createListCollection, Select } from "./select";

const THEME_STORAGE_KEY = "theme";

export interface ThemeSelectProps
  extends Omit<
    Select.RootProps,
    "collection" | "value" | "onValueChange" | "class"
  > {
  lang?: string;
}

type ThemeSetting = "auto" | "light" | "dark";

const dict = {
  ja: {
    values: {
      auto: "自動",
      light: "ライト",
      dark: "ダーク",
    },

    label: "テーマ",
    placeholder: "テーマを選択",
  },

  en: {
    values: {
      auto: "Auto",
      light: "Light",
      dark: "Dark",
    },

    label: "Theme",
    placeholder: "Select a Theme",
  },
};

function isLang(mayLang?: string): mayLang is keyof typeof dict {
  return mayLang != null && mayLang in dict;
}

const icons = {
  dark: MoonIcon,
  light: SunIcon,
  auto: SunMoonIcon,
} as const;

export function ThemeSelect(props: ThemeSelectProps) {
  const [theme, setTheme] = createTheme();
  const [, selectProps] = splitProps(props, ["lang"]);

  const t = createMemo(() => dict[isLang(props.lang) ? props.lang : "en"]);

  const collection = createMemo(() =>
    createListCollection({
      items: Object.entries(t().values).map(([value, label]) => ({
        value,
        label,
      })),
    }),
  );

  return (
    <Select.Root
      positioning={{ sameWidth: false }}
      variant="ghost"
      skipAnimationOnMount
      {...selectProps}
      size="sm"
      collection={collection()}
      value={[theme()]}
      onValueChange={(e) => {
        const theme = e.value[0] as ThemeSetting;
        setTheme(theme);
      }}
      class={css({
        display: "flex",
        flexDir: "row",
        alignItems: "center",
        gap: "3",
      })}
    >
      <Select.Label>
        <span class={visuallyHidden()}>{t().label}</span>
      </Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText
            placeholder={t().placeholder}
            class={visuallyHidden()}
          />
          <Dynamic
            component={icons[theme()]}
            class={cx(icon(), css({ color: "fg.default" }))}
          />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <For each={collection().items}>
              {(item) => (
                <Select.Item item={item} class={css({ gap: "2" })}>
                  <Select.ItemText class={hstack()}>
                    <Dynamic
                      component={icons[item.value as ThemeSetting]}
                      class={icon()}
                    />
                    {item.label}
                  </Select.ItemText>
                  <Select.ItemIndicator class={flex()}>
                    <CheckIcon class={icon()} />
                  </Select.ItemIndicator>
                </Select.Item>
              )}
            </For>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}

function createTheme(): Signal<ThemeSetting> {
  const [setting, setSetting] = makePersisted(
    createSignal<ThemeSetting>("auto"),
    {
      name: THEME_STORAGE_KEY,
      sync: storageSync,
      serialize: (data) => data,
      deserialize: (data) => (isThemeSetting(data) ? data : "auto"),
    },
  );

  const prefersDark = createPrefersDark();
  const preferredTheme = () => (prefersDark() ? "dark" : "light");

  const theme = createMemo(() => {
    const setting2 = setting();
    return setting2 === "auto" ? preferredTheme() : setting2;
  });

  createEffect(() => {
    switch (theme()) {
      case "light": {
        return document.documentElement.classList.remove("dark");
      }

      case "dark": {
        return document.documentElement.classList.add("dark");
      }
    }
  });

  // NOTE: ハイドレーションミスマッチを回避するために必要
  // makePersistedの現在の実装では、サーバー上の初期値はシグナルの初期値である一方、
  // クライアント上での初期値はストレージから取得した値。そのためミスマッチが
  // 発生する。
  // 参照: https://github.com/solidjs-community/solid-primitives/pull/738
  const [mounted, setMounted] = createSignal(false);
  onMount(() => {
    setMounted(true);
  });
  const deferredSetting = createMemo<ThemeSetting>(() =>
    mounted() ? setting() : "auto",
  );

  return [deferredSetting, setSetting];
}

function isThemeSetting(value: string): value is ThemeSetting {
  switch (value) {
    case "auto":
    case "light":
    case "dark":
      return true;
    default:
      return false;
  }
}
