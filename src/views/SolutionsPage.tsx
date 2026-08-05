"use client";
import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Headphones, Server } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { Button } from '../components/common/Button';
import { SOLUTIONS_DATA } from '../data/dialiqoData';
import { typo } from '@/lib/typography';

interface SolutionsPageProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Turnkey Enterprise Platforms"
          title="Dialiqo Software Solutions"
          description="Pre-architected, enterprise-ready platforms designed to solve complex CCaaS, carrier switching, and AI automation requirements."
        />

        <div className="space-y-12">
          {SOLUTIONS_DATA.map(sol => (
            <div
              key={sol.id}
              className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                  {sol.tagline}
                </span>
                <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white`}>{sol.title}</h3>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {sol.description}
                </p>

                <div className="pt-4 space-y-2">
                  <h4 className="text-xs font-semibold uppercase text-slate-400">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-200 font-medium">
                    {sol.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex gap-4">
                  <Button onClick={onOpenConsultation} variant="glow" size="md">
                    Request Solution Demo
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 text-white space-y-4 font-mono text-xs">
                <div className="text-cyan-400 font-bold uppercase border-b border-slate-800 pb-2">
                  Architecture Overview
                </div>
                <p className="text-slate-300 leading-relaxed font-sans text-sm">
                  {sol.architectureOverview}
                </p>

                <div className="pt-4 border-t border-slate-800">
                  <span className="text-slate-400 block mb-2">Target Verticals:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.targetIndustries.map((ind, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CTASection onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};
