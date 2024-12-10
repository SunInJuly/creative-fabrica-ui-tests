import { expect, type Locator, type Page } from '@playwright/test';
import {th} from "@faker-js/faker";
import {SingUpDialog} from "./elements/sign-up-dialog";
import {VerifyEmailDialog} from "./elements/verify-email-dialog";

export class ProductPage {
    readonly page: Page;
    readonly signUpDialog: SingUpDialog;
    readonly verifyEmailDialog: VerifyEmailDialog;
    private readonly productUrl: string;
    readonly productTitle : Locator;
    readonly signUpButton: Locator;
    readonly favoritesButton: Locator;
    readonly productDescription: Locator;

    constructor(page: Page, productUrl: string) {
        this.page = page;
        this.productUrl = productUrl
        this.productTitle = page.locator('#product-title');
        this.productDescription = page.locator('#single-product-description');
        this.favoritesButton = page.locator('.favorite-off');
        this.signUpButton = page.locator('[aria-label="Top navigation"] button', { hasText: 'Sign Up' });
        this.signUpDialog = new SingUpDialog(page)
        this.verifyEmailDialog = new VerifyEmailDialog(page)
    }

    async isLoaded() {
        await expect(this.productTitle, 'product title should be visible').toBeVisible();
        await expect(this.favoritesButton, 'favorites button should be visible').toBeVisible();
        await expect(this.signUpButton, 'signUp button should be visible').toBeVisible();
        await expect(this.productDescription, 'product description should be visible').toBeVisible();
    }

    async goto() {
        await this.page.goto(this.productUrl);
    }

    async openSignUpForm() {
        await this.signUpButton.click()
    }
}