/**
 * Build /blog index — WP blog layout, Dialiqo dark theme.
 */
import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";

const HERO =
  "https://dialiqo.com/wp-content/uploads/2025/02/Blog-2-scaled.jpg";

/** 9 cards — article posts use /blog/[slug]/ */
const POSTS = [
  {
    title: "Why Telecom Operators Need an Advanced VoIP Solution Provider in 2026",
    category: "VOIP",
    href: "/blog/kamailio-vs-opensips-enterprise-sbc/",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "How Custom AI Voicebots Are Transforming Inbound Call Handling",
    category: "AI VOICEBOT SOLUTIONS",
    href: "/blog/architecting-sub-300ms-voice-ai/",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Real-Time VoIP Billing Systems: Accuracy, Scalability & Compliance",
    category: "VOIP BILLING",
    href: "/products/voip-billing-solution/",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Choosing Between FreeSWITCH, Asterisk, Kamailio, and OpenSIPS",
    category: "VOIP",
    href: "/blog/kamailio-vs-opensips-enterprise-sbc/",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "MVNO Billing vs. VoIP Billing: Which Platform Fits Your Business?",
    category: "MVNO BILLING",
    href: "/voip-solution/mvno-billing-solution/",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "How AI Chatbots Are Changing Customer Support in Contact Centers",
    category: "AI CHATBOT",
    href: "/services/ai-ml-development-services/chatbot-services/",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "SIP Trunking vs. SIP Proxy: What Growing Telecom Businesses Must Know",
    category: "SIP",
    href: "/blog/carrier-grade-sip-ddos-mitigation-ebpf/",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Why Modern Telecom Networks Need SBC Development for Protection",
    category: "SBC",
    href: "/voip-solution/session-border-controller/",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Asterisk Development Best Practices for Scalable PBX Platforms",
    category: "ASTERISK DEVELOPMENT",
    href: "/services/voip/asterisk/",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
  },
];

/** Existing article pages (formerly under /resources/) */
const ARTICLE_SLUGS = [
  "architecting-sub-300ms-voice-ai",
  "building-multi-tenant-telecom-saas-kubernetes",
  "carrier-grade-sip-ddos-mitigation-ebpf",
  "kamailio-vs-opensips-enterprise-sbc",
  "securing-enterprise-llm-rag-pipelines",
  "webrtc-opus-codec-tuning-low-bandwidth",
];

function redirectHtml(toPath, title = "Redirecting...") {
  return `<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="utf-8"/>
<title>${title}</title>
<meta http-equiv="refresh" content="0;url=${toPath}"/>
<link rel="canonical" href="https://dialiqo.com${toPath}"/>
<script>location.replace(${JSON.stringify(toPath)});</script>
</head>
<body><p>Moved to <a href="${toPath}">${toPath}</a>.</p></body>
</html>
`;
}

function rewriteArticleHtml(html, slug) {
  const from = `/resources/${slug}`;
  const to = `/blog/${slug}`;
  const absFrom = `https://dialiqo.com/resources/${slug}`;
  const absTo = `https://dialiqo.com/blog/${slug}`;
  return html
    .replaceAll(absFrom + "/", absTo + "/")
    .replaceAll(absFrom, absTo)
    .replaceAll(from + "/", to + "/")
    .replaceAll(from, to)
    .replaceAll(
      '"name":"Resources","item":"https://dialiqo.com/resources"',
      '"name":"Blog","item":"https://dialiqo.com/blog"'
    )
    .replaceAll('href="/resources/"', 'href="/blog/"')
    .replaceAll("Back to Engineering Blog", "Back to Blog")
    .replaceAll(">Engineering Blog<", ">Blog<");
}

function migrateArticles() {
  let moved = 0;
  for (const slug of ARTICLE_SLUGS) {
    const src = path.join("site/resources", slug, "index.html");
    const blogDir = path.join("site/blog", slug);
    const blogFile = path.join(blogDir, "index.html");

    let html = null;
    if (fs.existsSync(src)) {
      const raw = fs.readFileSync(src, "utf8");
      // Skip if this is already a redirect stub
      if (!raw.includes("location.replace") && raw.includes("<main")) {
        html = raw;
      }
    }
    if (!html && fs.existsSync(blogFile)) {
      html = fs.readFileSync(blogFile, "utf8");
    }
    if (!html) {
      console.warn("Missing article:", slug);
      continue;
    }

    html = rewriteArticleHtml(html, slug);
    fs.mkdirSync(blogDir, { recursive: true });
    fs.writeFileSync(blogFile, html);
    fs.mkdirSync(path.join("site/resources", slug), { recursive: true });
    fs.writeFileSync(src, redirectHtml(`/blog/${slug}/`, "Redirecting to Blog..."));
    moved++;
  }
  console.log("Migrated", moved, "articles to /blog/[slug]/");
}

