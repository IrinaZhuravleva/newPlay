import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://codemetrics.dev/');

  await expect(page).toHaveTitle(/CodeMetrics/);
});

test('check sign up', async({page}) => {
  const signUpButton = page.getByRole("link", { name: "Sign up" });
  const sighUpHeading = page.getByRole("heading", { name: "Sign up" });

  await page.goto('https://codemetrics.dev/');

  await signUpButton.waitFor();
  await signUpButton.click();
  await sighUpHeading.waitFor();
  await expect(sighUpHeading).toBeVisible();
})

test("check sign in", async ({ page }) => {
  const signInButton = page.getByRole("link", { name: "Sign in" });
  const sighInHeading = page.getByRole("heading", { name: "Sign in" });

  await page.goto("https://codemetrics.dev/");

  await signInButton.waitFor();
  await signInButton.click();
  await sighInHeading.waitFor();
  await expect(sighInHeading).toBeVisible();
});