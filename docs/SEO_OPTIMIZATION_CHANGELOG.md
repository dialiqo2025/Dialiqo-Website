# Dialiqo — SEO & Performance Optimization Changelog

**Date**: 2026-08-11

---

## Changed

### 1. Internal Navigation — onClick buttons → crawlable `<Link>` components

**Files modified**:
- `src/views/HomePage.tsx`
- `src/views/ServiceDetailPage.tsx`
- `src/views/IndustryDetailPage.tsx`
- `src/views/TechDetailPage.tsx`
- `src/views/BlogDetailPage.tsx`
- `src/components/layout/Footer.tsx`

**What**: Replaced `onClick={() => onNavigate(...)}` navigation patterns with Next.js `<Link href="...">` components for all SEO-important internal links: service cards, industry cards, technology cards, blog post cards, CTA buttons linking to pages, breadcrumbs, and footer logo.

**Why**: Google discovers pages by following `<a href>` links. JavaScript `router.push()` on button clicks is invisible to crawlers. This was the single biggest crawlability gap.

**SEO impact**: HIGH — all internal pages are now discoverable via HTML `<a>` tags in the page source.

**Performance impact**: Slight improvement — Next.js prefetches `<Link>` targets on viewport entry.

**Risk**: Low — visual appearance unchanged; navigation behavior identical.

---

### 2. New `LinkButton` component

**Files modified**:
- `src/components/common/LinkButton.tsx` (new)

**What**: Created a styled `<Link>` component with the same visual appearance as `<Button>` but rendering a crawlable `<a>` tag.

**Why**: CTA buttons that navigate to pages (e.g., "Explore Services", "Learn More", "View All Services") need to be real links for SEO while maintaining the button aesthetic.

**SEO impact**: MEDIUM — CTAs are now crawlable entry points to key pages.

**Risk**: Low.

---

### 3. Breadcrumbs added to detail pages

**Files modified**:
- `src/views/ServiceDetailPage.tsx`
- `src/views/TechDetailPage.tsx` (existing breadcrumb converted from buttons to links)

**What**: Added visible, crawlable breadcrumb navigation with `<nav aria-label="Breadcrumb">` and semantic `<ol>` markup.

**Why**: Breadcrumbs improve navigation discoverability, provide crawlable parent links, and enhance accessibility.

**SEO impact**: MEDIUM — helps Google understand page hierarchy; breadcrumb links discovered.

**Risk**: Low.

---

### 4. JSON-LD fixes

**Files modified**:
- `src/lib/seo.ts`

**What**:
- Fixed Organization `logo` from non-existent `/logo.png` to existing `/header-logo.png`
- Removed invalid `SearchAction` from WebSite schema (the `/search` page is disallowed in robots.txt)

**Why**: Invalid JSON-LD URLs trigger Search Console errors. SearchAction pointing to a disallowed page would confuse Google.

**SEO impact**: MEDIUM — eliminates potential structured data errors in Search Console.

**Risk**: Low.

---

### 5. Favicon moved to `public/icon.svg`

**Files modified**:
- `public/icon.svg` (new)
- `src/app/layout.tsx`

**What**: Replaced inline data URI favicon with a proper SVG file served from `/icon.svg`.

**Why**: Proper favicon file is standard practice, cacheable, and works across all browsers including bookmarks and tabs.

**SEO impact**: LOW — improves SERP appearance with proper favicon.

**Risk**: Low.

---

### 6. Footer logo made crawlable

**Files modified**:
- `src/components/layout/Footer.tsx`

**What**: Footer logo changed from `<Logo onClick={() => onNavigate("home")}>` to `<Link href="/"><Logo /></Link>`.

**Why**: Footer logo is a standard crawlable link to homepage that every crawler expects.

**SEO impact**: LOW — reinforces homepage as canonical root.

**Risk**: Low.

---

### 7. Hero image preload hint

**Files modified**:
- `src/app/page.tsx`

**What**: Added `<link rel="preload" as="image">` for the hero background image URL.

**Why**: The hero uses CSS `background-image` which browsers discover late. Preloading signals the LCP image early in the page load waterfall.

**Performance impact**: Reduces LCP by starting the image download earlier.

**Risk**: Low.

---

## What Was NOT Changed

- **Visual design** — All styling, layouts, animations, colors, spacing preserved exactly
- **Page content** — No marketing copy was modified or invented
- **Route structure** — All URLs remain the same
- **Forms** — Consultation modal, contact forms, AI advisor all preserved
- **API routes** — No changes to server endpoints
- **Framer Motion animations** — All motion/animation behavior preserved
- **Dark mode** — Theme switching preserved
- **Mobile menu** — Preserved as-is
- **Command menu (⌘K)** — Preserved
- **Client component architecture** — Views remain as client components (they ARE SSR'd by Next.js at build time, producing full HTML)
- **CaseStudy/Blog listing** `onNavigate` usages for noindexed pages — lower priority, deferred

## What Requires Manual Review

- **OG image**: Still uses an external Unsplash URL. Consider creating a branded OG image and hosting it locally.
- **Hero/section background images**: Use Unsplash URLs. Consider downloading and self-hosting for reliability.
- **Newsletter form**: Currently a no-op (state only). Needs backend integration.
- **Contact/careers forms**: Submit to no real backend. Needs API integration.
- **Analytics**: No tracking is implemented. Add Google Analytics/GTM when ready.
- **HTTP→HTTPS redirect**: Must be configured at hosting/DNS level, not in code.
- **www redirect**: Must be configured at hosting/DNS level.

## DNS/Server Configuration Needed

- HTTP → HTTPS redirect
- www → non-www (or vice versa) redirect
- Ensure IP-based access doesn't create a competing indexable version
