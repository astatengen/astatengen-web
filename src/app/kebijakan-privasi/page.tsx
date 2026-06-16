import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LegalDocument, readLegalDocument } from "@/lib/legal-documents";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Kebijakan Privasi",
  description: "Kebijakan Privasi Sector One yang berlaku sejak 14 Juni 2026.",
  path: "/kebijakan-privasi",
});

export default function PrivacyPolicyPage() {
  const raw = readLegalDocument("kebijakan privasi");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", href: "/" },
          { name: "Kebijakan Privasi", href: "/kebijakan-privasi" },
        ])}
      />
      <section className="legal-hero">
        <Breadcrumbs
          items={[
            { href: "/", label: "Beranda" },
            { href: "/kebijakan-privasi", label: "Kebijakan Privasi" },
          ]}
        />
      </section>
      <LegalDocument raw={raw} />
    </>
  );
}
