import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Radio,
  Network,
  Mic,
  Cloud,
  Code2,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { HOME_SERVICES } from "@/lib/homeData";
import { pageToPath } from "@/lib/routes";
import { typo } from "@/lib/typography";

const SERVICE_ICONS = [Phone, Radio, Network, Mic, Cloud, Code2];

export function HomeServices() {
  return (
    <section
      className="services-section py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
      aria-labelledby="services-heading"
    >
      <div className="container max-w-7xl mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <p className={`${typo.eyebrow} text-blue-600 dark:text-blue-400 mb-3`}>
            OUR SERVICES
          </p>
          <h2
            id="services-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
          >
            Dialiqo&apos;s Cutting-Edge VoIP Development Services
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Comprehensive services with assured quality and uncompromised standards.
          </p>
        </header>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME_SERVICES.map((service, idx) => {
            const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
            const href = pageToPath("service-detail", service.slug);

            return (
              <article key={service.slug} className="service-card h-full">
                <Link
                  href={href}
                  className="group relative flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-7 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all no-underline"
                >
                  <div
                    className="absolute top-6 right-6 w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3
                    className={`pr-14 ${typo.cardTitle} text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 flex-1">
                    {service.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                    Learn more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <ServerLinkButton
            href="/services"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
          >
            View All Services
          </ServerLinkButton>
        </div>
      </div>
    </section>
  );
}
