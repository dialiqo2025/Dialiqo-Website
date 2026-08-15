import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Lightbulb,
  Scale,
  Search,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { ServiceIllustration } from "@/components/common/ServiceIllustration";
import { TechMarquee } from "@/components/home/TechMarquee";
import {
  ABOUT_HERO,
  ABOUT_STAND_APART,
  ABOUT_TECH,
  ABOUT_WHO,
} from "@/lib/aboutPageData";
import { typo } from "@/lib/typography";

const VALUE_ICONS = [Lightbulb, Scale, Search, Heart];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80";

export function AboutUsPage() {
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
          <li
            aria-current="page"
            className="text-slate-900 dark:text-white font-semibold"
          >
            About Us
          </li>
        </ol>
      </nav>

      <section
        className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/75" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1
            id="about-hero-heading"
            className={`${typo.heroTitle} text-white`}
          >
            {ABOUT_HERO.title}
          </h1>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="about-who-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className={`${typo.eyebrow} text-blue-600 dark:text-blue-400`}>
              {ABOUT_WHO.eyebrow}
            </p>
            <h2
              id="about-who-heading"
              className={`mt-3 ${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {ABOUT_WHO.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {ABOUT_WHO.description}
            </p>
            <ServerLinkButton
              href="/contact"
              variant="glow"
              size="lg"
              className="mt-8"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              {ABOUT_WHO.cta}
            </ServerLinkButton>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_WHO.values.map((value, i) => {
              const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
              return (
                <article
                  key={value}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800"
                >
                  <div
                    className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`mt-4 ${typo.cardTitle} text-slate-900 dark:text-white`}>
                    {value}
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white"
        aria-labelledby="about-stand-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ServiceIllustration slug="voip-development" />
          </div>
          <div>
            <p className={`${typo.eyebrow} text-blue-400`}>
              {ABOUT_STAND_APART.eyebrow}
            </p>
            <h2
              id="about-stand-heading"
              className={`mt-3 ${typo.sectionTitle} text-white`}
            >
              {ABOUT_STAND_APART.title}
            </h2>
            <ul className="mt-8 space-y-5 list-none p-0 m-0">
              {ABOUT_STAND_APART.items.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className={`${typo.cardTitle} text-white`}>{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
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
              {ABOUT_STAND_APART.cta}
            </ServerLinkButton>
          </div>
        </div>
      </section>

      <TechMarquee
        items={ABOUT_TECH}
        variant="chips"
        className="py-12 bg-slate-950 overflow-hidden"
      />
    </div>
  );
}
