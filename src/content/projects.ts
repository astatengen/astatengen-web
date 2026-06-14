import type { ProjectStudy } from "./types";

export const projectStudies: ProjectStudy[] = [
  {
    slug: "kedai-rasa-pesisir",
    demoSlug: "kedai-rasa-pesisir",
    name: "Kedai Rasa Pesisir",
    label: "Studi Konsep",
    industry: "Kuliner lokal",
    service: "Launch Page AI",
    year: "2026",
    summary:
      "Konsep landing page untuk kedai makan lokal yang perlu menjelaskan menu, lokasi, jam buka, dan jalur pemesanan dengan cepat.",
    problem:
      "Banyak calon pelanggan hanya membutuhkan kepastian praktis: menu apa yang tersedia, berapa kisaran harganya, di mana lokasinya, dan bagaimana memesan.",
    goal:
      "Membuat halaman yang mudah dipindai dari ponsel, menjaga rasa lokal tetap hangat, dan mengarahkan pengguna ke WhatsApp tanpa membuat pengalaman terasa agresif.",
    design:
      "Arah visual memakai warna hangat, layout editorial sederhana, ritme foto/menu, dan blok informasi yang jelas untuk pengguna yang sedang mencari tempat makan.",
    implementation:
      "Demo dibuat sebagai halaman statis ringan dengan menu ringkas, informasi lokasi, FAQ dasar, dan CTA WhatsApp. Tidak ada klaim penjualan atau testimoni.",
    pages: ["Beranda", "Menu singkat", "Lokasi", "Pertanyaan umum", "CTA pemesanan"],
    palette: ["#FFFDF8", "#151411", "#FF5A1F", "#D8C8B0"],
  },
  {
    slug: "ruang-rapi-laundry",
    demoSlug: "ruang-rapi-laundry",
    name: "Ruang Rapi Laundry",
    label: "Studi Konsep",
    industry: "Jasa lokal",
    service: "Business Profile AI",
    year: "2026",
    summary:
      "Konsep website profil untuk jasa laundry yang perlu membuat paket layanan, area antar jemput, dan alur order terasa jelas.",
    problem:
      "Pengguna sering ragu karena belum mengetahui jenis layanan, estimasi pengerjaan, batas area, dan cara mengirim pakaian.",
    goal:
      "Menyusun informasi jasa menjadi halaman yang tenang, mudah dipercaya, dan membantu pengguna memilih layanan sebelum menghubungi admin.",
    design:
      "Komposisi dibuat bersih dengan grid informasi, tipografi besar untuk paket utama, dan bagian proses yang mengurangi kekhawatiran calon pelanggan.",
    implementation:
      "Demo dibuat dengan struktur profil bisnis, layanan, alur pengerjaan, cakupan area, dan CTA WhatsApp. Semua identitas bersifat fiktif.",
    pages: ["Beranda", "Layanan", "Proses", "Area layanan", "Kontak"],
    palette: ["#F1E7D6", "#0B0B0A", "#FF5A1F", "#FFFDF8"],
  },
  {
    slug: "katalog-nusa-kriya",
    demoSlug: "katalog-nusa-kriya",
    name: "Katalog Nusa Kriya",
    label: "Studi Konsep",
    industry: "Produk lokal",
    service: "Product Catalogue AI",
    year: "2026",
    summary:
      "Konsep katalog untuk brand produk lokal yang perlu menampilkan kategori, detail produk, dan jalur tanya produk lewat WhatsApp.",
    problem:
      "Produk lokal sering hanya tampil di chat atau media sosial sehingga pembeli sulit membandingkan varian, material, dan informasi pemesanan.",
    goal:
      "Membangun katalog ringan yang membantu pengguna menemukan produk sebelum bertanya lebih lanjut kepada pemilik bisnis.",
    design:
      "Arah visual menggabungkan ruang kosong, daftar produk editorial, dan aksen oranye yang digunakan sebagai penanda tindakan, bukan dekorasi berlebihan.",
    implementation:
      "Demo dibuat dengan kategori, detail produk konsep, ringkasan material, dan CTA konsultasi. Tidak ada stok, harga nyata, atau klaim transaksi.",
    pages: ["Beranda", "Kategori", "Detail produk", "Cara pesan", "Kontak"],
    palette: ["#151411", "#FFFDF8", "#FF5A1F", "#F1E7D6"],
  },
];

export function getProjectStudy(slug: string) {
  return projectStudies.find((project) => project.slug === slug || project.demoSlug === slug);
}
