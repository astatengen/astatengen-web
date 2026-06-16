import type { PortfolioProject } from "./types";

export const projects: PortfolioProject[] = [
  {
    slug: "ruang-rapi-laundry",
    name: "Ruang Rapi Laundry",
    label: "Studi Konsep Internal",
    projectType: "Studi konsep website Sector One",
    industry: "Laundry lokal",
    service: "Business Profile",
    year: "2026",
    liveUrl: "https://ruangrapi.vercel.app/",
    summary:
      "Website laundry yang menyusun layanan kiloan, cuci satuan, alur antar-jemput, area layanan, dan tombol pesan WhatsApp.",
    problem:
      "Usaha laundry sering menjawab pertanyaan yang sama: jenis layanan, estimasi selesai, area antar-jemput, dan ketentuan pakaian. Tanpa halaman yang rapi, calon pelanggan harus bertanya dulu sebelum bisa memutuskan.",
    goal:
      "Membuat halaman yang membantu pelanggan memilih layanan, memahami ketentuan dasar, lalu menghubungi WhatsApp dengan konteks yang lebih jelas.",
    design:
      "Visual dibuat bersih dan tenang agar sesuai dengan karakter laundry. Informasi dibagi menjadi layanan harian, paket kiloan, cuci satuan, proses, area layanan, dan catatan sebelum menyerahkan pakaian.",
    implementation:
      "Landing page responsif dengan navigasi anchor, katalog layanan, paket harga, proses kerja, area antar-jemput, dan CTA WhatsApp pada titik keputusan utama.",
    pages: ["Beranda", "Layanan", "Proses", "Area Layanan", "Kontak"],
    palette: ["#F5F7F2", "#DDE8DF", "#3F765F", "#102E24"],
    scope: [
      "struktur landing page satu halaman",
      "copy layanan laundry dan ketentuan operasional",
      "katalog paket kiloan serta cuci satuan",
      "alur antar-jemput dan area layanan",
      "CTA WhatsApp untuk pemesanan",
      "layout responsif desktop dan mobile",
    ],
    decisions: [
      "Harga dan paket diletakkan sebelum proses agar pelanggan cepat memahami pilihan utama.",
      "Catatan operasional dibuat eksplisit untuk mengurangi salah paham saat penyerahan pakaian.",
      "Tombol WhatsApp ditempatkan setelah informasi layanan, bukan hanya di hero.",
      "Warna hijau netral dipakai untuk memberi kesan bersih, stabil, dan tidak terlalu promosi.",
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
      "Ruang Rapi adalah studi konsep internal untuk menunjukkan struktur website jasa laundry lokal yang perlu menjelaskan layanan, harga, area, dan ketentuan dengan jelas.",
  },
  {
    slug: "aneka-jajanan-mutiara",
    name: "Aneka Jajanan Mutiara",
    label: "Studi Konsep Internal",
    projectType: "Studi konsep website Sector One",
    industry: "Kuliner rumahan",
    service: "Starter Page",
    year: "2026",
    liveUrl: "https://anekajajanan.vercel.app/",
    summary:
      "Website katalog jajanan tradisional dengan harga satuan, paket promo, cara pesan, lokasi usaha, dan jam operasional.",
    problem:
      "Penjual jajanan rumahan sering menerima pesanan lewat chat tanpa daftar produk yang mudah dibaca. Calon pembeli perlu melihat pilihan jajanan, harga, paket, lokasi, dan aturan pesan jumlah besar sebelum menghubungi penjual.",
    goal:
      "Membuat halaman sederhana yang bisa dibagikan ke calon pembeli agar pilihan produk, harga, dan cara pesan terlihat jelas sejak awal.",
    design:
      "Arah visual memakai nuansa hangat seperti kertas dan warna merah bata untuk mendekati karakter jajanan tradisional. Foto produk dibuat sebagai bukti visual utama, bukan dekorasi.",
    implementation:
      "Landing page satu halaman berisi hero produk, daftar jajanan, paket 10 buah, cara pesan, lokasi, jam buka, ketentuan pesanan besar, dan CTA WhatsApp.",
    pages: ["Beranda", "Pilihan Jajanan", "Paket Promo", "Cara Pesan", "Lokasi & Jam Buka"],
    palette: ["#F8EBDD", "#E5C6A6", "#9C2F27", "#3B261A"],
    scope: [
      "landing page katalog produk sederhana",
      "copy harga satuan dan paket promo",
      "daftar enam jenis jajanan tradisional",
      "informasi lokasi dan jam operasional",
      "ketentuan pesanan jumlah besar",
      "CTA WhatsApp untuk pemesanan",
    ],
    decisions: [
      "Harga Rp1.500 dan paket Rp10.000 ditampilkan di hero agar calon pembeli langsung memahami penawaran.",
      "Foto jajanan diletakkan besar karena produk kuliner perlu terlihat nyata dan menggugah.",
      "Cara pesan dibuat tiga langkah agar pembeli baru tidak bingung saat menghubungi WhatsApp.",
      "Ketentuan H-1 untuk pesanan besar ditulis eksplisit agar penjual punya ruang menyiapkan produksi.",
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
      "Aneka Jajanan Mutiara adalah studi konsep untuk memperlihatkan bagaimana usaha kuliner rumahan dapat punya katalog web yang ringan, jelas, dan mudah dibagikan.",
  },
  {
    slug: "satu-cukur-barbershop",
    name: "Satu Cukur Barbershop",
    label: "Studi Konsep Internal",
    projectType: "Studi konsep website Sector One",
    industry: "Barbershop",
    service: "Starter Page",
    year: "2026",
    summary:
      "Website barbershop yang menampilkan menu layanan, kisaran harga, jam buka, lokasi, dan tombol booking cepat.",
    problem:
      "Calon pelanggan barbershop biasanya ingin tahu harga potong, treatment tambahan, jam ramai, dan lokasi sebelum datang. Jika semua informasi hanya ada di chat atau unggahan lama, pelanggan mudah ragu.",
    goal:
      "Menyusun halaman profil singkat yang membantu pelanggan melihat menu layanan, memahami kisaran harga, lalu booking melalui WhatsApp.",
    design:
      "Visual dibuat tegas dan sederhana dengan warna gelap, garis tipis, dan struktur informasi yang cepat dipindai dari ponsel.",
    implementation:
      "Landing page dengan hero, menu layanan, galeri singkat, lokasi, jam buka, dan CTA booking WhatsApp.",
    pages: ["Beranda", "Menu Layanan", "Galeri", "Lokasi", "Booking"],
    palette: ["#0B0D10", "#1B2028", "#D6B16A", "#F7F2E8"],
    scope: [
      "landing page satu halaman",
      "daftar layanan pangkas dan treatment",
      "kisaran harga",
      "informasi lokasi dan jam buka",
      "CTA booking WhatsApp",
      "layout mobile-first",
    ],
    decisions: [
      "Menu layanan ditempatkan di bagian awal agar pelanggan cepat menemukan harga.",
      "CTA booking dibuat singkat karena pengguna barbershop cenderung ingin tindakan cepat.",
      "Galeri digunakan secukupnya agar halaman tidak berubah menjadi feed media sosial.",
      "Informasi lokasi dan jam buka dibuat mudah ditemukan dari layar ponsel.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    screenshots: [
      {
        src: "/media/projects/satucukur-desktop.png",
        alt: "Screenshot desktop website Satu Cukur Barbershop.",
        label: "Desktop",
        width: 1440,
        height: 4784,
      },
      {
        src: "/media/projects/satucukur-mobile.png",
        alt: "Screenshot mobile website Satu Cukur Barbershop.",
        label: "Mobile",
        width: 780,
        height: 18158,
      },
    ],
    note:
      "Satu Cukur adalah studi konsep internal untuk halaman barbershop yang ringkas, cepat dibaca, dan berorientasi pada booking.",
  },
  {
    slug: "klinik-nara-aesthetic",
    name: "Klinik Nara Aesthetic",
    label: "Studi Konsep Internal",
    projectType: "Studi konsep website Sector One",
    industry: "Klinik kecantikan",
    service: "Business Profile",
    year: "2026",
    summary:
      "Website klinik kecantikan yang menyusun treatment, edukasi singkat, alur konsultasi, dan pendaftaran WhatsApp.",
    problem:
      "Bisnis kecantikan perlu membangun rasa aman. Calon pasien membutuhkan informasi treatment, alur konsultasi, batas klaim, dan cara daftar sebelum mengambil keputusan.",
    goal:
      "Membuat profil bisnis yang terasa rapi dan hati-hati, dengan informasi layanan yang tidak berlebihan serta CTA konsultasi yang jelas.",
    design:
      "Tampilan dibuat bersih, lembut, dan terstruktur. Copy menghindari janji hasil instan agar komunikasi terasa lebih bertanggung jawab.",
    implementation:
      "Website profil dengan section katalog treatment, edukasi dasar, alur konsultasi, FAQ, dan pendaftaran via WhatsApp.",
    pages: ["Beranda", "Katalog Treatment", "Alur Konsultasi", "FAQ", "Kontak"],
    palette: ["#F7F8FA", "#E8EEF4", "#5A8EA8", "#1D2B34"],
    scope: [
      "struktur halaman profil klinik",
      "katalog treatment",
      "copy edukatif dan berhati-hati",
      "alur konsultasi awal",
      "FAQ layanan",
      "CTA pendaftaran WhatsApp",
    ],
    decisions: [
      "Copy dibuat informatif tanpa klaim hasil berlebihan.",
      "Alur konsultasi ditampilkan sebelum CTA untuk memberi rasa aman.",
      "FAQ dipakai untuk menjawab pertanyaan umum sebelum calon pasien menghubungi admin.",
      "Warna lembut dipakai untuk menjaga kesan klinis tanpa terasa dingin.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    screenshots: [
      {
        src: "/media/projects/kliniknara-desktop.png",
        alt: "Screenshot desktop website Klinik Nara.",
        label: "Desktop",
        width: 1440,
        height: 4784,
      },
      {
        src: "/media/projects/kliniknara-mobile.png",
        alt: "Screenshot mobile website Klinik Nara.",
        label: "Mobile",
        width: 780,
        height: 18158,
      },
    ],
    note:
      "Klinik Nara adalah studi konsep internal untuk bisnis kecantikan yang membutuhkan struktur informasi lebih hati-hati dan tepercaya.",
  },
  {
    slug: "bengkel-garis-mesin",
    name: "Bengkel Garis Mesin",
    label: "Studi Konsep Internal",
    projectType: "Studi konsep website Sector One",
    industry: "Bengkel otomotif",
    service: "Starter Page",
    year: "2026",
    summary:
      "Website bengkel yang menampilkan jenis servis, estimasi pengerjaan, lokasi, dan tombol kontak darurat.",
    problem:
      "Pemilik kendaraan butuh informasi cepat: bengkel mengerjakan apa, kira-kira berapa lama, di mana lokasinya, dan bagaimana menghubungi saat kondisi darurat.",
    goal:
      "Menyusun halaman yang mudah dibaca dari ponsel, terutama untuk pengguna yang sedang mencari bantuan servis atau derek.",
    design:
      "Visual dibuat kontras dan langsung. Informasi servis diprioritaskan agar pengguna tidak perlu menggulir terlalu jauh untuk menemukan kontak.",
    implementation:
      "Landing page dengan daftar servis, estimasi pengerjaan, peta lokasi, jam buka, dan CTA WhatsApp untuk kontak cepat.",
    pages: ["Beranda", "Jenis Servis", "Estimasi", "Lokasi", "Kontak Darurat"],
    palette: ["#0E1116", "#242A33", "#F2B705", "#F8FAFC"],
    scope: [
      "landing page satu halaman",
      "katalog jasa servis",
      "estimasi waktu pengerjaan",
      "informasi lokasi",
      "CTA WhatsApp darurat",
      "layout ponsel untuk akses cepat",
    ],
    decisions: [
      "Tombol kontak cepat ditempatkan tinggi agar mudah ditemukan saat darurat.",
      "Jenis servis ditulis langsung, tanpa paragraf promosi panjang.",
      "Estimasi pengerjaan dipakai sebagai acuan awal, bukan janji mutlak.",
      "Kontras visual dijaga tinggi untuk keterbacaan di luar ruangan.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    screenshots: [
      {
        src: "/media/projects/garismesin-desktop.png",
        alt: "Screenshot desktop website Bengkel Garis Mesin.",
        label: "Desktop",
        width: 1440,
        height: 4784,
      },
      {
        src: "/media/projects/garismesin-mobile.png",
        alt: "Screenshot mobile website Bengkel Garis Mesin.",
        label: "Mobile",
        width: 780,
        height: 18158,
      },
    ],
    note:
      "Garis Mesin adalah studi konsep internal untuk bengkel lokal yang perlu menonjolkan informasi servis dan jalur kontak cepat.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
