import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cog,
  Cpu,
  Globe,
  Headphones,
  Layers,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  Smartphone,
  Workflow,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { VoipProcessSteps } from "@/components/services/VoipProcessSteps";
import {
  MOBILE_WEB_CONTACT,
  MOBILE_WEB_CTA_BAND,
  MOBILE_WEB_EXPERTISE,
  MOBILE_WEB_HERO,
  MOBILE_WEB_OFFERINGS,
  MOBILE_WEB_PROCESS,
  MOBILE_WEB_WHY,
} from "@/lib/mobileWebPageData";
import { typo } from "@/lib/typography";

const WHY_ICONS = [Cog, Cpu, MousePointerClick, Headphones];
const EXPERTISE_ICONS = [Layers, MonitorSmartphone, Palette, Workflow];

const WHY_IMAGE =
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80";
const OFFERINGS_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80";
const CTA_IMAGE =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80";

const [WEB_OFFERING, MOBILE_OFFERING] = MOBILE_WEB_OFFERINGS.items;

export function MobileWebServicePage() {
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
            className="text-slate-900 dark:text-white font-semibold truncate max-w-[220px]"
          >
            Mobile & Web
          </li>
        </ol>
      </nav>

      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="mobile-web-hero-heading"
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
              <ServiceIllustration slug="mobile-web" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h1
              id="mobile-web-hero-heading"
              className={`${typo.heroTitle} text-slate-900 dark:text-white`}
            >
              {MOBILE_WEB_HERO.title}
            </h1>
            <div
              className={`mt-6 space-y-4 ${typo.subtitle} text-slate-600 dark:text-slate-300`}
            >
              {MOBILE_WEB_HERO.paragraphs.map((p) => (
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
              {MOBILE_WEB_HERO.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="mobile-web-why-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <p
                className={`${typo.eyebrow} text-blue-600 dark:text-blue-400 mb-3`}
              >
                {MOBILE_WEB_WHY.eyebrow}
              </p>
              <h2
                id="mobile-web-why-heading"
                className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
              >
                {MOBILE_WEB_WHY.title}
              </h2>
              <p
                className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
              >
                {MOBILE_WEB_WHY.description}
              </p>
            </div>
            <figure className="relative m-0">
              <Image
                src={WHY_IMAGE}
                alt="Web and mobile application development"
                width={1000}
                height={700}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg w-full object-cover aspect-video"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MOBILE_WEB_WHY.items.map((item, i) => {
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
        aria-labelledby="mobile-web-offerings-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <p
              className={`${typo.eyebrow} text-blue-600 dark:text-blue-400 mb-3`}
            >
              {MOBILE_WEB_OFFERINGS.eyebrow}
            </p>
            <h2
              id="mobile-web-offerings-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {MOBILE_WEB_OFFERINGS.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {MOBILE_WEB_OFFERINGS.description}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <article className="lg:text-right">
              <div
                className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 lg:ml-auto"
                aria-hidden="true"
              >
                <Globe className="w-5 h-5" />
              </div>
              <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white`}>
                {WEB_OFFERING.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {WEB_OFFERING.desc}
              </p>
            </article>

            <figure className="relative m-0">
              <Image
                src={OFFERINGS_IMAGE}
                alt="Web and mobile app development"
                width={1000}
                height={800}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg w-full object-cover aspect-square"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </figure>

            <article>
              <div
                className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5"
                aria-hidden="true"
              >
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white`}>
                {MOBILE_OFFERING.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {MOBILE_OFFERING.desc}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="mobile-web-cta-heading"
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
            {MOBILE_WEB_CTA_BAND.eyebrow}
          </p>
          <h2
            id="mobile-web-cta-heading"
            className={`${typo.sectionTitle} text-white`}
          >
            {MOBILE_WEB_CTA_BAND.title}
          </h2>
          <ServerLinkButton
            href="/contact"
            variant="outline"
            size="lg"
            className="mt-8 border-white/30 bg-transparent text-white hover:bg-white/10"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {MOBILE_WEB_CTA_BAND.cta}
          </ServerLinkButton>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="mobile-web-expertise-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="mobile-web-expertise-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {MOBILE_WEB_EXPERTISE.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {MOBILE_WEB_EXPERTISE.description}
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOBILE_WEB_EXPERTISE.items.map((item, i) => {
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
        aria-labelledby="mobile-web-process-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="mobile-web-process-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {MOBILE_WEB_PROCESS.title}
            </h2>
            <p
              className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {MOBILE_WEB_PROCESS.description}
            </p>
          </header>

          <VoipProcessSteps steps={MOBILE_WEB_PROCESS.steps} variant="circles" />
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
        aria-labelledby="mobile-web-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="mobile-web-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {MOBILE_WEB_CONTACT.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {MOBILE_WEB_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
