import { test, expect } from '@playwright/test';

const languages = ['fr', 'en', 'it'];

for (const lang of languages) {
  test(`contact – parcours utilisateur (${lang})`, async ({ page }) => {

    // ✅ URL DEV CORRECTE
    await page.goto(`http://localhost:3000/eurooccazmotors/${lang}/contact`, {
      waitUntil: 'domcontentloaded',
    });

    // ✅ attendre que React ait rendu le formulaire de contact
    const contactForm = page.locator('form.space-y-6');
    await expect(contactForm).toBeVisible({ timeout: 10_000 });

    // Champs
    await contactForm.locator('input[name="nom_prenom"]').fill('Jean Dupont');
    await contactForm.locator('input[name="email"]').fill('jean@test.com');
    await contactForm.locator('input[name="telephone"]').fill('0600000000');

    await contactForm.locator('select[name="objet"]').selectOption({ index: 1 });

    await contactForm.locator('textarea[name="message"]').fill(
      'Message de test Playwright'
    );

    await contactForm.locator('button[type="submit"]').click();
  });
}
