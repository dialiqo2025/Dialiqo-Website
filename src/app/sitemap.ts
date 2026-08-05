import type { MetadataRoute } from "next";
import {
  SERVICES_DATA,
  INDUSTRIES_DATA,
  TECHNOLOGIES_DATA,
  CASE_STUDIES_DATA,
  RESOURCES_DATA,
} from "@/data/dialiqoData";
import { SITE_URL } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/technologies",
    "/solutions",
    "/case-studies",
    "/resources",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
    "/cookie-policy",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  return [
    ...staticRoutes,
    ...SERVICES_DATA.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...INDUSTRIES_DATA.map((i) => ({
      url: `${SITE_URL}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...TECHNOLOGIES_DATA.map((t) => ({
      url: `${SITE_URL}/technologies/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...CASE_STUDIES_DATA.map((c) => ({
      url: `${SITE_URL}/case-studies/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...RESOURCES_DATA.map((r) => ({
      url: `${SITE_URL}/resources/${r.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
