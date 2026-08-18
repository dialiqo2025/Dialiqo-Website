import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Headphones,
  PhoneCall,
  Radio,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { TelecomIndustryFaq } from "@/components/industries/TelecomIndustryFaq";
import {
  TELECOM_CHALLENGES,
  TELECOM_CONTACT,
  TELECOM_CTA_BAND,
  TELECOM_FEATURES,
  TELECOM_HERO,
  TELECOM_HOW,
  TELECOM_PRODUCT,
  TELECOM_WHO,
} from "@/lib/telecomIndustryPageData";
import { typo } from "@/lib/typography";

const FEATURE_ICONS = [Headphones, PhoneCall, Radio, Cloud, BarChart3];

export function TelecomIndustryPage() {
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
            <span>Industries</span>
          </li>
          <li aria-hidden="true">/</li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-white font-semibold"
          >
            Telecom
          </li>
        </ol>
      </nav>

      <section
        className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[350px] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center"
        aria-labelledby="tc-hero-heading"
      >
        <Image
          src={TELECOM_HERO.image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-teal-950/85 via-slate-950/75 to-blue-950/85"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 id="tc-hero-heading" className={`${typo.heroTitle} text-white`}>
            {TELECOM_HERO.title}
          </h1>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="tc-how-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
          <div>
            <h2
              id="tc-how-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {TELECOM_HOW.title}
            </h2>
            {TELECOM_HOW.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
              >
                {paragraph}
              </p>
            ))}
            <ServerLinkButton
              href="/contact"
              variant="glow"
              size="lg"
              className="mt-8"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {TELECOM_HOW.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="tc-product-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              id="tc-product-heading"
              className={`${typo.sectionTitle} text-white`}
            >
              {TELECOM_PRODUCT.title}
            </h2>
            {TELECOM_PRODUCT.items.map((item) => (
              <article key={item.title} className="mt-8">
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                {item.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 text-sm text-slate-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
            <ServerLinkButton
              href="/contact"
              variant="outline"
              size="lg"
              className="mt-8 border-white/30 bg-transparent text-white hover:bg-white/10"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {TELECOM_PRODUCT.cta}
            </ServerLinkButton>
          </div>
          <div className="relative lg:sticky lg:top-32">
            <ServiceIllustration slug="voip-development" />
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="tc-challenges-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="tc-challenges-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {TELECOM_CHALLENGES.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TELECOM_CHALLENGES.items.map((item) => (
              <article
                key={item.title}
                className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800"
              >
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="tc-features-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="tc-features-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {TELECOM_FEATURES.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TELECOM_FEATURES.items.map((item, i) => {
              const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
              return (
                <article
                  key={item.title}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="tc-who-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="tc-who-heading" className={`${typo.sectionTitle} text-white`}>
            {TELECOM_WHO.title}
          </h2>
          <ul className="mt-8 space-y-4 text-left">
            {TELECOM_WHO.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 shrink-0 text-blue-400 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-slate-300 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="tc-faq-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="tc-faq-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white text-center mb-12`}
          >
            Frequently Asked Questions
          </h2>
          <TelecomIndustryFaq />
        </div>
      </section>

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="tc-cta-heading"
      >
        <Image
          src={TELECOM_HERO.image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/85" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 id="tc-cta-heading" className={`${typo.sectionTitle} text-white`}>
            {TELECOM_CTA_BAND.title}
          </h2>
          <p className="mt-4 text-lg font-semibold text-white">
            {TELECOM_CTA_BAND.subtitle}
          </p>
          <p className={`mt-4 ${typo.subtitle} text-slate-300`}>
            {TELECOM_CTA_BAND.paragraph}
          </p>
          <p className="mt-4 text-sm font-semibold text-blue-300">
            {TELECOM_CTA_BAND.demoLabel}
          </p>
          <ServerLinkButton
            href="/contact"
            variant="glow"
            size="lg"
            className="mt-8"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {TELECOM_CTA_BAND.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="tc-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="tc-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {TELECOM_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {TELECOM_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
