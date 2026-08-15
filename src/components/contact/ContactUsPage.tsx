import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import {
  CONTACT_DETAILS,
  CONTACT_FORM,
  CONTACT_HERO,
  CONTACT_INTRO,
} from "@/lib/contactPageData";
import { typo } from "@/lib/typography";

const HERO_IMAGE =
  "https://dialiqo.com/wp-content/uploads/2025/01/Contact-us-banner.jpg";

function DetailIcon({ kind }: { kind: (typeof CONTACT_DETAILS)[number]["kind"] }) {
  const Icon = kind === "email" ? Mail : kind === "phone" ? Phone : Globe;
  return <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />;
}

export function ContactUsPage() {
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
            Contact Us
          </li>
        </ol>
      </nav>

      <section
        className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[350px] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center"
        aria-labelledby="contact-hero-heading"
      >
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/40" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1
            id="contact-hero-heading"
            className={`${typo.heroTitle} text-white`}
          >
            {CONTACT_HERO.title}
          </h1>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
        aria-labelledby="contact-intro-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2
              id="contact-intro-heading"
              className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
            >
              {CONTACT_INTRO.title}
            </h2>
            <p
              className={`mt-5 ${typo.subtitle} text-slate-600 dark:text-slate-400`}
            >
              {CONTACT_INTRO.description}
            </p>

            <ul className="mt-10 space-y-8">
              {CONTACT_DETAILS.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex w-11 h-11 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900">
                    <DetailIcon kind={item.kind} />
                  </span>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.kind === "maps"
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="mt-1 block text-blue-600 dark:text-blue-400 hover:underline leading-relaxed"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <HomeContactForm
            heading={CONTACT_FORM.title}
            note={CONTACT_FORM.note}
            phoneRequired
            service="Contact Page"
          />
        </div>
      </section>
    </div>
  );
}
