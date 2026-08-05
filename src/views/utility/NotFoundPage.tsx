"use client";
import React, { useState } from 'react';
import { AlertTriangle, Search, Home } from 'lucide-react';
import { Button } from '../../components/common/Button';

interface UtilityPageProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation?: () => void;
}

export const NotFoundPage: React.FC<UtilityPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      onNavigate('search-results', searchQuery);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden selection:bg-blue-500">
      {/* Glow background blobs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full text-center space-y-8 relative z-10 my-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 text-red-400 text-xs font-mono font-bold border border-red-800">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span>Error 404 - SIP Route Not Found</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-black font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-blue-400">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Packet Dropped: Requested Path Does Not Exist
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            The URL route you are looking for may have been moved, renamed, or never existed in our routing table.
          </p>
        </div>

        {/* Terminal Error Log Box */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left font-mono text-xs space-y-2 shadow-xl">
          <div className="flex items-center justify-between text-slate-500 text-[10px] pb-2 border-b border-slate-800">
            <span>SIP PROXY TRACE LOG</span>
            <span className="text-red-400 font-bold">STATUS: 404 NOT_FOUND</span>
          </div>
          <div className="text-slate-300">$ sip-traceroute --destination=current-url</div>
          <div className="text-slate-500">[04:22:10] INVITE sip:user@dialiqo.com SIP/2.0</div>
          <div className="text-slate-500">[04:22:11] Via: SIP/2.0/UDP 192.168.1.1:5060</div>
          <div className="text-red-400 font-bold">[04:22:11] SIP/2.0 404 User Not Found at Edge Proxy SF-01</div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search Dialiqo pages or services..."
            className="w-full pl-10 pr-24 py-3 text-xs font-mono rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold rounded-xl transition-all cursor-pointer"
          >
            Search
          </button>
        </form>

        {/* Quick Route Shortcuts */}
        <div className="pt-4 space-y-3">
          <div className="text-xs font-mono text-slate-500">Quick Destination Reroute:</div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button onClick={() => onNavigate('home')} variant="glow" size="sm" icon={<Home className="w-3.5 h-3.5" />}>
              Back to Home Page
            </Button>
            <Button onClick={() => onNavigate('services')} variant="outline" size="sm" className="border-slate-800 text-white">
              Explore Services
            </Button>
            <Button onClick={() => onNavigate('contact')} variant="outline" size="sm" className="border-slate-800 text-white">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
