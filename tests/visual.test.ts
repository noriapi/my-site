import { expect, test, type Page } from "@playwright/test";

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

      await expect(page).toHaveScreenshot({ fullPage: true });
    });
  });
});

async function seeFullPage(page: Page) {
  await page.evaluate(async () => {
    function delay(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

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

async function waitForAllImages(page: Page) {
  for (const img of await page.locator("img").all()) {
    await expect(img).toHaveJSProperty("complete", true);
    await expect(img).not.toHaveJSProperty("naturalWidth", 0);
  }
}
