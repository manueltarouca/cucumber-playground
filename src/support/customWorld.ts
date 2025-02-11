import { World, IWorldOptions } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, firefox, webkit } from "@playwright/test";

export class PlaywrightWorld extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async openBrowser(browserName: string = "chromium") {
    console.log(`Opening browser: ${browserName}`);
    switch (browserName) {
      case "firefox":
        this.browser = await firefox.launch({ headless: false });
        break;
      case "webkit":
        this.browser = await webkit.launch({ headless: false });
        break;
      default:
        this.browser = await chromium.launch({ headless: false });
        break;
    }
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }
}