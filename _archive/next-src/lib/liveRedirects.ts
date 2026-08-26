/**
 * Permanent redirects from live WordPress URLs → clean Next.js routes.
 * Both trailing-slash and non-slash variants are registered in next.config.
 */
export type RedirectRule = {
  source: string;
  destination: string;
  permanent?: boolean;
};

/** Core live → Next mappings (sources without trailing slash). */
export const LIVE_TO_NEXT_REDIRECTS: RedirectRule[] = [
  // Blog
  { source: "/blog", destination: "/resources" },

  // Old generic service slugs → live Dialiqo pages
  {
    source: "/services/web-development",
    destination: "/services/mobile-web/web-development",
  },
  {
    source: "/services/mobile-app-development",
    destination: "/services/mobile-web/mobile-development",
  },
  {
    source: "/services/flutter-development",
    destination: "/services/mobile-web/mobile-development",
  },
  {
    source: "/services/android-development",
    destination: "/services/mobile-web/mobile-development",
  },
  {
    source: "/services/ios-development",
    destination: "/services/mobile-web/mobile-development",
  },
  {
    source: "/services/react-development",
    destination: "/services/mobile-web/web-development",
  },
  {
    source: "/services/nextjs-development",
    destination: "/services/mobile-web/web-development",
  },
  {
    source: "/services/laravel-development",
    destination: "/services/mobile-web/web-development",
  },
  {
    source: "/services/nodejs-development",
    destination: "/services/mobile-web/web-development",
  },
  {
    source: "/services/ai-development",
    destination: "/services/ai-ml-development-services",
  },
  {
    source: "/services/ai-chatbot-development",
    destination: "/services/ai-ml-development-services/chatbot-services",
  },
  {
    source: "/services/ai-agent-development",
    destination: "/services/ai-ml-development-services",
  },
  {
    source: "/services/voice-ai-solutions",
    destination: "/services/ai-voicebot-connector",
  },
  {
    source: "/services/cloud-engineering",
    destination: "/services/devops-consulting-services",
  },
  {
    source: "/services/ui-ux-design",
    destination: "/services/mobile-web",
  },
  {
    source: "/services/software-consulting",
    destination: "/voip-consulting",
  },

  // Services hubs
  { source: "/services/voip", destination: "/services/voip-development" },
  {
    source: "/services/devops",
    destination: "/services/devops-consulting-services",
  },
  {
    source: "/services/qa-testing",
    destination: "/services/qa-testing-services",
  },

  // AI / QA / Mobile-Web children
  {
    source: "/services/ai-ml-development-services/face-recognition-solution",
    destination: "/services/ai-ml-development-services",
  },

  // Removed listing hubs
  { source: "/services", destination: "/" },
  { source: "/solutions", destination: "/products/contact-center-solutions" },
  { source: "/industries", destination: "/voip-solutions-for-real-estate" },

  // Products index → first product
  { source: "/products", destination: "/products/contact-center-solutions" },

  // Events / misc
  { source: "/itexpo-2025", destination: "/about-us" },

  // Themed industry pages now live at original WordPress slugs
  {
    source: "/industries/real-estate",
    destination: "/voip-solutions-for-real-estate",
  },
  {
    source: "/industries/call-centers",
    destination: "/voip-solutions-for-call-centers",
  },
  {
    source: "/industries/logistics",
    destination: "/voip-solutions-for-logistics",
  },
  {
    source: "/industries/telecommunications",
    destination: "/voip-solutions-for-telecom",
  },
  {
    source: "/industries/hospitality",
    destination: "/voip-solutions-for-hotels",
  },
  {
    source: "/industries/education",
    destination: "/voip-solutions-for-education",
  },
  {
    source: "/industries/travel",
    destination: "/voip-solutions-for-travel-agencies",
  },
  {
    source: "/industries/healthcare",
    destination: "/voip-solutions-for-healthcare",
  },
  {
    source: "/industries/finance",
    destination: "/voip-solutions-for-fintech",
  },
  {
    source: "/industries/retail",
    destination: "/voip-solutions-for-ecommerce",
  },
  {
    source: "/industries/insurance",
    destination: "/voip-solutions-for-insurance",
  },

  // Non-live Next routes → closest live-aligned destinations
  { source: "/careers", destination: "/about-us" },
  { source: "/case-studies", destination: "/resources" },
  { source: "/coming-soon", destination: "/" },
  { source: "/maintenance", destination: "/" },
  { source: "/technologies", destination: "/voip-solution" },
  {
    source: "/technologies/freeswitch",
    destination: "/services/voip/freeswitch-development",
  },
  {
    source: "/technologies/asterisk",
    destination: "/services/voip/asterisk",
  },
  {
    source: "/technologies/kamailio",
    destination: "/services/voip/kamailio-development-services",
  },
  {
    source: "/technologies/opensips",
    destination: "/services/voip/opensips",
  },
];

/** Expand each rule to cover trailing-slash WordPress URLs. */
export function expandRedirects(
  rules: RedirectRule[]
): { source: string; destination: string; permanent: boolean }[] {
  const out: { source: string; destination: string; permanent: boolean }[] = [];

  for (const rule of rules) {
    const permanent = rule.permanent !== false;
    const source = rule.source.replace(/\/$/, "");
    out.push({ source, destination: rule.destination, permanent });
    out.push({
      source: `${source}/`,
      destination: rule.destination,
      permanent,
    });
  }

  // Case study detail pages (legacy Next) → blog/resources
  out.push({
    source: "/case-studies/:slug",
    destination: "/resources",
    permanent: true,
  });
  out.push({
    source: "/case-studies/:slug/",
    destination: "/resources",
    permanent: true,
  });
  out.push({
    source: "/technologies/:slug",
    destination: "/voip-solution",
    permanent: true,
  });
  out.push({
    source: "/technologies/:slug/",
    destination: "/voip-solution",
    permanent: true,
  });
  out.push({
    source: "/industries/:slug",
    destination: "/voip-solutions-for-real-estate",
    permanent: true,
  });
  out.push({
    source: "/industries/:slug/",
    destination: "/voip-solutions-for-real-estate",
    permanent: true,
  });

  return out;
}
