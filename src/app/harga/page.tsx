import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { services, serviceNotes } from "@/content/services";
import { getWhatsAppUrl } from "@/content/site";
import { breadcrumbJsonLd, servicesJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Harga",
  description: "Daftar harga website Sector One mulai Rp750.000, termasuk biaya tahunan, revisi, garansi, dan dukungan teknis.",
  path: "/harga",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", href: "/" },
          { name: "Harga", href: "/harga" },
        ])}
      />
      <section className="page-hero">
        <Breadcrumbs
          items={[
            { href: "/", label: "Beranda" },
            { href: "/harga", label: "Harga" },
          ]}
        />
        <p className="eyebrow">Harga</p>
        <h1>Harga dibuat bertahap agar bisnis bisa mulai dari kebutuhan utama.</h1>
        <p>
          Tidak semua bisnis perlu website besar sejak awal. Pilih paket yang cukup untuk kebutuhan sekarang,
          lalu kembangkan saat informasi, cabang, atau fitur bisnis mulai bertambah.
        </p>
      </section>

      <section className="pricing-table-section" aria-label="Tabel harga layanan">
        <div className="pricing-table">
          {services.map((service) => (
            <article key={service.slug} className="pricing-row">
              <div>
                <h2>{service.name}</h2>
                <p>{service.summary}</p>
              </div>
              <dl>
                <div>
                  <dt>Harga final</dt>
                  <dd>{service.price}</dd>
                </div>
                <div>
                  <dt>Estimasi</dt>
                  <dd>{service.estimate}</dd>
                </div>
                <div>
                  <dt>Revisi</dt>
                  <dd>{service.revisions}</dd>
                </div>
                <div>
                  <dt>Perpanjangan</dt>
                  <dd>{service.renewal}</dd>
                </div>
                <div>
                  <dt>Garansi</dt>
                  <dd>{service.warranty}</dd>
                </div>
              </dl>
              <Link href={`/layanan/${service.slug}`}>Detail paket</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Harga dan kualitas</p>
          <h2>Harga mengikuti kedalaman konten dan kompleksitas pengerjaan.</h2>
        </div>
        <ul>
          <li>Starter Page cocok untuk usaha yang baru perlu tampil online dengan satu halaman sederhana.</li>
          <li>Business Profile cocok ketika bisnis perlu struktur konten lebih lengkap, FAQ, proses kerja, dan area layanan.</li>
          <li>Custom Website dipakai saat kebutuhan halaman, fitur, atau integrasi sudah tidak cukup ditangani paket standar.</li>
        </ul>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Biaya tahunan</p>
          <h2>Perpanjangan menjaga domain, hosting, SSL, backup, dan sistem dasar tetap berjalan.</h2>
        </div>
        <ul>
          {serviceNotes.annualRenewalCovers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="split-section dark-section compact">
        <div>
          <p className="eyebrow">Catatan dukungan</p>
          <h2>Dukungan teknis dijelaskan sejak awal supaya tidak ada ekspektasi yang kabur.</h2>
        </div>
        <ul>
          {serviceNotes.aiUsage.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="final-cta">
        <h2>Belum yakin paket mana yang paling masuk akal?</h2>
        <p>Ceritakan jenis bisnis, kebutuhan halaman, dan kisaran anggaran awal lewat WhatsApp.</p>
        <a className="button button-dark" href={getWhatsAppUrl()}>
          Konsultasikan Website
        </a>
      </section>
    </>
  );
}
