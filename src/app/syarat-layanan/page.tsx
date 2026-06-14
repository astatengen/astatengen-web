import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LegalDocument, readLegalDocument } from "@/lib/legal-documents";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Syarat Layanan",
  description: "Syarat Layanan Asta Tengen yang berlaku sejak 14 Juni 2026.",
  path: "/syarat-layanan",
});

export default function TermsPage() {
  const raw = readLegalDocument("syarat layanan");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", href: "/" },
          { name: "Syarat Layanan", href: "/syarat-layanan" },
        ])}
      />
      <section className="legal-hero">
        <Breadcrumbs
          items={[
            { href: "/", label: "Beranda" },
            { href: "/syarat-layanan", label: "Syarat Layanan" },
          ]}
        />
      </section>
      <LegalDocument raw={raw} />
    </>
  );
}
