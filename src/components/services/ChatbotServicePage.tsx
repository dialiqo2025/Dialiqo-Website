import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Cloud,
  Languages,
  LayoutDashboard,
  MessageSquare,
  Mic,
  Plug,
  RefreshCw,
  Share2,
  Shield,
  Sparkles,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { ChatbotFaq } from "@/components/services/ChatbotFaq";
import { ChatbotPillars } from "@/components/services/ChatbotPillars";
import { VoipProcessSteps } from "@/components/services/VoipProcessSteps";
import {
  CHATBOT_AUTOMATED,
  CHATBOT_BEST,
  CHATBOT_CONTACT,
  CHATBOT_CTA_BAND,
  CHATBOT_FEATURES,
  CHATBOT_HERO,
  CHATBOT_INTRO,
  CHATBOT_PILLARS,
  CHATBOT_WHY_HIRE,
} from "@/lib/chatbotPageData";
import { typo } from "@/lib/typography";

const FEATURE_ICONS = [
  MessageSquare,
  Brain,
  Share2,
  LayoutDashboard,
  Shield,
  Sparkles,
  Cloud,
  RefreshCw,
];
const WHY_HIRE_ICONS = [
  MessageSquare,
  Brain,
  Mic,
  Share2,
  Plug,
  Languages,
];

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80";

export function ChatbotServicePage() {
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
            Chatbot
          </li>
        </ol>
      </nav>

      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="cb-hero-heading"
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
              <ServiceIllustration slug="ai-development" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h1
              id="cb-hero-heading"
              className={`${typo.heroTitle} text-slate-900 dark:text-white`}
            >
              {CHATBOT_HERO.title}
            </h1>
            <p
              className={`mt-6 ${typo.subtitle} text-slate-600 dark:text-slate-300`}
            >
              {CHATBOT_HERO.description}
            </p>
            <ServerLinkButton
              href="/contact"
              variant="glow"
              size="lg"
              className="mt-8"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {CHATBOT_HERO.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="cb-intro-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="cb-intro-heading" className={`${typo.sectionTitle} text-white`}>
              {CHATBOT_INTRO.title}
            </h2>
            {CHATBOT_INTRO.paragraphs.map((paragraph) => (
              <p key={paragraph} className={`mt-5 ${typo.subtitle} text-slate-300`}>
                {paragraph}
              </p>
            ))}
            <ServerLinkButton
              href="#cb-features"
              variant="outline"
              size="lg"
              className="mt-8 border-white/30 bg-transparent text-white hover:bg-white/10"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {CHATBOT_INTRO.cta}
            </ServerLinkButton>
          </div>
          <div className="relative">
            <ServiceIllustration slug="ai-development" />
          </div>
        </div>
      </section>

      <section
        id="cb-features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="cb-features-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="cb-features-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {CHATBOT_FEATURES.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {CHATBOT_FEATURES.description}
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHATBOT_FEATURES.items.map((item, i) => {
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
        aria-labelledby="cb-why-hire-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="cb-why-hire-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {CHATBOT_WHY_HIRE.title}
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHATBOT_WHY_HIRE.items.map((item, i) => {
              const Icon = WHY_HIRE_ICONS[i % WHY_HIRE_ICONS.length];
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
        aria-labelledby="cb-best-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="cb-best-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {CHATBOT_BEST.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {CHATBOT_BEST.description}
            </p>
          </header>
          <VoipProcessSteps steps={CHATBOT_BEST.steps} variant="circles" />
        </div>
      </section>

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="cb-cta-heading"
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
          <h2 id="cb-cta-heading" className={`${typo.sectionTitle} text-white`}>
            {CHATBOT_CTA_BAND.title}
          </h2>
          <ServerLinkButton
            href="/contact"
            variant="glow"
            size="lg"
            className="mt-8"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {CHATBOT_CTA_BAND.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="cb-pillars-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="cb-pillars-heading"
            className={`${typo.sectionTitle} text-white text-center mb-10`}
          >
            {CHATBOT_PILLARS.title}
          </h2>
          <ChatbotPillars />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="cb-automated-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="cb-automated-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
          >
            {CHATBOT_AUTOMATED.title}
          </h2>
          <p
            className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
          >
            {CHATBOT_AUTOMATED.description}
          </p>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="cb-faq-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="cb-faq-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white text-center mb-12`}
          >
            Frequently Asked Questions
          </h2>
          <ChatbotFaq />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
        aria-labelledby="cb-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="cb-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {CHATBOT_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {CHATBOT_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
