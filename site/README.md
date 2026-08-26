# Dialiqo — pure static site

No Next.js. No React. HTML + Tailwind CSS + custom CSS + vanilla JS.

## Develop / preview

```bash
npm install
npm run serve
```

Open http://localhost:4173

## Deploy

Upload the **`site/`** folder to any static host (Netlify, Cloudflare Pages, S3, nginx).

## Rebuild pages from archived Next export

The previous Next app is in `_archive/next-src` (reference only).  
Live editable pages are under **`site/`**.

Conversion script (needs a Next `html/` export as input — not required day-to-day):

```bash
node scripts/to-pure-html.mjs
```

## Structure

```
site/
  index.html
  about-us/
  contact/
  ...
  assets/css/app.css      # compiled Tailwind utilities
  assets/css/custom.css   # custom styles
  assets/js/site.js       # nav, FAQ, tabs, forms
  header-logo.png
  sitemap.xml
  robots.txt
```
