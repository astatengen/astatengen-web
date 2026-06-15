import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { publicRoutes } from "@/content/site";
import { absoluteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const dynamicRoutes = [
    ...services.map((service) => `/layanan/${service.slug}`),
    ...projects.map((project) => `/proyek/${project.slug}`),
  ];

  return [...publicRoutes, ...dynamicRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
