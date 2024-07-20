import { test, expect } from "@playwright/test";

test("check sign in", async ({ page }) => {
  const signInButton = page.getByRole("link", { name: "Sign in" });
  const sighInHeading = page.getByRole("heading", { name: "Sign in" });
  const submitButton = page.getByRole("button", { name: "Submit" });
  const passwordSignInInput = page.locator('[data-test-selector="password"]');
  const profileLink = page.locator('[href="/profile"]');
  const emailSignInInput = page.locator('[data-test-selector="email"]');

  await page.goto("https://codemetrics.dev/");
  await signInButton.click();
  await expect(sighInHeading).toBeVisible();
  await emailSignInInput.waitFor();
  await emailSignInInput.fill("iravizion@gmail.com");
  await passwordSignInInput.fill("1234567");
  await submitButton.click();
  await expect(profileLink).toBeVisible();
  await profileLink.click();
  await page.waitForURL(/\/profile/gm);
});
