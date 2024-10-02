import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.getByPlaceholder('abc@email.com').click();
    await page.getByPlaceholder('abc@email.com').fill('check123456@gmail.com');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('khoa1');
    await page.getByPlaceholder('Full name').click();
    await page.getByPlaceholder('Full name').fill('khoa1');
    await page.getByPlaceholder('Phone').click();
    await page.getByPlaceholder('Phone').fill('1234567891');
    await page.getByPlaceholder('Address').click();
    await page.getByPlaceholder('Address').fill('1234');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('1234');
    await page.getByRole('button', { name: 'SIGN UP' }).click();
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('khoa1');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('1234');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page).toHaveTitle(/Dedicated Care for Koi Fish/);
});