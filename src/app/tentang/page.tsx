import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getWhatsAppUrl, siteConfig } from "@/content/site";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Tentang",
  description: "Sector One adalah studio website independen dari Semarang yang membantu bisnis lokal punya website sederhana, rapi, dan mudah dihubungi.",
  path: "/tentang",
});

const founder = siteConfig.founders[0];

const values = [
  {
    title: "Jelas",
    body: "Setiap paket punya batas pekerjaan, estimasi, dan revisi yang ditulis sejak awal.",
  },
  {
    title: "Rapi",
    body: "Informasi bisnis disusun agar mudah dibaca, bukan sekadar ditempel ke halaman.",
  },
  {
    title: "Cepat",
    body: "Paket sederhana dikerjakan dengan template yang sudah disiapkan agar bisa selesai lebih cepat setelah materi lengkap.",
  },
  {
    title: "Jujur",
    body: "Tidak memakai klaim palsu, testimoni palsu, dan statistik yang belum terbukti.",
  },
  {
    title: "Terjangkau",
    body: "Harga dibuat ramah untuk bisnis kecil yang baru mulai membangun kehadiran online.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", href: "/" },
          { name: "Tentang", href: "/tentang" },
        ])}
      />
      <section className="page-hero">
        <Breadcrumbs
          items={[
            { href: "/", label: "Beranda" },
            { href: "/tentang", label: "Tentang" },
          ]}
        />
        <p className="eyebrow">Tentang</p>
        <h1>Studio website independen dari Semarang.</h1>
        <p>
          Sector One membantu bisnis lokal punya website sederhana, rapi, dan mudah dihubungi.
        </p>
      </section>

      <section className="about-intro-section">
        <div className="about-intro-grid">
          <h2>Fokus pada apa yang benar-benar dibutuhkan usaha kecil.</h2>
          <div>
            <p>
              Kami fokus pada hal yang paling dibutuhkan usaha kecil: informasi layanan yang jelas, tampilan yang enak dibaca dari HP, tombol WhatsApp yang mudah ditemukan, dan proses pengerjaan yang tidak dibuat rumit.
            </p>
            <p>
              Setiap proyek dimulai dari merapikan informasi bisnis terlebih dahulu. Setelah itu, informasi tersebut disusun menjadi struktur halaman, copy singkat, tampilan responsif, dan website live yang siap dibagikan ke calon pelanggan.
            </p>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <article className="founder-profile">
          <Image src={founder.image} alt={founder.alt} width={96} height={96} />
          <div>
            <p className="eyebrow">Founder</p>
            <h2>{founder.name}</h2>
            <p>{founder.role}</p>
            <p>{founder.note}</p>
          </div>
        </article>
      </section>

      <section className="values-section">
        <div className="section-heading">
          <p className="eyebrow">Nilai Kerja</p>
          <h2>Cara kami bekerja dan melayani klien.</h2>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <article key={value.title} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <h2>Ingin mulai dari percakapan yang jelas?</h2>
        <p>Hubungi Sector One di WhatsApp untuk mendiskusikan kebutuhan website usahamu.</p>
        <a className="button button-dark" href={getWhatsAppUrl()}>
          Hubungi Sector One
        </a>
      </section>
    </>
  );
}
