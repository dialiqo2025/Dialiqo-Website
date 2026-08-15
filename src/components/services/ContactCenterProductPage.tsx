import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  Headphones,
  Languages,
  PhoneCall,
  Radio,
  Shield,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { ContactCenterFaq } from "@/components/services/ContactCenterFaq";
import { ContactCenterHostedTabs } from "@/components/services/ContactCenterHostedTabs";
import {
  CONTACT_CENTER_CONTACT,
  CONTACT_CENTER_CTA_BAND,
  CONTACT_CENTER_FEATURES,
  CONTACT_CENTER_HERO,
  CONTACT_CENTER_HOSTED,
  CONTACT_CENTER_MID_CTA,
  CONTACT_CENTER_OMNICHANNEL,
  CONTACT_CENTER_WHAT,
  CONTACT_CENTER_WHY,
} from "@/lib/contactCenterPageData";
import { typo } from "@/lib/typography";

const WHY_ICONS = [
  Globe,
  Sparkles,
  Users,
  Headphones,
  PhoneCall,
  Workflow,
  BarChart3,
  Shield,
];
const FEATURE_ICONS = [
  Globe,
  Radio,
  PhoneCall,
  BarChart3,
  Workflow,
  Sparkles,
  Languages,
  CheckCircle2,
];

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80";

export function ContactCenterProductPage() {
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
              href="/solutions"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Our Products
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-white font-semibold"
          >
            Contact Center
          </li>
        </ol>
      </nav>

      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="cc-hero-heading"
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
              <ServiceIllustration slug="voip-development" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h1
              id="cc-hero-heading"
              className={`${typo.heroTitle} text-slate-900 dark:text-white`}
            >
              {CONTACT_CENTER_HERO.title}
            </h1>
            {CONTACT_CENTER_HERO.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-300`}
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
              {CONTACT_CENTER_HERO.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="cc-what-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="cc-what-heading" className={`${typo.sectionTitle} text-white`}>
              {CONTACT_CENTER_WHAT.title}
            </h2>
            {CONTACT_CENTER_WHAT.paragraphs.map((paragraph) => (
              <p key={paragraph} className={`mt-5 ${typo.subtitle} text-slate-300`}>
                {paragraph}
              </p>
            ))}
            <ServerLinkButton
              href="/contact"
              variant="outline"
              size="lg"
              className="mt-8 border-white/30 bg-transparent text-white hover:bg-white/10"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {CONTACT_CENTER_WHAT.cta}
            </ServerLinkButton>
          </div>
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="cc-why-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="cc-why-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {CONTACT_CENTER_WHY.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {CONTACT_CENTER_WHY.description}
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_CENTER_WHY.items.map((item, i) => {
              const Icon = WHY_ICONS[i % WHY_ICONS.length];
              return (
                <article
                  key={item.title}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800"
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
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="cc-mid-cta-heading"
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
          <h2 id="cc-mid-cta-heading" className={`${typo.sectionTitle} text-white`}>
            {CONTACT_CENTER_MID_CTA.title}
          </h2>
          <ServerLinkButton
            href="/contact"
            variant="glow"
            size="lg"
            className="mt-8"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {CONTACT_CENTER_MID_CTA.cta}
          </ServerLinkButton>
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
              {CONTACT_CENTER_FEATURES.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {CONTACT_CENTER_FEATURES.description}
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_CENTER_FEATURES.items.map((item, i) => {
              const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
              return (
                <article
                  key={item}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-slate-900 dark:text-white">
                    {item}
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="cc-hosted-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="cc-hosted-heading"
            className={`${typo.sectionTitle} text-white text-center mb-10`}
          >
            {CONTACT_CENTER_HOSTED.title}
          </h2>
          <ContactCenterHostedTabs />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="cc-omni-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cc-omni-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
          >
            {CONTACT_CENTER_OMNICHANNEL.title}
          </h2>
          {CONTACT_CENTER_OMNICHANNEL.paragraphs.map((paragraph) => (
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
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="cc-cta-heading"
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
          <h2 id="cc-cta-heading" className={`${typo.sectionTitle} text-white`}>
            {CONTACT_CENTER_CTA_BAND.title}
          </h2>
          <ServerLinkButton
            href="/contact"
            variant="glow"
            size="lg"
            className="mt-8"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {CONTACT_CENTER_CTA_BAND.cta}
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
          <ContactCenterFaq />
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
              {CONTACT_CENTER_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {CONTACT_CENTER_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
