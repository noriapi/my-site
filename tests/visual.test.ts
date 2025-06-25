import { expect, test, type Page } from "@playwright/test";

const TARGET_PAGES: TargetPage[] = [{ name: "blog", path: "/blog/" }];

for (const targetPage of TARGET_PAGES) {
  test(targetPage.name, async ({ page }) => {
    await screenshot(page, targetPage);
  });
}

interface TargetPage {
  name: string;
  path: string;
}

async function screenshot(page: Page, targetPage: TargetPage) {
  await page.goto(targetPage.path);
  await expect(page).toHaveScreenshot({ fullPage: true });
}
