import { SegmentGroup } from "@ark-ui/solid";
import scrollSpy from "simple-scrollspy";
import { createSignal, For, onMount } from "solid-js";
import { css, cx } from "styled-system/css";
import { segmentGroup, text } from "styled-system/recipes";
import { translator } from "~/lib/i18n";

interface TocProps {
  entries?: FlattenedTocEntry[];
  locale?: string;
}

const segmentStyles = segmentGroup({
  size: { base: "md", md: "sm" },
});

export function TableOfContent(props: TocProps) {
  const t = translator(props.locale);
  const [currentElement, setCurrentElement] = createSignal<string>();

  onMount(() => {
    scrollSpy("#table-of-contents", {
      sectionClass: "h1, h2, h3, h4, h5, h6",
      menuActiveTarget: "a",
      offset: 0,
      onActive: (elem) => {
        const href = elem.getAttribute("href") ?? undefined;
        setCurrentElement(href);
      },
    });
  });

  return (
    <nav id="table-of-contents">
      <p
        class={cx(
          text(),
          css({
            textStyle: "sm",
            fontWeight: "semibold",
            py: "1.5",
            borderLeftWidth: "1px",
            ps: "4",
          }),
        )}
      >
        {t({
          ja: "目次",
          en: "On this page",
        })}
      </p>
      <SegmentGroup.Root
        value={currentElement()}
        orientation="vertical"
        class={cx(
          segmentStyles.root,
          css({
            gap: "0",
          }),
        )}
      >
        <For each={props.entries}>
          {(entry) => (
            <a
              href={entry.url}
              class={css({
                display: "flex",
                width: "fit-content",
                scrollMarginTop: "10",
              })}
            >
              <SegmentGroup.Item
                value={entry.url}
                data-orientation="vertical"
                class={cx(
                  segmentStyles.item,
                  css({
                    fontWeight: "normal",
                    ps: entry.depth === 0 ? "4" : "8",
                    pe: "4",
                  }),
                )}
              >
                <SegmentGroup.ItemControl class={segmentStyles.itemControl} />
                <SegmentGroup.ItemText class={segmentStyles.itemText}>
                  {entry.title}
                </SegmentGroup.ItemText>
              </SegmentGroup.Item>
            </a>
          )}
        </For>
        <SegmentGroup.Indicator class={segmentStyles.indicator} />
      </SegmentGroup.Root>
    </nav>
  );
}

export interface TocEntry {
  title: string;
  url: string;
  items: TocEntry[];
}

export interface FlattenedTocEntry extends Omit<TocEntry, "items"> {
  depth: number;
}

export function flattenTocEntries(
  entries: TocEntry[] = [],
  depth = 0,
): FlattenedTocEntry[] {
  return entries.reduce<FlattenedTocEntry[]>(
    (acc, entry) =>
      acc.concat(
        { title: entry.title, url: entry.url, depth },
        flattenTocEntries(entry.items, depth + 1),
      ),
    [],
  );
}
