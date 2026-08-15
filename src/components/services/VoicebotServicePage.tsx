import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Globe,
  Languages,
  MessageSquare,
  Mic,
  PhoneCall,
  Plug,
  Scaling,
  Shield,
  Smile,
  Zap,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { VoicebotFaq } from "@/components/services/VoicebotFaq";
import { VoicebotWhyChoose } from "@/components/services/VoicebotWhyChoose";
import { VoipProcessSteps } from "@/components/services/VoipProcessSteps";
import {
  VOICEBOT_CHOOSE_US,
  VOICEBOT_CONTACT,
  VOICEBOT_DIFFERENT,
  VOICEBOT_HERO,
  VOICEBOT_INTRO,
  VOICEBOT_USE_CASES,
  VOICEBOT_WHY,
} from "@/lib/voicebotPageData";
import { typo } from "@/lib/typography";

const WHY_ICONS = [MessageSquare, PhoneCall, BarChart3, Globe];
const DIFFERENT_ICONS = [
  Mic,
  PhoneCall,
  Plug,
  Scaling,
  Languages,
  Zap,
  Brain,
  Smile,
  Shield,
];

export function VoicebotServicePage() {
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
              href="/services/ai-ml-development-services"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              AI-ML
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-white font-semibold"
          >
            AI Voicebot Connector
          </li>
        </ol>
      </nav>

      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="vb-hero-heading"
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
              <ServiceIllustration slug="voice-ai-solutions" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h1
              id="vb-hero-heading"
              className={`${typo.heroTitle} text-slate-900 dark:text-white`}
            >
              {VOICEBOT_HERO.title}
            </h1>
            <p
              className={`mt-6 ${typo.subtitle} text-slate-600 dark:text-slate-300`}
            >
              {VOICEBOT_HERO.subtitle}
            </p>
            {VOICEBOT_HERO.paragraphs.map((paragraph) => (
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
              {VOICEBOT_HERO.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="vb-intro-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="vb-intro-heading" className={`${typo.sectionTitle} text-white`}>
              {VOICEBOT_INTRO.title}
            </h2>
            {VOICEBOT_INTRO.paragraphs.map((paragraph) => (
              <p key={paragraph} className={`mt-5 ${typo.subtitle} text-slate-300`}>
                {paragraph}
              </p>
            ))}
            <ServerLinkButton
              href="#vb-why"
              variant="outline"
              size="lg"
              className="mt-8 border-white/30 bg-transparent text-white hover:bg-white/10"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {VOICEBOT_INTRO.cta}
            </ServerLinkButton>
          </div>
          <div className="relative">
            <ServiceIllustration slug="voice-ai-solutions" />
          </div>
        </div>
      </section>

      <section
        id="vb-why"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="vb-why-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="vb-why-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOICEBOT_WHY.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {VOICEBOT_WHY.description}
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VOICEBOT_WHY.items.map((item, i) => {
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
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="vb-different-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="vb-different-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOICEBOT_DIFFERENT.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VOICEBOT_DIFFERENT.items.map((item, i) => {
              const Icon = DIFFERENT_ICONS[i % DIFFERENT_ICONS.length];
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
        aria-labelledby="vb-use-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="vb-use-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOICEBOT_USE_CASES.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {VOICEBOT_USE_CASES.description}
            </p>
          </header>
          <VoipProcessSteps
            steps={VOICEBOT_USE_CASES.steps}
            descriptions={VOICEBOT_USE_CASES.descriptions}
            variant="circles"
          />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="vb-choose-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="vb-choose-heading"
            className={`${typo.sectionTitle} text-white text-center mb-10`}
          >
            {VOICEBOT_CHOOSE_US.title}
          </h2>
          <VoicebotWhyChoose />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="vb-faq-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="vb-faq-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white text-center mb-12`}
          >
            Frequently Asked Questions
          </h2>
          <VoicebotFaq />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="vb-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="vb-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOICEBOT_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {VOICEBOT_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
