"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Server, Radio, Shield, MapPin, CheckCircle2 } from 'lucide-react';
import { GLOBAL_OFFICES } from '../../data/dialiqoData';

export const GlobalPopMap: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(GLOBAL_OFFICES[0]);

  return (
    <div className="my-16 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Globe className="w-3.5 h-3.5" />
          Global Carrier Edge Network
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Sub-20ms Telephony Edge Presence Across 5 Continents
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          Dialiqo operates co-located Kamailio SIP session border controllers and high-density FreeSWITCH media nodes directly adjacent to tier-1 telecom interconnects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Office Selection List */}
        <div className="lg:col-span-5 space-y-3">
          {GLOBAL_OFFICES.map(office => {
            const isSelected = selectedCity.city === office.city;
            return (
              <motion.div
                key={office.city}
                whileHover={{ x: 4 }}
                onClick={() => setSelectedCity(office)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-blue-500 bg-blue-950/60 shadow-lg shadow-blue-500/10'
                    : 'border-slate-800 bg-slate-950/50 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{office.flag}</span>
                    <div>
                      <div className="font-bold text-sm text-white flex items-center gap-2">
                        {office.city}, {office.country}
                        {office.isHeadquarters && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-600 text-white">
                            HQ
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-400">{office.timezone}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-emerald-400 block font-bold">18ms latency</span>
                    <span className="text-[10px] text-slate-500 font-mono">POP Active</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* City Focus Card & Map Representation */}
        <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedCity.flag}</span>
                <div>
                  <h4 className="text-xl font-bold text-white">{selectedCity.city} Regional Hub</h4>
                  <p className="text-xs text-slate-400">{selectedCity.address}</p>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 99.999% SLA
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 my-6 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block mb-1">Direct Phone Contact:</span>
                <span className="text-blue-400 font-bold">{selectedCity.phone}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block mb-1">Regional Enterprise Desk:</span>
                <span className="text-cyan-400 font-bold">{selectedCity.email}</span>
              </div>
            </div>

            {/* Stylized Visual Edge Nodes Grid */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-2">
              <div className="font-semibold text-slate-300 flex items-center gap-2">
                <Server className="w-4 h-4 text-blue-400" />
                Co-located Telephony POP Specifications:
              </div>
              <ul className="grid grid-cols-2 gap-2 text-slate-400 text-[11px] list-disc list-inside">
                <li>Tier-1 Fiber Carrier Interconnects</li>
                <li>Redundant Kamailio SBC Load Balancers</li>
                <li>FreeSWITCH Media Transcoding Core</li>
                <li>Low-Latency Voice AI Streaming Nodes</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-right text-[11px] text-slate-500 font-mono">
            Dialiqo Global POP Coordinates: {selectedCity.lat.toFixed(3)}°N, {selectedCity.lng.toFixed(3)}°E
          </div>
        </div>
      </div>
    </div>
  );
};
