/**
 * Convert Next static export (html/) → pure static site (site/)
 * No Next.js / React at runtime. Tailwind CSS + custom CSS + vanilla JS.
 */
import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcHtml = path.join(root, "html");
const dest = path.join(root, "site");

const slash = (href) => {
  if (!href || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") || href.startsWith("#")) {
    return href;
  }
  if (href === "/") return "/";
  return href.endsWith("/") ? href : `${href}/`;
};

const SERVICES = {
  heading: "Dialiqo's Cutting-Edge VoIP Development Services",
  description: "Comprehensive services with assured quality and uncompromised standards.",
  core: [
    { label: "VoIP Solutions", href: "/voip-solution/" },
    { label: "VoIP Consulting Services", href: "/voip-consulting/" },
    { label: "VoIP Migration Services", href: "/voip-migration/" },
  ],
  groups: [
    {
      title: "VoIP",
      href: "/services/voip-development/",
      items: [
        { label: "FreeSWITCH", href: "/services/voip/freeswitch-development/" },
        { label: "Asterisk", href: "/services/voip/asterisk/" },
        { label: "OpenSIPS", href: "/services/voip/opensips/" },
        { label: "Kamailio", href: "/services/voip/kamailio-development-services/" },
      ],
    },
    {
      title: "Mobile & Web",
      href: "/services/mobile-web/",
      items: [
        { label: "Web Development", href: "/services/mobile-web/web-development/" },
        { label: "Mobile Development", href: "/services/mobile-web/mobile-development/" },
      ],
    },
    {
      title: "QA Services",
      href: "/services/qa-testing-services/",
      items: [
        { label: "VoIP Testing", href: "/services/qa-testing-services/voip-testing-services/" },
        { label: "QA Automation", href: "/services/qa-testing-services/qa-automation/" },
        { label: "API Testing", href: "/services/qa-testing-services/api-testing-services/" },
      ],
    },
    {
      title: "AI-ML",
      href: "/services/ai-ml-development-services/",
      items: [
        { label: "Sentiment Analysis", href: "/services/ai-ml-development-services/sentiment-analysis/" },
        { label: "Chatbot", href: "/services/ai-ml-development-services/chatbot-services/" },
        { label: "AI Voicebot Connector", href: "/services/ai-voicebot-connector/" },
      ],
    },
    {
      title: "DevOps",
      href: "/services/devops-consulting-services/",
      items: [
        { label: "DevOps Services", href: "/services/devops-consulting-services/" },
        { label: "Staff Augmentation", href: "/services/staff-augmentation/" },
      ],
    },
    {
      title: "Hire Developers",
      href: "/services/staff-augmentation/",
      items: [
        { label: "Hire WebRTC Developers", href: "/hire-webrtc-developers/" },
        { label: "Hire VoIP Developers", href: "/hire-voip-developers/" },
        { label: "Hire OpenSIPS Developers", href: "/hire-open-sips-developers/" },
        { label: "Hire Kamailio Developers", href: "/hire-kamailio-developers/" },
        { label: "Hire FreeSWITCH Developers", href: "/hire-freeswitch-developers/" },
        { label: "Hire Asterisk Developers", href: "/hire-asterisk-developers/" },
      ],
    },
  ],
};

const PRODUCTS = {
  heading: "Our Products",
  description: "Ready-to-deploy platforms built for modern communication businesses.",
  links: [
    { label: "Contact Center", href: "/products/contact-center-solutions/" },
    { label: "VoIP Billing", href: "/products/voip-billing-solution/" },
  ],
  featured: [
    {
      label: "Contact Center",
      href: "/products/contact-center-solutions/",
      tagline: "Omnichannel Contact Center",
      description:
        "AI-powered contact center with voice, chat, email, and 24/7 agent support — built for high-volume customer engagement.",
    },
    {
      label: "VoIP Billing",
      href: "/products/voip-billing-solution/",
      tagline: "Real-Time Telecom Billing",
      description:
        "Prepaid and postpaid VoIP billing with CDR rating, analytics, invoicing, and usage insights for operators and MVNOs.",
    },
  ],
};

