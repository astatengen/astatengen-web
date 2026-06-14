import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectStudy, projectStudies } from "@/content/projects";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projectStudies.map((project) => ({ slug: project.demoSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectStudy(slug);

  if (!project) {
    return createMetadata({
      title: "Demo tidak ditemukan",
      description: "Live demo studi konsep tidak ditemukan.",
      path: "/proyek",
    });
  }

  return createMetadata({
    title: `Demo ${project.name}`,
    description: `Live demo fiktif untuk ${project.label} ${project.name}.`,
    path: `/demo/${project.demoSlug}`,
  });
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectStudy(slug);

  if (!project) {
    notFound();
  }

  if (project.slug === "kedai-rasa-pesisir") {
    return <RestaurantDemo projectName={project.name} />;
  }

  if (project.slug === "ruang-rapi-laundry") {
    return <LaundryDemo projectName={project.name} />;
  }

  return <CatalogueDemo projectName={project.name} />;
}

function ConceptBadge() {
  return <span className="demo-badge">Studi Konsep Fiktif</span>;
}

function RestaurantDemo({ projectName }: { projectName: string }) {
  return (
    <main className="demo-page demo-restaurant">
      <ConceptBadge />
      <section className="demo-hero">
        <p>Kedai lokal</p>
        <h1>{projectName}</h1>
        <p>Konsep halaman untuk kedai makan yang ingin menu, lokasi, dan pemesanan terbaca cepat dari ponsel.</p>
      </section>
      <section className="demo-menu">
        {["Nasi hangat", "Lauk pesisir", "Minuman rumah"].map((item) => (
          <article key={item}>
            <h2>{item}</h2>
            <p>Contoh kategori menu fiktif untuk menunjukkan struktur informasi.</p>
          </article>
        ))}
      </section>
      <section className="demo-contact">
        <h2>Pesan lewat WhatsApp</h2>
        <p>CTA ditempatkan setelah pengguna memahami menu dan lokasi.</p>
      </section>
    </main>
  );
}

function LaundryDemo({ projectName }: { projectName: string }) {
  return (
    <main className="demo-page demo-laundry">
      <ConceptBadge />
      <section className="demo-hero">
        <p>Jasa laundry</p>
        <h1>{projectName}</h1>
        <p>Konsep profil jasa yang menjelaskan paket, proses, dan area layanan tanpa membuat pengguna menebak.</p>
      </section>
      <section className="demo-steps">
        {["Pilih layanan", "Jadwalkan jemput", "Terima konfirmasi"].map((item, index) => (
          <article key={item}>
            <span>{index + 1}</span>
            <h2>{item}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}

function CatalogueDemo({ projectName }: { projectName: string }) {
  return (
    <main className="demo-page demo-catalogue">
      <ConceptBadge />
      <section className="demo-hero">
        <p>Katalog produk</p>
        <h1>{projectName}</h1>
        <p>Konsep katalog ringan untuk membantu pembeli menelusuri kategori sebelum bertanya lewat WhatsApp.</p>
      </section>
      <section className="demo-products">
        {["Produk rumah", "Hadiah", "Edisi terbatas"].map((item) => (
          <article key={item}>
            <div />
            <h2>{item}</h2>
            <p>Contoh kategori fiktif. Tidak mewakili stok atau harga nyata.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
