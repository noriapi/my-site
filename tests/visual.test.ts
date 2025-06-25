import { expect, test, type Page } from "@playwright/test";

const TARGET_PAGES: TargetPage[] = [
  { name: "blog", path: "/blog/" },
  { name: "blog article", path: "/blog/release-no-alt-win-menu-v0_1_1" },
  { name: "About", path: "/about" },
  { name: "No Alt Win Menu", path: "/no-alt-win-menu" },
];

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
