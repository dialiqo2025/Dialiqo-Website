"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  ArrowRight, CheckCircle2, ChevronDown, Clock, ShieldCheck, Cpu, PhoneCall, 
  Layers, ArrowUpRight, HelpCircle, AlertCircle, Sparkles, Building
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { LinkButton } from '../components/common/LinkButton';
import { SectionHeader } from '../components/common/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { ServiceIllustration } from '../components/common/ServiceIllustration';
import { SERVICES_DATA, CASE_STUDIES_DATA } from '../data/dialiqoData';
import { ServiceItem } from '../types';
import { pageToPath } from '@/lib/routes';
import { typo } from '@/lib/typography';

interface ServiceDetailPageProps {
  serviceSlug: string;
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceSlug,
  onNavigate,
  onOpenConsultation
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Find service item or fallback to first
  const service: ServiceItem = SERVICES_DATA.find(
    s => s.slug === serviceSlug || s.id === serviceSlug || s.slug.replace('-development', '') === serviceSlug
  ) || SERVICES_DATA[0];

  const relatedCaseStudies = CASE_STUDIES_DATA.filter(cs =>
    service.relatedCaseStudyIds?.includes(cs.id)
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-16">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-2">
        <ol className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><span>Services</span></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-slate-900 dark:text-white font-semibold truncate max-w-[200px]">{service.title}</li>
        </ol>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-blue-50/50 via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 ${typo.eyebrow} border border-blue-200 dark:border-blue-800`}
          >
            <Layers className="w-3.5 h-3.5" />
            {service.category} Practice Area
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`${typo.heroTitle} text-slate-900 dark:text-white`}
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${typo.subtitle} text-slate-600 dark:text-slate-300 max-w-3xl mx-auto`}
          >
            {service.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-4 flex flex-wrap justify-center gap-4"
          >
            <Button onClick={onOpenConsultation} variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Schedule Technical Consultation
            </Button>
            <LinkButton href="/contact" variant="outline" size="lg">
              Talk to Solutions Engineer
            </LinkButton>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & ILLUSTRATION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <SectionHeader
              eyebrow="Service Overview"
              title="Strategic Executive Summary"
              centered={false}
            />
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>{service.overview}</p>
            </div>
          </div>

          {/* Interactive Visual Architecture Illustration */}
          <div>
            <SectionHeader
              eyebrow="Technical Architecture"
              title="System Execution Blueprint"
              description={`Visual topology overview for ${service.title} engineering.`}
              centered={false}
            />
            <ServiceIllustration slug={service.slug} />
          </div>
        </div>
      </section>

      {/* 3. BUSINESS CHALLENGES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Market Context"
            title="Business Challenges We Solve"
            description="High-growth enterprises face technical bottlenecks when scaling legacy IT, telephony, and AI software."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.challenges.map((c, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <div className="p-3 w-fit rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 mb-4">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{c.title}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR SOLUTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="The Dialiqo Approach"
            title={service.solution.title}
            description={service.solution.desc}
          />

          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
            <h4 className="text-sm font-bold text-cyan-400 uppercase font-mono tracking-wider">Solution Deliverables:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.solution.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BENEFITS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Quantifiable ROI"
            title="Key Business Benefits"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((b, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-4xl font-extrabold font-mono text-blue-600 dark:text-blue-400">{b.metric}</div>
                <div className="text-base font-bold text-slate-900 dark:text-white mt-2">{b.title}</div>
                <div className="text-xs text-slate-500 mt-1">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Ecosystem"
            title="Technology Stack & Frameworks"
          />

          <div className="flex flex-wrap justify-center gap-3">
            {service.techStack.map((tech, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold font-mono text-slate-800 dark:text-slate-200 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Agile Delivery"
            title="Engineering Process Roadmap"
          />

          <div className="space-y-4">
            {service.process.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center font-mono">
                    0{p.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{p.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{p.desc}</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 shrink-0">
                  {p.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE DIALIQO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Competitive Advantage"
            title="Why Leading Enterprises Choose Dialiqo"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whyDialiqo.map((w, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" /> {w.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              eyebrow="Success Stories"
              title="Related Enterprise Case Studies"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCaseStudies.map(cs => (
                <Link
                  key={cs.id}
                  href={pageToPath('case-study-detail', cs.slug)}
                  className="block p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all"
                >
                  <div className="text-xs font-mono text-blue-600 font-bold mb-1">{cs.clientName}</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{cs.title}</h4>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">{cs.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. FAQS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Service FAQs"
            title="Frequently Asked Questions"
          />

          <div className="space-y-4">
            {service.faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full text-left font-bold text-slate-900 dark:text-white flex justify-between items-center gap-4 text-base cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <CTASection onOpenConsultation={onOpenConsultation} />
        </div>
      </section>
    </div>
  );
};

export const ServicesPage: React.FC<{ onNavigate: (p: string, s?: string) => void; onOpenConsultation: () => void }> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Comprehensive Practice Areas"
          title="Dialiqo Enterprise Services Hub"
          description="Carrier-grade SIP telephony, Voice AI agents, full-stack digital web/mobile apps, cloud engineering, and staff augmentation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map(s => (
            <Link
              key={s.id}
              href={pageToPath('service-detail', s.slug)}
              className="block p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">{s.category}</span>
                <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white mt-1`}>{s.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{s.shortDesc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center justify-between">
                <span>Explore Service Template &rarr;</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        <CTASection onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};