function card(post) {
  return `
<article class="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-black/20 transition-all hover:border-blue-500/40 hover:shadow-blue-500/10">
  <a href="${post.href}" class="relative block aspect-[16/10] overflow-hidden bg-slate-800">
    <img src="${post.image}" alt="" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" width="640" height="400"/>
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" aria-hidden="true"></div>
    <span class="absolute top-3 right-3 z-10 inline-flex max-w-[85%] items-center rounded-full border border-blue-400/30 bg-blue-600/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg backdrop-blur-sm">${post.category}</span>
  </a>
  <div class="flex flex-1 flex-col gap-5 p-5 sm:p-6">
    <h2 class="text-lg font-bold leading-snug text-white tracking-tight">
      <a href="${post.href}" class="hover:text-blue-400 transition-colors">${post.title}</a>
    </h2>
    <div class="mt-auto pt-1">
      <a href="${post.href}" class="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all">
        Read More <span aria-hidden="true">\u00bb</span>
      </a>
    </div>
  </div>
</article>`;
}

function buildMain() {
  const pages = [1, 2, 3, 4, 5]
    .map((n) =>
      n === 1
        ? `<li><span class="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-blue-600 px-3 text-sm font-bold text-white" aria-current="page">1</span></li>`
        : `<li><a href="/blog/?page=${n}" class="inline-flex h-9 min-w-9 items-center justify-center rounded-lg border border-slate-700 px-3 text-sm font-semibold text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors">${n}</a></li>`
    )
    .join("");

  return `
<main id="main-content" role="main" tabindex="-1" class="focus:outline-none">
<div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
  <nav aria-label="Breadcrumb" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-2">
    <ol class="flex items-center gap-2 text-xs font-mono text-slate-500">
      <li><a class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="/">Home</a></li>
      <li aria-hidden="true">/</li>
      <li aria-current="page" class="text-slate-900 dark:text-white font-semibold">Blog</li>
    </ol>
  </nav>
  <section class="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[350px] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center" aria-labelledby="blog-hero-heading">
    <img alt="" decoding="async" class="object-cover object-center" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="${HERO}">
    <div class="absolute inset-0 bg-slate-950/40" aria-hidden="true"></div>
    <div class="relative z-10 max-w-7xl mx-auto">
      <h1 id="blog-hero-heading" class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">Blog</h1>
    </div>
  </section>

  <section class="bg-slate-950 py-14 sm:py-20 px-4 sm:px-6 lg:px-8" aria-label="Blog posts">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        ${POSTS.map(card).join("\n")}
      </div>
      <nav class="mt-14 flex justify-center" aria-label="Blog pagination">
        <ul class="flex items-center gap-2 list-none m-0 p-0">${pages}</ul>
      </nav>
    </div>
  </section>
</div>
</main>`;
}

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "assets") continue;
      walk(p, acc);
    } else if (e.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

const shellPath = "site/contact/index.html";
if (!fs.existsSync(shellPath)) {
  console.error("Missing", shellPath);
  process.exit(1);
}

const $ = cheerio.load(fs.readFileSync(shellPath, "utf8"));

$("title").text("Blog | Dialiqo");
$('meta[name="description"]').attr(
  "content",
  "Dialiqo blog — VoIP, Voice AI, FreeSWITCH, Asterisk, Kamailio, OpenSIPS, billing, and telecom engineering insights."
);
$('meta[property="og:title"]').attr("content", "Blog | Dialiqo");
$('meta[property="og:description"]').attr(
  "content",
  "Engineering insights on VoIP, Voice AI, and carrier-grade telecom from Dialiqo."
);
$('meta[property="og:url"]').attr("content", "https://dialiqo.com/blog/");
$('link[rel="canonical"]').attr("href", "https://dialiqo.com/blog/");
$('meta[name="twitter:title"]').attr("content", "Blog | Dialiqo");

// Blog nav → /blog/ (no active/highlight state)
$("a").each((_, el) => {
  const $a = $(el);
  const text = ($a.text() || "").trim();
  if (text === "Blog" && ($a.attr("href") || "").includes("resources")) {
    $a.attr("href", "/blog/");
  }
});

if ($("#main-content").length) {
  $("#main-content").replaceWith(buildMain());
} else {
  $("footer").before(buildMain());
}

fs.mkdirSync("site/blog", { recursive: true });
fs.writeFileSync("site/blog/index.html", $.html());
console.log("Wrote site/blog/index.html");

migrateArticles();

// Point Blog links to /blog/
let updated = 0;
for (const file of walk("site")) {
  let html = fs.readFileSync(file, "utf8");
  const before = html;
  html = html.replace(
    /href="\/resources\/"(\s+class="[^"]*")>\s*Blog\s*</g,
    'href="/blog/"$1>Blog<'
  );
  html = html.replace(
    /(<a[^>]*href=")\/resources\/("[^>]*>)\s*Blog\s*(<\/a>)/gi,
    "$1/blog/$2Blog$3"
  );
  // Rewrite any leftover article deep links
  for (const slug of ARTICLE_SLUGS) {
    html = html.replaceAll(`/resources/${slug}/`, `/blog/${slug}/`);
    html = html.replaceAll(`/resources/${slug}"`, `/blog/${slug}"`);
    html = html.replaceAll(
      `https://dialiqo.com/resources/${slug}`,
      `https://dialiqo.com/blog/${slug}`
    );
  }
  if (html !== before) {
    fs.writeFileSync(file, html);
    updated++;
  }
}
console.log("Updated Blog links in", updated, "files");

fs.writeFileSync(
  "site/resources/index.html",
  redirectHtml("/blog/", "Redirecting to Blog...")
);

const redirectsPath = "site/_redirects";
const redirectLines = [
  "/blog  /blog/  301",
  "/resources  /blog/  301",
  "/resources/  /blog/  301",
  ...ARTICLE_SLUGS.flatMap((slug) => [
    `/resources/${slug}  /blog/${slug}/  301`,
    `/resources/${slug}/  /blog/${slug}/  301`,
  ]),
  "/services  /  301",
  "/services/  /  301",
  "/about  /about-us/  301",
  "/about/  /about-us/  301",
  "/careers  /about-us/  301",
  "/careers/  /about-us/  301",
  "/case-studies  /blog/  301",
  "/case-studies/  /blog/  301",
  "/technologies  /voip-solution/  301",
  "/technologies/  /voip-solution/  301",
  "/solutions  /products/contact-center-solutions/  301",
  "/solutions/  /products/contact-center-solutions/  301",
  "/industries  /voip-solutions-for-real-estate/  301",
  "/industries/  /voip-solutions-for-real-estate/  301",
  "/services/web-development  /services/mobile-web/web-development/  301",
  "/services/web-development/  /services/mobile-web/web-development/  301",
  "/services/mobile-app-development  /services/mobile-web/mobile-development/  301",
  "/services/mobile-app-development/  /services/mobile-web/mobile-development/  301",
  "/services/ai-development  /services/ai-ml-development-services/  301",
  "/services/ai-development/  /services/ai-ml-development-services/  301",
  "/services/devops  /services/devops-consulting-services/  301",
  "/services/devops/  /services/devops-consulting-services/  301",
  "/services/qa-testing  /services/qa-testing-services/  301",
  "/services/qa-testing/  /services/qa-testing-services/  301",
];
fs.writeFileSync(redirectsPath, redirectLines.join("\n") + "\n");
console.log("Wrote", redirectsPath);

// Keep generator nav in sync if present
const pure = "scripts/to-pure-html.mjs";
if (fs.existsSync(pure)) {
  let s = fs.readFileSync(pure, "utf8");
  s = s.replaceAll(
    'href="/resources/" class="px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all">Blog</a>',
    'href="/blog/" class="px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all">Blog</a>'
  );
  s = s.replaceAll(
    'href="/resources/" class="block font-bold text-slate-900 dark:text-white py-2" data-close-mobile>Blog</a>',
    'href="/blog/" class="block font-bold text-slate-900 dark:text-white py-2" data-close-mobile>Blog</a>'
  );
  s = s.replaceAll(
    'href="/resources/" class="text-slate-400 hover:text-white transition-colors">Blog</a>',
    'href="/blog/" class="text-slate-400 hover:text-white transition-colors">Blog</a>'
  );
  fs.writeFileSync(pure, s);
}

console.log("Done. Open /blog/");
