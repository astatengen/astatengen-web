import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({ title, description, path = "/", image = "/media/brand/logosectorone.svg" }: MetadataInput): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(getSiteUrl()),
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1254,
          height: 1254,
          alt: "Logo Sector One.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
