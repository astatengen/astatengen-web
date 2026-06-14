import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getWhatsAppUrl } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

const stages = [
  {
    title: "Memahami bisnis",
    body: "Kami mulai dari kebutuhan, jenis usaha, calon pelanggan, materi yang tersedia, dan batas anggaran. Tahap ini mencegah website dibangun dari asumsi yang kabur.",
  },
  {
    title: "Menyusun arah",
    body: "Struktur halaman, prioritas konten, fitur, dan jalur WhatsApp disepakati sebelum desain masuk terlalu jauh.",
  },
  {
    title: "Mendesain dan membangun",
    body: "Desain dibuat sesuai ruang lingkup paket, lalu diimplementasikan dengan perhatian pada mobile, performa, aksesibilitas, dan SEO dasar.",
  },
  {
    title: "Meluncurkan dan mendampingi",
    body: "Website diluncurkan setelah fungsi utama diuji, pembayaran selesai, materi final siap, dan klien memberi persetujuan.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Proses",
  description: "Proses kerja Asta Tengen dari memahami bisnis hingga peluncuran website.",
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
        <h1>Proses dibuat jelas agar website tidak terasa seperti proyek yang sulit dikendalikan.</h1>
        <p>
          Halaman ini menjelaskan tanggung jawab, revisi, pembayaran, dan peluncuran dengan bahasa yang mudah dipahami pemilik bisnis.
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
          <h2>Asta Tengen menjaga struktur kerja. Klien menjaga kebenaran materi bisnis.</h2>
        </div>
        <div className="two-column-copy">
          <div>
            <h3>Asta Tengen</h3>
            <ul>
              <li>menyusun struktur halaman dan desain sesuai paket</li>
              <li>mengimplementasikan website dan fungsi utama</li>
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
        <p>Kirim kebutuhan awal lewat WhatsApp. Kami akan bantu mengarahkannya ke paket yang paling masuk akal.</p>
        <a className="button button-dark" href={getWhatsAppUrl()}>
          Konsultasikan Website
        </a>
      </section>
    </>
  );
}
