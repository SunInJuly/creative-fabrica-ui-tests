import test, {expect, Page} from "@playwright/test";
import {Browser, chromium} from "playwright";
import { ProductPage } from "../pages/product-page";
import {faker} from "@faker-js/faker/locale/ar";
import { CheckoutPage } from '../pages/checkout-page';


test.describe("Product Page Test", () => {
    let browser: Browser
    let productPage: ProductPage
    let page: Page
    const productUrl = "https://www.creativefabrica.com/product/christmas-tree-lantern-bundle/"
    const productName = "Christmas Tree Lantern Bundle"

    test.beforeEach(async () => {
        console.log(`Running ${test.info().title} on product ${productUrl}`);
        browser = await chromium.launch()
        page = await browser.newPage();
        productPage = new ProductPage(page, productUrl)
    });

    test.afterEach(async () => {
        console.log(`Finished ${test.info().title} on product ${productUrl}`);
        await browser.close();
    });

    test("guest can open product page and view product details", async () => {
        await productPage.goto()
        await productPage.isLoaded()
        await expect(productPage.page).toHaveTitle(productName);
        await expect(productPage.productDescription).toContainText('Christmas Tree Paper Lantern')
    });

    test("guest can go to checkout by 'download' button", async () => {
        await productPage.goto()
        await productPage.isLoaded()
        await productPage.downloadButton.click()
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.isLoaded()
        expect(checkoutPage.itemsCount(), 'should be one item in the cart').toBe(1);
        await checkoutPage.proceedButton.click()
        await expect(checkoutPage.signUpDialog.dialog, 'should be sign up dialog').toBeVisible()
    });

    test("guest can go to login dialog from topbar", async () => {
        await productPage.goto()
        await productPage.isLoaded()
        await productPage.openSignUpForm()
        await productPage.signUpDialog.isLoaded()
    });

    test("guest can go to login dialog from 'favorites' button", async () => {
        await productPage.goto()
        await productPage.isLoaded()
        await productPage.favoritesButton.click()
        await productPage.signUpDialog.isLoaded()
    });

    test("guest can create new user from product page", async () => {
        await productPage.goto()
        await productPage.isLoaded()
        await productPage.openSignUpForm()
        await productPage.signUpDialog.isLoaded()
        const uniqueEmail = faker.internet.email();
        await productPage.signUpDialog.registerUser(uniqueEmail)
        await expect(productPage.verifyEmailDialog.dialog).toBeVisible()
        await expect(productPage.verifyEmailDialog.emailSent, `should be am email ${uniqueEmail} in otp sent dialog`)
            .toHaveText(uniqueEmail)
        // in the real test project that would have all the registration flow, but not on prod env
    });
});