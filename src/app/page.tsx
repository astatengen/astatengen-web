import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ServiceJourney } from "@/components/ServiceJourney";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { getWhatsAppUrl, siteConfig } from "@/content/site";
import { organizationJsonLd, servicesJsonLd } from "@/lib/json-ld";

const starterService = services.find((service) => service.slug === "starter-page") ?? services[0];
const profileService = services.find((service) => service.slug === "business-profile") ?? services[1];
const customService = services.find((service) => service.slug === "custom-website") ?? services[2];
const featuredProject = projects[0];
const founder = siteConfig.founders[0];

const problemPoints = [
  {
    title: "Informasi penting sulit ditemukan",
    body: "Harga, jam buka, lokasi, dan cara pesan sering tersebar di chat, media sosial, atau foto brosur yang cepat tenggelam.",
  },
  {
    title: "Calon pelanggan butuh alasan untuk percaya",
    body: "Sebelum menghubungi WhatsApp, orang ingin melihat usaha yang aktif, jelas, dan punya informasi dasar yang bisa dicek.",
  },
  {
    title: "Link yang berantakan menurunkan minat",
    body: "Halaman yang terlalu penuh, lambat, atau tidak nyaman di ponsel membuat pengunjung pergi sebelum memahami penawaran.",
  },
];

const solutionPoints = [
  "alur halaman disusun dari kebutuhan pelanggan, bukan dari template kosong",
  "copy dibuat singkat, jelas, dan sesuai karakter usaha",
  "tampilan diuji di desktop dan ponsel sebelum rilis",
  "CTA WhatsApp ditempatkan setelah informasi penting terbaca",
];

const processSteps = [
  {
    title: "Pahami bisnis",
    body: "Jenis usaha, layanan utama, harga, area, dan karakter pelanggan diringkas agar arah halaman tidak kabur.",
  },
  {
    title: "Susun konten",
    body: "Materi dipilih, diedit, dan disusun menjadi alur yang mudah dipindai oleh calon pelanggan.",
  },
  {
    title: "Desain dan bangun",
    body: "Tampilan dibuat sesuai konteks bisnis, lalu diimplementasikan menjadi website yang responsif.",
  },
  {
    title: "Review dan rilis",
    body: "Teks, tombol, tautan WhatsApp, metadata, dan tampilan ponsel dicek sebelum website dipublikasikan.",
  },
];

