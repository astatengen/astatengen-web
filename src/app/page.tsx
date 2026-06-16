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

const starterService = services.find((service) => service.slug === "one-page-starter") ?? services[0];
const profileService = services.find((service) => service.slug === "business-profile") ?? services[1];
const plusService = services.find((service) => service.slug === "business-plus") ?? services[2];
const customService = services.find((service) => service.slug === "custom-website") ?? services[3];

const featuredProject = projects[0];
const founder = siteConfig.founders[0];

// Pre-filled WhatsApp templates
const getWhatsAppTemplate = (packageName?: string) => {
  return [
    "Halo Sector One, saya ingin konsultasi website.",
    "Nama bisnis: ",
    "Jenis usaha: ",
    "Lokasi: ",
    `Paket yang diminati: ${packageName || ""}`,
    "Materi yang sudah tersedia: ",
    "Target pengerjaan: "
  ].join("\n");
};

const problemPoints = [
  {
    title: "Informasi bisnis tercecer",
    body: "Harga, lokasi, jam buka, dan daftar layanan sering tersebar di chat, media sosial, atau foto brosur yang cepat tenggelam.",
  },
  {
    title: "Calon pelanggan sulit memahami layanan",
    body: "Tanpa penjelasan yang rapi, pengunjung sering ragu dan pergi sebelum paham keunggulan usahamu.",
  },
  {
    title: "Chat WhatsApp dipenuhi pertanyaan berulang",
    body: "Waktu kerja habis hanya untuk membalas pertanyaan dasar yang sama berulang kali dari calon pembeli.",
  },
];

const solutionPoints = [
  "Informasi bisnis ditata agar lebih mudah dipahami calon pelanggan.",
  "Link website resmi yang ringan dan siap dikirim ke calon pelanggan kapan saja.",
  "Tombol WhatsApp jelas agar calon pelanggan bisa langsung menghubungi.",
  "Tampilan rapi dan cepat dibuka di layar HP (mobile-friendly).",
  "Sangat cocok untuk bisnis lokal yang ingin tampil lebih profesional.",
];

const processSteps = [
  {
    title: "Kirim materi bisnis",
    body: "Klien menyiapkan data seperti nama bisnis, layanan, harga, foto, alamat, dan nomor WhatsApp.",
  },
  {
    title: "Sector One susun halaman",
    body: "Kami membantu menyusun struktur informasi, menulis copy singkat yang lugas, dan menata urutan section.",
  },
  {
    title: "Website dibuat",
    body: "Halaman web dibangun dengan kode yang bersih, ringan, dan responsif agar nyaman dibuka dari HP.",
  },
  {
    title: "Review dan rilis",
    body: "Website diperiksa bersama, tautan WhatsApp diuji, lalu dirilis agar siap dibagikan ke calon pelanggan.",
  },
];

const faqs = [
  {
    question: "Apakah harga Rp199.000 sudah termasuk domain?",
    answer: "Belum. Paket Rp199.000 menggunakan subdomain Sector One (misalnya: namabisnis.sectorone.id). Jika ingin menggunakan domain pribadi (.com/.id), kami bisa membantu setup jika Anda sudah membeli domain secara terpisah.",
  },
  {
    question: "Apakah bisa pakai domain sendiri?",
    answer: "Bisa. Kami akan membantu menghubungkan domain pribadi Anda ke server website agar bisa diakses langsung.",
  },
  {
    question: "Apakah bisa revisi?",
    answer: "Bisa sesuai batas tiap paket. Paket One Page Starter mendapatkan 1x revisi kecil untuk penyesuaian teks atau foto.",
  },
  {
    question: "Apakah saya harus menyiapkan foto?",
    answer: "Iya, klien perlu menyiapkan logo, foto produk/toko, daftar layanan, harga, alamat, jam buka, dan nomor WhatsApp. Jika belum ada foto produk yang bagus, kami bisa membantu memasang aset sederhana sementara.",
  },
  {
    question: "Berapa lama pengerjaannya?",
    answer: "Paket One Page Starter membutuhkan waktu 1-2 hari setelah materi lengkap diterima. Paket lainnya disesuaikan dengan kompleksitas halaman.",
  },
  {
    question: "Apakah website bisa dibuka di HP?",
    answer: "Iya, seluruh website buatan Sector One dirancang responsif agar tampil rapi dan ringan saat diakses melalui HP.",
  },
  {
    question: "Apakah ada fitur toko online?",
    answer: "Tidak untuk paket Starter dan Profile. Kebutuhan toko online, katalog dinamis, sistem reservasi, dan integrasi payment gateway masuk ke paket Custom Website.",
  },
  {
    question: "Apakah bisa bayar setelah website jadi?",
    answer: "Tidak. Pengerjaan baru dimulai setelah pembayaran awal disepakati (penuh di awal untuk paket Starter, atau DP 50% untuk paket lainnya) dan materi lengkap kami terima.",
  },
];

