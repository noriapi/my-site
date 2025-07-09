import type { JSX } from "solid-js/jsx-runtime";
import { Dynamic } from "solid-js/web";
import { css, cx, type Styles } from "styled-system/css";
import { alert } from "styled-system/recipes";
import InfoIcon from "~icons/lucide/info";
import LightbulbIcon from "~icons/lucide/lightbulb";
import MessageSquareWarningIcon from "~icons/lucide/message-square-warning";
import OctagonAlertIcon from "~icons/lucide/octagon-alert";
import TriangleAlertIcon from "~icons/lucide/triangle-alert";

const alertStyles = alert();

const icons = {
  note: InfoIcon,
  tip: LightbulbIcon,
  important: MessageSquareWarningIcon,
  warning: TriangleAlertIcon,
  caution: OctagonAlertIcon,
} as const;

type CalloutType = keyof typeof icons;

function getCalloutType(type: string) {
  const lowerCaseType = type.toLocaleLowerCase();
  if (Object.prototype.hasOwnProperty.call(icons, lowerCaseType)) {
    return lowerCaseType as CalloutType;
  }
  return undefined;
}

function getCalloutIcon(type: string) {
  const validType = getCalloutType(type);
  return validType ? icons[validType] : undefined;
}

export interface CalloutProps {
  type: string;
  isFoldable: boolean;
  defaultFolded?: boolean;
  title?: string;
  children: JSX.Element;
  css?: Styles;
}

export function Callout(props: CalloutProps) {
  return (
    <div
      class={cx(
        alertStyles.root,
        css(
          {
            '&[data-callout-type="note"]': { colorPalette: "blue" },
            '&[data-callout-type="tip"]': { colorPalette: "green" },
            '&[data-callout-type="important"]': { colorPalette: "purple" },
            '&[data-callout-type="warning"]': { colorPalette: "orange" },
            '&[data-callout-type="caution"]': { colorPalette: "red" },
          },
          props.css,
        ),
      )}
      data-callout-type={getCalloutType(props.type) ?? props.type}
    >
      <Dynamic
        component={getCalloutIcon(props.type)}
        class={alertStyles.icon}
      />
      <div class={alertStyles.content}>{props.children}</div>
    </div>
  );
}

export function CalloutTitle(props: CalloutProps) {
  return <div class={alertStyles.title}>{props.children}</div>;
}

export function CalloutBody(props: CalloutProps) {
  return (
    <div
      class={cx(
        alertStyles.description,
        css({
          "& > *": {
            _first: {
              marginTop: "0",
            },
            _last: {
              marginBottom: "0",
            },
          },
        }),
      )}
    >
      {props.children}
    </div>
  );
}
