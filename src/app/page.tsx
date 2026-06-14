import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { AbstractPanel } from "@/components/AbstractPanel";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ServiceJourney } from "@/components/ServiceJourney";
import { projectStudies } from "@/content/projects";
import { services } from "@/content/services";
import { getWhatsAppUrl, siteConfig } from "@/content/site";
import { organizationJsonLd, servicesJsonLd } from "@/lib/json-ld";

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={servicesJsonLd()} />

      <section className="hero-section dark-section">
        <div className="hero-media">
          <AbstractPanel tone="dark" label="Asta Tengen" />
        </div>
        <div className="hero-content">
          <Reveal>
            <p className="eyebrow">{siteConfig.tagline}</p>
            <h1>Website yang membuat bisnis lebih mudah dipercaya.</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="hero-copy">{siteConfig.description}</p>
          </Reveal>
          <Reveal className="hero-actions" delay={0.14}>
            <a className="button button-primary" href={getWhatsAppUrl()}>
              Konsultasikan Website
            </a>
            <p>Mulai Rp100.000 untuk kebutuhan paling sederhana, dengan ruang pengembangan hingga website bisnis yang lebih lengkap.</p>
          </Reveal>
        </div>
      </section>

      <section className="statement-section">
        <Reveal className="section-kicker">
          <p className="eyebrow">Posisi kami</p>
        </Reveal>
        <div className="statement-grid">
          <Reveal>
            <h2>Website yang baik tidak harus terasa rumit, dan harga yang jelas tidak harus mengorbankan arah desain.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Asta Tengen membantu usaha kecil dan bisnis yang sedang berkembang menyusun tampilan online yang lebih rapi, lebih mudah
              dijelaskan, dan lebih siap menerima pelanggan.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="projects-section dark-section">
        <div className="section-heading">
          <p className="eyebrow">Portofolio awal</p>
          <h2>Studi konsep yang menunjukkan cara Asta Tengen berpikir.</h2>
          <p>
            Belum ada proyek klien komersial yang ditampilkan. Tiga contoh berikut adalah studi konsep fiktif, dibuat untuk memperlihatkan
            pendekatan desain tanpa membuat klaim kerja sama.
          </p>
        </div>
        <div className="project-feature-grid">
          {projectStudies.map((project, index) => (
            <Reveal key={project.slug} className={index === 0 ? "project-tile project-tile-large" : "project-tile"} delay={index * 0.06}>
              <Link href={`/proyek/${project.slug}`}>
                <div className="project-visual" style={{ "--accent": project.palette[2] } as CSSProperties}>
                  <span>{project.label}</span>
                  <strong>{project.name}</strong>
                </div>
                <div className="project-meta">
                  <span>{project.industry}</span>
                  <span>{project.service}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="service-section">
        <div className="section-heading">
          <p className="eyebrow">Layanan</p>
          <h2>Mulai dari presence sederhana sampai website custom dengan Asta Assist.</h2>
          <p>Paket dibuat berjenjang agar calon klien memahami batas pekerjaan, biaya tahunan, revisi, dan masa garansi sejak awal.</p>
        </div>
        <ServiceJourney />
      </section>

      <section className="process-preview dark-section">
        <div className="section-heading">
          <p className="eyebrow">Proses</p>
          <h2>Empat tahap yang menjaga proyek tetap jelas.</h2>
        </div>
        <div className="process-grid">
          {["Memahami bisnis", "Menyusun arah", "Mendesain dan membangun", "Meluncurkan dan mendampingi"].map((item, index) => (
            <Reveal key={item} className="process-step" delay={index * 0.05}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
              <p>
                {index === 0
                  ? "Kebutuhan, batas anggaran, materi, dan tujuan diperjelas sebelum pengerjaan dimulai."
                  : index === 1
                    ? "Struktur halaman, prioritas informasi, dan arah visual ditentukan agar website tidak hanya terlihat ramai."
                    : index === 2
                      ? "Desain dan implementasi berjalan dengan kontrol ruang lingkup, revisi, dan kesiapan mobile."
                      : "Peluncuran dilakukan setelah pemeriksaan fungsi utama, pembayaran, dan persetujuan final."}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="audience-section">
        <Reveal>
          <h2>Dibuat untuk usaha yang ingin tampil lebih serius tanpa merasa harus langsung menjadi perusahaan besar.</h2>
        </Reveal>
        <div className="audience-list">
          {["Warung makan", "Laundry", "Barbershop", "Klinik kecil", "Jasa profesional", "Produk lokal"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="price-intro">
        <div>
          <p className="eyebrow">Harga</p>
          <h2>Kebutuhan yang berbeda membutuhkan ruang kerja yang berbeda.</h2>
        </div>
        <div>
          <p>
            Paket dimulai dari <strong>{services[0].price}</strong> untuk presence paling sederhana hingga{" "}
            <strong>{services[services.length - 1].price}</strong> untuk website custom.
          </p>
          <ButtonLink href="/harga" variant="dark">
            Lihat rincian harga
          </ButtonLink>
        </div>
      </section>

      <section className="about-preview">
        <div className="founder-strip" aria-label="Pendiri Asta Tengen">
          {siteConfig.founders.map((founder) => (
            <figure key={founder.name}>
              <Image src={founder.image} alt={founder.alt} width={540} height={720} />
              <figcaption>
                <strong>{founder.name}</strong>
                <span>{founder.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div>
          <p className="eyebrow">Tentang</p>
          <h2>Dua orang yang membangun studio kecil dengan batas kerja yang jelas.</h2>
          <p>
            Asta Tengen tidak membuat kesan memiliki tim besar atau kantor publik. Website ini menampilkan kondisi yang dapat
            dipertanggungjawabkan: dua pendiri, basis di Semarang, dan layanan yang dijual dengan batas tertulis.
          </p>
          <ButtonLink href="/tentang" variant="dark">
            Kenali Asta Tengen
          </ButtonLink>
        </div>
      </section>

      <section className="final-cta">
        <h2>Punya bisnis yang perlu terlihat lebih serius?</h2>
        <p>Ceritakan kebutuhanmu. Kami akan membantu menentukan bentuk website yang paling masuk akal.</p>
        <a className="button button-dark" href={getWhatsAppUrl()}>
          Konsultasikan Website
        </a>
      </section>
    </>
  );
}
