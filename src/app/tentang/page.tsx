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
  description: "Asta Tengen adalah agensi website dari Semarang yang didirikan dan dijalankan oleh dua orang.",
  path: "/tentang",
});

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
        <h1>Studio kecil dari Semarang yang dibangun dengan batas kerja yang jelas.</h1>
        <p>
          Asta Tengen didirikan dan dijalankan oleh Achmad Roychan serta Aditya Sendy Ardiansyah. Kami tidak menampilkan kantor,
          dokumentasi kerja, atau tim tambahan yang belum tersedia sebagai aset nyata.
        </p>
      </section>

      <section className="founder-section">
        {siteConfig.founders.map((founder) => (
          <article key={founder.name} className="founder-profile">
            <Image src={founder.image} alt={founder.alt} width={720} height={960} />
            <div>
              <p className="eyebrow">Pendiri</p>
              <h2>{founder.name}</h2>
              <p>{founder.role}</p>
              <p>{founder.note}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="split-section dark-section">
        <div>
          <p className="eyebrow">Cara berpikir</p>
          <h2>Desain yang baik harus membantu pemilik bisnis menjelaskan dirinya dengan lebih tenang.</h2>
        </div>
        <p>
          Asta Tengen tidak menjual kesan mewah berlebihan. Kami memilih struktur yang mudah dipahami, harga yang tertulis, dan jalur
          konsultasi yang langsung menuju WhatsApp.
        </p>
      </section>

      <section className="values-section">
        {["Kejelasan", "Ketelitian", "Kejujuran", "Tanggung jawab", "Desain sesuai kebutuhan"].map((value) => (
          <article key={value}>
            <h2>{value}</h2>
            <p>
              {value === "Kejujuran"
                ? "Tidak ada klaim klien, testimoni, kantor, atau hasil bisnis yang belum dapat dibuktikan."
                : "Nilai ini diterapkan melalui batas paket, struktur kerja, dan komunikasi yang ditulis sejak awal."}
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
