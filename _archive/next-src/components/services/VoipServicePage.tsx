import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  Cog,
  Expand,
  GitMerge,
  Headphones,
  Lightbulb,
  Network,
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
import { VoipProcessSteps } from "@/components/services/VoipProcessSteps";
import {
  VOIP_CONTACT,
  VOIP_CTA_BAND,
  VOIP_EXPERTISE,
  VOIP_HERO,
  VOIP_OFFERINGS,
  VOIP_PROCESS,
  VOIP_WHY,
} from "@/lib/voipPageData";
import { typo } from "@/lib/typography";

const WHY_ICONS = [AudioLines, Expand, Cog, GitMerge];
const OFFERING_ICONS = [Network, Radio, Server, PhoneCall, Workflow];
const EXPERTISE_ICONS = [Headphones, Lightbulb, Sparkles, Shield];

const WHY_IMAGE =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80";
const CTA_IMAGE =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80";

export function VoipServicePage() {
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
            VoIP Development
          </li>
        </ol>
      </nav>

      {/* 1. Hero */}
      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="voip-hero-heading"
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
          <div>
            <h1
              id="voip-hero-heading"
              className={`${typo.heroTitle} text-slate-900 dark:text-white`}
            >
              {VOIP_HERO.title}
            </h1>
            <div className={`mt-6 space-y-4 ${typo.subtitle} text-slate-600 dark:text-slate-300`}>
              {VOIP_HERO.paragraphs.map((p) => (
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
              {VOIP_HERO.cta}
            </ServerLinkButton>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 bg-blue-500/10 rounded-4xl blur-2xl"
              aria-hidden="true"
            />
            <div className="relative">
              <ServiceIllustration slug="voip-development" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
        aria-labelledby="voip-why-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <p className={`${typo.eyebrow} text-blue-600 dark:text-blue-400 mb-3`}>
                {VOIP_WHY.eyebrow}
              </p>
              <h2
                id="voip-why-heading"
                className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
              >
                {VOIP_WHY.title}
              </h2>
              <p className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}>
                {VOIP_WHY.description}
              </p>
            </div>
            <figure className="relative m-0">
              <Image
                src={WHY_IMAGE}
                alt="Business communication with VoIP"
                width={1000}
                height={700}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg w-full object-cover aspect-video"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VOIP_WHY.items.map((item, i) => {
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
                    <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white`}>
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

      {/* 3. Our Offerings */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="voip-offerings-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <p className={`${typo.eyebrow} text-blue-600 dark:text-blue-400 mb-3`}>
              {VOIP_OFFERINGS.eyebrow}
            </p>
            <h2
              id="voip-offerings-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOIP_OFFERINGS.title}
            </h2>
            <p className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}>
              {VOIP_OFFERINGS.description}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VOIP_OFFERINGS.items.map((item, i) => {
              const Icon = OFFERING_ICONS[i % OFFERING_ICONS.length];
              return (
                <article
                  key={item.title}
                  className={`rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 shadow-sm ${
                    i === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                  }`}
                >
                  <div
                    className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white`}>
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

      {/* 4. CTA band */}
      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="voip-cta-heading"
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
            {VOIP_CTA_BAND.eyebrow}
          </p>
          <h2
            id="voip-cta-heading"
            className={`${typo.sectionTitle} text-white`}
          >
            {VOIP_CTA_BAND.title}
          </h2>
          <ServerLinkButton
            href="/contact"
            variant="outline"
            size="lg"
            className="mt-8 border-white/30 bg-transparent text-white hover:bg-white/10"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            {VOIP_CTA_BAND.cta}
          </ServerLinkButton>
        </div>
      </section>

      {/* 5. Expertise */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="voip-expertise-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="voip-expertise-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOIP_EXPERTISE.title}
            </h2>
            <p className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}>
              {VOIP_EXPERTISE.description}
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VOIP_EXPERTISE.items.map((item, i) => {
              const Icon = EXPERTISE_ICONS[i % EXPERTISE_ICONS.length];
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
                    <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white`}>
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

      {/* 6. How We Work */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
        aria-labelledby="voip-process-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <h2
              id="voip-process-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOIP_PROCESS.title}
            </h2>
            <p className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}>
              {VOIP_PROCESS.description}
            </p>
          </header>

          <VoipProcessSteps steps={VOIP_PROCESS.steps} />
        </div>
      </section>

      {/* 7. Contact */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
        aria-labelledby="voip-contact-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="voip-contact-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {VOIP_CONTACT.title}
            </h2>
            <p className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}>
              {VOIP_CONTACT.description}
            </p>
          </div>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
}
