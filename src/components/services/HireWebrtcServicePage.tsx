import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  CheckCircle2,
  Cloud,
  Code2,
  Gauge,
  Globe,
  Headphones,
  PhoneCall,
  Radio,
  Server,
  Shield,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { HireWebrtcFaq } from "@/components/services/HireWebrtcFaq";
import { HireWebrtcWhyChoose } from "@/components/services/HireWebrtcWhyChoose";
import { VoipProcessSteps } from "@/components/services/VoipProcessSteps";
import {
  HIRE_WEBRTC_CHOOSE_TECH,
  HIRE_WEBRTC_CHOOSE_US,
  HIRE_WEBRTC_CONTACT,
  HIRE_WEBRTC_CTA_BAND,
  HIRE_WEBRTC_FEATURES,
  HIRE_WEBRTC_HERO,
  HIRE_WEBRTC_INDUSTRIES,
  HIRE_WEBRTC_MODELS,
  HIRE_WEBRTC_PROCESS,
  HIRE_WEBRTC_SERVICES,
  HIRE_WEBRTC_TECH,
  HIRE_WEBRTC_WHY,
} from "@/lib/hireWebrtcPageData";
import { typo } from "@/lib/typography";

const WHY_ICONS = [AudioLines, Sparkles, Gauge, Globe, Users];
const SERVICE_ICONS = [
  PhoneCall,
  Headphones,
  Globe,
  Workflow,
  Radio,
  Shield,
  Server,
];
const FEATURE_ICONS = [AudioLines, Headphones, Globe, Shield, Server, Sparkles];
const TECH_ICONS = [Radio, Code2, Workflow, Cloud];
const MODEL_ICONS = [Users, Gauge, Sparkles];

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80";

export function HireWebrtcServicePage() {
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
              href="/services/staff-augmentation"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Hire Developers
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-white font-semibold"
          >
            Hire WebRTC Developers
          </li>
        </ol>
      </nav>

      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="hw-hero-heading"
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
              id="hw-hero-heading"
              className={`${typo.heroTitle} text-slate-900 dark:text-white`}
            >
              {HIRE_WEBRTC_HERO.title}
            </h1>
            <p
              className={`mt-6 ${typo.subtitle} text-slate-600 dark:text-slate-300`}
            >
              {HIRE_WEBRTC_HERO.subtitle}
            </p>
            {HIRE_WEBRTC_HERO.paragraphs.map((paragraph) => (
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
              {HIRE_WEBRTC_HERO.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="hw-why-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="hw-why-heading" className={`${typo.sectionTitle} text-white`}>
              {HIRE_WEBRTC_WHY.title}
            </h2>
            {HIRE_WEBRTC_WHY.paragraphs.map((paragraph) => (
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
              {HIRE_WEBRTC_WHY.cta}
            </ServerLinkButton>
          </div>
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
          {HIRE_WEBRTC_WHY.items.map((item, i) => {
            const Icon = WHY_ICONS[i % WHY_ICONS.length];
            return (
              <article
                key={item.title}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800"
              >
                <div
                  className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="hw-services-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="hw-services-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {HIRE_WEBRTC_SERVICES.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIRE_WEBRTC_SERVICES.items.map((item, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
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
        aria-labelledby="hw-choose-tech-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="hw-choose-tech-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {HIRE_WEBRTC_CHOOSE_TECH.title}
            </h2>
          </header>
          <VoipProcessSteps
            steps={HIRE_WEBRTC_CHOOSE_TECH.steps}
            descriptions={HIRE_WEBRTC_CHOOSE_TECH.descriptions}
            variant="circles"
          />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="hw-industries-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="hw-industries-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {HIRE_WEBRTC_INDUSTRIES.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {HIRE_WEBRTC_INDUSTRIES.description}
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HIRE_WEBRTC_INDUSTRIES.items.map((item) => (
              <article
                key={item}
                className="flex items-center gap-3 p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800"
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
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="hw-tech-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="hw-tech-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {HIRE_WEBRTC_TECH.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIRE_WEBRTC_TECH.items.map((item, i) => {
              const Icon = TECH_ICONS[i % TECH_ICONS.length];
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
        aria-labelledby="hw-features-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="hw-features-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {HIRE_WEBRTC_FEATURES.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIRE_WEBRTC_FEATURES.items.map((item, i) => {
              const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
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
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="hw-choose-us-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="hw-choose-us-heading"
            className={`${typo.sectionTitle} text-white text-center mb-10`}
          >
            {HIRE_WEBRTC_CHOOSE_US.title}
          </h2>
          <HireWebrtcWhyChoose />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="hw-models-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="hw-models-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {HIRE_WEBRTC_MODELS.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIRE_WEBRTC_MODELS.items.map((item, i) => {
              const Icon = MODEL_ICONS[i % MODEL_ICONS.length];
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
        aria-labelledby="hw-faq-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="hw-faq-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white text-center mb-12`}
          >
            Frequently Asked Questions
          </h2>
          <HireWebrtcFaq />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="hw-process-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="hw-process-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {HIRE_WEBRTC_PROCESS.title}
            </h2>
          </header>
          <VoipProcessSteps
            steps={HIRE_WEBRTC_PROCESS.steps}
            descriptions={HIRE_WEBRTC_PROCESS.descriptions}
            variant="circles"
          />
        </div>
      </section>

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="hw-cta-heading"
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
          <h2 id="hw-cta-heading" className={`${typo.sectionTitle} text-white`}>
            {HIRE_WEBRTC_CTA_BAND.title}
          </h2>
          {HIRE_WEBRTC_CTA_BAND.paragraphs.map((paragraph) => (
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
            {HIRE_WEBRTC_CTA_BAND.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
        aria-labelledby="hw-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="hw-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {HIRE_WEBRTC_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {HIRE_WEBRTC_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
