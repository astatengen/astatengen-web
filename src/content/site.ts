export const siteConfig = {
  name: "Asta Tengen",
  tagline: "Website terjangkau untuk usaha yang ingin terlihat serius.",
  description:
    "Asta Tengen merancang dan membangun website yang rapi, cepat, dan mudah digunakan untuk usaha kecil, bisnis lokal, dan profesional yang ingin mulai tampil lebih serius dengan anggaran realistis.",
  location: "Semarang, Jawa Tengah, Indonesia",
  email: "ggbanget2023@gmail.com",
  whatsappDisplay: "+62 878-1627-0140",
  whatsappNumber: "6287816270140",
  hours:
    "WhatsApp menerima pesan selama 24 jam. Pesan ditangani berdasarkan antrean dan ketersediaan tim.",
  founders: [
    {
      name: "Achmad Roychan",
      role: "Pendiri / Web Designer & Frontend",
      image: "/media/people/roychan.jpeg",
      alt: "Potret Achmad Roychan, pendiri Asta Tengen.",
      note: "Mendirikan dan menjalankan Asta Tengen secara solo, dengan fokus pada arah visual, struktur halaman, implementasi frontend, dan kesiapan peluncuran.",
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
    "Halo Asta Tengen, saya ingin konsultasi tentang kebutuhan website untuk bisnis saya.";

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