const VOIP_SOLUTIONS = {
  heading: "VoIP Solution",
  description: "Specialized VoIP platforms for carriers, enterprises, and communication providers.",
  items: [
    { label: "IVR", number: "01", href: "/voip-solution/interactive-voice-response-solutions/" },
    { label: "UC", number: "02", href: "/voip-solution/unified-communications-solutions/" },
    { label: "WebRTC", number: "03", href: "/voip-solution/webrtc-solutions/" },
    { label: "SBC", number: "04", href: "/voip-solution/session-border-controller/" },
    { label: "MVNO", number: "05", href: "/voip-solution/mobile-virtual-network-operator-solution/" },
    { label: "Class 5 Softswitch", number: "06", href: "/voip-solution/class-5-softswitch-solutions/" },
    { label: "Class 4 Softswitch", number: "07", href: "/voip-solution/class-4-softswitch-solution/" },
    { label: "MVNO Billing", number: "08", href: "/voip-solution/mvno-billing-solution/" },
  ],
};

const INDUSTRIES = {
  heading: "Industries",
  description: "VoIP and communication solutions tailored for every industry.",
  items: [
    { label: "Real Estate", href: "/voip-solutions-for-real-estate/" },
    { label: "Hotels", href: "/voip-solutions-for-hotels/" },
    { label: "Healthcare", href: "/voip-solutions-for-healthcare/" },
    { label: "Ecommerce", href: "/voip-solutions-for-ecommerce/" },
    { label: "Centers", href: "/voip-solutions-for-call-centers/" },
    { label: "Education", href: "/voip-solutions-for-education/" },
    { label: "Fintech", href: "/voip-solutions-for-fintech/" },
    { label: "Insurance", href: "/voip-solutions-for-insurance/" },
    { label: "Logistics", href: "/voip-solutions-for-logistics/" },
    { label: "Recruitment", href: "/voip-solutions-for-recruitment/" },
    { label: "Enterprises", href: "/voip-solutions-for-enterprises/" },
    { label: "SaaS Companies", href: "/voip-solutions-for-saas-companies/" },
    { label: "Telecom", href: "/voip-solutions-for-telecom/" },
    { label: "Travel Agencies", href: "/voip-solutions-for-travel-agencies/" },
  ],
};

const ICON = {
  chevron: `<svg class="w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`,
  search: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  arrow: `<svg class="w-3.5 h-3.5 text-blue-500 opacity-70 group-hover:opacity-100 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  check: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
  menu: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 5h16M4 12h16M4 19h16"/></svg>`,
  x: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  phone: `<svg class="w-4 h-4 shrink-0 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail: `<svg class="w-4 h-4 shrink-0 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
};

function linkItem(item, size = "sm") {
  const textClass =
    size === "xs"
      ? "group flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      : "group flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors";
  return `<li><a href="${item.href}" class="${textClass}" data-close-mega>${ICON.arrow}<span>${item.label}</span></a></li>`;
}

