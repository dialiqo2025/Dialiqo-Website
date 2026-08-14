import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cable,
  Globe,
  LayoutGrid,
  Lock,
  RefreshCw,
  Shield,
  Workflow,
  Zap,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { VoipProcessSteps } from "@/components/services/VoipProcessSteps";
import { ApiTestingSolutions } from "@/components/services/ApiTestingSolutions";
import { ApiTestingFaq } from "@/components/services/ApiTestingFaq";
import {
  API_TESTING_CONTACT,
  API_TESTING_CTA_BAND,
  API_TESTING_FEATURES,
  API_TESTING_HERO,
  API_TESTING_INTERACTIONS,
  API_TESTING_INTRO,
  API_TESTING_PROCESS,
  API_TESTING_SOLUTIONS,
  API_TESTING_USP,
} from "@/lib/apiTestingPageData";
import { typo } from "@/lib/typography";

const FEATURE_ICONS = [
  Cable,
  Workflow,
  Shield,
  LayoutGrid,
  RefreshCw,
  Zap,
  Globe,
  Lock,
];
const INTERACTION_ICONS = [Cable, LayoutGrid, Lock, RefreshCw, Shield, Workflow];

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80";

export function ApiTestingServicePage() {
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
            <Link
              href="/services"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Services
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/services/qa-testing-services"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              QA Services
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-white font-semibold"
          >
            API Testing
          </li>
        </ol>
      </nav>

      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="api-hero-heading"
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
              <ServiceIllustration slug="qa-testing-services" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h1
              id="api-hero-heading"
              className={`${typo.heroTitle} text-slate-900 dark:text-white`}
            >
              {API_TESTING_HERO.title}
            </h1>
            <p
              className={`mt-6 ${typo.subtitle} text-slate-600 dark:text-slate-300`}
            >
              {API_TESTING_HERO.description}
            </p>
            <ServerLinkButton
              href="/contact"
              variant="glow"
              size="lg"
              className="mt-8"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {API_TESTING_HERO.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="api-intro-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="api-intro-heading" className={`${typo.sectionTitle} text-white`}>
              {API_TESTING_INTRO.title}
            </h2>
            {API_TESTING_INTRO.paragraphs.map((paragraph) => (
              <p key={paragraph} className={`mt-5 ${typo.subtitle} text-slate-300`}>
                {paragraph}
              </p>
            ))}
            <ServerLinkButton
              href="#api-features"
              variant="outline"
              size="lg"
              className="mt-8 border-white/30 bg-transparent text-white hover:bg-white/10"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {API_TESTING_INTRO.cta}
            </ServerLinkButton>
          </div>
          <div className="relative">
            <ServiceIllustration slug="qa-testing-services" />
          </div>
        </div>
      </section>

      <section
        id="api-features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="api-features-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="api-features-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {API_TESTING_FEATURES.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {API_TESTING_FEATURES.description}
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {API_TESTING_FEATURES.items.map((item, i) => {
              const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
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
        aria-labelledby="api-interactions-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="api-interactions-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {API_TESTING_INTERACTIONS.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {API_TESTING_INTERACTIONS.items.map((item, i) => {
              const Icon = INTERACTION_ICONS[i % INTERACTION_ICONS.length];
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
        aria-labelledby="api-usp-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="api-usp-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {API_TESTING_USP.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {API_TESTING_USP.description}
            </p>
          </header>
          <VoipProcessSteps steps={API_TESTING_USP.steps} variant="circles" />
        </div>
      </section>

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="api-cta-heading"
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
          <h2 id="api-cta-heading" className={`${typo.sectionTitle} text-white`}>
            {API_TESTING_CTA_BAND.title}
          </h2>
          <ServerLinkButton
            href="/contact"
            variant="glow"
            size="lg"
            className="mt-8"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {API_TESTING_CTA_BAND.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="api-solutions-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="api-solutions-heading"
            className={`${typo.sectionTitle} text-white text-center mb-10`}
          >
            {API_TESTING_SOLUTIONS.title}
          </h2>
          <ApiTestingSolutions />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="api-process-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="api-process-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
          >
            {API_TESTING_PROCESS.title}
          </h2>
          {API_TESTING_PROCESS.paragraphs.map((paragraph) => (
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
        aria-labelledby="api-faq-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="api-faq-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white text-center mb-12`}
          >
            Frequently Asked Questions
          </h2>
          <ApiTestingFaq />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
        aria-labelledby="api-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="api-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {API_TESTING_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {API_TESTING_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
