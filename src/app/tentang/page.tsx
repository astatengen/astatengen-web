import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { mediaAssets } from "@/content/media";
import { getWhatsAppUrl, siteConfig } from "@/content/site";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Tentang",
  description: "Sector One adalah studio pembuatan website dari Semarang yang didirikan dan dijalankan oleh Achmad Roychan.",
  path: "/tentang",
});

const founder = siteConfig.founders[0];

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
        <h1>Studio kecil dari Semarang yang dikelola langsung oleh founder.</h1>
        <p>
          Sector One dijalankan oleh Achmad Roychan untuk membantu usaha lokal punya website yang jelas,
          mudah dibaca, dan tidak dibangun dari klaim berlebihan.
        </p>
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

      <section className="split-section dark-section">
        <div>
          <p className="eyebrow">Cara berpikir</p>
          <h2>Website harus membantu bisnis menjelaskan dirinya dengan tenang.</h2>
        </div>
        <p>
          Sector One tidak menjual kesan besar yang dibuat-buat. Fokusnya adalah struktur informasi,
          tampilan yang rapi, batas kerja yang tertulis, dan jalur konsultasi yang langsung menuju WhatsApp.
        </p>
      </section>

      <section className="values-section">
        {["Kejelasan", "Ketelitian", "Kejujuran", "Tanggung jawab", "Desain sesuai kebutuhan"].map((value) => (
          <article key={value}>
            <h2>{value}</h2>
            <p>
              {value === "Kejujuran"
                ? "Tidak ada klaim klien, testimoni, kantor, atau hasil bisnis yang belum bisa dibuktikan."
                : "Nilai ini diterapkan lewat batas paket, struktur kerja, dan komunikasi yang ditulis sejak awal."}
            </p>
          </article>
        ))}
      </section>

      <section className="media-governance">
        <div>
          <p className="eyebrow">Aset yang disetujui</p>
          <h2>Website v1 hanya memakai aset yang tercatat.</h2>
        </div>
        <ul>
          {mediaAssets.map((asset) => (
            <li key={asset.id}>
              <strong>{asset.id}</strong>
              <span>{asset.licenseType}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="final-cta">
        <h2>Ingin mulai dari percakapan yang jelas?</h2>
        <p>Ceritakan kebutuhan bisnis, anggaran, dan target waktu lewat WhatsApp.</p>
        <a className="button button-dark" href={getWhatsAppUrl()}>
          Konsultasikan Website
        </a>
      </section>
    </>
  );
}