function buildNav() {
  const serviceCols = `
    <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-700">
      <div class="font-bold text-sm text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wide">Core Services</div>
      <ul class="space-y-2 list-none m-0 p-0">${SERVICES.core.map((i) => linkItem(i)).join("")}</ul>
    </div>
    ${SERVICES.groups
      .map(
        (g) => `
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-700">
        ${g.href ? `<a href="${g.href}" class="font-bold text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-wide" data-close-mega>${g.title}</a>` : `<div class="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wide">${g.title}</div>`}
        <ul class="mt-3 space-y-2 list-none m-0 p-0">${g.items.map((i) => linkItem(i, "xs")).join("")}</ul>
      </div>`
      )
      .join("")}`;

  const industries = INDUSTRIES.items
    .map(
      (item) => `
      <a href="${item.href}" data-close-mega class="group flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:bg-blue-50/40 dark:hover:bg-slate-900 transition-all">
        <span class="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">${ICON.check}</span>
        <span class="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 uppercase tracking-wide">${item.label}</span>
      </a>`
    )
    .join("");

  const products = `
    <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800">
      <div class="font-bold text-sm text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wide">Our Products</div>
      <ul class="space-y-2.5 list-none m-0 p-0">${PRODUCTS.links.map((i) => linkItem(i)).join("")}</ul>
    </div>
    ${PRODUCTS.featured
      .map(
        (p) => `
      <a href="${p.href}" data-close-mega class="group p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:bg-blue-50/40 dark:hover:bg-slate-900 transition-all">
        <div class="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 uppercase tracking-wide">${p.label}</div>
        <div class="text-xs text-blue-600 dark:text-blue-400 mt-1 font-mono">${p.tagline}</div>
        <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mt-2 leading-relaxed">${p.description}</p>
      </a>`
      )
      .join("")}`;

  const voip = VOIP_SOLUTIONS.items
    .map(
      (item) => `
      <a href="${item.href}" data-close-mega class="group relative flex items-center gap-3 overflow-hidden p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:bg-blue-50/40 dark:hover:bg-slate-900 transition-all">
        <span class="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">${ICON.check}</span>
        <span class="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 uppercase tracking-wide">${item.label}</span>
        <span class="absolute right-3 bottom-1 text-4xl font-black text-slate-100 dark:text-slate-800 select-none pointer-events-none" aria-hidden="true">${item.number}</span>
      </a>`
    )
    .join("");

  const mobileServices = [
    ...SERVICES.core,
    ...SERVICES.groups.flatMap((g) => g.items),
  ]
    .map((i) => `<li><a href="${i.href}" class="block py-1.5 text-sm text-slate-600 dark:text-slate-400" data-close-mobile>${i.label}</a></li>`)
    .join("");

  return `
<header id="site-header" class="site-header fixed top-0 left-0 right-0 z-40 transition-all duration-300">
  <nav id="site-navigation" aria-label="Primary Navigation" class="w-full transition-all duration-200 border-b bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border-slate-200/40 dark:border-slate-800/40" data-nav>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <a href="/" aria-label="Dialiqo home" class="inline-flex items-center bg-slate-950 rounded-lg px-2 py-1 dark:bg-transparent dark:px-0 dark:py-0">
        <img src="/header-logo.png" alt="Dialiqo Ultimate Solutions" width="128" height="40" class="h-10 w-auto object-contain"/>
      </a>
      <ul class="menu hidden lg:flex items-center gap-1 font-medium text-sm text-slate-700 dark:text-slate-300 list-none m-0 p-0">
        <li class="relative">
          <button type="button" class="mega-trigger flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer" data-mega="services" aria-expanded="false" aria-haspopup="true">Service ${ICON.chevron}</button>
        </li>
        <li class="relative">
          <button type="button" class="mega-trigger flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer" data-mega="products" aria-expanded="false" aria-haspopup="true">Our Products ${ICON.chevron}</button>
        </li>
        <li class="relative">
          <a href="/voip-solution/" class="mega-trigger flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all" data-mega="solutions">VoIP Solution ${ICON.chevron}</a>
        </li>
        <li class="relative">
          <button type="button" class="mega-trigger flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer" data-mega="industries" aria-expanded="false" aria-haspopup="true">Industries ${ICON.chevron}</button>
        </li>
        <li><a href="/blog/" class="px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all">Blog</a></li>
        <li><a href="/about-us/" class="px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all" data-mega="company">Company</a></li>
      </ul>
      <div class="hidden sm:flex items-center gap-3">
        <a href="/search/" class="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all">${ICON.search}<span>Search</span></a>
        <a href="/contact/#schedule" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25">Book Consultation</a>
      </div>
      <div class="lg:hidden flex items-center gap-2">
        <a href="/search/" class="p-2 rounded-lg text-slate-600 dark:text-slate-300" aria-label="Search">${ICON.search}</a>
        <button type="button" class="p-2 rounded-lg text-slate-600 dark:text-slate-300 cursor-pointer" data-mobile-toggle aria-label="Toggle mobile menu" aria-expanded="false">${ICON.menu}</button>
      </div>
    </div>

    <div class="hidden fixed inset-0 top-20 z-30 bg-slate-950/45 dark:bg-black/55 pointer-events-none" data-mega-backdrop aria-hidden="true"></div>

    <div class="hidden absolute top-full left-0 right-0 z-50 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-700 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-slate-200/70 dark:ring-white/10 py-8 px-6 sm:px-12" data-mega-panel="services">
      <div class="max-w-7xl mx-auto">
        <div class="pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
          <h4 class="text-base font-bold text-slate-900 dark:text-white">${SERVICES.heading}</h4>
          <p class="text-xs text-slate-500 mt-1">${SERVICES.description}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${serviceCols}</div>
      </div>
    </div>

    <div class="hidden absolute top-full left-0 right-0 z-50 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-700 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] py-8 px-6 sm:px-12" data-mega-panel="products">
      <div class="max-w-7xl mx-auto">
        <div class="pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
          <h4 class="text-base font-bold text-slate-900 dark:text-white">${PRODUCTS.heading}</h4>
          <p class="text-xs text-slate-500 mt-1">${PRODUCTS.description}</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">${products}</div>
      </div>
    </div>

    <div class="hidden absolute top-full left-0 right-0 z-50 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-700 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] py-8 px-6 sm:px-12" data-mega-panel="solutions">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-start gap-6 pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h4 class="text-base font-bold text-slate-900 dark:text-white">${VOIP_SOLUTIONS.heading}</h4>
            <p class="text-xs text-slate-500 mt-1">${VOIP_SOLUTIONS.description}</p>
          </div>
          <a href="/voip-solution/" class="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0" data-close-mega>Browse All Solutions →</a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${voip}</div>
      </div>
    </div>

    <div class="hidden absolute top-full left-0 right-0 z-50 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-700 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] py-8 px-6 sm:px-12" data-mega-panel="industries">
      <div class="max-w-7xl mx-auto">
        <div class="pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
          <h4 class="text-base font-bold text-slate-900 dark:text-white">${INDUSTRIES.heading}</h4>
          <p class="text-xs text-slate-500 mt-1">${INDUSTRIES.description}</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">${industries}</div>
      </div>
    </div>

    <div class="hidden absolute top-full left-0 right-0 z-50 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-700 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] py-8 px-6 sm:px-12" data-mega-panel="company">
      <div class="max-w-7xl mx-auto grid grid-cols-2 gap-6">
        <a href="/about-us/" data-close-mega class="group p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 transition-all">
          <div class="font-bold text-sm text-slate-900 dark:text-white">About Us</div>
          <div class="text-xs text-slate-500 mt-1">Our story, mission, timeline, and leadership.</div>
        </a>
        <a href="/contact/" data-close-mega class="group p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 transition-all">
          <div class="font-bold text-sm text-slate-900 dark:text-white">Contact Us</div>
          <div class="text-xs text-slate-500 mt-1">Get in touch with Dialiqo.</div>
        </a>
      </div>
    </div>

    <div class="hidden lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-4 shadow-2xl" data-mobile-drawer>
      <a href="/" class="block font-bold text-slate-900 dark:text-white py-2" data-close-mobile>Home</a>
      <div>
        <button type="button" class="flex w-full items-center justify-between font-bold text-slate-900 dark:text-white py-2 cursor-pointer" data-mobile-section="services">Service ${ICON.chevron}</button>
        <ul class="hidden pl-3 pb-2 space-y-1 list-none m-0" data-mobile-panel="services">${mobileServices}</ul>
      </div>
      <div>
        <button type="button" class="flex w-full items-center justify-between font-bold text-slate-900 dark:text-white py-2 cursor-pointer" data-mobile-section="products">Our Products ${ICON.chevron}</button>
        <ul class="hidden pl-3 pb-2 space-y-1 list-none m-0" data-mobile-panel="products">${PRODUCTS.links.map((i) => `<li><a href="${i.href}" class="block py-1.5 text-sm text-slate-600 dark:text-slate-400" data-close-mobile>${i.label}</a></li>`).join("")}</ul>
      </div>
      <a href="/voip-solution/" class="block font-bold text-slate-900 dark:text-white py-2" data-close-mobile>VoIP Solution</a>
      <div>
        <button type="button" class="flex w-full items-center justify-between font-bold text-slate-900 dark:text-white py-2 cursor-pointer" data-mobile-section="industries">Industries ${ICON.chevron}</button>
        <ul class="hidden pl-3 pb-2 space-y-1 list-none m-0" data-mobile-panel="industries">${INDUSTRIES.items.map((i) => `<li><a href="${i.href}" class="block py-1.5 text-sm text-slate-600 dark:text-slate-400" data-close-mobile>${i.label}</a></li>`).join("")}</ul>
      </div>
      <a href="/blog/" class="block font-bold text-slate-900 dark:text-white py-2" data-close-mobile>Blog</a>
      <a href="/about-us/" class="block font-bold text-slate-900 dark:text-white py-2" data-close-mobile>About Us</a>
      <a href="/contact/" class="block font-bold text-slate-900 dark:text-white py-2" data-close-mobile>Contact Us</a>
      <a href="/contact/#schedule" class="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white" data-close-mobile>Book Consultation</a>
    </div>
  </nav>
</header>`;
}

