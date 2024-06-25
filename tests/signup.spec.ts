import { test, expect } from "@playwright/test";
import {v4 as uuidv4} from "uuid"

test("check sign up", async ({ page }) => {
  const signUpButton = page.getByRole("link", { name: "Sign up" });
  const sighUpHeading = page.getByRole("heading", { name: "Sign up" });
  const passwordSignUpInput = page.locator(
    '[data-test-selector="test-signup-password"]'
  );
  const profileLink = page.locator('[href="/profile"]');
  const emailSignUpInput = page.locator('[data-test-selector="test-signup-email"]');
  const submitButton = page.getByRole("button", { name: "Submit" });

  await page.goto("https://codemetrics.dev/");

  await signUpButton.waitFor();
  await signUpButton.click();
  await sighUpHeading.waitFor();
  await expect(sighUpHeading).toBeVisible();
  await emailSignUpInput.waitFor();
  await emailSignUpInput.fill(uuidv4() + "@gmail.com");
  await passwordSignUpInput.waitFor();
  await passwordSignUpInput.fill(uuidv4());
  await submitButton.click();
  await profileLink.waitFor();
  await expect(profileLink).toBeVisible();
  await profileLink.click();
  await page.waitForURL(/\/profile/gm);
});
