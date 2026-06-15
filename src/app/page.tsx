import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { AbstractPanel } from "@/components/AbstractPanel";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ServiceJourney } from "@/components/ServiceJourney";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { getWhatsAppUrl, siteConfig } from "@/content/site";
import { organizationJsonLd, servicesJsonLd } from "@/lib/json-ld";

const starterService = services.find((service) => service.slug === "starter-presence") ?? services[0];
const launchAiService = services.find((service) => service.slug === "launch-page-ai") ?? services[1];
const profileAiService = services.find((service) => service.slug === "business-profile-ai") ?? services[2];

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
            <h1>Website rapi untuk usaha kecil, mulai Rp100.000.</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="hero-copy">
              Asta Tengen membantu usaha kecil, mikro, dan bisnis lokal tampil lebih serius dengan website yang jelas, ringan, dan sesuai
              kebutuhan. Mulai dari presence sederhana sampai website dengan Asta Assist.
            </p>
          </Reveal>
          <Reveal className="hero-actions" delay={0.14}>
            <a className="button button-primary" href={getWhatsAppUrl("Halo Asta Tengen, saya ingin bahas paket website mulai Rp100.000.")}>
              Bahas Paket Rp100.000
            </a>
            <ButtonLink href={`/layanan/${launchAiService.slug}`} variant="light">
              Lihat Paket AI
            </ButtonLink>
            <p>
              Starter Presence cocok untuk mulai tampil online. Paket AI masuk ketika bisnis perlu landing page atau profil yang lebih
              lengkap dengan Asta Assist.
            </p>
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
              Fokus kami bukan membuat website terasa mahal. Fokusnya adalah membuat usaha terlihat tertata, informasinya mudah dipahami,
              dan calon pelanggan tahu langkah berikutnya.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="offer-ladder-section">
        <div className="section-heading">
          <p className="eyebrow">Cara memilih</p>
          <h2>Mulai dari yang cukup dulu, naik saat butuh fitur lebih.</h2>
          <p>
            Harga dibuat berjenjang supaya usaha kecil tetap bisa mulai. Starter menjaga biaya masuk tetap rendah, sedangkan paket AI
            memberi ruang untuk desain, domain, hosting, dan Asta Assist.
          </p>
        </div>
        <div className="offer-ladder">
          <Reveal className="offer-card offer-card-entry">
            <p className="eyebrow">Pintu masuk</p>
            <h3>{starterService.name}</h3>
            <strong>{starterService.price}</strong>
            <p>{starterService.summary}</p>
            <ul>
              <li>Satu halaman sederhana</li>
              <li>Subdomain Asta Tengen</li>
              <li>Tanpa Asta Assist</li>
            </ul>
            <ButtonLink href={`/layanan/${starterService.slug}`} variant="ghost">
              Detail Starter
            </ButtonLink>
          </Reveal>
          <Reveal className="offer-card offer-card-ai" delay={0.08}>
            <p className="eyebrow">Naik kelas</p>
            <h3>{launchAiService.name}</h3>
            <strong>{launchAiService.price}</strong>
            <p>
              Paket awal untuk website dengan Asta Assist, domain .com, hosting, SSL, SEO dasar, dan struktur halaman yang lebih matang.
            </p>
            <ul>
              <li>Untuk promosi produk, jasa, acara, kelas, atau kampanye</li>
              <li>Asta Assist sesuai batas paket</li>
              <li>Jalur upgrade menuju {profileAiService.name}</li>
            </ul>
            <ButtonLink href={`/layanan/${launchAiService.slug}`} variant="dark">
              Lihat Paket AI
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="projects-section dark-section">
        <div className="section-heading">
          <p className="eyebrow">Portofolio</p>
          <h2>Proyek live yang menunjukkan cara Asta Tengen menyusun website bisnis.</h2>
          <p>
            Portofolio ini berisi website live untuk usaha lokal, dari jasa laundry sampai jajanan tradisional, dengan struktur informasi
            yang jelas dan jalur WhatsApp yang mudah ditemukan.
          </p>
        </div>
        <div className="project-feature-grid">
          {projects.map((project, index) => (
            <Reveal key={project.slug} className={index === 0 ? "project-tile project-tile-large" : "project-tile"} delay={index * 0.06}>
              <Link href={`/proyek/${project.slug}`}>
                <div className="project-preview" style={{ "--accent": project.palette[2] } as CSSProperties}>
                  <Image
                    src={project.screenshots[0].src}
                    alt={project.screenshots[0].alt}
                    width={project.screenshots[0].width}
                    height={project.screenshots[0].height}
                    sizes="(max-width: 720px) 100vw, 55vw"
                  />
                  <span>{project.label}</span>
                </div>
                <div className="project-meta">
                  <span>{project.industry}</span>
                  <span>{project.projectType}</span>
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
          <h2>Agensi solo yang dibangun dengan batas kerja yang jelas.</h2>
          <p>
            Asta Tengen tidak membuat kesan memiliki tim besar atau kantor publik. Website ini menampilkan kondisi yang dapat
            dipertanggungjawabkan: satu pendiri, basis di Semarang, dan layanan yang dijual dengan batas tertulis.
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
