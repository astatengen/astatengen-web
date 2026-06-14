export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("NEXT_PUBLIC_SITE_URL wajib diisi pada production build.");
    }

    return "http://localhost:3000";
  }

  if (process.env.NODE_ENV === "production" && /localhost|127\.0\.0\.1/i.test(siteUrl)) {
    throw new Error("NEXT_PUBLIC_SITE_URL tidak boleh memakai localhost pada production build.");
  }

  return siteUrl.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}
