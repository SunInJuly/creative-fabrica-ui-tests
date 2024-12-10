import { expect, type Locator, type Page } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    private readonly productUrl: string;
    readonly productTitle : Locator;
    readonly signUpButton: Locator;
    readonly favoritesButton: Locator;

    constructor(page: Page, productUrl: string) {
        this.page = page;
        this.productUrl = productUrl
        this.productTitle = page.locator('#product-title');
        this.favoritesButton = page.locator('.favorite-off');
        this.signUpButton = page.locator('[aria-label="Top navigation"] button', { hasText: 'Sign Up' });
    }

    async goto() {
        await this.page.goto(this.productUrl);
    }

    async openSignUpForm() {
        await this.signUpButton.click()
    }
}