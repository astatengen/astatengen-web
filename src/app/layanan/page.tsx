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
  description: "Paket website Asta Tengen dari Starter Presence hingga Signature Build AI.",
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
        <h1>Paket website dengan batas fitur, biaya, dan masa dukungan yang tertulis jelas.</h1>
        <p>
          Setiap paket memiliki ruang kerja berbeda. Starter Presence dibuat untuk kebutuhan paling sederhana, sedangkan paket AI
          mencakup Asta Assist sesuai batas penggunaan masing-masing.
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