function buildFooter() {
  const services = [
    { label: "VoIP Development", href: "/services/voip-development/" },
    { label: "AI-ML Development", href: "/services/ai-ml-development-services/" },
    { label: "Web Development", href: "/services/mobile-web/web-development/" },
    { label: "Mobile App Development", href: "/services/mobile-web/mobile-development/" },
    { label: "DevOps Services", href: "/services/devops-consulting-services/" },
    { label: "QA Services", href: "/services/qa-testing-services/" },
    { label: "AI Voicebot Connector", href: "/services/ai-voicebot-connector/" },
  ];
  return `
<footer id="site-footer" class="site-footer bg-slate-950 text-slate-300 pt-14 pb-8 border-t border-slate-800 text-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
      <div class="sm:col-span-2 lg:col-span-1">
        <a href="/" aria-label="Dialiqo home" class="inline-block mb-4"><img src="/header-logo.png" alt="Dialiqo" class="h-10 w-auto"/></a>
        <p class="text-slate-400 text-sm leading-relaxed max-w-xs">Delivering Custom Technology Solutions That Accelerate Business Growth</p>
      </div>
      <div>
        <h5 class="text-sm font-bold text-white mb-4">Our Services</h5>
        <ul class="space-y-2.5 text-sm">${services.map((s) => `<li><a href="${s.href}" class="text-slate-400 hover:text-white transition-colors">${s.label}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h5 class="text-sm font-bold text-white mb-4">Company</h5>
        <ul class="space-y-2.5 text-sm">
          <li><a href="/about-us/" class="text-slate-400 hover:text-white transition-colors">About Us</a></li>
          <li><a href="/blog/" class="text-slate-400 hover:text-white transition-colors">Blog</a></li>
          <li><a href="/contact/" class="text-slate-400 hover:text-white transition-colors">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-sm font-bold text-white mb-4">Products</h5>
        <ul class="space-y-2.5 text-sm">
          <li><a href="/products/contact-center-solutions/" class="text-slate-400 hover:text-white transition-colors">Contact Center</a></li>
          <li><a href="/products/voip-billing-solution/" class="text-slate-400 hover:text-white transition-colors">VoIP Billing</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-sm font-bold text-white mb-4">Get In Touch</h5>
        <div class="space-y-4 text-sm text-slate-400">
          <div><div class="font-bold text-white mb-0.5">INDIA</div><p>E509 Ganesh Glory 11, Ahmedabad</p></div>
          <div><div class="font-bold text-white mb-0.5">USA</div><p>Fremont, CA 94536</p></div>
          <a href="tel:+919974542501" class="flex items-center gap-2 hover:text-white transition-colors">${ICON.phone}+91 9974542501</a>
          <a href="mailto:info@dialiqo.com" class="flex items-center gap-2 hover:text-white transition-colors">${ICON.mail}info@dialiqo.com</a>
        </div>
      </div>
    </div>
    <div class="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-wrap gap-4 justify-between">
      <span>© ${new Date().getFullYear()} Dialiqo Technologies LLP. All rights reserved.</span>
      <div class="flex gap-4">
        <a href="/privacy-policy/" class="hover:text-white">Privacy Policy</a>
        <a href="/terms-conditions/" class="hover:text-white">Terms</a>
        <a href="/cookie-policy/" class="hover:text-white">Cookies</a>
      </div>
    </div>
  </div>
</footer>`;
}

function walkHtmlFiles(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "_next" || e.name === "assets") continue;
      walkHtmlFiles(p, acc);
    } else if (e.name.endsWith(".html") && e.name !== "README.md") {
      acc.push(p);
    }
  }
  return acc;
}

function cleanMainHtml(html) {
  const $ = cheerio.load(html, { decodeEntities: false }, false);
  // Remove Next/React noise
  $("[data-next-head], script, template[data-dgst]").remove();
  $("*").each((_, el) => {
    const attribs = el.attribs || {};
    for (const key of Object.keys(attribs)) {
      if (
        key.startsWith("data-next") ||
        key === "data-nimg" ||
        key.startsWith("__")
      ) {
        $(el).removeAttr(key);
      }
    }
  });
  // Fix trailing-slash-ish internal links later in full doc
  return $.root().html() || html;
}

function extractHeadBits($) {
  const title = $("title").first().text() || "Dialiqo";
  const metas = [];
  $("meta").each((_, el) => {
    const attribs = { ...el.attribs };
    // skip next charset duplicates handled in template
    if (attribs.charSet || attribs.charset) return;
    if (attribs.name === "viewport") return;
    metas.push($.html(el));
  });
  const links = [];
  $("link").each((_, el) => {
    const rel = (el.attribs.rel || "").toLowerCase();
    if (rel.includes("stylesheet") || rel.includes("preload") && el.attribs.as === "script") return;
    if (rel.includes("preload") && el.attribs.as === "script") return;
    if (el.attribs.href && String(el.attribs.href).includes("/_next/")) return;
    links.push($.html(el));
  });
  const jsonLd = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    jsonLd.push($.html(el));
  });
  return { title, metas: metas.join("\n"), links: links.join("\n"), jsonLd: jsonLd.join("\n") };
}

function assemblePage({ title, metas, links, jsonLd, mainHtml }) {
  return `<!DOCTYPE html>
<html lang="en-US" class="dark scroll-smooth">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${title.replace(/</g, "")}</title>
${metas}
${links}
<link rel="stylesheet" href="/assets/css/app.css"/>
<link rel="stylesheet" href="/assets/css/custom.css"/>
<link rel="icon" href="/icon.svg"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
${jsonLd}
</head>
<body class="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white">
<a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-xl">Skip to main content</a>
<div class="min-h-screen bg-slate-950 text-slate-100 font-sans">
${buildNav()}
<main id="main-content" role="main" tabindex="-1" class="focus:outline-none">
${mainHtml}
</main>
${buildFooter()}
</div>
<script src="/assets/js/site.js" defer></script>
</body>
</html>`;
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    const s = path.join(from, e.name);
    const d = path.join(to, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function main() {
  if (!fs.existsSync(srcHtml)) {
    console.error("Missing html/ export. Run a Next export once first, or restore html/.");
    process.exit(1);
  }

  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(path.join(dest, "assets", "css"), { recursive: true });
  fs.mkdirSync(path.join(dest, "assets", "js"), { recursive: true });

  // Copy compiled Tailwind CSS from Next export (utilities already scanned)
  const cssDir = path.join(srcHtml, "_next", "static", "css");
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir).filter((f) => f.endsWith(".css"));
    let merged = "";
    for (const f of cssFiles) {
      merged += fs.readFileSync(path.join(cssDir, f), "utf8") + "\n";
    }
    // rewrite any /_next font refs if present — usually none with google fonts via next/font as CSS vars
    merged = merged.replace(/@font-face\{[^}]+\}/g, "").replace(/\/_next\/static\/media\/[^)"\s]+/g, "");
    // Strip Next font faces — Google Fonts loaded in HTML
    fs.writeFileSync(path.join(dest, "assets", "css", "app.css"), merged);
    console.log("Merged CSS from export → assets/css/app.css");
  } else {
    console.warn("No _next CSS found; app.css will be empty until Tailwind build.");
    fs.writeFileSync(path.join(dest, "assets", "css", "app.css"), "/* run npm run css */\n");
  }

  // Custom CSS
  fs.copyFileSync(
    path.join(root, "src", "app", "globals.css"),
    path.join(dest, "assets", "css", "custom.source.css")
  );
  const customCss = `/* Dialiqo custom CSS (no Tailwind @import — utilities live in app.css) */
:root {
  --font-plus-jakarta: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-jetbrains-mono: "JetBrains Mono", ui-monospace, monospace;
}
html {
  font-family: var(--font-plus-jakarta), system-ui, sans-serif;
  scroll-behavior: smooth;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color-scheme: dark;
}
.font-mono, code, pre, kbd, samp {
  font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
}
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.6); }
::-webkit-scrollbar-thumb { background: rgba(51, 65, 85, 0.8); border-radius: 9999px; }
::-webkit-scrollbar-thumb:hover { background: rgba(100, 116, 139, 1); }
*:focus-visible { outline: 2px solid #3b82f6 !important; outline-offset: 2px !important; }
@keyframes pulseGlow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}
.animate-pulse-glow { animation: pulseGlow 4s infinite ease-in-out; }
@keyframes tech-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-tech-marquee { animation: tech-marquee 28s linear infinite; }
.animate-tech-marquee:hover { animation-play-state: paused; }
.google-appointment-embed {
  filter: invert(0.93) hue-rotate(180deg) brightness(0.96) contrast(0.98);
  background: #020617;
}
.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0;
}
`;
  fs.writeFileSync(path.join(dest, "assets", "css", "custom.css"), customCss);

  // site.js
  fs.copyFileSync(
    path.join(root, "scripts", "static-site.js"),
    path.join(dest, "assets", "js", "site.js")
  );

  // Public assets
  const publicDir = path.join(root, "public");
  if (fs.existsSync(publicDir)) {
    for (const e of fs.readdirSync(publicDir, { withFileTypes: true })) {
      const s = path.join(publicDir, e.name);
      const d = path.join(dest, e.name);
      if (e.isDirectory()) copyDir(s, d);
      else fs.copyFileSync(s, d);
    }
  }
  // Also copy logo from html if present
  for (const f of ["header-logo.png", "icon.svg"]) {
    const from = path.join(srcHtml, f);
    if (fs.existsSync(from)) fs.copyFileSync(from, path.join(dest, f));
  }

  // Copy sitemap/robots if present
  for (const f of ["sitemap.xml", "robots.txt", "_redirects", "vercel.json"]) {
    const from = path.join(srcHtml, f);
    if (fs.existsSync(from)) fs.copyFileSync(from, path.join(dest, f));
  }

  const files = walkHtmlFiles(srcHtml);
  let converted = 0;
  for (const file of files) {
    const raw = fs.readFileSync(file, "utf8");
    const $ = cheerio.load(raw);
    const head = extractHeadBits($);
    let mainHtml = $("#main-content").html();
    if (!mainHtml) {
      // fallback: body without scripts
      $("script").remove();
      mainHtml = $("body").html() || "";
    }
    mainHtml = cleanMainHtml(mainHtml);

    // Normalize internal hrefs to trailing slash folders
    const $main = cheerio.load(`<div id="wrap">${mainHtml}</div>`, { decodeEntities: false });
    $main("a[href]").each((_, el) => {
      const href = $main(el).attr("href");
      if (href && href.startsWith("/") && !href.startsWith("//") && !href.includes(".") && !href.includes("#")) {
        $main(el).attr("href", slash(href.split("?")[0]) + (href.includes("?") ? "?" + href.split("?")[1] : ""));
      }
    });
    mainHtml = $main("#wrap").html() || mainHtml;

    const page = assemblePage({ ...head, mainHtml });
    const rel = path.relative(srcHtml, file);
    const outFile = path.join(dest, rel);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, page);
    converted++;
  }

  console.log(`Converted ${converted} HTML pages → site/`);
  console.log("Pure static site ready (no Next.js). Serve with: npm run serve");
}

main();
