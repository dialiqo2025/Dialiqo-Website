"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, CheckCircle2, ChevronDown, ChevronRight, Cpu, Code, Terminal, Server, 
  Sparkles, Cloud, Smartphone, Shield, Phone, Search, Layers, Check, HelpCircle
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { SectionHeader } from '../components/common/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { TECHNOLOGIES_DATA } from '../data/dialiqoData';
import { TechnologyItem } from '../types';

interface TechDetailPageProps {
  techSlug: string;
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

const getTechIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code': return <Code className="w-5 h-5 text-blue-500" />;
    case 'Smartphone': return <Smartphone className="w-5 h-5 text-emerald-500" />;
    case 'Server': return <Server className="w-5 h-5 text-amber-500" />;
    case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-500" />;
    case 'Terminal': return <Terminal className="w-5 h-5 text-cyan-500" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-500" />;
    case 'Cloud': return <Cloud className="w-5 h-5 text-sky-500" />;
    case 'Shield': return <Shield className="w-5 h-5 text-red-500" />;
    case 'Phone': return <Phone className="w-5 h-5 text-rose-500" />;
    default: return <Cpu className="w-5 h-5 text-blue-500" />;
  }
};

export const TechDetailPage: React.FC<TechDetailPageProps> = ({
  techSlug,
  onNavigate,
  onOpenConsultation
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const tech: TechnologyItem = TECHNOLOGIES_DATA.find(t => t.slug === techSlug) || TECHNOLOGIES_DATA[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-16">
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button 
            onClick={() => onNavigate('technologies')} 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer"
          >
            Technologies
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 dark:text-white font-semibold">{tech.name}</span>
        </div>
      </div>

      {/* 1. HERO */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-blue-50/50 via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase font-mono tracking-wider">
            {getTechIcon(tech.iconName)} {tech.category}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {tech.name} Engineering Practice
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            {tech.heroDesc}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button onClick={onOpenConsultation} variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Build With {tech.name}
            </Button>
            <Button onClick={() => onNavigate('technologies')} variant="secondary" size="lg">
              Explore All 21 Stack Practices
            </Button>
          </div>
        </div>
      </section>

      {/* 2. WHY THIS TECHNOLOGY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Technical Value" title={`Why Choose ${tech.name}?`} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tech.whyThisTech.map((why, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">{why}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR EXPERTISE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Deep Experience" title="Dialiqo Mastery & Specialization" />
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg shadow-inner">
            {tech.ourExpertise}
          </div>
        </div>
      </section>

      {/* 4. ARCHITECTURE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="System Design" title="Architectural Highlights" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tech.architecturalHighlights.map((arch, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-lg relative overflow-hidden">
                <div className="text-xs font-mono text-cyan-400 mb-2 font-semibold">Spec 0{i + 1}</div>
                <p className="text-sm font-medium leading-relaxed">{arch}</p>
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Cpu className="w-16 h-16 text-cyan-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Deployments" title="Featured Production Deployments" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tech.featuredProjects.map((proj, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold mb-1">Production Project 0{i + 1}</div>
                  <div className="font-bold text-lg text-slate-900 dark:text-white leading-snug">{proj}</div>
                </div>
                <div className="mt-4 text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> Deployed & Verified
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BENEFITS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Measurable Impact" title="Key Architectural Benefits" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tech.benefits.map((b, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  {b.title}
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Tech FAQs" title={`Frequently Asked Questions (${tech.name})`} />
          <div className="space-y-4">
            {tech.faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-6 text-left font-bold text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-500 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaqIndex === i ? 'rotate-180 text-blue-500' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaqIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-5xl mx-auto">
          <CTASection onOpenConsultation={onOpenConsultation} />
        </div>
      </section>
    </div>
  );
};

export const TechnologiesPage: React.FC<{ onNavigate: (p: string, s?: string) => void; onOpenConsultation: () => void }> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Languages & Frameworks', 'AI & LLMs', 'Cloud & Infrastructure', 'Telecom & VoIP'];

  const filteredTech = TECHNOLOGIES_DATA.filter(t => {
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technology Index (21 Practice Areas)"
          title="Dialiqo Enterprise Technology Stack"
          description="Carrier-grade softswitches, foundation AI models, modern cross-platform frameworks, and multi-cloud Kubernetes orchestration."
        />

        {/* Filter Tabs & Search Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search 21 technologies..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map(t => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={() => onNavigate('technology-detail', t.slug)}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-900">
                    {t.category}
                  </span>
                  {getTechIcon(t.iconName)}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t.name}
                </h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.shortDesc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center justify-between group-hover:translate-x-1 transition-all">
                <span>Explore Technology Practice</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTech.length === 0 && (
          <div className="py-16 text-center text-slate-500">
            No technologies found matching "{searchQuery}". Try selecting "All" or clearing your search.
          </div>
        )}

        <div className="mt-16">
          <CTASection onOpenConsultation={onOpenConsultation} />
        </div>
      </div>
    </div>
  );
};

