import type { PortfolioProject } from "./types";

export const projects: PortfolioProject[] = [
  {
    slug: "aneka-jajanan-mutiara",
    name: "Aneka Jajanan Mutiara",
    label: "Website Live",
    projectType: "Proyek website Asta Tengen",
    industry: "Kuliner lokal",
    service: "Launch Page AI",
    year: "2026",
    liveUrl: "https://anekajajanan.vercel.app/",
    summary:
      "Website landing page untuk usaha jajanan tradisional di Tarakan yang menampilkan pilihan produk, harga satuan, paket promo, cara pesan, jam operasional, alamat, dan jalur WhatsApp dari satu halaman yang ringan dibuka di ponsel.",
    problem:
      "Usaha jajanan harian perlu menjelaskan menu, harga, promo, cara pemesanan, jam layanan, dan sistem pengambilan tanpa membuat calon pembeli bertanya dari awal lewat WhatsApp.",
    goal:
      "Membuat halaman promosi yang langsung membantu calon pembeli memahami pilihan jajanan, melihat harga, lalu mengirim pesanan lewat WhatsApp dengan konteks yang jelas.",
    design:
      "Arah visual memakai warna merah, latar terang, tipografi serif, dan foto produk asli agar terasa dekat dengan karakter jajanan tradisional. Struktur halaman dibuat ringkas: hero harga, katalog produk, promo, cara pesan, dan informasi pemesanan.",
    implementation:
      "Website dipublikasikan sebagai landing page live dengan navigasi anchor, katalog enam produk, CTA WhatsApp, paket promo 10 buah, informasi jam operasional, alamat, ketentuan pesanan besar, dan tombol WhatsApp mobile.",
    pages: ["Beranda", "Pilihan jajanan", "Paket promo", "Cara pesan", "Informasi pemesanan"],
    palette: ["#FFF8EC", "#2D1C18", "#B3261E", "#5F8C3B"],
    scope: [
      "struktur landing page satu halaman",
      "copy produk jajanan dan informasi pemesanan",
      "katalog enam produk",
      "CTA WhatsApp",
      "section paket promo",
      "informasi lokasi, jam operasional, dan ketentuan pesanan besar",
      "responsive layout untuk desktop dan mobile",
    ],
    decisions: [
      "Harga satuan dan paket promo diletakkan di hero agar keputusan pembelian terlihat sejak awal.",
      "Produk ditampilkan sebagai katalog sederhana supaya calon pembeli bisa memilih tanpa membuka banyak halaman.",
      "Cara pesan dibuat dalam tiga langkah singkat karena alur transaksi tetap diarahkan ke WhatsApp.",
      "Informasi lokasi, jam operasional, pengambilan, dan pengantaran ditaruh sebelum CTA akhir untuk mengurangi pertanyaan berulang.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    screenshots: [
      {
        src: "/media/projects/aneka-jajanan-desktop.png",
        alt: "Screenshot desktop website Aneka Jajanan Mutiara.",
        label: "Desktop",
        width: 1440,
        height: 4349,
      },
      {
        src: "/media/projects/aneka-jajanan-mobile.png",
        alt: "Screenshot mobile website Aneka Jajanan Mutiara.",
        label: "Mobile",
        width: 390,
        height: 6955,
      },
    ],
    note:
      "Aneka Jajanan Mutiara adalah proyek website live Asta Tengen untuk memperlihatkan pendekatan landing page sederhana bagi usaha kuliner lokal yang mengandalkan pemesanan lewat WhatsApp.",
  },
  {
    slug: "ruang-rapi-laundry",
    name: "Ruang Rapi",
    label: "Website Live",
    projectType: "Proyek internal Asta Tengen",
    industry: "Jasa lokal",
    service: "Business Profile AI",
    year: "2026",
    liveUrl: "https://ruangrapi.vercel.app/",
    summary:
      "Website profil laundry yang dirancang sebagai proyek internal Asta Tengen untuk menunjukkan cara usaha jasa lokal menjelaskan layanan, harga, proses, area layanan, dan jalur kontak dari satu halaman yang mudah dibuka di ponsel.",
    problem:
      "Usaha laundry sering menerima pertanyaan berulang tentang jenis layanan, harga kiloan, barang satuan, estimasi, area antar-jemput, dan cara order. Website perlu membantu calon pelanggan memahami informasi dasar sebelum membuka WhatsApp.",
    goal:
      "Menyusun profil bisnis yang terlihat rapi, realistis untuk usaha lokal, dan membantu pengguna memilih layanan dengan lebih percaya diri sebelum menghubungi admin.",
    design:
      "Arah visual dibuat bersih, ringan, dan tidak terlalu mewah agar tetap terasa cocok untuk market jasa lokal. Informasi dipisah menjadi blok layanan, paket utama, proses, area, dan catatan operasional.",
    implementation:
      "Website dipublikasikan sebagai halaman live dengan navigasi sederhana, CTA WhatsApp, informasi paket, section proses, area layanan, dan catatan penting sebelum menyerahkan pakaian.",
    pages: ["Beranda", "Layanan", "Proses", "Area layanan", "Kontak"],
    palette: ["#F1E7D6", "#0B0B0A", "#FF5A1F", "#FFFDF8"],
    scope: [
      "struktur landing page satu halaman",
      "copy layanan laundry dan alur order",
      "CTA WhatsApp",
      "section paket kiloan dan layanan satuan",
      "informasi area antar-jemput",
      "responsive layout untuk desktop dan mobile",
    ],
    decisions: [
      "Harga dan paket dibuat cepat terlihat agar calon pelanggan tidak harus bertanya dari awal.",
      "Bagian proses diletakkan sebelum area layanan supaya pengguna memahami alur sebelum mengirim chat.",
      "Visual dibuat bersih dan tenang agar layanan terasa rapi tanpa terlihat seperti brand besar yang jauh dari usaha lokal.",
      "CTA WhatsApp muncul pada titik keputusan, bukan sebagai elemen yang terus menekan pengguna.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    screenshots: [
      {
        src: "/media/projects/ruangrapi-desktop.png",
        alt: "Screenshot desktop website Ruang Rapi.",
        label: "Desktop",
        width: 1440,
        height: 4784,
      },
      {
        src: "/media/projects/ruangrapi-mobile.png",
        alt: "Screenshot mobile website Ruang Rapi.",
        label: "Mobile",
        width: 780,
        height: 18158,
      },
    ],
    note:
      "Ruang Rapi adalah proyek internal Asta Tengen yang dibuat untuk memperlihatkan pendekatan desain, copy, dan struktur informasi untuk usaha jasa lokal.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
