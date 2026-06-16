import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { getWhatsAppUrl, siteConfig } from "@/content/site";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Kontak",
  description: "Konsultasikan kebutuhan website dengan Sector One melalui WhatsApp.",
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
        <h1>Ceritakan kebutuhan website yang ingin kamu rapikan.</h1>
        <p>
          Isi formulir singkat ini untuk menyusun pesan awal. Setelah validasi, ringkasannya akan dibuka di WhatsApp dan belum tersimpan ke backend.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <h2>Jalur konsultasi</h2>
          <a href={getWhatsAppUrl()}>{siteConfig.whatsappDisplay}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <p>{siteConfig.location}</p>
          <p>{siteConfig.hours}</p>
          <p>Sector One belum memiliki alamat kantor yang dibuka untuk kunjungan publik.</p>
        </div>
        <ContactForm />
      </section>

      <section className="faq-strip">
        <article>
          <h2>Apakah harus tahu paket sejak awal?</h2>
          <p>Tidak. Pilih opsi belum yakin jika kebutuhan masih perlu diarahkan.</p>
        </article>
        <article>
          <h2>Apakah konsultasi lewat WhatsApp?</h2>
          <p>Ya. Konsultasi awal dilakukan lewat WhatsApp agar kebutuhan bisa dibahas langsung dan terdokumentasi.</p>
        </article>
        <article>
          <h2>Apakah form ini mengirim data otomatis?</h2>
          <p>Tidak. Data hanya masuk ke pesan WhatsApp setelah kamu menekan tombol dan mengirimkannya sendiri.</p>
        </article>
      </section>
    </>
  );
}
