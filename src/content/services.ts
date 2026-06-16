import type { ServicePackage } from "./types";

export const services: ServicePackage[] = [
  {
    slug: "starter-page",
    name: "Starter Page",
    summary: "Website satu halaman untuk usaha yang butuh profil resmi, harga dasar, lokasi, dan tombol WhatsApp.",
    price: "Rp750.000",
    estimate: "3-5 hari kerja",
    revisions: "2 putaran",
    renewal: "Rp450.000 per tahun",
    warranty: "14 hari",
    assistLimit: "Dukungan teknis via WhatsApp selama masa garansi",
    assistActive: "Masa garansi aktif selama 14 hari setelah rilis",
    includes: [
      "landing page satu halaman",
      "profil singkat usaha",
      "ringkasan produk atau layanan",
      "harga atau paket utama",
      "lokasi dan jam operasional",
      "tombol WhatsApp",
      "tampilan responsif untuk ponsel",
      "setup hosting tahun pertama",
    ],
    assistNotes: [
      "Cocok untuk usaha kecil yang ingin punya link resmi sebelum masuk ke website yang lebih lengkap.",
    ],
    domainHosting:
      "Termasuk hosting tahun pertama. Domain kustom dapat dibantu prosesnya dan ditagihkan sesuai harga registrar.",
    constraints: [
      "Tidak mencakup halaman tambahan, dashboard, sistem booking, atau fitur khusus.",
      "Perubahan konten setelah website rilis masuk ke pekerjaan maintenance.",
    ],
  },
  {
    slug: "business-profile",
    name: "Business Profile",
    summary: "Website profil bisnis yang lebih lengkap untuk menjelaskan layanan, proses, area kerja, FAQ, dan kontak.",
    price: "Rp1.800.000",
    estimate: "5-10 hari kerja",
    revisions: "3 putaran",
    renewal: "Rp750.000 per tahun",
    warranty: "30 hari",
    assistLimit: "Dukungan teknis prioritas via WhatsApp selama masa garansi",
    assistActive: "Masa garansi aktif selama 30 hari setelah rilis",
    includes: [
      "struktur 3-5 halaman atau section utama",
      "profil bisnis yang lebih lengkap",
      "katalog layanan terstruktur",
      "alur order atau proses kerja",
      "area layanan atau jangkauan",
      "FAQ",
      "form kontak ringan",
      "CTA WhatsApp",
      "tampilan responsif untuk ponsel",
      "SEO dasar untuk halaman utama",
    ],
    assistNotes: [
      "Cocok untuk laundry, barbershop, klinik kecantikan, kursus privat, bengkel, kuliner rumahan, dan jasa lokal.",
    ],
    domainHosting:
      "Termasuk hosting tahun pertama, SSL, setup DNS, dan bantuan konfigurasi domain kustom.",
    constraints: [
      "Materi utama seperti logo, foto, daftar layanan, harga, alamat, dan jam operasional disiapkan oleh klien.",
      "Fitur sistem seperti booking kompleks, pembayaran online, atau dashboard khusus dihitung terpisah.",
    ],
  },
  {
    slug: "custom-website",
    name: "Custom Website",
    summary: "Website kustom untuk kebutuhan yang lebih spesifik, jumlah konten lebih banyak, atau alur bisnis khusus.",
    price: "Mulai Rp3.500.000",
    estimate: "Menyesuaikan proyek",
    revisions: "4 putaran",
    renewal: "Menyesuaikan resource",
    warranty: "60 hari",
    assistLimit: "Dukungan teknis dan pengecekan awal setelah rilis",
    assistActive: "Masa garansi aktif selama 60 hari setelah rilis",
    includes: [
      "desain UI kustom",
      "struktur halaman sesuai kebutuhan",
      "copywriting konten lebih mendalam",
      "integrasi formulir dan WhatsApp",
      "peta lokasi multi-cabang bila diperlukan",
      "CMS atau dashboard bila disepakati",
      "dokumentasi penggunaan",
      "sesi pengenalan pengelolaan website",
      "optimasi performa dasar",
      "SEO teknis dasar",
    ],
    assistNotes: [
      "Cocok untuk usaha dengan banyak layanan, banyak lokasi, alur order khusus, atau kebutuhan konten yang tidak cukup ditampung satu halaman.",
    ],
    domainHosting:
      "Spesifikasi hosting, domain, dan integrasi teknis ditentukan setelah ruang lingkup proyek disepakati.",
    constraints: [
      "Harga final mengikuti kompleksitas halaman, fitur, aset, integrasi, dan kebutuhan maintenance.",
    ],
  },
];

export const serviceNotes = {
  estimateStartsAfter: [
    "pembayaran awal diterima",
    "ruang lingkup pekerjaan disepakati",
    "materi utama diterima",
    "logo atau identitas visual tersedia",
    "daftar layanan, harga, alamat, dan jam operasional dikirim",
    "foto yang boleh digunakan sudah dipilih",
    "akses domain atau hosting diberikan bila sudah ada",
  ],
  assistRevisionIncludes: [
    "perbaikan ejaan dan susunan kalimat",
    "penyesuaian urutan section",
    "penggantian foto yang masih dalam ruang lingkup",
    "penyesuaian warna minor",
    "perbaikan tautan WhatsApp atau email",
    "penyesuaian tampilan responsif",
  ],
  assistRevisionExcludes: [
    "penambahan fitur baru di luar kesepakatan",
    "penggantian konsep desain total setelah arah visual disetujui",
    "integrasi pihak ketiga yang belum tertulis di brief",
    "pembuatan logo baru dari nol",
    "penulisan ulang seluruh konten setelah materi final disetujui",
    "pembangunan ulang struktur halaman setelah rilis",
  ],
  annualRenewalCovers: [
    "perpanjangan hosting website",
    "pemeliharaan SSL",
    "backup berkala sesuai kemampuan hosting",
    "pembaruan dependency dasar bila diperlukan",
    "pemeriksaan tautan penting",
    "bantuan teknis ringan terkait website",
  ],
  aiUsage: [
    "Biaya tahunan menjaga website tetap online dan lebih mudah dipelihara.",
    "Pengingat perpanjangan dikirim sebelum masa aktif berakhir.",
    "Kepemilikan domain tetap atas nama pemilik bisnis setelah seluruh kewajiban selesai.",
  ],
  warrantyExcludes: [
    "kesalahan informasi dari materi yang dikirim klien",
    "perubahan harga atau promo yang belum diinformasikan",
    "gangguan penyedia hosting, domain, atau layanan pihak ketiga",
    "kerusakan akibat perubahan kode oleh pihak luar",
    "penambahan fitur baru di luar kesepakatan awal",
  ],
};

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
