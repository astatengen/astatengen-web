export function getSiteUrl() {
  const rawSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;
  const siteUrl = rawSiteUrl?.startsWith("http") ? rawSiteUrl : rawSiteUrl ? `https://${rawSiteUrl}` : "";

  if (!siteUrl) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL wajib diisi pada production build, kecuali build berjalan di Vercel dengan VERCEL_PROJECT_PRODUCTION_URL atau VERCEL_URL.",
      );
    }

    return "http://localhost:3000";
  }

  if (process.env.NODE_ENV === "production" && /localhost|127\.0\.0\.1/i.test(siteUrl)) {
    throw new Error("URL produksi tidak boleh memakai localhost pada production build.");
  }

  return siteUrl.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}
