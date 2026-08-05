"use client";
import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { typo } from '@/lib/typography';

interface UtilityPageProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation?: () => void;
}

export const ComingSoonPage: React.FC<UtilityPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden selection:bg-blue-500">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl w-full text-center space-y-8 relative z-10 my-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950 text-cyan-300 text-xs font-mono font-bold border border-blue-800">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Next-Gen Platform Launch Preview</span>
        </div>

        <h1 className={`${typo.heroTitle} leading-tight`}>
          Dialiqo Voice AI v4.0 Quantum Edge Engine
        </h1>

        <p className={`${typo.subtitle} text-slate-300 max-w-2xl mx-auto`}>
          We are deploying our breakthrough sub-150ms multi-modal speech synthesis and zero-jitter eBPF kernel packet routers.
        </p>

        {/* Countdown Box */}
        <div className="grid grid-cols-4 gap-3 max-w-md mx-auto pt-4">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-3xl font-extrabold text-cyan-400 font-mono">14</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">DAYS</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-3xl font-extrabold text-blue-400 font-mono">08</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">HOURS</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-3xl font-extrabold text-indigo-400 font-mono">42</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">MINUTES</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-3xl font-extrabold text-emerald-400 font-mono">19</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">SECONDS</div>
          </div>
        </div>

        {/* VIP Early Access Form */}
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 max-w-lg mx-auto space-y-4">
          <h3 className={`${typo.cardTitle} text-white`}>Join VIP Beta Access List</h3>
          <p className="text-xs text-slate-400">Receive priority API keys and private documentation before official release.</p>

          {subscribed ? (
            <div className="p-3 rounded-xl bg-emerald-950/80 text-emerald-400 text-xs font-mono font-bold border border-emerald-800 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> You're on the early access list!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="developer@company.com"
                className="w-full px-4 py-2.5 text-xs font-mono rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <Button type="submit" variant="glow" size="md" className="shrink-0">
                Get Beta Key
              </Button>
            </form>
          )}
        </div>

        <Button onClick={() => onNavigate('home')} variant="outline" size="md" className="border-slate-800 text-slate-300">
          Back to Current Platform &rarr;
        </Button>
      </div>
    </div>
  );
};