// Conceptual studies data mapping for Section 5
const conceptStudies = [
  {
    slug: "ruang-rapi-laundry",
    name: "Ruang Rapi Laundry",
    industry: "Jasa laundry",
    problem: "Calon pelanggan sering belum paham paket laundry, area antar jemput, estimasi pengerjaan, dan cara order.",
    solution: "Website disusun dengan section layanan, paket harga, area layanan, alur order, FAQ, dan CTA WhatsApp.",
    keySection: "Tabel Layanan, Alur Antar-Jemput, Ketentuan Operasional",
    ctaText: "Pesan via WhatsApp",
    serviceName: "Business Profile",
  },
  {
    slug: "aneka-jajanan-mutiara",
    name: "Aneka Jajanan Mutiara",
    industry: "Kuliner rumahan",
    problem: "Penjual jajanan rumahan sering menerima pesanan lewat chat tanpa daftar produk yang mudah dibaca.",
    solution: "Website katalog produk sederhana berisi pilihan jajanan, paket promo, lokasi, jam buka, dan alur pemesanan.",
    keySection: "Daftar Jajanan, Paket Promo, Cara Pesan H-1",
    ctaText: "Pesan via WhatsApp",
    serviceName: "One Page Starter",
  },
  {
    slug: "satu-cukur-barbershop",
    name: "Satu Cukur Barbershop",
    industry: "Barbershop",
    problem: "Calon pelanggan barbershop ingin tahu menu layanan, harga potong, jam operasional, dan lokasi sebelum datang.",
    solution: "Landing page ringkas yang menampilkan menu pangkas, jam operasional, peta lokasi, dan tombol booking cepat.",
    keySection: "Menu Layanan, Jam Operasional, Lokasi Google Maps",
    ctaText: "Booking via WhatsApp",
    serviceName: "One Page Starter",
  },
  {
    slug: "klinik-nara-aesthetic",
    name: "Klinik Nara Aesthetic",
    industry: "Klinik kecantikan",
    problem: "Klinik kecantikan perlu membangun rasa aman bagi calon pasien dengan alur konsultasi dan informasi treatment yang jelas.",
    solution: "Website profil lengkap yang menyusun treatment kecantikan, alur konsultasi, FAQ, dan tombol daftar.",
    keySection: "Katalog Treatment, Alur Konsultasi, FAQ Layanan",
    ctaText: "Konsultasi via WhatsApp",
    serviceName: "Business Profile",
  },
  {
    slug: "bengkel-garis-mesin",
    name: "Bengkel Garis Mesin",
    industry: "Bengkel otomotif",
    problem: "Pemilik kendaraan butuh informasi cepat mengenai jenis servis, estimasi pengerjaan, lokasi, dan kontak darurat.",
    solution: "Landing page responsif dengan menu servis, estimasi waktu pengerjaan, peta lokasi, dan tombol kontak darurat.",
    keySection: "Daftar Servis, Estimasi Waktu, Kontak Darurat",
    ctaText: "Hubungi Bengkel",
    serviceName: "One Page Starter",
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
            <h1>Website sederhana untuk bisnismu, mulai Rp199.000.</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="hero-copy">
              Sector One membantu usaha lokal punya halaman website yang rapi, mudah dibaca, dan siap dibagikan ke calon pelanggan melalui WhatsApp.
            </p>
          </Reveal>
          <Reveal className="hero-actions" delay={0.14}>
            <a
              className="button button-primary"
              href={getWhatsAppUrl(getWhatsAppTemplate("One Page Starter"))}
            >
              Buat Website Rp199.000
            </a>
            <a className="button button-light" href="#contoh-website">
              Lihat Contoh Website
            </a>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="hero-facts" aria-label="Kelebihan Sector One">
              <li>Mulai Rp199.000</li>
              <li>Cocok untuk UMKM</li>
              <li>Mobile friendly</li>
              <li>Bisa pakai WhatsApp</li>
              <li>Selesai cepat setelah materi lengkap</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="statement-section">
        <div className="statement-grid">
          <Reveal>
            <p className="eyebrow">Masalah umum</p>
            <h2>Calon pelanggan sering bertanya hal yang sama.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Harga berapa, lokasinya di mana, buka jam berapa, layanannya apa saja, cara pesannya bagaimana. Kalau semua jawaban masih tercecer di chat, story, katalog, dan foto brosur, bisnis bisa terlihat kurang siap meskipun layanannya bagus.
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
          <p className="eyebrow">Solusi Sector One</p>
          <h2>Sector One merapikan informasi bisnismu menjadi website siap dibagikan.</h2>
        </div>
        <div className="check-list-panel">
          <p>
            Kami bantu menyusun informasi penting seperti layanan, harga, lokasi, jam buka, FAQ, galeri, dan tombol WhatsApp ke dalam website yang ringan, responsif, dan mudah dibaca dari HP.
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
            <p className="eyebrow">Paket Utama</p>
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
          <p className="eyebrow">Dikelola oleh founder</p>
          <h2>Dikerjakan langsung oleh founder.</h2>
          <p>
            Sector One adalah studio website independen dari Semarang yang dikelola langsung oleh Achmad Roychan. Fokusnya sederhana: membantu bisnis lokal punya website yang rapi, ringan, dan mudah dihubungi tanpa proses yang dibuat rumit.
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
            <p className="eyebrow">Cara Kerja</p>
            <h2>Cara kerja sederhana, supaya kamu tidak bingung.</h2>
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
        <div className="process-note">
          <p><strong>Catatan:</strong> Pengerjaan dimulai setelah materi lengkap dan pembayaran awal disepakati.</p>
        </div>
      </section>

      <section className="projects-section" id="contoh-website">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Contoh Website</p>
            <h2>Contoh website untuk bisnis lokal.</h2>
          </div>
          <p>
            Studi konsep internal dibuat untuk menunjukkan cara Sector One menyusun informasi bisnis lokal menjadi website yang lebih mudah dipahami.
          </p>
        </div>

        <div className="project-feature-grid">
          {conceptStudies.map((concept, index) => {
            const project = projects.find((p) => p.slug === concept.slug) || featuredProject;
            return (
              <Reveal key={concept.slug} className={index === 0 ? "project-tile project-tile-large" : "project-tile"} delay={index * 0.05}>
                <div className="project-concept-card">
                  <Link href={`/proyek/${concept.slug}`}>
                    <div className="project-preview" style={{ "--accent": project.palette[2] } as CSSProperties}>
                      <Image
                        src={project.screenshots[0].src}
                        alt={project.screenshots[0].alt}
                        width={project.screenshots[0].width}
                        height={project.screenshots[0].height}
                        sizes="(max-width: 720px) 100vw, 50vw"
                      />
                      <span>Studi konsep internal</span>
                    </div>
                  </Link>
                  <div className="project-concept-details">
                    <div className="project-meta">
                      <span>{concept.industry}</span>
                      <span>Layanan: {concept.serviceName}</span>
                    </div>
                    <h3>{concept.name}</h3>
                    <div className="concept-study-info">
                      <p><strong>Masalah:</strong> {concept.problem}</p>
                      <p><strong>Solusi:</strong> {concept.solution}</p>
                      <p><strong>Section penting:</strong> {concept.keySection}</p>
                    </div>
                    <div className="project-tile-actions">
                      <a
                        className="button button-ghost button-sm"
                        href={getWhatsAppUrl(getWhatsAppTemplate(concept.serviceName))}
                      >
                        {concept.ctaText}
                      </a>
                      <Link className="link-details-sm" href={`/proyek/${concept.slug}`}>
                        Lihat detail
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="offer-ladder-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Harga</p>
            <h2>Paket utama dengan batas kerja yang jelas.</h2>
          </div>
          <p>
            Harga dibuat ramah untuk bisnis kecil yang baru mulai membangun kehadiran online.
          </p>
        </div>

        <div className="offer-ladder">
          {[starterService, profileService, plusService, customService].map((service) => (
            <Reveal key={service.slug} className={service.slug === "business-profile" ? "offer-card featured" : "offer-card"}>
              <p className="eyebrow">{service.slug === "business-profile" ? "Paling direkomendasikan" : "Paket"}</p>
              <h3>{service.name}</h3>
              <strong>{service.price}</strong>
              <p>{service.summary}</p>
              <ul>
                {service.includes.slice(0, 5).map((item) => (
                  <li key={item}>{item}</li>
                ))}
                <li>Estimasi: {service.estimate}</li>
              </ul>
              <div className="offer-card-actions">
                <a
                  className="button button-primary"
                  href={getWhatsAppUrl(getWhatsAppTemplate(service.name))}
                >
                  {service.slug === "one-page-starter"
                    ? "Ambil Paket Starter"
                    : service.slug === "business-profile"
                    ? "Pilih Business Profile"
                    : service.slug === "business-plus"
                    ? "Konsultasi Business Plus"
                    : "Bahas Custom Website"}
                </a>
                <Link href={`/layanan/${service.slug}`} className="button button-ghost">
                  Detail Paket
                </Link>
              </div>
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
        <h2>Siap punya website sederhana untuk bisnismu?</h2>
        <p>
          Kirim nama bisnis, jenis usaha, layanan, alamat, dan nomor WhatsApp. Sector One akan bantu arahkan paket yang paling sesuai.
        </p>
        <a
          className="button button-dark"
          href={getWhatsAppUrl(getWhatsAppTemplate())}
        >
          Chat Sector One di WhatsApp
        </a>
      </section>
    </>
  );
}
