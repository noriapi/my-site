import { Link } from "@solidjs/meta";
import { RouteSectionProps } from "@solidjs/router";

export default function NoAltWinMenuLayout(props: RouteSectionProps) {
  return (
    <>
      <Link rel="icon" href="/no-alt-win-menu/favicon.ico" />
      {props.children}
    </>
  );
}
