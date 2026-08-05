"use client";
import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from '../../components/common/Button';

interface UtilityPageProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation?: () => void;
}

export const TermsPage: React.FC<UtilityPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-20 selection:bg-blue-500 selection:text-white">
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-cyan-400 text-xs font-mono font-bold border border-blue-800">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Master Services Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-mono">
            Last Modified: January 10, 2026 | Enterprise SLA Terms Attached
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">1. Acceptance of Terms</h2>
            <p>
              By accessing, deploying, or utilizing Dialiqo products, APIs, Voice AI modules, or Carrier SIP Trunks, you agree to be bound by these Master Service Terms.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">2. Carrier Uptime SLA Guarantee (99.999%)</h2>
            <p>
              Dialiqo guarantees 99.999% monthly service availability for core SIP switching and Voice AI edge proxies. In the event of an SLA breach, customers receive service credits calculated according to our SLA schedule.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">3. Acceptable Use Policy</h2>
            <p>
              Customers shall not use Dialiqo networks for illegal robocalling, caller ID spoofing, unauthorized surveillance, or transmitting malicious payloads that disrupt public telecommunication infrastructure.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">4. Intellectual Property</h2>
            <p>
              Dialiqo retains all ownership of core software, patents, and algorithmic models. Custom integrations built specifically for enterprise clients remain the exclusive property of the customer as defined in individual Statements of Work (SOWs).
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Dialiqo shall not be liable for indirect, incidental, or consequential damages exceeding the total fees paid by the client in the 12 months preceding the claim.
            </p>
          </section>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div>
              <div className="font-bold text-slate-900 dark:text-white">Need a Customized Enterprise MSA?</div>
              <div className="text-slate-500">Contact our legal team for enterprise redlines.</div>
            </div>
            <Button onClick={() => onNavigate('contact')} variant="outline">
              Contact Legal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
