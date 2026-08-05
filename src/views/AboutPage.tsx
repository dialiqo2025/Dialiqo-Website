"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Building, Award, Shield, Users, CheckCircle2, Globe, Sparkles, Heart } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { LEADERSHIP_TEAM, GLOBAL_OFFICES, TRUST_BADGES } from '../data/dialiqoData';

interface AboutPageProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const milestones = [
    { year: '2014', title: 'Dialiqo Founded', desc: 'Started by core telecom engineers building custom FreeSWITCH C-modules.' },
    { year: '2018', title: 'Carrier SBC Launch', desc: 'Deployed Kamailio session border controller cluster processing 100M monthly minutes.' },
    { year: '2022', title: 'Global Multi-POP Edge', desc: 'Expanded co-located POPs to San Francisco, London, Singapore, Dubai, and Tokyo.' },
    { year: '2024', title: 'Generative Voice AI Engine', desc: 'Pioneered sub-300ms Speech-to-Speech WebSockets streaming pipeline.' },
    { year: '2026', title: 'Enterprise Standard', desc: 'Trusted partner for 50+ Fortune 500 carriers, healthcare systems, and banks.' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <SectionHeader
          eyebrow="Company Story & Leadership"
          title="Engineering the Future of Global Software & Telephony"
          description="Dialiqo is a premier enterprise software engineering firm positioning global businesses at the forefront of AI, VoIP, Cloud, and Custom Software Development."
        />

        {/* MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="p-3 w-fit rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 font-bold">
              Mission
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              To empower global enterprises with resilient software architecture, sub-300ms Voice AI agents, carrier-grade SIP networks, and world-class developer talent.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="p-3 w-fit rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 font-bold">
              Vision
            </div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              To be the premier technology partner for Fortune 500 and high-growth companies building mission-critical digital products.
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <section className="py-12">
          <SectionHeader eyebrow="Evolution" title="A Decade of Engineering Milestones" />
          <div className="space-y-6 max-w-4xl mx-auto">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-6">
                <span className="text-2xl font-black font-mono text-blue-600 dark:text-blue-400 shrink-0">
                  {m.year}
                </span>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{m.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP TEAM */}
        <section className="py-12">
          <SectionHeader eyebrow="Leadership" title="Executive Engineering Leadership" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((member, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h4>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">{member.role}</p>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GLOBAL PRESENCE */}
        <section className="py-12">
          <SectionHeader eyebrow="Global Footprint" title="Global Office Locations" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLOBAL_OFFICES.map(office => (
              <div key={office.city} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{office.flag}</span>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{office.city}, {office.country}</h4>
                    <span className="text-xs text-slate-400 font-mono">{office.timezone}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">{office.address}</p>
                <p className="text-xs font-mono text-blue-600 mt-2">{office.phone}</p>
              </div>
            ))}
          </div>
        </section>

        <CTASection onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};
