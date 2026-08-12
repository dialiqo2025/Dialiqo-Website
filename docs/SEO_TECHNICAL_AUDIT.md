# Dialiqo — Technical SEO & Performance Audit

**Date**: 2026-08-11  
**Project**: Dialiqo Website (Next.js 15 / App Router / Tailwind CSS v4)  
**Domain**: https://dialiqo.com/

---

## 1. Current Architecture

| Aspect | Status |
|--------|--------|
| Framework | Next.js 15.5.2 (App Router) |
| React | 19.0.1 |
| CSS | Tailwind CSS v4 via `@tailwindcss/postcss` |
| Animation | Framer Motion (`motion` ^12.23.24) |
| Icons | lucide-react |
| AI | @google/genai (server-only) |
| TypeScript | ~5.8.2 (strict: false) |

## 2. Current Rendering Strategy

**Pattern**: Every page is a **server component** (`page.tsx`) that exports metadata, then renders a `"use client"` wrapper → which renders a `src/views/*` component (also `"use client"`).

**Result**: All SEO-critical page content is **client-rendered**. The server HTML contains metadata + JSON-LD but the body content (headings, text, links, images) is hydrated on the client only.

This is the **#1 critical issue** for SEO/crawlability.

## 3. Current SEO Implementation

- ✅ `buildMetadata()` helper generates title, description, canonical, OG, Twitter per page
- ✅ Layout has title template `"%s | Dialiqo"`
- ✅ `metadataBase` set to `https://dialiqo.com`
- ✅ Sitemap generated dynamically
- ✅ Robots.txt generated dynamically
- ⚠️ Content not in initial HTML (client-rendered)

## 4. Current Metadata

- ✅ Unique metadata per page via `buildMetadata()` or `generateMetadata()`
- ✅ OG image defaults to an Unsplash URL
- ⚠️ OG image is an external Unsplash URL (risky — can change/disappear)
- ⚠️ No favicon in `public/` (using data URI)

## 5. Current Structured Data

- ✅ Organization + WebSite JSON-LD in root layout
- ✅ Breadcrumb + Service + FAQ JSON-LD on service detail pages
- ⚠️ WebSite SearchAction references a `/search` endpoint — page exists but is noindexed/disallowed
- ⚠️ Organization `logo` references `/logo.png` which does NOT exist in `public/`
- ⚠️ Article/Blog JSON-LD helpers exist but unclear if used on resource detail pages

## 6. Current Internal Linking

- ✅ Navbar uses `<Link>` for all main nav items
- ✅ Footer uses `<Link>` for all section links
- ❌ Footer logo uses `onClick` → `router.push()` (not crawlable)
- ❌ CTA buttons across pages use `onNavigate()` (router.push) instead of `<Link>`
- ❌ Homepage service cards use `<motion.button onClick>` not `<Link>`

## 7. Current Image Implementation

- ⚠️ `next/image` used ONLY for the logo
- ❌ Hero/section backgrounds use CSS `background-image` with Unsplash URLs
- ❌ No `width`/`height` optimization for content images
- ❌ No responsive `srcSet` for images
- ⚠️ No favicon/apple-touch-icon in `public/`
- ⚠️ OG image is external

## 8. Client/Server Component Usage

- ❌ ALL page content is `"use client"` — views are entirely client components
- ✅ Metadata and JSON-LD are server-rendered (correct)
- ✅ API routes are server-only (correct)
- ❌ Static text content (about, services, privacy, terms) unnecessarily client-rendered

## 9. DOM Complexity

- ✅ Layout nesting is reasonable (AppShell → Navbar + main + Footer)
- ⚠️ Motion wrappers add extra `<div>` nodes per animated section
- ⚠️ Some views have deep nesting for gradient overlays (cosmetic)

## 10. Performance Problems

| Issue | Severity |
|-------|----------|
| All page content hydrated on client | CRITICAL |
| Hero uses CSS background-image (not preloaded, no LCP hint) | HIGH |
| Motion library loaded for every page (even static legal pages) | MEDIUM |
| No image optimization beyond logo | HIGH |
| No `priority` on hero/LCP images | HIGH |

## 11. Accessibility Problems

| Issue | Severity |
|-------|----------|
| Skip-to-content link present | ✅ |
| Footer logo not a real link (no href) | MEDIUM |
| Some buttons lack aria-labels (mega menu triggers) | LOW |
| Color contrast not audited | LOW |
| Forms have labels | ✅ |

## 12. Crawlability Problems

| Issue | Severity |
|-------|----------|
| Page body content not in initial HTML | CRITICAL |
| CTA navigation via JS only (not `<a>`) | HIGH |
| Service cards on homepage not crawlable links | HIGH |
| Footer logo not crawlable | MEDIUM |

## 13. Duplicate Content Risks

- ✅ Canonical URLs set per page via `buildMetadata()`
- ✅ `trailingSlash: false` configured
- ⚠️ No explicit redirect from trailing-slash variants

## 14. Canonical Risks

- ✅ Production domain `https://dialiqo.com` used everywhere
- ✅ `metadataBase` correctly set
- ⚠️ No server-level HTTP→HTTPS or www redirect (DNS/hosting concern, not code)

## 15. URL Structure Risks

- ✅ URLs are lowercase, descriptive, slug-based
- ✅ 60+ WordPress redirects implemented
- ✅ No query parameter issues found
- ⚠️ `/technologies` routes exist but only 4 slugs in sitemap (intentional)

## 16. Recommended Fixes (Priority Order)

### CRITICAL

1. **Server-render page content** — Move static content out of client components. The page body (H1, text, service listings, etc.) must appear in initial HTML for Google to index.
2. **Make CTA buttons crawlable links** — Replace `onClick={() => onNavigate("services")}` with `<Link href="/services">` for SEO-important navigation.

