import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/routes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/thank-you",
          "/search",
          "/coming-soon",
          "/maintenance",
          "/careers",
          "/case-studies",
          "/api/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
