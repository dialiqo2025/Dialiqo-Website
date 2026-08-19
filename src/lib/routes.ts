import type { PageType } from "@/types";

/** Live WordPress industry landings that keep their original slugs. */
export const THEMED_INDUSTRY_PATHS: Record<string, string> = {
  "real-estate": "/voip-solutions-for-real-estate",
  "call-centers": "/voip-solutions-for-call-centers",
  logistics: "/voip-solutions-for-logistics",
  telecommunications: "/voip-solutions-for-telecom",
  hospitality: "/voip-solutions-for-hotels",
  education: "/voip-solutions-for-education",
  travel: "/voip-solutions-for-travel-agencies",
  healthcare: "/voip-solutions-for-healthcare",
  finance: "/voip-solutions-for-fintech",
  retail: "/voip-solutions-for-ecommerce",
  insurance: "/voip-solutions-for-insurance",
  recruitment: "/voip-solutions-for-recruitment",
  enterprises: "/voip-solutions-for-enterprises",
  saas: "/voip-solutions-for-saas-companies",
};

/** Live Dialiqo service URLs that differ from `/services/{slug}`. */
export const LIVE_SERVICE_PATHS: Record<string, string> = {
  "web-development": "/services/mobile-web/web-development",
  "mobile-app-development": "/services/mobile-web/mobile-development",
  "flutter-development": "/services/mobile-web/mobile-development",
  "android-development": "/services/mobile-web/mobile-development",
  "ios-development": "/services/mobile-web/mobile-development",
  "react-development": "/services/mobile-web/web-development",
  "nextjs-development": "/services/mobile-web/web-development",
  "laravel-development": "/services/mobile-web/web-development",
  "nodejs-development": "/services/mobile-web/web-development",
  "ai-development": "/services/ai-ml-development-services",
  "ai-chatbot-development": "/services/ai-ml-development-services/chatbot-services",
  "ai-agent-development": "/services/ai-ml-development-services",
  "voice-ai-solutions": "/services/ai-voicebot-connector",
  "ai-ml-development-services": "/services/ai-ml-development-services",
  "mobile-web": "/services/mobile-web",
  devops: "/services/devops-consulting-services",
  "devops-consulting-services": "/services/devops-consulting-services",
  "cloud-engineering": "/services/devops-consulting-services",
  "qa-testing": "/services/qa-testing-services",
  "ui-ux-design": "/services/mobile-web",
  "software-consulting": "/voip-consulting",
};

/** Map SPA page keys (+ optional slug) to canonical Next.js paths. */
export function pageToPath(page: string, slug?: string): string {
  switch (page as PageType) {
    case "home":
      return "/";
    case "about":
      return "/about-us";
    case "services":
      return "/voip-solution";
    case "service-detail":
      if (!slug) return "/voip-solution";
      return LIVE_SERVICE_PATHS[slug] ?? `/services/${slug}`;
    case "industries":
      return "/voip-solutions-for-real-estate";
    case "industry-detail":
      return slug
        ? (THEMED_INDUSTRY_PATHS[slug] ?? "/voip-solutions-for-real-estate")
        : "/voip-solutions-for-real-estate";
    case "technologies":
    case "technology-detail":
      return slug === "freeswitch"
        ? "/services/voip/freeswitch-development"
        : slug === "asterisk"
        ? "/services/voip/asterisk"
        : slug === "kamailio"
        ? "/services/voip/kamailio-development-services"
        : slug === "opensips"
        ? "/services/voip/opensips"
        : "/voip-solution";
    case "solutions":
    case "solution-detail":
      return slug
        ? `/products/${slug}`
        : "/products/contact-center-solutions";
    case "voip-solution":
      return "/voip-solution";
    case "case-studies":
    case "case-study-detail":
      return "/resources";
    case "resources":
      return "/resources";
    case "resource-detail":
      return slug ? `/resources/${slug}` : "/resources";
    case "careers":
      return "/about-us";
    case "contact":
      return "/contact";
    case "privacy-policy":
      return "/privacy-policy";
    case "terms-conditions":
      return "/terms-conditions";
    case "cookie-policy":
      return "/cookie-policy";
    case "thank-you":
      return "/thank-you";
    case "search-results":
      return slug ? `/search?q=${encodeURIComponent(slug)}` : "/search";
    case "coming-soon":
    case "maintenance":
      return "/";
    case "not-found":
      return "/not-found";
    default:
      return "/";
  }
}

/** Derive SPA-style page key from a pathname for active nav highlighting. */
export function pathToPage(pathname: string): PageType {
  if (pathname === "/") return "home";
  if (pathname === "/about" || pathname === "/about-us") return "about";
  if (pathname.startsWith("/services/")) return "service-detail";
  if (pathname.startsWith("/voip-solutions-for-")) return "industry-detail";
  if (pathname.startsWith("/products/")) {
    return "solutions";
  }
  if (pathname === "/voip-solution" || pathname.startsWith("/voip-solution/")) {
    return "voip-solution";
  }
  if (pathname === "/resources") return "resources";
  if (pathname.startsWith("/resources/")) return "resource-detail";
  if (pathname === "/contact") return "contact";
  if (pathname === "/privacy-policy") return "privacy-policy";
  if (pathname === "/terms-conditions") return "terms-conditions";
  if (pathname === "/cookie-policy") return "cookie-policy";
  if (pathname === "/thank-you") return "thank-you";
  if (pathname === "/search") return "search-results";
  return "not-found";
}

export const SITE_URL = "https://dialiqo.com";
export const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80";

/** Live-site-aligned primary nav destinations (clean Next paths). */
export const PRIMARY_NAV = [
  { label: "VoIP Solution", href: "/voip-solution" },
  { label: "Blog", href: "/resources" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
] as const;
