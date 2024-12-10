import { defineConfig } from '@playwright/test';

export default defineConfig({
    globalTimeout: 3_600_000,
    expect: {
        timeout: 15_000,
    },
    reporter: [['html', { open: 'never' }]],
});