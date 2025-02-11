# Cucumber + Playwright + TypeScript Automation Framework

This project is a test automation framework that integrates **Cucumber**, **Playwright**, and **TypeScript** to enable behavior-driven development (BDD) for web applications.

## Features

- **Cucumber** for BDD-style test writing
- **Playwright** for browser automation
- **TypeScript** for type safety and maintainability
- **JSON configuration** for flexible test execution
- **Headless and non-headless execution** support
- **Cucumber JSON reports** for test results

## Prerequisites

Ensure the following are installed on your system:

- [Node.js (LTS)](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Playwright Browsers](https://playwright.dev/) (installed via command below)

## Installation

Clone this repository and install the dependencies:

```sh
git clone https://github.com/manueltarouca/cucumber-playground.git
cd cucumber-playground
npm install
npx playwright install
```

## Running Tests

Run all tests:

```sh
npm test
```

Run tests in headless mode:

```sh
HEADLESS=true npm test
```

Run a specific feature file:

```sh
npx cucumber-js src/features/sample.feature
```

## Customizing Browser Options

Modify the worldParameters in cucumber.json:

```json
"worldParameters": {
  "browser": "chromium"
}
```

Supported browsers: chromium, firefox, webkit.

## Troubleshooting

### Playwright not launching browsers?

Run npx playwright install to install missing browser binaries.

### Step definitions not found?

Ensure the paths in cucumber.json are correct.

### Tests failing unexpectedly?

Run tests in non-headless mode using npm test and debug using await this.page.pause() in step definitions.
# cucumber-playground
