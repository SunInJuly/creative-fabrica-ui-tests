import { type Locator, type Page } from '@playwright/test';

export class VerifyEmailDialog {
    readonly page: Page;
    readonly dialog: Locator;
    readonly emailSent: Locator;

    constructor(page: Page) {
        this.page = page
        this.dialog = this.page.locator('div #modal-account');
        this.emailSent = this.dialog.locator('strong');
    }
}