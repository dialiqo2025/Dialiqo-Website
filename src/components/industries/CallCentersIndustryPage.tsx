import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Headphones,
  PhoneCall,
  PhoneForwarded,
  Radio,
  Voicemail,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { CallCentersIndustryFaq } from "@/components/industries/CallCentersIndustryFaq";
import {
  CALL_CENTERS_BENEFITS,
  CALL_CENTERS_CONTACT,
  CALL_CENTERS_CTA_BAND,
  CALL_CENTERS_DIFFERENT,
  CALL_CENTERS_FEATURES,
  CALL_CENTERS_HERO,
  CALL_CENTERS_WHO,
  CALL_CENTERS_WHY,
} from "@/lib/callCentersIndustryPageData";
import { typo } from "@/lib/typography";

const FEATURE_ICONS = [
  PhoneForwarded,
  Headphones,
  PhoneCall,
  Voicemail,
  Radio,
];
const BENEFIT_ICONS = [Cloud, Headphones, PhoneCall, Radio, CheckCircle2];

export function CallCentersIndustryPage() {
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
              href="/industries"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Industries
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-white font-semibold"
          >
            Centers
          </li>
        </ol>
      </nav>

      <section
        className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[350px] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center"
        aria-labelledby="cc-hero-heading"
      >
        <Image
          src={CALL_CENTERS_HERO.image}
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
          <h1 id="cc-hero-heading" className={`${typo.heroTitle} text-white`}>
            {CALL_CENTERS_HERO.title}
          </h1>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="cc-why-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
          <div>
            <h2
              id="cc-why-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {CALL_CENTERS_WHY.title}
            </h2>
            {CALL_CENTERS_WHY.paragraphs.map((paragraph) => (
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
              {CALL_CENTERS_WHY.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="cc-different-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="cc-different-heading"
              className={`${typo.sectionTitle} text-white`}
            >
              {CALL_CENTERS_DIFFERENT.title}
            </h2>
            <p className={`mt-5 ${typo.subtitle} text-slate-300`}>
              {CALL_CENTERS_DIFFERENT.intro}
            </p>
            <p className={`mt-5 ${typo.subtitle} text-slate-300`}>
              {CALL_CENTERS_DIFFERENT.lead}
            </p>
            <ul className="mt-8 space-y-4">
              {CALL_CENTERS_DIFFERENT.items.map((item) => (
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
            <ServerLinkButton
              href="/contact"
              variant="outline"
              size="lg"
              className="mt-8 border-white/30 bg-transparent text-white hover:bg-white/10"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {CALL_CENTERS_DIFFERENT.cta}
            </ServerLinkButton>
          </div>
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="cc-features-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="cc-features-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {CALL_CENTERS_FEATURES.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CALL_CENTERS_FEATURES.items.map((item, i) => {
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
        aria-labelledby="cc-benefits-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="cc-benefits-heading"
            className={`${typo.sectionTitle} text-white mb-14`}
          >
            {CALL_CENTERS_BENEFITS.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CALL_CENTERS_BENEFITS.items.map((item, i) => {
              const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
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
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="cc-who-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cc-who-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
          >
            {CALL_CENTERS_WHO.title}
          </h2>
          <ul className="mt-8 space-y-4 text-left">
            {CALL_CENTERS_WHO.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 shrink-0 text-blue-600 dark:text-blue-400 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <ServerLinkButton
            href="/contact"
            variant="glow"
            size="lg"
            className="mt-8"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {CALL_CENTERS_WHO.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="cc-cta-heading"
      >
        <Image
          src={CALL_CENTERS_HERO.image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/85" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 id="cc-cta-heading" className={`${typo.sectionTitle} text-white`}>
            {CALL_CENTERS_CTA_BAND.title}
          </h2>
          <p className="mt-4 text-lg font-semibold text-white">
            {CALL_CENTERS_CTA_BAND.subtitle}
          </p>
          <p className={`mt-4 ${typo.subtitle} text-slate-300`}>
            {CALL_CENTERS_CTA_BAND.paragraph}
          </p>
          <p className="mt-4 text-sm font-semibold text-blue-300">
            {CALL_CENTERS_CTA_BAND.demoLabel}
          </p>
          <ServerLinkButton
            href="/contact"
            variant="glow"
            size="lg"
            className="mt-8"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {CALL_CENTERS_CTA_BAND.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="cc-faq-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="cc-faq-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white text-center mb-12`}
          >
            Frequently Asked Questions
          </h2>
          <CallCentersIndustryFaq />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="cc-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="cc-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {CALL_CENTERS_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {CALL_CENTERS_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
