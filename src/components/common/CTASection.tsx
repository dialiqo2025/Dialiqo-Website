"use client";
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Shield, CheckCircle2, PhoneCall } from 'lucide-react';
import { Button } from './Button';
import { typo } from '@/lib/typography';

interface CTASectionProps {
  title?: string;
  description?: string;
  onOpenConsultation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Build Your Enterprise AI & Telecom Solution?",
  description = "Partner with Dialiqo to design, engineer, and deploy high-performance voice AI, carrier-class VoIP, and modern cloud applications.",
  onOpenConsultation
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-8 sm:p-12 md:p-16 border border-slate-800 my-16 shadow-2xl">
      {/* Background Gradients & Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 ${typo.eyebrow} mb-6`}
        >
          <Sparkles className="w-3.5 h-3.5" /> Enterprise Advisory & Architecture
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`${typo.sectionTitle} text-white leading-tight`}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-4 ${typo.subtitle} text-slate-300 max-w-2xl mx-auto`}
        >
          {description}
        </motion.p>

        {/* Feature Guarantees */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>99.999% SLA Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>SOC2 & HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>48-Hour Developer Onboarding</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-4"
        >
          <Button
            onClick={onOpenConsultation}
            variant="glow"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Book Free Architecture Briefing
          </Button>

          <Button
            onClick={onOpenConsultation}
            variant="outline"
            size="lg"
            icon={<PhoneCall className="w-4 h-4" />}
            className="border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800"
          >
            Talk to Enterprise Sales
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
