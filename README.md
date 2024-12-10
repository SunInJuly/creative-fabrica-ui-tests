
# UI Automation Tests for Creative Fabrica Product Page

This repository contains UI automation tests for the product page [Christmas Tree Lantern Bundle](https://www.creativefabrica.com/product/christmas-tree-lantern-bundle/) using Playwright and TypeScript.

## Project Structure

- **`pages/`**: Contains Page Object Model (POM) classes for different pages.
    - Example: `product-page.ts` general page for overviewing product information.
- **`pages/elements`**: Contains Page Elements classes for different complex elements.
  - Example: `sign-up-dialog.ts` the element with sign up form, reused both on checkout and product pages.
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
1. **Guest can open product page and view product details:** This test verifies that a guest user can successfully open a specific product page and that the page displays the expected title and product description.
2. **Guest can go to checkout by 'download' button:** This test checks the flow from the product page to the checkout by clicking the 'download' button. It asserts that the checkout page loads correctly, contains one item in the cart, and proceeds to a sign-up dialog upon clicking the 'proceed' button.
3. **Guest can go to login dialog from topbar:** This test confirms that a guest user can access the login/sign-up dialog via a link in the topbar navigation.
4. **Guest can go to login dialog from 'favorites' button:** Similar to the previous test, this one ensures a guest can navigate to the login/sign-up dialog from the 'favorites' button on the product page.
5. **Guest can create new user from product page:** This test covers the user registration process initiated from the product page. It checks the flow from opening the sign-up form to successfully submitting the registration, verifying email dialog appears with success message.

## Project Setup

### Configuration
All Playwright settings (e.g., browsers, test timeouts) are managed in `playwright.config.ts`.
