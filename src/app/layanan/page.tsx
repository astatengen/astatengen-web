import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/services";
import { breadcrumbJsonLd, servicesJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Layanan",
  description: "Paket website Sector One untuk usaha lokal, dari halaman sederhana sampai website kustom.",
  path: "/layanan",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", href: "/" },
          { name: "Layanan", href: "/layanan" },
        ])}
      />
      <section className="page-hero">
        <Breadcrumbs
          items={[
            { href: "/", label: "Beranda" },
            { href: "/layanan", label: "Layanan" },
          ]}
        />
        <p className="eyebrow">Layanan</p>
        <h1>Paket website dengan ruang lingkup yang jelas.</h1>
        <p>
          Mulai dari halaman satu halaman untuk profil usaha, sampai website kustom untuk bisnis dengan konten dan alur yang lebih kompleks.
          Setiap paket ditulis dengan batas kerja agar biaya, revisi, dan ekspektasi lebih mudah dikendalikan.
        </p>
      </section>

      <section className="listing-section">
        {services.map((service, index) => (
          <Reveal key={service.slug} className="service-card" delay={index * 0.04}>
            <div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{service.name}</h2>
              <p>{service.summary}</p>
            </div>
            <dl>
              <div>
                <dt>Harga</dt>
                <dd>{service.price}</dd>
              </div>
              <div>
                <dt>Estimasi</dt>
                <dd>{service.estimate}</dd>
              </div>
              <div>
                <dt>Garansi</dt>
                <dd>{service.warranty}</dd>
              </div>
            </dl>
            <Link href={`/layanan/${service.slug}`}>Lihat detail</Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
