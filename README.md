
# UI Automation Tests for Creative Fabrica Product Page

This repository contains UI automation tests for the product page [Christmas Tree Lantern Bundle](https://www.creativefabrica.com/product/christmas-tree-lantern-bundle/) using Playwright and TypeScript.

## Project Structure

- **`pages/`**: Contains Page Object Model (POM) classes for different pages.
    - Example: `product-page.ts` general page for overviewing product information.
- **`tests/`**: Contains test scripts written in TypeScript.
    - Example: `product-page-tests.spec.ts` for testing the functionality of the product page.
- **`playwright.config.ts`**: Configuration file for Playwright.

## Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (16.x or later)
- npm or yarn package manager

## Installation

1. Clone this repository:
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run All Tests
To execute all tests in the repository:
```bash
npx playwright test
```

### Run Tests in UI Mode
To visually debug tests using the Playwright Test Runner UI:
```bash
npx playwright test --ui
```

### Run a Specific Test File
To run a specific test file:
```bash
npx playwright test tests/product-page-tests.spec.ts
```

### Generate HTML Report
After running tests, generate an HTML report:
```bash
npx playwright show-report
```

## Features

- **Playwright:** Modern testing framework for end-to-end tests.
- **TypeScript:** Statically typed JavaScript for better developer experience.
- **Page Object Model (POM):** Enhances test maintainability and readability.
- **Page Elements Pattern :** Improves reuse of common UI elements.

## Tests Overview

The test suite covers the following scenarios for the product page:

1. Page Load Verification:
    - Confirms the page loads without errors.
2. Product Content Validation:
    - Checks the presence and correctness of product title, description, price, and images.
3. Add to Cart Functionality:
    - Verifies the product can be added to the cart.
4. Reviews Section:
    - Ensures the reviews are displayed correctly (if present).
5. Responsive Design:
    - Validates the page renders correctly on different screen sizes.

## Project Setup

### Folder Structure
```
root/
├── pages/
│   ├── product-page.ts
│   ├── checkout-page.ts
│   │ elements/
│       ├── login-dialog.ts
├── tests/
│   ├── product-page-tests.spec.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md
```

### Configuration
All Playwright settings (e.g., browsers, test timeouts) are managed in `playwright.config.ts`.
