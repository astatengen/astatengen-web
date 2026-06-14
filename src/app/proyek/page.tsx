import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { projectStudies } from "@/content/projects";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Proyek",
  description: "Studi konsep Asta Tengen untuk menunjukkan pendekatan desain tanpa klaim proyek klien komersial.",
  path: "/proyek",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", href: "/" },
          { name: "Proyek", href: "/proyek" },
        ])}
      />
      <section className="page-hero">
        <Breadcrumbs
          items={[
            { href: "/", label: "Beranda" },
            { href: "/proyek", label: "Proyek" },
          ]}
        />
        <p className="eyebrow">Proyek</p>
        <h1>Portofolio awal berupa studi konsep, bukan klaim proyek klien.</h1>
        <p>
          Asta Tengen belum menampilkan proyek komersial. Studi konsep berikut menggunakan identitas fiktif untuk memperlihatkan cara
          menyusun informasi, visual, dan jalur tindakan.
        </p>
      </section>

      <section className="project-index">
        {projectStudies.map((project, index) => (
          <Reveal key={project.slug} className="project-index-row" delay={index * 0.06}>
            <Link href={`/proyek/${project.slug}`}>
              <div className="project-visual" style={{ "--accent": project.palette[2] } as CSSProperties}>
                <span>{project.label}</span>
                <strong>{project.name}</strong>
              </div>
              <div>
                <p className="eyebrow">{project.industry}</p>
                <h2>{project.name}</h2>
                <p>{project.summary}</p>
                <span className="text-link">Baca studi konsep</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
