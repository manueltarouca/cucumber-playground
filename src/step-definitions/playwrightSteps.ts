import { Given, When, Then, setDefaultTimeout, setWorldConstructor, Before } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { PlaywrightWorld } from "../support/customWorld"; // Import PlaywrightWorld

setDefaultTimeout(60 * 1000); // Set a timeout of 60 seconds
setWorldConstructor(PlaywrightWorld); // Set PlaywrightWorld as the custom world

Given("I open the browser", async function (this: PlaywrightWorld) {
  await this.openBrowser(); // Ensure PlaywrightWorld is used
});

When("I navigate to {string}", async function (this: PlaywrightWorld, url: string) {
  if (!this.page) throw new Error("Browser is not initialized");
  await this.page.goto(url);
});

Then("I should see {string} in the page title", async function (this: PlaywrightWorld, expectedTitle: string) {
  if (!this.page) throw new Error("Browser is not initialized");
  const title = await this.page.title();
  expect(title).toContain(expectedTitle);
});