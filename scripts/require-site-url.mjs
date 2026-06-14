const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL;

const siteUrl = rawSiteUrl?.startsWith("http") ? rawSiteUrl : rawSiteUrl ? `https://${rawSiteUrl}` : "";

if (!siteUrl) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL wajib diisi sebelum production build, kecuali build berjalan di Vercel dengan VERCEL_PROJECT_PRODUCTION_URL atau VERCEL_URL.",
  );
}

if (/localhost|127\.0\.0\.1/i.test(siteUrl)) {
  throw new Error("URL produksi tidak boleh memakai localhost untuk production build.");
}

try {
  const parsed = new URL(siteUrl);
  if (parsed.protocol !== "https:") {
    throw new Error("URL produksi harus memakai https untuk production build.");
  }
} catch (error) {
  if (error instanceof Error) {
    throw new Error(`URL produksi tidak valid: ${error.message}`);
  }

  throw error;
}
