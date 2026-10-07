import { test, expect } from '@playwright/test';

test('landing loads with complete images, working destinations, and no overflow', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle(/Payminto/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Payment infrastructure');
  await expect(page.getByRole('link', { name: 'Explore self-hosting' }).first()).toBeVisible();
  const brokenLinks = await page.locator('a').evaluateAll(links => links.filter(link => {
    const href = link.getAttribute('href') || '';
    return href === '#' || (href.startsWith('#') && !document.getElementById(href.slice(1)));
  }).map(link => link.textContent));
  expect(brokenLinks).toEqual([]);
  // Responsive illustrations can contain logos inside a hidden desktop sidebar.
  for (const image of await page.locator('img:visible').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  expect(errors).toEqual([]);
});

test('FAQ can be opened and closed with the keyboard', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const question = page.getByRole('button', { name: 'Does Payminto replace banks or card processors?' });
  await question.focus();
  await page.keyboard.press('Enter');
  await expect(question).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('region', { name: 'Does Payminto replace banks or card processors?' })).toBeVisible();
  await page.keyboard.press('Enter');
  await expect(question).toHaveAttribute('aria-expanded', 'false');
});

test('navigation reaches architecture and respects reduced motion', async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  if (testInfo.project.name === 'mobile') {
    const menu = page.getByRole('button', { name: 'Open navigation' });
    await menu.click();
    await expect(page.getByRole('button', { name: 'Close navigation' })).toHaveAttribute('aria-expanded', 'true');
    await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Architecture' }).click();
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toHaveCount(0);
  } else {
    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Architecture', exact: true }).click();
  }
  await expect(page).toHaveURL(/#architecture$/);
  await expect(page.locator('#architecture h2')).toBeInViewport();
  await expect(page.locator('.pin-spacer')).toHaveCount(0);
  await expect(page.locator('#features h2')).toHaveCSS('opacity', '1');
});

test('providers can be filtered by category', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/#providers');
  const list = page.getByRole('list', { name: 'Providers' });
  await expect(list.getByRole('heading', { name: 'Solana' })).toBeVisible();
  await page.getByRole('button', { name: 'Acquirers' }).click();
  await expect(page.getByRole('button', { name: 'Acquirers' })).toHaveAttribute('aria-pressed', 'true');
  await expect(list.getByRole('heading', { name: 'Kuberpayss' })).toBeVisible();
  await expect(list.getByRole('heading', { name: 'Solana' })).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Onramps' })).toHaveCount(0);
});

test('preview sidebar stays fixed while its workspace scrolls', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === 'mobile', 'The preview sidebar is hidden on mobile');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const preview = page.locator('.dashboard-preview').first();
  const sidebarOffset = () => preview.evaluate(el => el.querySelector('.preview-sidebar')!.getBoundingClientRect().top - el.getBoundingClientRect().top);
  await expect(preview.locator('.preview-sidebar')).toContainText('Composable');
  const workspace = preview.locator('.preview-workspace');
  const before = await sidebarOffset();
  await workspace.evaluate(el => { el.scrollTop = el.scrollHeight; });
  expect(await workspace.evaluate(el => el.scrollTop)).toBeGreaterThan(0);
  expect(await sidebarOffset()).toBe(before);
});
