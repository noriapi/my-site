import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    [
      "html",
      {
        host: "0.0.0.0",
        port: "9323",
        outputFolder: "playwright-output/playwright-report",
      },
    ],
    ["json", { outputFile: "playwright-output/results.json" }],
  ],
  use: {
    baseURL: "http://localhost:8787",
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
    { name: "Mobile Chrome", use: { ...devices["Pixel 5"] } },
    { name: "Mobile Safari", use: { ...devices["iPhone 12"] } },
  ],
  webServer: {
    command: "wrangler dev --ip=127.0.0.1 --log-level=warn",
    url: "http://localhost:8787",
    stdout: "pipe",
    reuseExistingServer: !process.env.CI,
  },
});