const faqs = [
  {
    question: "Apakah cocok untuk bisnis kecil?",
    answer: "Cocok. Paket awal dibuat untuk usaha lokal yang butuh halaman resmi tanpa ruang lingkup berlebihan.",
  },
  {
    question: "Apakah harus punya materi lengkap?",
    answer: "Tidak harus sempurna. Minimal siapkan layanan utama, harga dasar, kontak, lokasi, dan foto yang boleh digunakan.",
  },
  {
    question: "Apakah langsung diarahkan ke WhatsApp?",
    answer: "Ya. Tombol kontak dapat membuka WhatsApp dengan pesan awal yang lebih rapi untuk memulai percakapan.",
  },
  {
    question: "Siapa yang mengerjakan website?",
    answer: "Pengerjaan ditangani langsung oleh Achmad Roychan, founder Sector One, agar komunikasi dan keputusan desain lebih ringkas.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={servicesJsonLd()} />

      <section className="hero-section">
        <Image
          className="hero-backdrop-image"
          src={featuredProject.screenshots[0].src}
          alt=""
          fill
          sizes="100vw"
          priority
        />
        <div className="hero-shade" aria-hidden="true" />

        <div className="hero-content">
          <Reveal>
            <h1>Website bisnis yang rapi dan jelas.</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="hero-copy">
              Sector One membantu usaha lokal menata layanan, harga, lokasi, dan jalur kontak menjadi website yang mudah
              dibaca, layak dibagikan, dan siap dibuka dari ponsel.
            </p>
          </Reveal>
          <Reveal className="hero-actions" delay={0.14}>
            <a
              className="button button-primary"
              href={getWhatsAppUrl("Halo Sector One, saya ingin konsultasi tentang kebutuhan website untuk bisnis saya.")}
            >
              Konsultasi via WhatsApp
            </a>
            <ButtonLink href="/proyek" variant="light">
              Lihat Studi Konsep
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="hero-facts" aria-label="Ringkasan Sector One">
              <li>Mulai Rp299.000</li>
              <li>Dikerjakan langsung oleh founder</li>
              <li>Fokus bisnis lokal dan jasa</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="statement-section">
        <div className="statement-grid">
          <Reveal>
            <p className="eyebrow">Masalah umum</p>
            <h2>Website yang baik tidak perlu ramai. Yang penting pengunjung cepat paham.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Untuk usaha kecil, website seharusnya menjawab pertanyaan dasar calon pelanggan: apa yang dijual,
              berapa kisarannya, di mana lokasinya, dan bagaimana cara menghubungi.
            </p>
          </Reveal>
        </div>

        <div className="problem-grid">
          {problemPoints.map((point, index) => (
            <Reveal key={point.title} className="plain-card" delay={index * 0.04}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="split-section solution-section">
        <div>
          <p className="eyebrow">Pendekatan</p>
          <h2>Isi bisnis dirapikan dulu sebelum masuk ke desain.</h2>
        </div>
        <div className="check-list-panel">
          <p>
            Website yang layak rilis dimulai dari informasi yang benar. Setelah itu baru visual, komposisi, dan detail responsifnya diselesaikan.
          </p>
          <ul>
            {solutionPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Layanan</p>
            <h2>Pilih paket sesuai kebutuhan sekarang.</h2>
          </div>
          <p>
            Paket dibuat bertahap agar usaha kecil bisa mulai dari halaman sederhana, lalu naik saat kebutuhan kontennya bertambah.
          </p>
        </div>
        <ServiceJourney />
      </section>

      <section className="operator-section">
        <div className="operator-copy">
          <p className="eyebrow">Dikelola satu orang</p>
          <h2>Komunikasi langsung dengan orang yang mengerjakan.</h2>
          <p>
            Sector One dikelola oleh Achmad Roychan. Brief, arah visual, copywriting, dan implementasi frontend ditangani
            langsung agar keputusan lebih ringkas dan mudah dilacak.
          </p>
        </div>
        <article className="founder-mini">
          <Image src={founder.image} alt={founder.alt} width={96} height={96} />
          <div>
            <h3>{founder.name}</h3>
            <p>{founder.role}</p>
            <p>{founder.note}</p>
          </div>
        </article>
      </section>

      <section className="process-preview">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Proses</p>
            <h2>Alur kerja dibuat jelas agar proyek tidak melebar diam-diam.</h2>
          </div>
          <p>
            Setiap tahap punya keputusan yang perlu disepakati sebelum lanjut ke tahap berikutnya.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} className="process-step" delay={index * 0.04}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Studi konsep</p>
            <h2>Contoh struktur website untuk usaha lokal.</h2>
          </div>
          <p>
            Studi konsep berikut memperlihatkan bagaimana informasi bisnis bisa diubah menjadi halaman yang mudah dibaca dan mudah dihubungi.
          </p>
        </div>

        <div className="project-feature-grid">
          {projects.map((project, index) => (
            <Reveal key={project.slug} className={index === 0 ? "project-tile project-tile-large" : "project-tile"} delay={index * 0.05}>
              <Link href={`/proyek/${project.slug}`}>
                <div className="project-preview" style={{ "--accent": project.palette[2] } as CSSProperties}>
                  <Image
                    src={project.screenshots[0].src}
                    alt={project.screenshots[0].alt}
                    width={project.screenshots[0].width}
                    height={project.screenshots[0].height}
                    sizes="(max-width: 720px) 100vw, 50vw"
                  />
                  <span>{project.label}</span>
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

      <section className="offer-ladder-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Harga</p>
            <h2>Paket awal dengan batas kerja yang jelas.</h2>
          </div>
          <p>
            Harga final mengikuti jumlah halaman, materi, aset, dan fitur yang benar-benar dibutuhkan.
          </p>
        </div>

        <div className="offer-ladder">
          {[starterService, profileService, customService].map((service) => (
            <Reveal key={service.slug} className={service.slug === "business-profile" ? "offer-card featured" : "offer-card"}>
              <p className="eyebrow">{service.slug === "business-profile" ? "Paling fleksibel" : "Paket"}</p>
              <h3>{service.name}</h3>
              <strong>{service.price}</strong>
              <p>{service.summary}</p>
              <ul>
                {service.includes.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
                <li>Estimasi: {service.estimate}</li>
              </ul>
              <ButtonLink href={`/layanan/${service.slug}`} variant={service.slug === "business-profile" ? "dark" : "ghost"}>
                Detail Paket
              </ButtonLink>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>Pertanyaan yang biasanya muncul di awal.</h2>
          </div>
        </div>
        <div className="faq-grid">
          {faqs.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Mulai dari brief singkat</p>
        <h2>Ceritakan bisnismu, nanti arahnya dirapikan.</h2>
        <p>
          Kirim jenis usaha, layanan utama, kisaran anggaran, dan target waktu. Sector One akan bantu pilih ruang lingkup yang paling masuk akal.
        </p>
        <a
          className="button button-dark"
          href={getWhatsAppUrl("Halo Sector One, saya ingin konsultasi awal tentang pembuatan website bisnis saya.")}
        >
          Konsultasi via WhatsApp
        </a>
      </section>
    </>
  );
}
