import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Expand,
  HeartHandshake,
  Lightbulb,
  RefreshCw,
  ScanFace,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Smile,
  Workflow,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { VoipProcessSteps } from "@/components/services/VoipProcessSteps";
import {
  AIML_CONTACT,
  AIML_CTA_BAND,
  AIML_EXPERTISE,
  AIML_HERO,
  AIML_OFFERINGS,
  AIML_PROCESS,
  AIML_WHY,
} from "@/lib/aiMlPageData";
import { typo } from "@/lib/typography";

const WHY_ICONS = [SlidersHorizontal, Expand, Workflow, Search];
const OFFERING_ICONS = [ScanFace, Bot, Smile];
const EXPERTISE_ICONS = [Lightbulb, RefreshCw, ShieldCheck, HeartHandshake];

const WHY_IMAGE =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80";
const CTA_IMAGE =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80";

export function AiMlServicePage() {
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
          <li
            aria-current="page"
            className="text-slate-900 dark:text-white font-semibold truncate max-w-[220px]"
          >
            AI-ML
          </li>
        </ol>
      </nav>

      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="aiml-hero-heading"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -inset-4 bg-blue-500/10 rounded-4xl blur-2xl"
              aria-hidden="true"
            />
            <div className="relative">
              <ServiceIllustration slug="ai-ml-development-services" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h1
              id="aiml-hero-heading"
              className={`${typo.heroTitle} text-slate-900 dark:text-white`}
            >
              {AIML_HERO.title}
            </h1>
            <div
              className={`mt-6 space-y-4 ${typo.subtitle} text-slate-600 dark:text-slate-300`}
            >
              {AIML_HERO.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <ServerLinkButton
              href="/contact"
              variant="glow"
              size="lg"
              className="mt-8"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {AIML_HERO.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="aiml-why-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <p
                className={`${typo.eyebrow} text-blue-600 dark:text-blue-400 mb-3`}
              >
                {AIML_WHY.eyebrow}
              </p>
              <h2
                id="aiml-why-heading"
                className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
              >
                {AIML_WHY.title}
              </h2>
              <p
                className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
              >
                {AIML_WHY.description}
              </p>
            </div>
            <figure className="relative m-0">
              <Image
                src={WHY_IMAGE}
                alt="AI and machine learning development"
                width={1000}
                height={700}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg w-full object-cover aspect-video"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {AIML_WHY.items.map((item, i) => {
              const Icon = WHY_ICONS[i % WHY_ICONS.length];
              return (
                <article
                  key={item.title}
                  className="flex gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800"
                >
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`${typo.cardTitle} text-slate-900 dark:text-white`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="aiml-offerings-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <p
              className={`${typo.eyebrow} text-blue-600 dark:text-blue-400 mb-3`}
            >
              {AIML_OFFERINGS.eyebrow}
            </p>
            <h2
              id="aiml-offerings-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {AIML_OFFERINGS.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {AIML_OFFERINGS.description}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AIML_OFFERINGS.items.map((item, i) => {
              const Icon = OFFERING_ICONS[i % OFFERING_ICONS.length];
              return (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 shadow-sm"
                >
                  <div
                    className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3
                    className={`${typo.cardTitle} text-slate-900 dark:text-white`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
        aria-labelledby="aiml-cta-heading"
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
          <p className={`${typo.eyebrow} text-blue-300 mb-4`}>
            {AIML_CTA_BAND.eyebrow}
          </p>
          <h2 id="aiml-cta-heading" className={`${typo.sectionTitle} text-white`}>
            {AIML_CTA_BAND.title}
          </h2>
          <ServerLinkButton
            href="/contact"
            variant="outline"
            size="lg"
            className="mt-8 border-white/30 bg-transparent text-white hover:bg-white/10"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {AIML_CTA_BAND.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="aiml-expertise-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="aiml-expertise-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {AIML_EXPERTISE.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {AIML_EXPERTISE.description}
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AIML_EXPERTISE.items.map((item, i) => {
              const Icon = EXPERTISE_ICONS[i % EXPERTISE_ICONS.length];
              return (
                <article
                  key={item.title}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800"
                >
                  <div
                    className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3
                    className={`${typo.cardTitle} text-slate-900 dark:text-white`}
                  >
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
        aria-labelledby="aiml-process-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="aiml-process-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {AIML_PROCESS.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {AIML_PROCESS.description}
            </p>
          </header>

          <VoipProcessSteps steps={AIML_PROCESS.steps} variant="circles" />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
        aria-labelledby="aiml-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="aiml-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {AIML_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {AIML_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
