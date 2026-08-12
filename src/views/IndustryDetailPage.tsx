"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, CheckCircle2, ChevronDown, Building, ShieldCheck, AlertCircle, Sparkles,
  Activity, Shield, ShoppingBag, GraduationCap, Radio, Factory, Truck, Compass, Building2,
  Coffee, Zap, HardHat, Car, Search, ArrowUpRight
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { SectionHeader } from '../components/common/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { INDUSTRIES_DATA, CASE_STUDIES_DATA } from '../data/dialiqoData';
import { IndustryItem } from '../types';
import { pageToPath } from '@/lib/routes';
import { typo } from '@/lib/typography';

// Helper component to render dynamic Lucide icon based on iconName
const IndustryIcon: React.FC<{ iconName?: string; className?: string }> = ({ iconName, className = "w-6 h-6" }) => {
  switch (iconName) {
    case 'Activity': return <Activity className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'ShoppingBag': return <ShoppingBag className={className} />;
    case 'GraduationCap': return <GraduationCap className={className} />;
    case 'Radio': return <Radio className={className} />;
    case 'Factory': return <Factory className={className} />;
    case 'Truck': return <Truck className={className} />;
    case 'Building': return <Building className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'Building2': return <Building2 className={className} />;
    case 'Coffee': return <Coffee className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'HardHat': return <HardHat className={className} />;
    case 'Car': return <Car className={className} />;
    default: return <Building className={className} />;
  }
};

interface IndustryDetailPageProps {
  industrySlug: string;
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({
  industrySlug,
  onNavigate,
  onOpenConsultation
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const industry: IndustryItem = INDUSTRIES_DATA.find(i => i.slug === industrySlug) || INDUSTRIES_DATA[0];
  const caseStudy = CASE_STUDIES_DATA.find(cs => cs.id === industry.successStoryId);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-16">
      {/* 1. HERO */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-blue-50/50 via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 ${typo.eyebrow} border border-blue-200 dark:border-blue-800/60`}>
            <IndustryIcon iconName={industry.iconName} className="w-4 h-4 text-blue-500" />
            <span>Vertical Specialization</span>
          </div>
          <h1 className={`${typo.heroTitle} text-slate-900 dark:text-white`}>
            {industry.title}
          </h1>
          <p className={`${typo.subtitle} text-slate-600 dark:text-slate-300 max-w-2xl mx-auto`}>
            {industry.heroDesc}
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button onClick={onOpenConsultation} variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Get {industry.title.split(' ')[0]} Blueprint
            </Button>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRY CHALLENGES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Sector Dynamics" title="Key Industry Bottlenecks" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.challenges.map((c, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold mb-3 text-base">
                  <AlertCircle className="w-5 h-5 shrink-0" /> {c.problem}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{c.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR EXPERTISE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Domain Capability" title="Dialiqo Technical Expertise" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industry.expertise.map((exp, i) => (
              <div key={i} className="p-4.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{exp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TAILORED SOLUTIONS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Bespoke Products" title="Tailored Software Solutions" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.solutions.map((sol, i) => (
              <div key={i} className="p-6.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{sol.name}</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{sol.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY USED */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Tech Stack" title="Core Industry Frameworks" />
          <div className="flex flex-wrap justify-center gap-3">
            {industry.technologiesUsed.map((tech, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-sm font-bold text-slate-800 dark:text-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      {caseStudy && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeader eyebrow="Featured Story" title="Proven Industry Success" />
            <Link
              href={pageToPath('case-study-detail', caseStudy.slug)}
              className="block p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 hover:border-blue-500 transition-all group"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">{caseStudy.clientName}</span>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <h3 className={`${typo.cardTitle} group-hover:text-blue-300 transition-colors`}>{caseStudy.title}</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{caseStudy.summary}</p>
            </Link>
          </div>
        </section>
      )}

      {/* 7. FAQS ACCORDION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Industry FAQs" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {industry.faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-6 text-left font-bold text-slate-900 dark:text-white flex justify-between items-center gap-4 cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-slate-800/50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <CTASection onOpenConsultation={onOpenConsultation} />
        </div>
      </section>
    </div>
  );
};

export const IndustriesPage: React.FC<{ onNavigate: (p: string, s?: string) => void; onOpenConsultation: () => void }> = ({ onNavigate, onOpenConsultation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIndustries = INDUSTRIES_DATA.filter(i =>
    i.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.technologiesUsed.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Vertical Specialization"
          title="Industries We Empower"
          description="Tailored software engineering, AI automation, and carrier SIP telephony for global enterprise verticals."
        />

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search industries, AI solutions, or tech..."
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>

        {/* Grid of 15 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredIndustries.map(i => (
            <Link
              key={i.id}
              href={pageToPath('industry-detail', i.slug)}
              className="block p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
                    <IndustryIcon iconName={i.iconName} className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                  {i.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {i.shortDesc}
                </p>
                
                {/* Tech Badges Preview */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {i.technologiesUsed.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950 text-[11px] font-mono font-medium text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/60">
                      {t}
                    </span>
                  ))}
                  {i.technologiesUsed.length > 3 && (
                    <span className="px-2 py-1 text-[11px] font-mono text-slate-400">
                      +{i.technologiesUsed.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                <span>Explore {i.title.split(' ')[0]} Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <CTASection onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};
