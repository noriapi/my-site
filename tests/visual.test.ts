import { test } from "@playwright/test";
import path from "node:path";

test.describe("Take screenshots", () => {
  [
    { name: "blog", path: "/blog/" },
    { name: "blog article", path: "/blog/release-no-alt-win-menu-v0_1_1" },
    { name: "About", path: "/about" },
    { name: "No Alt Win Menu", path: "/no-alt-win-menu" },
  ].forEach((targetPage) => {
    test(targetPage.name, async ({ page }, info) => {
      await page.goto(targetPage.path, { waitUntil: "networkidle" });

      const ss = path.normalize(
        path.format({
          dir: path.join("screenshots", targetPage.path),
          name: info.project.name,
          ext: "png",
        }),
      );

      await page.screenshot({ path: ss, fullPage: true });
    });
  });
});
