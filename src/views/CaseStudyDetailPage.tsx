"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Building,
  MapPin,
  Calendar,
  Quote,
  Shield,
  Award,
  Terminal,
  Layers,
  Clock,
  Sparkles,
  TrendingUp,
  Maximize2,
  X,
  Search,
  Filter,
  Cpu,
  Users,
  Globe,
  Server,
  Activity,
  Check
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { SectionHeader } from '../components/common/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { CASE_STUDIES_DATA } from '../data/dialiqoData';
import { CaseStudyItem } from '../types';
import { typo } from '@/lib/typography';

interface CaseStudyDetailPageProps {
  slug: string;
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenConsultation
}) => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<{
    title: string;
    category: string;
    description: string;
    imageUrl: string;
  } | null>(null);

  const cs: CaseStudyItem = CASE_STUDIES_DATA.find(c => c.slug === slug) || CASE_STUDIES_DATA[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-24 pb-20 selection:bg-blue-500 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-b border-slate-800 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-8 relative z-10">
          {/* Breadcrumb Back Button */}
          <button
            onClick={() => onNavigate('case-studies')}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 hover:text-cyan-400 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Studies</span>
          </button>

          {/* Badges Bar */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-700/60 text-blue-300 font-bold tracking-wide">
              {cs.clientIndustry}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50">
              <Building className="w-3.5 h-3.5 text-cyan-400" /> {cs.clientName}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {cs.location}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50">
              <Calendar className="w-3.5 h-3.5 text-amber-400" /> {cs.timeline}
            </span>
          </div>

          {/* Title & Summary */}
          <div className="space-y-4 max-w-4xl">
            <h1 className={`${typo.heroTitle} leading-tight text-white`}>
              {cs.title}
            </h1>
            <p className={`${typo.subtitle} text-slate-300 font-normal`}>
              {cs.summary}
            </p>
          </div>

          {/* Hero Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
            {cs.metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-lg relative overflow-hidden group hover:border-cyan-500/50 transition-colors"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400 tracking-tight">
                  {m.value}
                </div>
                <div className="text-sm font-bold text-white mt-1.5">{m.label}</div>
                <div className="text-xs text-slate-400 mt-1 leading-normal">{m.detail}</div>
              </motion.div>
            ))}
          </div>

          {/* Hero Image Banner */}
          {cs.heroImage && (
            <div className="mt-8 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group">
              <img
                src={cs.heroImage}
                alt={cs.title}
                className="w-full h-64 sm:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-cyan-300 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700">
                  Live System Architecture & Outcome Overview
                </span>
                <span className="text-xs font-mono text-slate-300 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" /> Enterprise Verified Case Study
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* 2. CLIENT OVERVIEW */}
        <section id="client-overview">
          <SectionHeader
            eyebrow="01 / Client Profile"
            title="Client Overview"
            description="Background context on organizational size, industry domain, and operational scale."
            centered={false}
          />
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Company Size</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {cs.clientOverview?.companySize || 'Enterprise Team'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Headquarters</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {cs.clientOverview?.headquarters || cs.location}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Global Reach</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {cs.clientOverview?.globalPresence || 'Global Operations'}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {cs.clientOverview?.description || `${cs.clientName} is a leader in ${cs.clientIndustry}, operating at enterprise scale and delivering critical services to millions of global users.`}
            </p>
          </div>
        </section>

        {/* 3. CHALLENGE / PROBLEM STATEMENT */}
        <section id="challenge">
          <SectionHeader
            eyebrow="02 / The Obstacle"
            title="The Operational Challenge"
            description="Root cause analysis of legacy bottlenecks, latency spikes, and system scalability constraints."
            centered={false}
          />
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-slate-800 dark:text-slate-200 leading-relaxed text-base">
              <h3 className="text-lg font-bold text-amber-900 dark:text-amber-400 mb-2 flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-500" /> Executive Problem Statement
              </h3>
              <p>{cs.problem}</p>
            </div>

            {cs.challengesList && cs.challengesList.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cs.challengesList.map((ch, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center font-mono font-bold text-sm mb-3">
                      0{i + 1}
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{ch.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {ch.detail}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 4. ENGINEERING SOLUTION */}
        <section id="solution">
          <SectionHeader
            eyebrow="03 / Engineering Execution"
            title="The Dialiqo Solution"
            description="Architectural strategy, custom software modules, and automated workflow integration."
            centered={false}
          />
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {cs.solution}
            </p>

            {cs.solutionHighlights && cs.solutionHighlights.length > 0 && (
              <div className="pt-6 border-t border-slate-800 space-y-3">
                <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-2">
                  Key Strategic Innovations
                </div>
                {cs.solutionHighlights.map((sh, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{sh}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 5. ARCHITECTURE */}
        <section id="architecture">
          <SectionHeader
            eyebrow="04 / System Design"
            title="Architecture & Component Design"
            description="High-availability topology, streaming audio/data pipes, and resilient failover layers."
            centered={false}
          />
          <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 space-y-8 shadow-2xl">
            {/* Diagram Blueprint Summary */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-xs font-mono text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" /> Architectural Dataflow & Control Plane
              </div>
              <p className="text-sm font-mono text-slate-300 leading-relaxed">
                {cs.architectureDiagramDesc}
              </p>
            </div>

            {/* Architecture Layers Breakdown */}
            {cs.architectureLayers && cs.architectureLayers.length > 0 && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
                  Component Layer Breakdown
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {cs.architectureLayers.map((layer, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800/80 flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-mono text-blue-400 font-bold flex items-center gap-1.5 mb-2">
                          <Layers className="w-3.5 h-3.5" /> {layer.layer}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          {layer.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                        {layer.components.map((comp, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 rounded bg-slate-950 border border-slate-700/80 text-[11px] font-mono text-cyan-300"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 6. TECHNOLOGY USED */}
        <section id="technology">
          <SectionHeader
            eyebrow="05 / Tech Stack"
            title="Technologies & Frameworks Employed"
            description="Battle-tested open-source modules, cloud components, and AI neural engines powering this build."
            centered={false}
          />
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-wrap gap-3">
              {cs.technologyStack.map((tech, i) => (
                <div
                  key={i}
                  onClick={() => onNavigate('technologies')}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-sm font-mono font-bold text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer flex items-center gap-2 group"
                >
                  <Cpu className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 font-mono">
              💡 Click any technology to explore Dialiqo's specialized engineering capabilities in that framework.
            </p>
          </div>
        </section>

        {/* 7. DEVELOPMENT TIMELINE */}
        <section id="timeline">
          <SectionHeader
            eyebrow="06 / Engineering Roadmap"
            title="Development & Deployment Timeline"
            description={`Total Execution Period: ${cs.timeline}`}
            centered={false}
          />
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            {cs.developmentPhases && cs.developmentPhases.length > 0 ? (
              <div className="space-y-6 relative before:absolute before:top-3 before:bottom-3 before:left-4 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 pl-10">
                {cs.developmentPhases.map((phase, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[32px] top-1.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-100 dark:ring-blue-950/80" />
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {phase.phase} &bull; {phase.title}
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        <Clock className="w-3 h-3 inline mr-1" /> {phase.duration}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <Clock className="w-8 h-8 text-blue-500 shrink-0" />
                <div>
                  <div className="font-bold text-base">Execution Timeline: {cs.timeline}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Delivered on schedule through agile 2-week sprint cycles with weekly SRE cutover checks.
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 8. BUSINESS RESULTS */}
        <section id="results">
          <SectionHeader
            eyebrow="07 / Measurable Impact"
            title="Key Business Results Delivered"
            description="Quantifiable SLA improvements, cost reductions, and operational performance metrics."
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4 hover:border-emerald-500/50 transition-colors"
              >
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-500 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug block">
                    {r}
                  </span>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1 block font-semibold">
                    Verified Outcome
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 9. GALLERY & SYSTEM SHOWCASE */}
        {cs.gallery && cs.gallery.length > 0 && (
          <section id="gallery">
            <SectionHeader
              eyebrow="08 / Visual Showcase"
              title="System Interface & Telemetry Gallery"
              description="Visual snapshots of active monitoring portals, command centers, and architecture blueprints."
              centered={false}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cs.gallery.map((g, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedGalleryImage(g)}
                  className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer hover:border-cyan-500 transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={g.imageUrl}
                      alt={g.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors" />
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/90 text-[10px] font-mono text-cyan-400 border border-slate-700">
                      {g.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-xs text-white group-hover:text-cyan-400 transition-colors">
                      {g.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      {g.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10. CLIENT TESTIMONIAL */}
        <section id="testimonial">
          <SectionHeader
            eyebrow="09 / Client Endorsement"
            title="Executive Feedback"
            description="Verified testimony from engineering leadership."
            centered={false}
          />
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl relative overflow-hidden">
            <Quote className="w-24 h-24 text-white/10 absolute -top-4 -right-4 pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-semibold">
                <Award className="w-3.5 h-3.5 text-amber-300" /> Verified Executive Review
              </div>
              <p className="text-xl sm:text-2xl font-medium italic leading-relaxed">
                "{cs.testimonial.quote}"
              </p>
              <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-lg">{cs.testimonial.author}</div>
                  <div className="text-xs text-blue-200 mt-0.5">{cs.testimonial.role}, {cs.testimonial.company}</div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-mono font-bold text-white border border-white/20">
                  {cs.clientIndustry}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. CTA SECTION */}
        <section id="cta">
          <CTASection onOpenConsultation={onOpenConsultation} />
        </section>
      </div>

      {/* Lightbox Modal for Gallery Images */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGalleryImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col cursor-default shadow-2xl"
            >
              <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-blue-950 text-blue-400 font-mono text-xs font-bold">
                    {selectedGalleryImage.category}
                  </span>
                  <span className="font-bold text-sm text-white">{selectedGalleryImage.title}</span>
                </div>
                <button
                  onClick={() => setSelectedGalleryImage(null)}
                  className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 bg-black flex-1 overflow-auto flex items-center justify-center">
                <img
                  src={selectedGalleryImage.imageUrl}
                  alt={selectedGalleryImage.title}
                  className="max-h-[60vh] object-contain rounded-xl"
                />
              </div>

              <div className="p-6 bg-slate-950 border-t border-slate-800 text-sm text-slate-300">
                <p>{selectedGalleryImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* CASE STUDIES LISTING PAGE */
export const CaseStudiesPage: React.FC<{
  onNavigate: (p: string, s?: string) => void;
  onOpenConsultation: () => void;
}> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const industries = ['All', ...Array.from(new Set(CASE_STUDIES_DATA.map(c => c.clientIndustry)))];

  const filteredCaseStudies = CASE_STUDIES_DATA.filter(cs => {
    const matchesIndustry = selectedIndustry === 'All' || cs.clientIndustry === selectedIndustry;
    const matchesSearch =
      searchQuery === '' ||
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.technologyStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesIndustry && matchesSearch;
  });

  const featuredCaseStudy = CASE_STUDIES_DATA[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-20 selection:bg-blue-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <SectionHeader
          eyebrow="Enterprise Track Record"
          title="Case Studies & Technical Success Stories"
          description="In-depth technical breakdowns showing how Dialiqo re-engineers complex telecom, voice AI, and logistics infrastructure for global organizations."
        />

        {/* Featured Case Study Hero Banner */}
        {featuredCaseStudy && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3.5 py-1 rounded-full bg-blue-600 text-white font-bold">
                  Featured Case Study
                </span>
                <span className="text-cyan-400 font-bold">{featuredCaseStudy.clientIndustry}</span>
                <span className="text-slate-400">&bull; {featuredCaseStudy.location}</span>
              </div>

              <h2 className={`${typo.heroTitle} leading-tight`}>
                {featuredCaseStudy.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {featuredCaseStudy.summary}
              </p>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800">
                {featuredCaseStudy.metrics.map((m, i) => (
                  <div key={i}>
                    <div className="text-xl sm:text-2xl font-extrabold font-mono text-cyan-400">{m.value}</div>
                    <div className="text-[11px] font-bold text-slate-300">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  onClick={() => onNavigate('case-study-detail', featuredCaseStudy.slug)}
                  variant="primary"
                  className="cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Featured Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group">
                <img
                  src={featuredCaseStudy.heroImage || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'}
                  alt={featuredCaseStudy.title}
                  className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-cyan-300 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-800">
                  {featuredCaseStudy.clientName} Architecture Case Study
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Industry Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Industry:
            </span>
            {industries.map(ind => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedIndustry === ind
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by tech or title..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-900 dark:text-white placeholder-slate-400 border border-transparent focus:border-blue-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCaseStudies.map(cs => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => onNavigate('case-study-detail', cs.slug)}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold border border-blue-200 dark:border-blue-900/60">
                    {cs.clientIndustry}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">{cs.location}</span>
                </div>

                <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug`}>
                  {cs.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cs.summary}
                </p>

                {/* Metrics Badges */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 dark:border-slate-800">
                  {cs.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-base font-extrabold font-mono text-cyan-600 dark:text-cyan-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cs.technologyStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <Search className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No Case Studies Found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Try adjusting your industry filter or search keywords.
            </p>
            <Button
              onClick={() => {
                setSelectedIndustry('All');
                setSearchQuery('');
              }}
              variant="outline"
              className="mt-4 cursor-pointer"
            >
              Reset Search Filters
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <CTASection onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};
