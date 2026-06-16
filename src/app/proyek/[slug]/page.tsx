import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getProject, projects } from "@/content/projects";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return createMetadata({
      title: "Proyek tidak ditemukan",
      description: "Studi konsep Sector One tidak ditemukan.",
      path: "/proyek",
    });
  }

  return createMetadata({
    title: project.name,
    description: `${project.label} untuk ${project.industry}: ${project.summary}`,
    path: `/proyek/${project.slug}`,
    image: project.screenshots[0].src,
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

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
            <dt>Jenis</dt>
            <dd>{project.projectType}</dd>
          </div>
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

      <section className="case-showcase" aria-label={`Tampilan website ${project.name}`}>
        <div className="case-browser">
          <div className="case-frame-bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <Image
            src={project.screenshots[0].src}
            alt={project.screenshots[0].alt}
            width={project.screenshots[0].width}
            height={project.screenshots[0].height}
            sizes="(max-width: 920px) 100vw, 68vw"
            priority
          />
        </div>
        <div className="case-phone">
          <Image
            src={project.screenshots[1].src}
            alt={project.screenshots[1].alt}
            width={project.screenshots[1].width}
            height={project.screenshots[1].height}
            sizes="(max-width: 920px) 42vw, 20vw"
          />
          <span>{project.screenshots[1].label}</span>
        </div>
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
        <article>
          <h2>Ruang lingkup</h2>
          <ul>
            {project.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Keputusan desain</h2>
          <ul>
            {project.decisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Teknologi</h2>
          <ul>
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="case-note">
          <h2>Status proyek</h2>
          <p>{project.note}</p>
        </article>
      </section>

      <section className="case-actions">
        {project.liveUrl ? (
          <a className="button button-dark" href={project.liveUrl} target="_blank" rel="noreferrer">
            Buka website live
          </a>
        ) : null}
        <Link href="/kontak">Buat website untuk usahamu</Link>
        <Link href="/proyek">Lihat studi konsep lain</Link>
      </section>
    </>
  );
}
