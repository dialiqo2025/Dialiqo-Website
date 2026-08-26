"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Activity, Cpu, Server, Mic, ShieldCheck, Zap, Radio, RefreshCw, Terminal, Check } from 'lucide-react';

export const InteractiveArchitectureStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sip' | 'voice-ai' | 'k8s' | 'webrtc'>('voice-ai');
  const [concurrency, setConcurrency] = useState(45200);
  const [latency, setLatency] = useState(18);
  const [logs, setLogs] = useState<string[]>([
    '[03:38:40] Kamailio-SBC-US-East: SIP Invite received from carrier AT&T (Opus 48kHz)',
    '[03:38:40] FreeSWITCH-Node-04: Audio frame buffer allocated -> WebRTC Gateway',
    '[03:38:41] Gemini-Live-S2S: Neural speech model connected (VAD active)',
    '[03:38:41] Dialiqo-Edge-Router: Session verified 99.999% SLA (Latency 18ms)'
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setConcurrency(prev => Math.floor(prev + (Math.random() * 120 - 50)));
      setLatency(prev => Math.max(12, Math.floor(prev + (Math.random() * 4 - 2))));

      const sampleLogs = [
        `[${new Date().toLocaleTimeString()}] Kamailio-SBC: Route LCR calculated -> Carrier Interconnect`,
        `[${new Date().toLocaleTimeString()}] ElevenLabs-S2S: Audio stream frame delivered (20ms PCM slice)`,
        `[${new Date().toLocaleTimeString()}] FreeSWITCH-Cluster: Active SIP sessions: ${concurrency.toLocaleString("en-US")}`,
        `[${new Date().toLocaleTimeString()}] Redis-Cluster: Session state synchronized across 5 global POPs`
      ];

      setLogs(prev => [sampleLogs[Math.floor(Math.random() * sampleLogs.length)], ...prev.slice(0, 4)]);
    }, 2500);

    return () => clearInterval(interval);
  }, [concurrency]);

  return (
    <div className="my-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white overflow-hidden shadow-2xl">
      {/* Top Bar / Header */}
      <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs font-mono text-slate-400 border-l border-slate-800 pl-3">
            Dialiqo Telemetry & SIP Studio v4.2
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Active Calls: {concurrency.toLocaleString("en-US")}</span>
          </div>
          <div className="text-cyan-400">
            Edge Latency: {latency}ms
          </div>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex border-b border-slate-800 bg-slate-900/60 overflow-x-auto">
        {[
          { id: 'voice-ai', label: 'Voice AI Real-Time Pipeline', icon: Mic },
          { id: 'sip', label: 'Kamailio / FreeSWITCH SIP Core', icon: Server },
          { id: 'k8s', label: 'K8s Multi-Region Mesh', icon: Cpu },
          { id: 'webrtc', label: 'WebRTC Softphone Gateway', icon: Radio }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3.5 text-xs font-semibold whitespace-nowrap transition-all border-b-2 ${
                isActive
                  ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Visualizer Area */}
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Architecture Node Diagram */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === 'voice-ai' && (
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                <Mic className="w-4 h-4 text-indigo-400" />
                Sub-300ms Speech-to-Speech Streaming Topology
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-xs font-mono text-indigo-400 mb-1">Node 1: Telephony Ingest</div>
                  <div className="font-bold text-sm">SIP / PSTN Trunk</div>
                  <div className="text-xs text-slate-400 mt-2">Opus 48kHz audio codec frame parsing</div>
                </div>

                <div className="p-4 rounded-xl bg-indigo-950/60 border border-indigo-700/80">
                  <div className="text-xs font-mono text-indigo-300 mb-1">Node 2: Dialiqo S2S Bridge</div>
                  <div className="font-bold text-sm text-indigo-200">Gemini / ElevenLabs</div>
                  <div className="text-xs text-indigo-300 mt-2">Streaming WebSocket bi-directional audio</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-xs font-mono text-emerald-400 mb-1">Node 3: Action Execution</div>
                  <div className="font-bold text-sm">Tool Calling API</div>
                  <div className="text-xs text-slate-400 mt-2">Epic EHR / Salesforce CRM read/write</div>
                </div>
              </div>

              {/* Animated Waveform Simulator */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-400 font-mono">
                  Live Audio Waveform (VAD Active):
                </div>
                <div className="flex items-center gap-1 h-8">
                  {[40, 75, 30, 90, 100, 60, 45, 80, 95, 30, 60, 85, 40].map((height, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [`${height}%`, `${(height * 0.4)}%`, `${height}%`] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.08 }}
                      className="w-1.5 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sip' && (
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                <Server className="w-4 h-4 text-blue-400" />
                Kamailio SBC & FreeSWITCH Media Switching Fabric
              </h4>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-3">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Least Cost Routing (LCR):</span>
                  <span className="text-emerald-400">Optimum Carrier Match (0.0012$/min)</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">SRTP Encryption:</span>
                  <span className="text-cyan-400">AES_CM_128_HMAC_SHA1_80 Active</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Cluster Failover:</span>
                  <span className="text-emerald-400">5 POPs Active-Active Sync</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'k8s' && (
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-3">
              <div className="text-sm font-bold text-white">Kubernetes Pod Distribution</div>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-blue-400 font-bold">US-East Cluster (EKS)</div>
                  <div className="text-slate-400 mt-1">Pods: 128 / 128 Healthy</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-blue-400 font-bold">EU-Central Cluster (GKE)</div>
                  <div className="text-slate-400 mt-1">Pods: 96 / 96 Healthy</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'webrtc' && (
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-2 text-xs">
              <div className="font-bold text-slate-200">Browser WebRTC Client SDK</div>
              <p className="text-slate-400">Direct Opus audio streaming over secure TLS WebSockets bypasses PSTN toll costs completely.</p>
            </div>
          )}
        </div>

        {/* Live Terminal Stream */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] leading-relaxed">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-slate-400">
            <span className="flex items-center gap-1.5 text-xs text-blue-400">
              <Terminal className="w-3.5 h-3.5" />
              Live Telemetry Log
            </span>
            <span className="text-[10px] text-emerald-400">Streaming</span>
          </div>

          <div className="space-y-2 text-slate-300 overflow-hidden">
            {logs.map((log, i) => (
              <div key={i} className="text-slate-300 font-mono text-[11px] truncate">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
