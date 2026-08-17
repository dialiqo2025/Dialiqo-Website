import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  MapPin,
  MessageSquare,
  PhoneCall,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { RecruitmentIndustryFaq } from "@/components/industries/RecruitmentIndustryFaq";
import {
  RECRUITMENT_CHALLENGES,
  RECRUITMENT_CONTACT,
  RECRUITMENT_CTA_BAND,
  RECRUITMENT_FEATURES,
  RECRUITMENT_HERO,
  RECRUITMENT_HR,
  RECRUITMENT_STAFFING,
  RECRUITMENT_WHO,
  RECRUITMENT_WHY,
} from "@/lib/recruitmentIndustryPageData";
import { typo } from "@/lib/typography";

const FEATURE_ICONS = [
  PhoneCall,
  Users,
  MessageSquare,
  Smartphone,
  Shield,
  Headphones,
  MapPin,
];

export function RecruitmentIndustryPage() {
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
            Recruitment
          </li>
        </ol>
      </nav>

      <section
        className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[350px] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center"
        aria-labelledby="rec-hero-heading"
      >
        <Image
          src={RECRUITMENT_HERO.image}
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
          <h1 id="rec-hero-heading" className={`${typo.heroTitle} text-white`}>
            {RECRUITMENT_HERO.title}
          </h1>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="rec-why-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
          <div>
            <h2
              id="rec-why-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {RECRUITMENT_WHY.title}
            </h2>
            {RECRUITMENT_WHY.paragraphs.map((paragraph) => (
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
              {RECRUITMENT_WHY.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="rec-staffing-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="rec-staffing-heading"
              className={`${typo.sectionTitle} text-white`}
            >
              {RECRUITMENT_STAFFING.title}
            </h2>
            <p className={`mt-5 ${typo.subtitle} text-slate-300`}>
              {RECRUITMENT_STAFFING.intro}
            </p>
            <ul className="mt-8 space-y-4">
              {RECRUITMENT_STAFFING.items.map((item) => (
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
              {RECRUITMENT_STAFFING.cta}
            </ServerLinkButton>
          </div>
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="rec-challenges-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="rec-challenges-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {RECRUITMENT_CHALLENGES.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RECRUITMENT_CHALLENGES.items.map((item) => (
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
        aria-labelledby="rec-features-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="rec-features-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {RECRUITMENT_FEATURES.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECRUITMENT_FEATURES.items.map((item, i) => {
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
        aria-labelledby="rec-hr-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="rec-hr-heading"
              className={`${typo.sectionTitle} text-white`}
            >
              {RECRUITMENT_HR.title}
            </h2>
            <p className={`mt-5 ${typo.subtitle} text-slate-300`}>
              {RECRUITMENT_HR.intro}
            </p>
            <ul className="mt-8 space-y-4">
              {RECRUITMENT_HR.items.map((item) => (
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
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="rec-who-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="rec-who-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
          >
            {RECRUITMENT_WHO.title}
          </h2>
          <ul className="mt-8 space-y-4 text-left">
            {RECRUITMENT_WHO.items.map((item) => (
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
            {RECRUITMENT_WHO.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="rec-faq-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="rec-faq-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white text-center mb-12`}
          >
            Frequently Asked Questions
          </h2>
          <RecruitmentIndustryFaq />
        </div>
      </section>

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="rec-cta-heading"
      >
        <Image
          src={RECRUITMENT_HERO.image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/85" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 id="rec-cta-heading" className={`${typo.sectionTitle} text-white`}>
            {RECRUITMENT_CTA_BAND.title}
          </h2>
          <p className="mt-4 text-lg font-semibold text-white">
            {RECRUITMENT_CTA_BAND.subtitle}
          </p>
          <p className={`mt-4 ${typo.subtitle} text-slate-300`}>
            {RECRUITMENT_CTA_BAND.paragraph}
          </p>
          <p className="mt-4 text-sm font-semibold text-blue-300">
            {RECRUITMENT_CTA_BAND.demoLabel}
          </p>
          <ServerLinkButton
            href="/contact"
            variant="glow"
            size="lg"
            className="mt-8"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {RECRUITMENT_CTA_BAND.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
        aria-labelledby="rec-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="rec-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {RECRUITMENT_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {RECRUITMENT_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
