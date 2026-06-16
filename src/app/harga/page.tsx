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
  description: "Daftar harga pembuatan website Sector One mulai Rp199.000, transparan tanpa biaya tersembunyi.",
  path: "/harga",
});

const additionalCosts = [
  { item: "Domain pribadi (.com/.id)", cost: "Menyesuaikan penyedia domain" },
  { item: "Halaman tambahan", cost: "Mulai Rp150.000 / halaman" },
  { item: "Revisi tambahan di luar batas paket", cost: "Mulai Rp50.000" },
  { item: "Input konten tambahan", cost: "Mulai Rp50.000" },
  { item: "Fitur custom (katalog, booking, dll)", cost: "Dihitung sesuai kebutuhan" },
];

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
        <p className="eyebrow">Harga Layanan</p>
        <h1>Harga transparan, dibuat bertahap sesuai skala bisnismu.</h1>
        <p>
          Mulai dari halaman sederhana Rp199.000 hingga website kustom. Pilih paket yang sesuai dengan kebutuhan usahamu saat ini.
        </p>
      </section>

      <section className="pricing-table-section" aria-label="Tabel harga layanan">
        <div className="pricing-table">
          {services.map((service) => (
            <article key={service.slug} className={`pricing-row ${service.slug === "business-profile" ? "highlighted" : ""}`}>
              <div>
                <h2>
                  {service.name}
                  {service.slug === "business-profile" ? <span className="recommended-badge">Paling Direkomendasikan</span> : null}
                </h2>
                <p>{service.summary}</p>
              </div>
              <dl>
                <div>
                  <dt>Harga</dt>
                  <dd className="price-tag">{service.price}</dd>
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
              <div className="pricing-actions">
                <Link href={`/layanan/${service.slug}`} className="button button-ghost">
                  Detail Paket
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Biaya Tambahan</p>
          <h2>Layanan tambahan di luar lingkup paket dasar.</h2>
          <p>Daftar biaya tambahan untuk kebutuhan pengembangan lebih lanjut secara transparan.</p>
        </div>
        <div className="additional-costs-card">
          <ul className="costs-list">
            {additionalCosts.map((costItem, idx) => (
              <li key={idx} className="cost-row">
                <span>{costItem.item}</span>
                <strong>{costItem.cost}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Kesesuaian Paket</p>
          <h2>Pilih paket yang paling pas untuk target bisnismu.</h2>
        </div>
        <div className="package-recommendation-list">
          <ul>
            <li><strong>One Page Starter</strong>: Sangat cocok untuk usaha mikro yang baru mulai tampil online dengan biaya minimal.</li>
            <li><strong>Business Profile</strong>: Pilihan terbaik untuk usaha lokal (laundry, barbershop, bengkel) yang ingin menampilkan detail paket, FAQ, dan wilayah operasional.</li>
            <li><strong>Business Plus</strong>: Tepat untuk profil usaha berkembang yang ingin informasi layanannya terbagi rapi ke beberapa halaman terpisah.</li>
            <li><strong>Custom Website</strong>: Untuk bisnis dengan kebutuhan modul khusus seperti pemesanan, filter katalog produk, atau integrasi spesifik.</li>
          </ul>
        </div>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Biaya Tahunan</p>
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
          <p className="eyebrow">Ketentuan Kerja</p>
          <h2>Dukungan teknis dan komitmen rilis ditulis secara jujur sejak awal.</h2>
        </div>
        <ul>
          {serviceNotes.aiUsage.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="final-cta">
        <h2>Belum yakin paket mana yang paling pas?</h2>
        <p>Hubungi Sector One di WhatsApp untuk konsultasi awal gratis mengenai kebutuhan websitemu.</p>
        <a className="button button-dark" href={getWhatsAppUrl()}>
          Konsultasikan Website
        </a>
      </section>
    </>
  );
}
