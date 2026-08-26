import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  CheckCircle2,
  Cloud,
  Gauge,
  Globe,
  Headphones,
  PhoneCall,
  Radio,
  Server,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { VoipConsultingFaq } from "@/components/services/VoipConsultingFaq";
import { VoipProcessSteps } from "@/components/services/VoipProcessSteps";
import {
  VOIP_CONSULTING_BENEFITS,
  VOIP_CONSULTING_CONTACT,
  VOIP_CONSULTING_CTA_BAND,
  VOIP_CONSULTING_HERO,
  VOIP_CONSULTING_INDUSTRIES,
  VOIP_CONSULTING_NEEDS,
  VOIP_CONSULTING_OFFERINGS,
  VOIP_CONSULTING_PROCESS,
  VOIP_CONSULTING_TECH,
  VOIP_CONSULTING_WHY,
} from "@/lib/voipConsultingPageData";
import { typo } from "@/lib/typography";

const OFFERING_ICONS = [
  PhoneCall,
  Server,
  Radio,
  Cloud,
  Shield,
  Workflow,
  Sparkles,
  Gauge,
];
const BENEFIT_ICONS = [AudioLines, Gauge, Shield, Globe, Headphones];
const TECH_ICONS = [Radio, Server, Cloud];

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80";

export function VoipConsultingServicePage() {
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
          <li
            aria-current="page"
            className="text-slate-900 dark:text-white font-semibold"
          >
            VoIP Consulting
          </li>
        </ol>
      </nav>

      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="vc-hero-heading"
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
              id="vc-hero-heading"
              className={`${typo.heroTitle} text-slate-900 dark:text-white`}
            >
              {VOIP_CONSULTING_HERO.title}
            </h1>
            <p
              className={`mt-6 ${typo.subtitle} text-slate-600 dark:text-slate-300`}
            >
              {VOIP_CONSULTING_HERO.subtitle}
            </p>
            {VOIP_CONSULTING_HERO.paragraphs.map((paragraph) => (
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
              {VOIP_CONSULTING_HERO.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="vc-needs-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="vc-needs-heading" className={`${typo.sectionTitle} text-white`}>
              {VOIP_CONSULTING_NEEDS.title}
            </h2>
            <p className={`mt-5 ${typo.subtitle} text-slate-300`}>
              {VOIP_CONSULTING_NEEDS.description}
            </p>
            <ul className="mt-8 space-y-4 list-none p-0 m-0">
              {VOIP_CONSULTING_NEEDS.items.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className={`${typo.subtitle} text-slate-300`}>
                    <span className="font-semibold text-white">{item.title}:</span>{" "}
                    {item.desc}
                  </p>
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
              {VOIP_CONSULTING_NEEDS.cta}
            </ServerLinkButton>
          </div>
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="vc-offerings-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="vc-offerings-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOIP_CONSULTING_OFFERINGS.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {VOIP_CONSULTING_OFFERINGS.description}
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VOIP_CONSULTING_OFFERINGS.items.map((item, i) => {
              const Icon = OFFERING_ICONS[i % OFFERING_ICONS.length];
              return (
                <article
                  key={item.title}
                  className="rounded-2xl bg-slate-950 text-white p-7 border border-slate-800"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-mono text-blue-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className={typo.cardTitle}>{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                  <ul className="mt-3 space-y-1.5 list-none p-0 m-0">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm text-slate-300 leading-relaxed"
                      >
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="vc-benefits-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="vc-benefits-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOIP_CONSULTING_BENEFITS.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {VOIP_CONSULTING_BENEFITS.description}
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {VOIP_CONSULTING_BENEFITS.items.map((item, i) => {
              const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
              return (
                <article
                  key={item.title}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
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
        aria-labelledby="vc-tech-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="vc-tech-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOIP_CONSULTING_TECH.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {VOIP_CONSULTING_TECH.description}
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VOIP_CONSULTING_TECH.items.map((item, i) => {
              const Icon = TECH_ICONS[i % TECH_ICONS.length];
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
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="vc-industries-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="vc-industries-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOIP_CONSULTING_INDUSTRIES.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {VOIP_CONSULTING_INDUSTRIES.description}
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VOIP_CONSULTING_INDUSTRIES.items.map((item) => (
              <article
                key={item}
                className="flex items-center gap-3 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <CheckCircle2
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="vc-why-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="vc-why-heading" className={`${typo.sectionTitle} text-white`}>
              {VOIP_CONSULTING_WHY.title}
            </h2>
            <p className={`mt-5 ${typo.subtitle} text-slate-300`}>
              {VOIP_CONSULTING_WHY.description}
            </p>
            <ul className="mt-8 space-y-4 list-none p-0 m-0">
              {VOIP_CONSULTING_WHY.items.map((item) => (
                <li key={item.title}>
                  <p className={`${typo.subtitle} text-slate-300`}>
                    <span className="font-semibold text-white">{item.title}:</span>{" "}
                    {item.desc}
                  </p>
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
              {VOIP_CONSULTING_WHY.cta}
            </ServerLinkButton>
          </div>
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="vc-process-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="vc-process-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOIP_CONSULTING_PROCESS.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {VOIP_CONSULTING_PROCESS.description}
            </p>
          </header>
          <VoipProcessSteps
            steps={VOIP_CONSULTING_PROCESS.steps}
            descriptions={VOIP_CONSULTING_PROCESS.descriptions}
            variant="circles"
          />
        </div>
      </section>

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="vc-cta-heading"
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
          <h2 id="vc-cta-heading" className={`${typo.sectionTitle} text-white`}>
            {VOIP_CONSULTING_CTA_BAND.title}
          </h2>
          {VOIP_CONSULTING_CTA_BAND.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className={`mt-4 ${typo.subtitle} text-slate-200`}
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
            {VOIP_CONSULTING_CTA_BAND.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="vc-faq-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="vc-faq-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white text-center mb-12`}
          >
            Frequently Asked Questions (FAQs)
          </h2>
          <VoipConsultingFaq />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="vc-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="vc-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOIP_CONSULTING_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {VOIP_CONSULTING_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
