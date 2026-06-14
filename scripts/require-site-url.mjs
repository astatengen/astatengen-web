const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (!siteUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL wajib diisi sebelum production build.");
}

if (/localhost|127\.0\.0\.1/i.test(siteUrl)) {
  throw new Error("NEXT_PUBLIC_SITE_URL tidak boleh memakai localhost untuk production build.");
}

try {
  const parsed = new URL(siteUrl);
  if (parsed.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL harus memakai https untuk production build.");
  }
} catch (error) {
  if (error instanceof Error) {
    throw new Error(`NEXT_PUBLIC_SITE_URL tidak valid: ${error.message}`);
  }

  throw error;
}
