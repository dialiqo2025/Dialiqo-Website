import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Code,
  Globe,
  LayoutGrid,
  Lock,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { VoipProcessSteps } from "@/components/services/VoipProcessSteps";
import { WebDevelopmentExpertise } from "@/components/services/WebDevelopmentExpertise";
import { WebDevelopmentFaq } from "@/components/services/WebDevelopmentFaq";
import {
  WEB_DEV_CONTACT,
  WEB_DEV_CTA_BAND,
  WEB_DEV_EXPERTISE,
  WEB_DEV_HERO,
  WEB_DEV_INTRO,
  WEB_DEV_LANDSCAPE,
  WEB_DEV_PROCESS_GRID,
  WEB_DEV_TRANSFORMATION,
  WEB_DEV_TYPES,
} from "@/lib/webDevelopmentPageData";
import { typo } from "@/lib/typography";

const PROCESS_ICONS = [
  Search,
  LayoutGrid,
  Sparkles,
  Workflow,
  Code,
  Globe,
  Shield,
  Zap,
];
const TRANSFORMATION_ICONS = [Sparkles, Smartphone, Lock, Cloud, Zap, Workflow];

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80";

export function WebDevelopmentServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-2"
      >
        <ol className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span>Services</span>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/services/mobile-web"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Mobile & Web
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-white font-semibold"
          >
            Web Development
          </li>
        </ol>
      </nav>

      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="wd-hero-heading"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -inset-4 bg-blue-500/10 rounded-4xl blur-2xl"
              aria-hidden="true"
            />
            <div className="relative">
              <ServiceIllustration slug="web-development" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h1
              id="wd-hero-heading"
              className={`${typo.heroTitle} text-slate-900 dark:text-white`}
            >
              {WEB_DEV_HERO.title}
            </h1>
            <p
              className={`mt-6 ${typo.subtitle} text-slate-600 dark:text-slate-300`}
            >
              {WEB_DEV_HERO.description}
            </p>
            <ServerLinkButton
              href="/contact"
              variant="glow"
              size="lg"
              className="mt-8"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {WEB_DEV_HERO.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="wd-intro-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="wd-intro-heading" className={`${typo.sectionTitle} text-white`}>
              {WEB_DEV_INTRO.title}
            </h2>
            {WEB_DEV_INTRO.paragraphs.map((paragraph) => (
              <p key={paragraph} className={`mt-5 ${typo.subtitle} text-slate-300`}>
                {paragraph}
              </p>
            ))}
            <ServerLinkButton
              href="#wd-process"
              variant="outline"
              size="lg"
              className="mt-8 border-white/30 bg-transparent text-white hover:bg-white/10"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {WEB_DEV_INTRO.cta}
            </ServerLinkButton>
          </div>
          <div className="relative">
            <ServiceIllustration slug="web-development" />
          </div>
        </div>
      </section>

      <section
        id="wd-process"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="wd-process-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="wd-process-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {WEB_DEV_PROCESS_GRID.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {WEB_DEV_PROCESS_GRID.description}
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WEB_DEV_PROCESS_GRID.items.map((item, i) => {
              const Icon = PROCESS_ICONS[i % PROCESS_ICONS.length];
              return (
                <article
                  key={item}
                  className="flex items-center gap-3 p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800"
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item}
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="wd-transform-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="wd-transform-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {WEB_DEV_TRANSFORMATION.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEB_DEV_TRANSFORMATION.items.map((item, i) => {
              const Icon = TRANSFORMATION_ICONS[i % TRANSFORMATION_ICONS.length];
              return (
                <article
                  key={item.title}
                  className="rounded-2xl bg-slate-950 text-white p-7 border border-slate-800"
                >
                  <div
                    className="w-11 h-11 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-5"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={typo.cardTitle}>{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="wd-types-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="wd-types-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {WEB_DEV_TYPES.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {WEB_DEV_TYPES.description}
            </p>
          </header>
          <VoipProcessSteps steps={WEB_DEV_TYPES.steps} variant="circles" />
        </div>
      </section>

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="wd-cta-heading"
      >
        <Image
          src={CTA_IMAGE}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/85" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 id="wd-cta-heading" className={`${typo.sectionTitle} text-white`}>
            {WEB_DEV_CTA_BAND.title}
          </h2>
          <ServerLinkButton
            href="/contact"
            variant="glow"
            size="lg"
            className="mt-8"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {WEB_DEV_CTA_BAND.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="wd-expertise-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="wd-expertise-heading"
            className={`${typo.sectionTitle} text-white text-center mb-10`}
          >
            {WEB_DEV_EXPERTISE.title}
          </h2>
          <WebDevelopmentExpertise />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="wd-landscape-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="wd-landscape-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
          >
            {WEB_DEV_LANDSCAPE.title}
          </h2>
          {WEB_DEV_LANDSCAPE.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="wd-faq-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="wd-faq-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white text-center mb-12`}
          >
            Frequently Asked Questions
          </h2>
          <WebDevelopmentFaq />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
        aria-labelledby="wd-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="wd-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {WEB_DEV_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {WEB_DEV_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
