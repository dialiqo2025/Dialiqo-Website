import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  Cable,
  GitMerge,
  Headphones,
  LayoutGrid,
  LineChart,
  MonitorPlay,
  PhoneCall,
  Radio,
  Route,
  Video,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { VoipProcessSteps } from "@/components/services/VoipProcessSteps";
import { FreeswitchWhyChoose } from "@/components/services/FreeswitchWhyChoose";
import { FreeswitchFaq } from "@/components/services/FreeswitchFaq";
import {
  FREESWITCH_CAPABILITIES,
  FREESWITCH_CONTACT,
  FREESWITCH_CTA_BAND,
  FREESWITCH_HERO,
  FREESWITCH_INTRO,
  FREESWITCH_PROCESS,
  FREESWITCH_SERVICES,
  FREESWITCH_WHY,
} from "@/lib/freeswitchPageData";
import { typo } from "@/lib/typography";

const CAPABILITY_ICONS = [
  Headphones,
  Video,
  Route,
  Radio,
  LayoutGrid,
  Cable,
  MonitorPlay,
  LineChart,
];
const SERVICE_ICONS = [PhoneCall, GitMerge, AudioLines, Route, MonitorPlay, LineChart];

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80";

export function FreeswitchServicePage() {
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
              href="/services/voip-development"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              VoIP
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-white font-semibold"
          >
            FreeSWITCH
          </li>
        </ol>
      </nav>

      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="fs-hero-heading"
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
              id="fs-hero-heading"
              className={`${typo.heroTitle} text-slate-900 dark:text-white`}
            >
              {FREESWITCH_HERO.title}
            </h1>
            <p
              className={`mt-6 ${typo.subtitle} text-slate-600 dark:text-slate-300`}
            >
              {FREESWITCH_HERO.description}
            </p>
            <ServerLinkButton
              href="/contact"
              variant="glow"
              size="lg"
              className="mt-8"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {FREESWITCH_HERO.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="fs-intro-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="fs-intro-heading" className={`${typo.sectionTitle} text-white`}>
              {FREESWITCH_INTRO.title}
            </h2>
            <p className={`mt-5 ${typo.subtitle} text-slate-300`}>
              {FREESWITCH_INTRO.description}
            </p>
            <ServerLinkButton
              href="#fs-capabilities"
              variant="outline"
              size="lg"
              className="mt-8 border-white/30 bg-transparent text-white hover:bg-white/10"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {FREESWITCH_INTRO.cta}
            </ServerLinkButton>
          </div>
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
        </div>
      </section>

      <section
        id="fs-capabilities"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="fs-capabilities-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="fs-capabilities-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {FREESWITCH_CAPABILITIES.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {FREESWITCH_CAPABILITIES.description}
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FREESWITCH_CAPABILITIES.items.map((item, i) => {
              const Icon = CAPABILITY_ICONS[i % CAPABILITY_ICONS.length];
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
        aria-labelledby="fs-services-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="fs-services-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {FREESWITCH_SERVICES.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {FREESWITCH_SERVICES.description}
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FREESWITCH_SERVICES.items.map((item, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
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
        aria-labelledby="fs-process-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="fs-process-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {FREESWITCH_PROCESS.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {FREESWITCH_PROCESS.description}
            </p>
          </header>
          <VoipProcessSteps steps={FREESWITCH_PROCESS.steps} variant="circles" />
        </div>
      </section>

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="fs-cta-heading"
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
          <h2 id="fs-cta-heading" className={`${typo.sectionTitle} text-white`}>
            {FREESWITCH_CTA_BAND.title}
          </h2>
          <ServerLinkButton
            href="/contact"
            variant="glow"
            size="lg"
            className="mt-8"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {FREESWITCH_CTA_BAND.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="fs-why-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="fs-why-heading"
            className={`${typo.sectionTitle} text-white text-center mb-10`}
          >
            {FREESWITCH_WHY.title}
          </h2>
          <FreeswitchWhyChoose />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="fs-faq-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="fs-faq-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white text-center mb-12`}
          >
            Frequently Asked Questions
          </h2>
          <FreeswitchFaq />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="fs-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="fs-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {FREESWITCH_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {FREESWITCH_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
