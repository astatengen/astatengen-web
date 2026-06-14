import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { services, serviceNotes, getService } from "@/content/services";
import { getWhatsAppUrl } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return createMetadata({
      title: "Layanan tidak ditemukan",
      description: "Layanan Asta Tengen tidak ditemukan.",
      path: "/layanan",
    });
  }

  return createMetadata({
    title: service.name,
    description: `${service.name} dari Asta Tengen mulai ${service.price}. ${service.summary}`,
    path: `/layanan/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", href: "/" },
          { name: "Layanan", href: "/layanan" },
          { name: service.name, href: `/layanan/${service.slug}` },
        ])}
      />
      <section className="page-hero">
        <Breadcrumbs
          items={[
            { href: "/", label: "Beranda" },
            { href: "/layanan", label: "Layanan" },
            { href: `/layanan/${service.slug}`, label: service.name },
          ]}
        />
        <p className="eyebrow">Detail layanan</p>
        <h1>{service.name}</h1>
        <p>{service.summary}</p>
      </section>

      <section className="detail-layout">
        <aside className="price-panel">
          <p className="eyebrow">Mulai dari</p>
          <strong>{service.price}</strong>
          <dl>
            <div>
              <dt>Estimasi</dt>
              <dd>{service.estimate}</dd>
            </div>
            <div>
              <dt>Revisi</dt>
              <dd>{service.revisions}</dd>
            </div>
            <div>
              <dt>Garansi</dt>
              <dd>{service.warranty}</dd>
            </div>
            <div>
              <dt>Perpanjangan</dt>
              <dd>{service.renewal}</dd>
            </div>
          </dl>
          <a className="button button-primary" href={getWhatsAppUrl(`Halo Asta Tengen, saya ingin konsultasi paket ${service.name}.`)}>
            Konsultasikan paket ini
          </a>
        </aside>

        <div className="detail-content">
          <section>
            <h2>Cakupan awal</h2>
            <ul className="check-list">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Domain, hosting, dan AI</h2>
            <p>{service.domainHosting}</p>
            <p>{service.assistLimit}</p>
            <p>{service.assistActive}</p>
            {service.assistNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </section>

          <section>
            <h2>Batas dan catatan</h2>
            <ul>
              {service.constraints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Estimasi dimulai setelah</h2>
            <ul>
              {serviceNotes.estimateStartsAfter.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Revisi Asta Assist</h2>
            <div className="two-column-copy">
              <div>
                <h3>Mencakup</h3>
                <ul>
                  {serviceNotes.assistRevisionIncludes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Tidak mencakup</h3>
                <ul>
                  {serviceNotes.assistRevisionExcludes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <ButtonLink href="/harga" variant="dark">
            Bandingkan semua paket
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
