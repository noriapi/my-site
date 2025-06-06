import { usePrefersDark } from "@solid-primitives/media";
import { Accessor, createEffect } from "solid-js";

function createThemeEffect(theme: Accessor<"light" | "dark">) {
  createEffect(() => {
    if (theme() === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
}

export function createPrefersDarkEffect() {
  const prefersDark = usePrefersDark();
  const theme = () => (prefersDark() ? "dark" : "light");
  createThemeEffect(theme);
}
