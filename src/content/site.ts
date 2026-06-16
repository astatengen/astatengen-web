export const siteConfig = {
  name: "Sector One",
  tagline: "Website bisnis yang rapi, jelas, dan mudah dihubungi.",
  description:
    "Sector One membantu bisnis lokal mengubah informasi layanan, harga, lokasi, dan alur kontak menjadi website yang rapi, jelas, dan siap dibagikan ke calon pelanggan.",
  location: "Semarang, Jawa Tengah, Indonesia",
  email: "ggbanget2023@gmail.com",
  whatsappDisplay: "+62 878-1627-0140",
  whatsappNumber: "6287816270140",
  hours:
    "Pesan WhatsApp dapat dikirim kapan saja dan dibalas berdasarkan antrean.",
  founders: [
    {
      name: "Achmad Roychan",
      role: "Founder / Web Designer & Frontend Developer",
      image: "/media/people/roychan.jpeg",
      alt: "Potret Achmad Roychan, pendiri Sector One.",
      note: "Mengurus struktur konten, arah visual, copywriting, dan implementasi frontend.",
    },
  ],
};

export const mainNav = [
  { href: "/proyek", label: "Proyek" },
  { href: "/layanan", label: "Layanan" },
  { href: "/proses", label: "Proses" },
  { href: "/harga", label: "Harga" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export const publicRoutes = [
  "/",
  "/layanan",
  "/harga",
  "/proses",
  "/proyek",
  "/tentang",
  "/kontak",
  "/kebijakan-privasi",
  "/syarat-layanan",
];

export function getWhatsAppUrl(message?: string) {
  const text =
    message ??
    "Halo Sector One, saya ingin konsultasi tentang kebutuhan website untuk bisnis saya.";

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
