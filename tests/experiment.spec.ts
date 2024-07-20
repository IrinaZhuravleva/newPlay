import { test, expect } from "@playwright/test";
import { v4 as uuidv4 } from "uuid";

test("check Navigation Menu for Monmouthshire Building Society", async ({
  page,
}) => {
  await page.goto("https://www.monbs.com/");
  await page.getByRole("button", { name: "Allow all" }).click();
  await page
    .getByRole("link", { name: "Savings", exact: true })
    .first()
    .click();
  await page.getByRole("link", { name: "General Savings Instant" }).click();
  await page.getByRole("link", { name: "ISAs" }).click();
  await page.getByRole("link", { name: "Bonds" }).click();
  await page.getByRole("link", { name: "ISAs" }).click();
  await page.getByRole("link", { name: "General Savings" }).click();
});


test("Creditsafe website user journey test", async ({ page }) => {
  await page.goto("https://www.creditsafe.com/gb/en.html");
  await page.getByRole("button", { name: "Reject All" }).click();
  await page.getByRole("link", { name: "View packages" }).click();
  await page.getByRole("link", { name: "Explore our packages" }).click();
  await page.getByRole("link", { name: "Get Quote" }).first().click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("Jane");
  await page.getByPlaceholder("Last Name").click();
  await page.getByPlaceholder("Last Name").fill("Doe");
  await page.getByPlaceholder("Work Email").click();
  await page.getByPlaceholder("Work Email").fill("jane@gmail.com");
  await page.getByPlaceholder("Company Name").click();
  await page.getByPlaceholder("Company Name").fill("Gmail");
  await page.getByPlaceholder("Phone Number").click();
  await page.getByPlaceholder("Phone Number").fill("7777777777");
  await page.getByRole("button", { name: "Get quote" }).click();
  await page.getByRole("link", { name: "Trading internationally" }).click();
  await page.getByPlaceholder("Company Name").click();
  await page.getByPlaceholder("Company Name").fill("Gmail");
  await page.getByRole("button", { name: "View report" }).click();
  await page.goto(
    "https://www.creditsafe.com/gb/en/credit-risk/credit-reports/international-credit-reports.html"
  );
  await page.getByRole("link", { name: "Compliance", exact: true }).click();
  await page
    .locator("#primary-nav")
    .getByRole("link", { name: "Compliance Platform" })
    .click();
  await page.getByRole("heading", { name: "Accelerate customer due" }).click();
  await page.getByText("KYC Protect is the end-to-end").click();
  await page.getByRole("link", { name: "Sales & Marketing" }).click();
  await page.getByRole("link", { name: "Data Matching & Enrichment" }).click();
  await page
    .getByRole("heading", { name: "Restore confidence in your" })
    .click();
  await page.getByText("Maintain the integrity of").click();
  await page.getByRole("link", { name: "API & Integrations" }).click();
  await page.getByRole("link", { name: "Connect API" }).click();
  await page.getByRole("heading", { name: "A single API for global" }).click();
  await page.getByText("Use the Creditsafe API to").click();
  await page.getByRole("link", { name: "More" }).click();
  await page.getByRole("link", { name: "About Creditsafe" }).click();
  await page.getByRole("heading", { name: "About us" }).click();
  await page.getByText("We help companies of all").click();
  await page.getByRole("heading", { name: "Our story", exact: true }).click();
});


test("Deloitte website user journey test", async ({ page }) => {
  await page.goto("https://www.deloitte.com/uk/en.html");
  await page.locator('[id="onetrust-reject-all-handler"]').click()
  await page
    .getByRole("heading", { name: "What does it take to be a" })
    .click();
  await page.getByText("Together with Team GB and").click();
  await page
    .getByLabel("header navigation")
    .getByRole("link", { name: "Who we are" })
    .click();
  await page.getByRole("link", { name: "Overview" }).click();
  await page.getByText("We exist to make an impact").click();
  await page
    .getByLabel("header navigation")
    .getByRole("link", { name: "What we do" })
    .click();
  await page.getByRole("link", { name: "Overview" }).click();
  await page.getByLabel("Explore services").click();
//   await page.getByText("Vast services. Rich").click();
//   await page.getByLabel("Explore industries").click();
//   await page
//     .getByRole("heading", { name: "Industries", exact: true })
//     .locator("span")
//     .click();
//   await page.getByText("We draw on our deep industry").click();
  await page.getByRole("link", { name: "Our Thinking", exact: true }).click();
//   await page.getByRole("link", { name: "Overview" }).click();
});
