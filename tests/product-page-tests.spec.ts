import test, {expect, Page} from "@playwright/test";
import {Browser, chromium} from "playwright";
import { ProductPage } from "../pages/product-page";


test.describe("Product Page Test", () => {
    let browser: Browser
    let productPage: ProductPage
    const productUrl = "https://www.creativefabrica.com/product/christmas-tree-lantern-bundle/"
    const productName = "Christmas Tree Lantern Bundle"

    test.beforeEach(async () => {
        console.log(`Running ${test.info().title} on product ${productUrl}`);
        browser = await chromium.launch()
        var page = await browser.newPage();
        productPage = new ProductPage(page, productUrl)
    });

    test.afterEach(async () => {
        console.log(`Finished ${test.info().title} on product ${productUrl}`);
        await browser.close();
    });

    test("guest can open product page and view product details", async () => {
        await productPage.goto()
        await expect(productPage.page).toHaveTitle(productName);

    });

    test("guest can go to login dialog from topbar", async () => {
        await productPage.goto()
        await expect(productPage.page).toHaveTitle(productName);

    });

    test("guest can go to login dialog from 'favorites' button", async () => {
        await productPage.goto()
        await expect(productPage.page).toHaveTitle(productName);
    });

    test("guest can create new user from product page", async () => {
        await productPage.goto()
        await expect(productPage.page).toHaveTitle(productName);

    });



});