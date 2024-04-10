const { test, expect } = require('@playwright/test');

test('Check grades page', async ({ page }) => {
    await page.goto('https://ssllaavv-exam-my-grades.onrender.com/My-Grades');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  