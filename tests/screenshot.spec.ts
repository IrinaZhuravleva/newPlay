import { test, expect } from "@playwright/test";
// npx playwright test --update-snapshots

test("assert a screenshot", async ({ page }) => {
    await page.goto("https://codemetrics.dev/projects/");
    await page.locator('[data-test-selector="test-header"]').waitFor();
    expect(await page.screenshot()).toMatchSnapshot("2.png"); 
});
