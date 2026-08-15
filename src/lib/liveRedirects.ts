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
  // Company
  { source: "/about-us", destination: "/about" },

  // Blog
  { source: "/blog", destination: "/resources" },

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
    destination: "/services/ai-development",
  },

  // Consulting / migration / hire
  { source: "/voip-consulting", destination: "/services/software-consulting" },
  { source: "/voip-migration", destination: "/services/voip-development" },
  { source: "/hire-voip-developers", destination: "/services/staff-augmentation" },
  {
    source: "/hire-freeswitch-developers",
    destination: "/services/staff-augmentation",
  },
  {
    source: "/hire-asterisk-developers",
    destination: "/services/staff-augmentation",
  },
  {
    source: "/hire-kamailio-developers",
    destination: "/services/staff-augmentation",
  },
  {
    source: "/hire-open-sips-developers",
    destination: "/services/staff-augmentation",
  },
  {
    source: "/hire-webrtc-developers",
    destination: "/services/staff-augmentation",
  },

  // Products / VoIP solution suite → solutions
  { source: "/products", destination: "/solutions" },
  { source: "/products/voip-billing-solution", destination: "/solutions" },
  { source: "/products/contact-center-solutions", destination: "/solutions" },
  { source: "/voip-solution", destination: "/solutions" },
  {
    source: "/voip-solution/session-border-controller",
    destination: "/solutions",
  },
  { source: "/voip-solution/webrtc-solutions", destination: "/solutions" },
  {
    source: "/voip-solution/unified-communications-solutions",
    destination: "/solutions",
  },
  {
    source: "/voip-solution/interactive-voice-response-solutions",
    destination: "/solutions",
  },
  {
    source: "/voip-solution/class-4-softswitch-solution",
    destination: "/solutions",
  },
  {
    source: "/voip-solution/class-5-softswitch-solutions",
    destination: "/solutions",
  },
  {
    source: "/voip-solution/mobile-virtual-network-operator-solution",
    destination: "/solutions",
  },
  {
    source: "/voip-solution/mvno-billing-solution",
    destination: "/solutions",
  },

  // Industry landings (live slug → clean /industries/[slug])
  {
    source: "/voip-solutions-for-healthcare",
    destination: "/industries/healthcare",
  },
  {
    source: "/voip-solutions-for-fintech",
    destination: "/industries/finance",
  },
  {
    source: "/voip-solutions-for-insurance",
    destination: "/industries/insurance",
  },
  {
    source: "/voip-solutions-for-ecommerce",
    destination: "/industries/retail",
  },
  {
    source: "/voip-solutions-for-education",
    destination: "/industries/education",
  },
  {
    source: "/voip-solutions-for-telecom",
    destination: "/industries/telecommunications",
  },
  {
    source: "/voip-solutions-for-logistics",
    destination: "/industries/logistics",
  },
  {
    source: "/voip-solutions-for-real-estate",
    destination: "/industries/real-estate",
  },
  {
    source: "/voip-solutions-for-hotels",
    destination: "/industries/hospitality",
  },
  {
    source: "/voip-solutions-for-travel-agencies",
    destination: "/industries/travel",
  },
  {
    source: "/voip-solutions-for-call-centers",
    destination: "/solutions",
  },
  {
    source: "/voip-solutions-for-enterprises",
    destination: "/industries",
  },
  {
    source: "/voip-solutions-for-saas-companies",
    destination: "/industries",
  },
  {
    source: "/voip-solutions-for-recruitment",
    destination: "/industries",
  },

  // Events / misc
  { source: "/itexpo-2025", destination: "/about" },

  // Non-live Next routes → closest live-aligned destinations
  { source: "/careers", destination: "/about" },
  { source: "/case-studies", destination: "/resources" },
  { source: "/coming-soon", destination: "/" },
  { source: "/maintenance", destination: "/" },
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

  return out;
}
