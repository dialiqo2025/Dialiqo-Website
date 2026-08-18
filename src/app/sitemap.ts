import type { MetadataRoute } from "next";
import {
  SERVICES_DATA,
  INDUSTRIES_DATA,
  RESOURCES_DATA,
} from "@/data/dialiqoData";
import { SITE_URL, THEMED_INDUSTRY_PATHS } from "@/lib/routes";

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
    "/about-us",
    "/voip-solutions-for-real-estate",
    "/voip-solutions-for-call-centers",
    "/voip-solutions-for-logistics",
    "/voip-solutions-for-telecom",
    "/voip-solutions-for-hotels",
    "/voip-solutions-for-education",
    "/voip-solutions-for-recruitment",
    "/voip-solutions-for-travel-agencies",
    "/voip-solutions-for-healthcare",
    "/voip-solutions-for-fintech",
    "/voip-solutions-for-enterprises",
    "/voip-solutions-for-ecommerce",
    "/voip-solutions-for-insurance",
    "/voip-solutions-for-saas-companies",
    "/products/contact-center-solutions",
    "/products/voip-billing-solution",
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
    {
      url: `${SITE_URL}/services/voip/freeswitch-development`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/voip/asterisk`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/voip/opensips`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/voip/kamailio-development-services`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/mobile-web/web-development`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/mobile-web/mobile-development`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/qa-testing-services/voip-testing-services`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/qa-testing-services/qa-automation`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/qa-testing-services/api-testing-services`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/ai-ml-development-services/sentiment-analysis`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/ai-ml-development-services/chatbot-services`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/ai-voicebot-connector`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/voip-solution`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/voip-solution/interactive-voice-response-solutions`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/voip-solution/unified-communications-solutions`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/voip-solution/webrtc-solutions`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/voip-solution/session-border-controller`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/voip-solution/mobile-virtual-network-operator-solution`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/voip-solution/class-5-softswitch-solutions`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/voip-solution/class-4-softswitch-solution`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/voip-solution/mvno-billing-solution`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/voip-consulting`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/voip-migration`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/hire-webrtc-developers`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/hire-voip-developers`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/hire-open-sips-developers`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/hire-kamailio-developers`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/hire-freeswitch-developers`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/hire-asterisk-developers`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...INDUSTRIES_DATA.filter((i) => !THEMED_INDUSTRY_PATHS[i.slug]).map((i) => ({
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
