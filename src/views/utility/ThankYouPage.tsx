"use client";
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock } from 'lucide-react';
import { Button } from '../../components/common/Button';

interface UtilityPageProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation?: () => void;
}

export const ThankYouPage: React.FC<UtilityPageProps> = ({ onNavigate }) => {
  const ticketId = '#DLQ-' + Math.floor(10000 + Math.random() * 90000);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-20 selection:bg-blue-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 border-2 border-emerald-500/40 flex items-center justify-center mx-auto shadow-xl"
        >
          <CheckCircle2 className="w-10 h-10" />
        </motion.div>

        <div className="space-y-3">
          <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-800">
            Inquiry Transmitted & Registered
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Thank You for Reaching Out to Dialiqo!
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Your request has been routed to our global solutions desk. A dedicated Principal Solutions Architect will review your requirements and respond within 2 hours.
          </p>
        </div>

        {/* Ticket Reference Card */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl max-w-md mx-auto text-left font-mono text-xs space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <span className="text-slate-500">Transmission Ticket:</span>
            <span className="font-bold text-blue-600 dark:text-blue-400">{ticketId}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Est. Response SLA:</span>
            <span className="text-emerald-500 font-bold">&lt; 2 Business Hours</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Assigned Hub:</span>
            <span className="text-slate-900 dark:text-white font-bold">San Francisco / London SRE</span>
          </div>
        </div>

        {/* Next Steps Timeline */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-left space-y-6">
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-500" />
            What Happens Next?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">01. Automated Intake</div>
              <p className="text-xs text-slate-500">Confirmation email delivered with your reference ticket ID.</p>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">02. Architect Review</div>
              <p className="text-xs text-slate-500">A lead engineer analyzes your telephony volume or software scope.</p>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">03. Live Discovery</div>
              <p className="text-xs text-slate-500">We schedule a 30-min technical briefing or issue a formal NDA/SOW.</p>
            </div>
          </div>
        </div>

        {/* Download & Reroute Buttons */}
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Button onClick={() => onNavigate('home')} variant="glow" size="lg">
            Return to Homepage
          </Button>
          <Button onClick={() => onNavigate('case-studies')} variant="outline" size="lg">
            Read Enterprise Case Studies
          </Button>
        </div>
      </div>
    </div>
  );
};
