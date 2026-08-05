import type { PageType } from "@/types";

/** Map SPA page keys (+ optional slug) to canonical Next.js paths. */
export function pageToPath(page: string, slug?: string): string {
  switch (page as PageType) {
    case "home":
      return "/";
    case "about":
      return "/about";
    case "services":
      return "/services";
    case "service-detail":
      return slug ? `/services/${slug}` : "/services";
    case "industries":
      return "/industries";
    case "industry-detail":
      return slug ? `/industries/${slug}` : "/industries";
    case "technologies":
      return "/technologies";
    case "technology-detail":
      return slug ? `/technologies/${slug}` : "/technologies";
    case "solutions":
    case "solution-detail":
      return slug ? `/solutions#${slug}` : "/solutions";
    case "case-studies":
      return "/case-studies";
    case "case-study-detail":
      return slug ? `/case-studies/${slug}` : "/case-studies";
    case "resources":
      return "/resources";
    case "resource-detail":
      return slug ? `/resources/${slug}` : "/resources";
    case "careers":
      return "/careers";
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
      return "/coming-soon";
    case "maintenance":
      return "/maintenance";
    case "not-found":
      return "/not-found";
    default:
      return "/";
  }
}

/** Derive SPA-style page key from a pathname for active nav highlighting. */
export function pathToPage(pathname: string): PageType {
  if (pathname === "/") return "home";
  if (pathname === "/about") return "about";
  if (pathname === "/services") return "services";
  if (pathname.startsWith("/services/")) return "service-detail";
  if (pathname === "/industries") return "industries";
  if (pathname.startsWith("/industries/")) return "industry-detail";
  if (pathname === "/technologies") return "technologies";
  if (pathname.startsWith("/technologies/")) return "technology-detail";
  if (pathname === "/solutions") return "solutions";
  if (pathname === "/case-studies") return "case-studies";
  if (pathname.startsWith("/case-studies/")) return "case-study-detail";
  if (pathname === "/resources") return "resources";
  if (pathname.startsWith("/resources/")) return "resource-detail";
  if (pathname === "/careers") return "careers";
  if (pathname === "/contact") return "contact";
  if (pathname === "/privacy-policy") return "privacy-policy";
  if (pathname === "/terms-conditions") return "terms-conditions";
  if (pathname === "/cookie-policy") return "cookie-policy";
  if (pathname === "/thank-you") return "thank-you";
  if (pathname === "/search") return "search-results";
  if (pathname === "/coming-soon") return "coming-soon";
  if (pathname === "/maintenance") return "maintenance";
  return "not-found";
}

export const SITE_URL = "https://dialiqo.com";
export const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80";
