import { expect, test, type Page } from "@playwright/test";
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
      await seeFullPage(page);
      await waitForAllImages(page);

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

async function seeFullPage(page: Page) {
  await page.evaluate(async () => {
    // scroll to bottom
    for (let i = 0; i < document.body.scrollHeight; i += 100) {
      window.scrollTo(0, i);
      await delay(50);
    }

    // scroll to top
    for (let i = document.body.scrollHeight; i > 0; i -= 100) {
      window.scrollTo(0, i);
      await delay(50);
    }
  });
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForAllImages(page: Page) {
  for (const img of await page.getByRole("img").all()) {
    await expect(img).toHaveJSProperty("complete", true);
    await expect(img).not.toHaveJSProperty("naturalWidth", 0);
  }
}
