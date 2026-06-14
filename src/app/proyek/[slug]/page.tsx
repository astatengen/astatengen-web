import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { getProjectStudy, projectStudies } from "@/content/projects";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projectStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectStudy(slug);

  if (!project) {
    return createMetadata({
      title: "Proyek tidak ditemukan",
      description: "Studi konsep Asta Tengen tidak ditemukan.",
      path: "/proyek",
    });
  }

  return createMetadata({
    title: project.name,
    description: `${project.label} untuk ${project.industry}: ${project.summary}`,
    path: `/proyek/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectStudy(slug);

  if (!project) {
    notFound();
  }

  const nextProject = projectStudies[(projectStudies.findIndex((item) => item.slug === project.slug) + 1) % projectStudies.length];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", href: "/" },
          { name: "Proyek", href: "/proyek" },
          { name: project.name, href: `/proyek/${project.slug}` },
        ])}
      />
      <section className="case-hero dark-section">
        <Breadcrumbs
          items={[
            { href: "/", label: "Beranda" },
            { href: "/proyek", label: "Proyek" },
            { href: `/proyek/${project.slug}`, label: project.name },
          ]}
        />
        <p className="eyebrow">{project.label}</p>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
        <dl className="case-meta">
          <div>
            <dt>Industri</dt>
            <dd>{project.industry}</dd>
          </div>
          <div>
            <dt>Layanan</dt>
            <dd>{project.service}</dd>
          </div>
          <div>
            <dt>Tahun</dt>
            <dd>{project.year}</dd>
          </div>
        </dl>
      </section>

      <section className="case-visual-band" style={{ "--accent": project.palette[2] } as CSSProperties}>
        <span>{project.label}</span>
        <strong>{project.name}</strong>
      </section>

      <section className="case-study-content">
        <article>
          <h2>Latar belakang</h2>
          <p>{project.problem}</p>
        </article>
        <article>
          <h2>Tujuan</h2>
          <p>{project.goal}</p>
        </article>
        <article>
          <h2>Arah desain</h2>
          <p>{project.design}</p>
        </article>
        <article>
          <h2>Implementasi</h2>
          <p>{project.implementation}</p>
        </article>
        <article>
          <h2>Struktur halaman</h2>
          <ul>
            {project.pages.map((page) => (
              <li key={page}>{page}</li>
            ))}
          </ul>
        </article>
        <article className="case-note">
          <h2>Catatan kejujuran</h2>
          <p>
            Studi ini memakai identitas fiktif. Tidak ada testimoni, statistik penjualan, logo bisnis nyata, atau klaim kerja sama komersial.
          </p>
        </article>
      </section>

      <section className="case-actions">
        <ButtonLink href={`/demo/${project.demoSlug}`} variant="dark">
          Buka live demo
        </ButtonLink>
        <Link href={`/proyek/${nextProject.slug}`}>Lanjut ke {nextProject.name}</Link>
      </section>
    </>
  );
}
