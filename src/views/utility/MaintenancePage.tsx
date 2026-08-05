"use client";
import React from 'react';
import { RefreshCw } from 'lucide-react';
import { typo } from '@/lib/typography';

interface UtilityPageProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation?: () => void;
}

export const MaintenancePage: React.FC<UtilityPageProps> = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 relative selection:bg-blue-500">
      <div className="max-w-2xl w-full text-center space-y-8 relative z-10 my-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950 text-amber-400 text-xs font-mono font-bold border border-amber-800">
          <RefreshCw className="w-4 h-4 text-amber-400 animate-spin" />
          <span>Scheduled Core Switch Maintenance</span>
        </div>

        <h1 className={typo.heroTitle}>
          System Maintenance in Progress
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
          We are upgrading our core Kamailio SIP edge proxies to firmware v5.4. Active voice calls remain unaffected via redundant failover links.
        </p>

        {/* Progress Bar */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 max-w-md mx-auto text-left font-mono text-xs">
          <div className="flex justify-between">
            <span className="text-slate-400">Upgrade Progress:</span>
            <span className="text-amber-400 font-bold">78% Completed</span>
          </div>
          <div className="w-full h-3 rounded-full bg-slate-950 overflow-hidden p-0.5 border border-slate-800">
            <div className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full w-[78%]" />
          </div>
          <div className="text-[10px] text-slate-500 pt-1">Est. Completion: 15 Minutes</div>
        </div>

        {/* Live Event Log */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left font-mono text-[11px] space-y-1 text-slate-400 max-w-lg mx-auto">
          <div>[04:15:02 UTC] BGP route drain sequence initiated...</div>
          <div>[04:18:30 UTC] Flashing eBPF kernel packet filters...</div>
          <div className="text-amber-400">[04:25:10 UTC] Verifying TLS 1.3 certificate handshakes...</div>
        </div>

        <div className="text-xs font-mono text-slate-500">
          For emergency support during maintenance, call <span className="text-white font-bold">+1 (415) 890-3400</span> or email <span className="text-cyan-400 underline">support@dialiqo.com</span>.
        </div>
      </div>
    </div>
  );
};
