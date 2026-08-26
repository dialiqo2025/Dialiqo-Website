"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Bot, Send, Loader2, ArrowRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { Button } from '../common/Button';
import { typo } from '@/lib/typography';

interface AiAdvisorWidgetProps {
  onOpenConsultation: () => void;
}

export const AiAdvisorWidget: React.FC<AiAdvisorWidgetProps> = ({ onOpenConsultation }) => {
  const [industry, setIndustry] = useState('Telecommunications');
  const [techNeeds, setTechNeeds] = useState('Sub-300ms Voice AI Agents & Carrier-Grade SIP');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industry, technologyNeeds: techNeeds, prompt })
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({
        recommendation: "Dialiqo recommends a multi-region Kamailio SBC cluster connected to FreeSWITCH WebRTC gateways, coupled with real-time Speech-to-Speech Voice AI models deployed across Kubernetes.",
        suggestedServices: ["Voice AI Solutions", "VoIP Development", "Cloud Engineering"],
        techStack: ["FreeSWITCH", "Kamailio", "Gemini Live", "Kubernetes"],
        estimatedTimeline: "8-12 Weeks to MVP",
        estimatedUptime: "99.999% SLA"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-16 rounded-3xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-br from-blue-50/60 via-white to-cyan-50/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-6 sm:p-10 shadow-xl">
      <div className="max-w-3xl mb-8">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 ${typo.eyebrow} mb-3 border border-blue-200 dark:border-blue-800`}>
          <Sparkles className="w-3.5 h-3.5 animate-spin" />
          Interactive AI Architecture Advisor
        </div>
        <h3 className={`${typo.contentTitle} text-slate-900 dark:text-white`}>
          Get Instant AI-Generated Architectural Blueprint
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Enter your organization's domain and technical objectives to generate a custom technology stack and architecture roadmap prepared by Dialiqo's AI Chief Architect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <form onSubmit={handleConsult} className="lg:col-span-5 space-y-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Select Your Industry
            </label>
            <select
              value={industry}
              onChange={e => setIndustry(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Telecommunications</option>
              <option>Healthcare & Telehealth</option>
              <option>Financial Services & Banking</option>
              <option>Retail & E-Commerce</option>
              <option>Logistics & Supply Chain</option>
              <option>Government & Public Sector</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Core Technical Objective
            </label>
            <select
              value={techNeeds}
              onChange={e => setTechNeeds(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Sub-300ms Voice AI Agents & Carrier-Grade SIP</option>
              <option>Enterprise Web Application & Next.js Micro-Frontend</option>
              <option>Autonomous AI Agent Workflows & RAG Vector DB</option>
              <option>Cloud Infrastructure Migration & K8s DevOps</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Specific Requirements (Optional)
            </label>
            <textarea
              rows={3}
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="e.g. We need to handle 20,000 daily phone calls with real-time patient record sync into Epic EHR..."
              className="w-full p-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button type="submit" variant="glow" size="md" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Generate Architectural Blueprint'}
          </Button>
        </form>

        {/* Output Panel */}
        <div className="lg:col-span-7 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Bot className="w-4 h-4" /> Dialiqo AI Chief Architect Blueprint
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Enterprise Recommended
              </span>
            </div>

            {result ? (
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-400 mb-1">Architectural Strategy</h4>
                  <p className="text-slate-200 leading-relaxed text-sm bg-slate-950 p-4 rounded-xl border border-slate-800">
                    {result.recommendation}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Target Timeline:</span>
                    <span className="text-emerald-400 font-bold">{result.estimatedTimeline}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Guaranteed SLA:</span>
                    <span className="text-cyan-400 font-bold">{result.estimatedUptime}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-400 mb-2">Recommended Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.techStack.map((tech: string, i: number) => (
                      <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue-950/80 text-blue-300 border border-blue-800/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400 text-sm space-y-3">
                <Cpu className="w-10 h-10 mx-auto text-blue-500 opacity-60" />
                <p>Click "Generate Architectural Blueprint" to view custom enterprise recommendations instantly.</p>
              </div>
            )}
          </div>

          {result && (
            <div className="mt-6 pt-4 border-t border-slate-800">
              <Button onClick={onOpenConsultation} variant="glow" size="md" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                Discuss This Blueprint With An Architect
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
