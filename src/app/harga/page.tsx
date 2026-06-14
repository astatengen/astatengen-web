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
  description: "Daftar harga, biaya tahunan, revisi, garansi, dan batas Asta Assist untuk layanan Asta Tengen.",
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
        <h1>Kebutuhan yang berbeda membutuhkan ruang kerja yang berbeda.</h1>
        <p>Harga berikut bersumber dari dokumen layanan Asta Tengen dan berlaku selama ruang lingkup proyek tidak berubah.</p>
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
          <p className="eyebrow">Biaya tahunan</p>
          <h2>Perpanjangan menjaga domain, hosting, SSL, backup, sistem dasar, dan Asta Assist tetap berjalan.</h2>
        </div>
        <ul>
          {serviceNotes.annualRenewalCovers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="split-section dark-section compact">
        <div>
          <p className="eyebrow">Batas AI</p>
          <h2>Asta Assist memiliki batas penggunaan yang tertulis sejak awal.</h2>
        </div>
        <ul>
          {serviceNotes.aiUsage.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="final-cta">
        <h2>Belum yakin paket mana yang paling masuk akal?</h2>
        <p>Ceritakan kebutuhan dan anggaran awalmu lewat WhatsApp.</p>
        <a className="button button-dark" href={getWhatsAppUrl()}>
          Konsultasikan Website
        </a>
      </section>
    </>
  );
}
