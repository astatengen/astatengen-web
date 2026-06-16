import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/site-url";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/media/brand/logosectorone.svg"),
    email: siteConfig.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.whatsappDisplay,
        contactType: "customer service",
        availableLanguage: ["Indonesian"],
        areaServed: "ID",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Semarang",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    founder: siteConfig.founders.map((founder) => ({
      "@type": "Person",
      name: founder.name,
    })),
  };
}

export function servicesJsonLd() {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: service.price.replace(/[^\d]/g, ""),
      url: absoluteUrl(`/layanan/${service.slug}`),
    },
  }));
}

export function breadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}
