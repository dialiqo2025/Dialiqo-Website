# WordPress → Next.js Structural Audit

## 1. WordPress Homepage HTML Structure

```
html (lang="en-US")
├── head (title, meta desc, canonical, OG, robots, 5x JSON-LD)
└── body.home
    ├── header#site-header.site-header.header-static
    │   └── nav#site-navigation.main-navigation
    │       ├── Logo (img)
    │       └── ul.menu (mega-menu with nested sub-menus)
    │           ├── Service (dropdown: Core Services, VoIP, Mobile&Web, QA, AI-ML, DevOps, Staff Aug, Hire Devs)
    │           ├── Our Products (Contact Center, VoIP Billing, VoIP Solutions 8 items)
    │           ├── Industries (14 items)
    │           ├── About
    │           ├── Blog
    │           └── Contact
    │
    ├── [NO <main> tag]
    │   ├── section: Hero (H1 + capability badges + CTA)
    │   ├── section: Solutions (H2 "Specialized and Tailor-Made Solutions" + 6 items)
    │   ├── section: Mission (H2 + 4 stats boxes + CTA)
    │   ├── section: Services (H2 "Cutting-Edge VoIP Development" + 6 service cards)
    │   ├── section: About/Company (H2 "Leading VoIP Development Company" + text)
    │   ├── section: CTA band (H2 "Your Go-To VoIP Development Company")
    │   ├── section: Testimonials (H2 "What Our Clients Say" + 3 cards)
    │   └── section: Contact form (H2 "Ready To Get Started?" + form)
    │
    └── footer#site-footer.site-footer
        ├── Logo + tagline
        ├── Our Services (7 links)
        ├── Company (About, Blog, Contact)
        ├── Products (Contact Center, VoIP Billing)
        ├── Get In Touch (India, USA, phone, email)
        ├── Social icons
        └── Copyright "Made with ❤️ in India | © Dialiqo Technologies LLP"
```

## 2. Current Next.js Structure

```
html (lang="en", class="dark")
├── head (Next.js metadata: title, desc, canonical, OG, Twitter, icons)
└── body
    ├── script (JSON-LD: Organization + WebSite)
    ├── AppProviders (client context)
    │   └── AppShell (client)
    │       ├── div.min-h-screen (wrapper)
    │       │   ├── a#skip-to-content
    │       │   ├── header (Navbar - "use client")
    │       │   │   └── nav (primary navigation with mega-menus)
    │       │   ├── main#main-content
    │       │   │   └── HomePageClient ("use client")
    │       │   │       └── div.min-h-screen (inner wrapper)
    │       │   │           ├── section: Hero (H1 + capabilities)
    │       │   │           ├── section: Solutions (H2 + 6 cards)
    │       │   │           ├── section: Mission (H2 + stats)
    │       │   │           ├── section: Tech carousel
    │       │   │           ├── section: Services (H2 + 6 cards)
    │       │   │           ├── section: About (H2)
    │       │   │           ├── section: CTA band (H2)
    │       │   │           ├── section: Testimonials (H2)
    │       │   │           └── section: Contact form (H2)
    │       │   └── footer
    │       │       └── (5 columns + social + copyright)
```

## 3. Key Structural Differences

| Aspect | WordPress | Next.js Current | Action Needed |
|--------|-----------|-----------------|---------------|
| `<html lang>` | `en-US` | `en` | Change to `en-US` |
| `<main>` | Missing | Present | Keep (better semantics) |
| Heading hierarchy | H1→H2→H5 (for cards) | H1→H2→H3 (better) | Keep Next.js pattern |
| H5 for nav items | Yes (WP uses H5 in mega-menu) | No headings in nav | Keep Next.js (correct) |
| `<header id="site-header">` | Yes | `<header>` no id | Add id |
| `<nav id="site-navigation">` | Yes | `<nav aria-label>` | Add id |
| `<footer id="site-footer">` | Yes | `<footer>` no id | Add id |
| Wrapper divs | Elementor bloat (28 sections!) | Minimal | Keep Next.js |
| JSON-LD | 5 schemas (Org, Org, LocalBusiness, ProfessionalService, Product) | 2 (Org, WebSite) | Align |
| Title | "VoIP Development Company, Custom VoIP Software Solutions \| Dialiqo" | Different title | Align |
| Meta description | VoIP-focused | AI/SIP-focused | Align to WP |
| OG Image | Custom SVG | Unsplash | Fix |
| Nav structure | `<ul>` menu with sub-menus | `<div>` + `<Link>` | Convert to `<ul><li>` |
| Footer social | Some links are # | All have URLs | OK |

## 4. WordPress Metadata (to match)

- **Title**: "VoIP Development Company, Custom VoIP Software Solutions | Dialiqo"
- **Description**: "Dialiqo is a leading VoIP Development Company delivering custom VoIP software solutions using FreeSWITCH, Asterisk, Kamailio & OpenSIPS. Trusted for scalable VoIP systems, carrier-grade solutions, and enterprise communication platforms worldwide."
- **Canonical**: https://dialiqo.com/
- **Robots**: index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **OG Title**: same as title
- **OG Image**: https://dialiqo.com/wp-content/uploads/2025/01/Home-Page-_-Banner-image-2-1-1.svg

## 5. WordPress JSON-LD (5 schemas)

1. `Organization` - Dialiqo Technologies LLP
2. `Organization` (duplicate with more detail)
3. `LocalBusiness` - VoIP Software Development Company
4. `ProfessionalService` - Contact Center Solutions
5. `Product` - IVR solutions

## 6. WordPress Nav Links (SEO-critical)

### Top-level nav:
- Services → 6 service categories with children
- Products → Contact Center, VoIP Billing, VoIP Solutions (8 items)
- Industries → 14 industry pages
- About, Blog, Contact

### Footer links:
- 7 services, 3 company, 2 products, contact info, social

## 7. Priority Changes for Next.js

### CRITICAL (SEO structure)
1. Fix homepage title/description to match WordPress
2. Add semantic `<ul><li>` nav menus (crawlable)
3. Add IDs to header/nav/footer landmarks
4. Fix JSON-LD to include LocalBusiness + ProfessionalService
5. Server-render homepage content (remove `"use client"` from page body)

### HIGH (HTML structure)
6. Change `html lang` to `en-US`
7. Add proper `<main>` wrapping (already done)
8. Nav links should use `<ul>` structure
9. Keep heading hierarchy (Next.js H1→H2→H3 is BETTER than WP)

### MEDIUM (content parity)
10. Testimonials section content matches
11. Contact form structure matches
12. Footer structure already aligned

### LOW (WP-specific, skip)
- Elementor classes (do NOT copy)
- WordPress body classes (do NOT copy)
- wp-content paths (do NOT copy)
- Plugin-generated markup (do NOT copy)
