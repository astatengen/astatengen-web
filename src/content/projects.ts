import type { PortfolioProject } from "./types";

export const projects: PortfolioProject[] = [
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
