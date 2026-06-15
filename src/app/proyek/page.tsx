import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/projects";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Proyek",
  description: "Portofolio proyek live Asta Tengen untuk usaha jasa lokal, kuliner, dan bisnis kecil yang membutuhkan website rapi.",
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
        <h1>Proyek live yang bisa dinilai langsung.</h1>
        <p>
          Beberapa proyek live Asta Tengen memperlihatkan bagaimana website usaha lokal dapat disusun dengan informasi yang jelas, visual
          yang sesuai konteks bisnis, dan jalur WhatsApp yang mudah ditemukan.
        </p>
      </section>

      <section className="project-index">
        {projects.map((project, index) => (
          <Reveal key={project.slug} className="project-index-row" delay={index * 0.06}>
            <Link href={`/proyek/${project.slug}`}>
              <div className="project-preview" style={{ "--accent": project.palette[2] } as CSSProperties}>
                <Image
                  src={project.screenshots[0].src}
                  alt={project.screenshots[0].alt}
                  width={project.screenshots[0].width}
                  height={project.screenshots[0].height}
                  sizes="(max-width: 920px) 100vw, 42vw"
                />
                <span>{project.label}</span>
              </div>
              <div>
                <p className="eyebrow">{project.industry}</p>
                <h2>{project.name}</h2>
                <p>{project.summary}</p>
                <span className="text-link">Lihat detail proyek</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