### HIGH

3. **Optimize hero/LCP images** — Use `next/image` with `priority` for above-the-fold images.
4. **Create proper OG image** — Host OG image locally in `public/` instead of relying on Unsplash.
5. **Fix Organization logo** — Create `/public/logo.png` so JSON-LD `logo` field resolves.
6. **Add favicon** — Create `public/favicon.ico` and/or `app/icon.tsx`.
7. **Homepage service cards → links** — Wrap in `<Link>` for crawlability.

### MEDIUM

8. **Semantic HTML** — Add `<section>`, `<article>`, `<nav>` where appropriate in views.
9. **Footer logo → Link** — Replace onClick with `<Link href="/">`.
10. **Reduce client JS on static pages** — Privacy, Terms, Cookie pages don't need motion/interactivity.
11. **Breadcrumbs** — Add visible breadcrumbs on detail pages.
12. **SearchAction** — Either make `/search` work publicly or remove SearchAction from JSON-LD.

### LOW

13. **Enable `strict: true`** in tsconfig for better type safety.
14. **Add analytics** — No tracking currently implemented.
15. **Newsletter form** — Currently a no-op; connect to API or remove.
16. **DOM wrapper cleanup** — Minor, non-blocking improvements.

---

## 17. Page-by-Page Audit

| URL | H1 | Title | Meta Desc | Canonical | Robots | Indexable | JSON-LD | SSR Content | Issues |
|-----|-----|-------|-----------|-----------|--------|-----------|---------|-------------|--------|
| `/` | ✅ "Own Your Communication Platform..." | ✅ Absolute title | ✅ | ✅ | Allowed | Yes | Org+WebSite | ❌ Client only | CRITICAL: body not in HTML |
| `/about` | ✅ | ✅ | ✅ | ✅ | Allowed | Yes | Org+WebSite | ❌ Client only | CRITICAL |
| `/services` | ✅ | ✅ | ✅ | ✅ | Allowed | Yes | Org+WebSite | ❌ Client only | CRITICAL |
| `/services/[slug]` | ✅ Dynamic | ✅ generateMetadata | ✅ | ✅ | Allowed | Yes | Breadcrumb+Service+FAQ | ❌ Client only | CRITICAL |
| `/industries` | ✅ | ✅ | ✅ | ✅ | Allowed | Yes | Org+WebSite | ❌ Client only | CRITICAL |
| `/industries/[slug]` | ✅ Dynamic | ✅ generateMetadata | ✅ | ✅ | Allowed | Yes | ❓ | ❌ Client only | CRITICAL |
| `/solutions` | ✅ | ✅ | ✅ | ✅ | Allowed | Yes | Org+WebSite | ❌ Client only | CRITICAL |
| `/technologies` | ✅ | ✅ | ✅ | ✅ | Allowed | Yes | Org+WebSite | ❌ Client only | CRITICAL |
| `/technologies/[slug]` | ✅ Dynamic | ✅ generateMetadata | ✅ | ✅ | Allowed | Yes | ❓ | ❌ Client only | CRITICAL |
| `/resources` | ✅ | ✅ | ✅ | ✅ | Allowed | Yes | Org+WebSite | ❌ Client only | CRITICAL |
| `/resources/[slug]` | ✅ Dynamic | ✅ generateMetadata | ✅ | ✅ | Allowed | Yes | Article? | ❌ Client only | CRITICAL |
| `/contact` | ✅ | ✅ | ✅ | ✅ | Allowed | Yes | Org+WebSite | ❌ Client only | CRITICAL |
| `/careers` | ✅ | ✅ | ✅ | ✅ | Disallowed | No | Org+WebSite | ❌ Client only | OK (noindex) |
| `/case-studies` | ✅ | ✅ | ✅ | ✅ | Disallowed | No | Org+WebSite | ❌ Client only | OK (noindex) |
| `/privacy-policy` | ✅ | ✅ | ✅ | ✅ | Allowed | Yes | Org+WebSite | ❌ Client only | MEDIUM: static text is CSR |
| `/terms-conditions` | ✅ | ✅ | ✅ | ✅ | Allowed | Yes | Org+WebSite | ❌ Client only | MEDIUM |
| `/cookie-policy` | ✅ | ✅ | ✅ | ✅ | Allowed | Yes | Org+WebSite | ❌ Client only | MEDIUM |
| `/search` | ✅ | ✅ | ✅ | ✅ | Disallowed | No | — | ❌ Client only | OK (noindex) |
| `/thank-you` | ✅ | ✅ | ✅ | ✅ | Disallowed | No | — | ❌ Client only | OK (noindex) |

**Summary**: Every page has correct metadata + canonicals but body content is entirely client-rendered. This is the single biggest SEO gap.

---

## 18. Security Audit

- ✅ No `NEXT_PUBLIC_*` env vars exposing secrets
- ✅ `GEMINI_API_KEY` is server-only
- ✅ Only one `dangerouslySetInnerHTML` (JSON-LD — safe pattern)
- ✅ API routes validate input

---

## 19. Fonts

- ✅ Using `next/font/google` with `display: "swap"` — optimal
- ✅ CSS variables properly configured

---

## 20. Existing Functionality to Preserve

- Forms: Consultation modal, Contact page, AI Advisor, Careers application
- API routes: `/api/health`, `/api/consultation`, `/api/ai-advisor`
- Animations: Framer Motion throughout views
- Navigation: Mega menus, mobile drawer, command menu (⌘K)
- Modals: Consultation modal, command search
- Redirects: 60+ WordPress → Next.js redirects
