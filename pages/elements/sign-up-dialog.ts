import { expect, type Locator, type Page } from '@playwright/test';

export class SingUpDialog {
    readonly page: Page;
    readonly dialog: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly termsCheckbox: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page
        this.dialog = this.page.locator('div #modal-account');
        this.emailInput = this.dialog.locator('input[type="email"][name="email"]')
        this.passwordInput = this.dialog.locator('#password-input-register')
        this.termsCheckbox = this.dialog.locator('label[for="policy-checkbox-modal"]')
        this.registerButton = this.dialog.locator('button[data-action="register"]')
    }

    async isLoaded() {
        await expect(this.dialog, 'sign up dialog should be visible').toBeVisible();
        await expect(this.emailInput, 'email input should be visible').toBeVisible();
        await expect(this.passwordInput, 'password input should be visible').toBeVisible();
        await expect(this.termsCheckbox, 'terms checkbox should be visible').toBeVisible();
        await expect(this.registerButton, 'register button should be visible').toBeVisible();
    }

    async registerUser(email: string, password: string = '12345') {
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.termsCheckbox.click()
        await this.registerButton.click()
    }
}