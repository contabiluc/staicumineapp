const { test, expect } = require('@playwright/test');

test.describe('Staicumine Web App E2E Spec', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => loadDemoJournal());
  });

  test('Afișează Dashboard-ul cu datele demo generate', async ({ page }) => {
    await expect(page.locator('#view-dashboard')).toBeVisible();
    const statMood = page.locator('#stat-avg-mood');
    await expect(statMood).not.toHaveText('-');
  });

  test('Navighează pe toate tab-urile aplicației', async ({ page }) => {
    const tabs = ['log', 'safety', 'history', 'guides', 'settings', 'dashboard'];
    for (const tabId of tabs) {
      await page.evaluate((id) => switchTab(id), tabId);
      await expect(page.locator(`#view-${tabId}`)).toBeVisible();
    }
  });

  test('Permite căutarea dinamică în Istoric', async ({ page }) => {
    await page.evaluate(() => switchTab('history'));
    await page.fill('#history-search', '2026');
    await page.evaluate(() => filterHistory());
    const count = await page.locator('.history-item-compact').count();
    expect(count).toBeGreaterThan(0);
  });

  test('Trimite o înregistrare nouă în Check-in', async ({ page }) => {
    await page.evaluate(() => {
      switchTab('log');
      const dateEl = document.getElementById('journal-date');
      if (dateEl) dateEl.value = '2026-08-19';
      setMoodValue(1);
      const notes = document.getElementById('journal-notes');
      if (notes) notes.value = 'Testare interactivă din Playwright UI';
      saveMoodEntry({ preventDefault: () => {} });
    });
    await page.waitForTimeout(300);
    await page.evaluate(() => switchTab('dashboard'));
    await expect(page.locator('#view-dashboard')).toBeVisible();
  });

  test('Tradu Dashboard-ul și graficul în Română și Engleză', async ({ page }) => {
    // Test limba Română
    await page.evaluate(() => setLanguage('ro'));
    await expect(page.locator('#chart-main-title')).toHaveText('Evoluția dispoziției');
    await expect(page.locator('.metric-btn[data-metric="mood"]')).toContainText('Dispoziție');
    await expect(page.locator('#filter-btn-7')).toHaveText('7 Zile');

    // Test limba Engleză
    await page.evaluate(() => setLanguage('en'));
    await expect(page.locator('#chart-main-title')).toHaveText('Mood Evolution');
    await expect(page.locator('.metric-btn[data-metric="mood"]')).toContainText('Mood');
    await expect(page.locator('#filter-btn-7')).toHaveText('7 Days');

    // Test comutare metrică în Engleză
    await page.evaluate(() => setChartMetric('sleep'));
    await expect(page.locator('#chart-main-title')).toHaveText('Sleep Hours');
  });

});
