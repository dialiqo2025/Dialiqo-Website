import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Headphones,
  Languages,
  MessageSquare,
  PhoneCall,
  Shield,
  Users,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { TravelIndustryFaq } from "@/components/industries/TravelIndustryFaq";
import {
  TRAVEL_ADVISORS,
  TRAVEL_CHALLENGES,
  TRAVEL_CONTACT,
  TRAVEL_CTA_BAND,
  TRAVEL_FEATURES,
  TRAVEL_HERO,
  TRAVEL_OTA,
  TRAVEL_WHO,
  TRAVEL_WHY,
} from "@/lib/travelIndustryPageData";
import { typo } from "@/lib/typography";

const FEATURE_ICONS = [
  Globe,
  Users,
  Shield,
  Headphones,
  PhoneCall,
  MessageSquare,
  Languages,
];

export function TravelIndustryPage() {
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
            Travel Agencies
          </li>
        </ol>
      </nav>

      <section
        className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[350px] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center"
        aria-labelledby="trv-hero-heading"
      >
        <Image
          src={TRAVEL_HERO.image}
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
          <h1 id="trv-hero-heading" className={`${typo.heroTitle} text-white`}>
            {TRAVEL_HERO.title}
          </h1>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="trv-why-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
          <div>
            <h2
              id="trv-why-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {TRAVEL_WHY.title}
            </h2>
            {TRAVEL_WHY.paragraphs.map((paragraph) => (
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
              {TRAVEL_WHY.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="trv-advisors-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="trv-advisors-heading"
              className={`${typo.sectionTitle} text-white`}
            >
              {TRAVEL_ADVISORS.title}
            </h2>
            <p className={`mt-5 ${typo.subtitle} text-slate-300`}>
              {TRAVEL_ADVISORS.intro}
            </p>
            <ul className="mt-8 space-y-4">
              {TRAVEL_ADVISORS.items.map((item) => (
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
              {TRAVEL_ADVISORS.cta}
            </ServerLinkButton>
          </div>
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="trv-challenges-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="trv-challenges-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {TRAVEL_CHALLENGES.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRAVEL_CHALLENGES.items.map((item) => (
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
        aria-labelledby="trv-features-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="trv-features-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {TRAVEL_FEATURES.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRAVEL_FEATURES.items.map((item, i) => {
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
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="trv-who-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="trv-who-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
          >
            {TRAVEL_WHO.title}
          </h2>
          <ul className="mt-8 space-y-4 text-left">
            {TRAVEL_WHO.items.map((item) => (
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
            {TRAVEL_WHO.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="trv-ota-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="trv-ota-heading"
              className={`${typo.sectionTitle} text-white`}
            >
              {TRAVEL_OTA.title}
            </h2>
            <p className={`mt-5 ${typo.subtitle} text-slate-300`}>
              {TRAVEL_OTA.intro}
            </p>
            <p className={`mt-5 font-semibold text-white`}>
              {TRAVEL_OTA.subtitle}
            </p>
            <ul className="mt-8 space-y-4">
              {TRAVEL_OTA.items.map((item) => (
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
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="trv-faq-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="trv-faq-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white text-center mb-12`}
          >
            Frequently Asked Questions
          </h2>
          <TravelIndustryFaq />
        </div>
      </section>

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="trv-cta-heading"
      >
        <Image
          src={TRAVEL_HERO.image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/85" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 id="trv-cta-heading" className={`${typo.sectionTitle} text-white`}>
            {TRAVEL_CTA_BAND.title}
          </h2>
          <p className="mt-4 text-lg font-semibold text-white">
            {TRAVEL_CTA_BAND.subtitle}
          </p>
          <p className={`mt-4 ${typo.subtitle} text-slate-300`}>
            {TRAVEL_CTA_BAND.paragraph}
          </p>
          <p className="mt-4 text-sm font-semibold text-blue-300">
            {TRAVEL_CTA_BAND.demoLabel}
          </p>
          <ServerLinkButton
            href="/contact"
            variant="glow"
            size="lg"
            className="mt-8"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {TRAVEL_CTA_BAND.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
        aria-labelledby="trv-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="trv-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {TRAVEL_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {TRAVEL_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
