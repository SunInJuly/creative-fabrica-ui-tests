import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly proceedButton : Locator;
    readonly itemCards: Locator;
    readonly cartTitle: Locator;

    constructor(page: Page, productUrl: string) {
        this.page = page;
        this.proceedButton = page.locator('#product-title');
        this.itemCards = page.locator('.favorite-off');
        this.cartTitle = page.locator('[aria-label="Top navigation"] button', { hasText: 'Sign Up' });
    }

    async isLoaded() {
        await expect(this.proceedButton, 'proceed button should be visible').toBeVisible();
        await expect(this.itemCards, 'item cards should be visible').toBeVisible();
        await expect(this.cartTitle, 'cart title should be visible').toBeVisible();
    }

    async itemsCount() {
        return this.itemCards.count()
    }
}