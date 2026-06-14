import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { getWhatsAppUrl, siteConfig } from "@/content/site";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Kontak",
  description: "Konsultasikan kebutuhan website dengan Asta Tengen melalui WhatsApp.",
  path: "/kontak",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", href: "/" },
          { name: "Kontak", href: "/kontak" },
        ])}
      />
      <section className="page-hero">
        <Breadcrumbs
          items={[
            { href: "/", label: "Beranda" },
            { href: "/kontak", label: "Kontak" },
          ]}
        />
        <p className="eyebrow">Kontak</p>
        <h1>Ceritakan kebutuhan website yang sedang kamu pikirkan.</h1>
        <p>
          Formulir ini tidak menyimpan data ke backend. Setelah validasi, ringkasan kebutuhan akan dibuka sebagai pesan WhatsApp.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <h2>Jalur konsultasi</h2>
          <a href={getWhatsAppUrl()}>{siteConfig.whatsappDisplay}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <p>{siteConfig.location}</p>
          <p>{siteConfig.hours}</p>
          <p>Asta Tengen belum memiliki alamat kantor yang dibuka untuk kunjungan publik.</p>
        </div>
        <ContactForm />
      </section>

      <section className="faq-strip">
        <article>
          <h2>Apakah harus tahu paket sejak awal?</h2>
          <p>Tidak. Pilih opsi belum yakin jika kebutuhan masih perlu diarahkan.</p>
        </article>
        <article>
          <h2>Apakah konsultasi sepenuhnya lewat WhatsApp?</h2>
          <p>Untuk tahap v1, ya. Integrasi lain dapat ditambahkan setelah endpoint dipilih.</p>
        </article>
        <article>
          <h2>Apakah form ini mengirim data otomatis?</h2>
          <p>Tidak. Data hanya masuk ke pesan WhatsApp setelah kamu menekan tombol dan mengirimkannya sendiri.</p>
        </article>
      </section>
    </>
  );
}
