import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getWhatsAppUrl } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

const stages = [
  {
    title: "Memahami bisnis",
    body: "Proses dimulai dari jenis usaha, calon pelanggan, materi yang tersedia, dan batas anggaran. Tahap ini mencegah website dibangun dari asumsi yang kabur.",
  },
  {
    title: "Menyusun arah",
    body: "Struktur halaman, prioritas konten, fitur, dan jalur WhatsApp disepakati sebelum desain masuk terlalu jauh.",
  },
  {
    title: "Mendesain dan membangun",
    body: "Desain dibuat sesuai ruang lingkup paket, lalu dibangun dengan perhatian pada mobile, performa, aksesibilitas, dan SEO dasar.",
  },
  {
    title: "Meluncurkan dan mendampingi",
    body: "Website diluncurkan setelah fungsi utama diuji, materi final siap, pembayaran selesai, dan klien memberi persetujuan.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Proses",
  description: "Proses kerja Sector One dari memahami bisnis hingga peluncuran website.",
  path: "/proses",
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", href: "/" },
          { name: "Proses", href: "/proses" },
        ])}
      />
      <section className="page-hero">
        <Breadcrumbs
          items={[
            { href: "/", label: "Beranda" },
            { href: "/proses", label: "Proses" },
          ]}
        />
        <p className="eyebrow">Proses</p>
        <h1>Proses dibuat jelas agar pengerjaan website tetap terkendali.</h1>
        <p>
          Alur kerja, revisi, pembayaran, dan peluncuran ditulis sejak awal agar keputusan proyek tidak menggantung di tengah jalan.
        </p>
      </section>

      <section className="process-page-grid">
        {stages.map((stage, index) => (
          <article key={stage.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{stage.title}</h2>
            <p>{stage.body}</p>
          </article>
        ))}
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Tanggung jawab</p>
          <h2>Sector One menjaga struktur kerja. Klien menjaga kebenaran informasi bisnis.</h2>
        </div>
        <div className="two-column-copy">
          <div>
            <h3>Sector One</h3>
            <ul>
              <li>menyusun struktur halaman sesuai paket</li>
              <li>mendesain dan membangun website</li>
              <li>menjaga performa, responsif, aksesibilitas, dan SEO dasar</li>
              <li>memberi ruang revisi sesuai batas paket</li>
            </ul>
          </div>
          <div>
            <h3>Klien</h3>
            <ul>
              <li>mengirim materi yang benar dan boleh digunakan</li>
              <li>memeriksa harga, kontak, produk, kebijakan, dan ejaan</li>
              <li>memberi feedback dalam satu daftar perubahan yang jelas</li>
              <li>memberi persetujuan final sebelum peluncuran</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="split-section dark-section compact">
        <div>
          <p className="eyebrow">Pembayaran dan peluncuran</p>
          <h2>Pekerjaan dimulai setelah pembayaran awal, brief, akses, materi utama, dan ruang lingkup disepakati.</h2>
        </div>
        <p>
          Kecuali dinyatakan berbeda dalam penawaran, pembayaran awal sebesar 50% dilakukan sebelum pengerjaan dan pembayaran akhir
          sebesar 50% dilakukan sebelum peluncuran final.
        </p>
      </section>

      <section className="final-cta">
        <h2>Ingin tahu proses yang cocok untuk kebutuhanmu?</h2>
        <p>Kirim kebutuhan awal lewat WhatsApp. Sector One akan bantu arahkan ke ruang lingkup yang paling masuk akal.</p>
        <a className="button button-dark" href={getWhatsAppUrl()}>
          Konsultasikan Website
        </a>
      </section>
    </>
  );
}
