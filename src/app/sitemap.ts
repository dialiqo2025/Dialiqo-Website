import type { MetadataRoute } from "next";
import {
  SERVICES_DATA,
  INDUSTRIES_DATA,
  RESOURCES_DATA,
} from "@/data/dialiqoData";
import { SITE_URL } from "@/lib/routes";

/** Tech pages kept as redirect targets from live VoIP stack URLs. */
const INDEXED_TECH_SLUGS = [
  "freeswitch",
  "asterisk",
  "kamailio",
  "opensips",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/solutions",
    "/resources",
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
    ...INDEXED_TECH_SLUGS.map((slug) => ({
      url: `${SITE_URL}/technologies/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...RESOURCES_DATA.map((r) => ({
      url: `${SITE_URL}/resources/${r.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
