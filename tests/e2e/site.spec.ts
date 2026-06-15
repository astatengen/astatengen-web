import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/layanan",
  "/layanan/starter-presence",
  "/layanan/launch-page-ai",
  "/layanan/business-profile-ai",
  "/layanan/product-catalogue-ai",
  "/layanan/commerce-ai",
  "/layanan/signature-build-ai",
  "/harga",
  "/proses",
  "/proyek",
  "/proyek/ruang-rapi-laundry",
  "/tentang",
  "/kontak",
  "/kebijakan-privasi",
  "/syarat-layanan",
];

test.describe("Asta Tengen v1", () => {
  test("all public routes render primary content", async ({ page }) => {
    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator("body")).not.toContainText("404");
      await expect(page.locator("h1").first()).toBeVisible();
    }
  });

  test("metadata, robots, sitemap, and structured data are present", async ({ page, request }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Asta Tengen/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /website/i);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);

    const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(jsonLd.some((item) => item.includes('"@type":"Organization"'))).toBeTruthy();
    expect(jsonLd.some((item) => item.includes('"@type":"Service"'))).toBeTruthy();
    expect(jsonLd.join(" ")).not.toContain("LocalBusiness");

    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBeTruthy();
    await expect.poll(async () => await robots.text()).toContain("Sitemap");

    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBeTruthy();
    const sitemapText = await sitemap.text();
    expect(sitemapText).toContain("/layanan/signature-build-ai");
    expect(sitemapText).toContain("/proyek/ruang-rapi-laundry");
    expect(sitemapText).not.toContain("/demo/");
  });

  test("home and portfolio communicate the entry package and internal live project", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /Website rapi untuk usaha kecil/i })).toBeVisible();
    await expect(page.getByRole("link", { name: "Bahas Paket Rp100.000" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Starter Presence" }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Launch Page AI" }).first()).toBeVisible();

    await page.goto("/proyek/ruang-rapi-laundry");
    await expect(page.getByText("Proyek internal Asta Tengen").first()).toBeVisible();
    await expect(page.getByRole("img", { name: "Screenshot desktop website Ruang Rapi." })).toBeVisible();
    await expect(page.getByRole("link", { name: "Buka website live" })).toHaveAttribute("href", "https://ruangrapi.vercel.app/");
    await expect(page.locator("body")).not.toContainText("Studi Konsep");
  });

  test("contact form validates privacy consent and opens WhatsApp message", async ({ page }) => {
    await page.goto("/kontak");
    await page.getByRole("button", { name: "Buka WhatsApp" }).click();
    await expect(page.getByText("Persetujuan Kebijakan Privasi wajib dicentang.")).toBeVisible();

    await page.getByLabel("Nama *").fill("Budi");
    await page.getByLabel("Nama bisnis *").fill("Contoh Usaha");
    await page.getByLabel("Nomor WhatsApp *").fill("081234567890");
    await page.getByLabel("Jenis bisnis").fill("Kuliner");
    await page.getByLabel("Layanan yang diminati *").selectOption("Launch Page AI");
    await page.getByLabel("Kisaran anggaran *").selectOption("Rp1.350.000 - Launch Page AI");
    await page.getByLabel("Target waktu").fill("Bulan depan");
    await page.getByLabel("Kebutuhan singkat").fill("Butuh landing page untuk promosi menu baru.");
    await page.getByLabel(/Saya sudah membaca/).check();

    const popupPromise = page.waitForEvent("popup");
    await page.getByRole("button", { name: "Buka WhatsApp" }).click();
    const popup = await popupPromise;
    expect(popup.url()).toContain("6287816270140");
    expect(popup.url()).toContain("Launch+Page+AI");
  });

  test("mobile menu supports keyboard close", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    await page.getByRole("button", { name: /Menu/ }).click();
    await expect(page.getByRole("dialog", { name: "Menu navigasi" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog", { name: "Menu navigasi" })).toBeHidden();
  });

  test("key breakpoints do not overflow horizontally", async ({ page }) => {
    for (const width of [320, 375, 430, 768, 1024, 1280, 1440, 1920]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");
      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
    }
  });
});
