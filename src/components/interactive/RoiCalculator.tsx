"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, DollarSign, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

interface RoiCalculatorProps {
  onOpenConsultation: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenConsultation }) => {
  const [monthlyCallVolume, setMonthlyCallVolume] = useState(50000);
  const [currentAgents, setCurrentAgents] = useState(25);
  const [infrastructureCost, setInfrastructureCost] = useState(12000);

  // Dynamic calculations
  const automationRate = 0.68; // 68% FCR with Dialiqo Voice AI
  const agentCostPerMonth = 4500;
  
  const annualCurrentCost = (currentAgents * agentCostPerMonth * 12) + (infrastructureCost * 12);
  const estimatedAIAgentCost = (monthlyCallVolume * 0.12 * 12);
  const optimizedSipCost = (infrastructureCost * 0.65 * 12);
  const retainedAgentCost = (currentAgents * (1 - automationRate * 0.5) * agentCostPerMonth * 12);

  const annualNewCost = estimatedAIAgentCost + optimizedSipCost + retainedAgentCost;
  const annualSavings = Math.max(0, annualCurrentCost - annualNewCost);
  const roiPercentage = Math.round((annualSavings / (estimatedAIAgentCost + optimizedSipCost)) * 100);

  return (
    <div className="my-16 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-6 sm:p-10 shadow-xl">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Calculator className="w-3.5 h-3.5" />
          Enterprise ROI & Telecom Savings Simulator
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Calculate Your Annual Dialiqo Optimization Savings
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          See how transitioning to Dialiqo Voice AI agents and carrier-grade Kamailio/FreeSWITCH SIP trunks reduces operational overhead while delivering sub-300ms call response times.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sliders Input Panel */}
        <div className="lg:col-span-7 space-y-6 bg-white dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          {/* Monthly Call Volume Slider */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
              <span>Monthly Inbound/Outbound Call Volume:</span>
              <span className="font-mono text-blue-600 dark:text-blue-400 text-base font-bold">
                {monthlyCallVolume.toLocaleString("en-US")} calls
              </span>
            </div>
            <input
              type="range"
              min="5000"
              max="500000"
              step="5000"
              value={monthlyCallVolume}
              onChange={e => setMonthlyCallVolume(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>5,000</span>
              <span>250,000</span>
              <span>500,000+</span>
            </div>
          </div>

          {/* Current Human Support Agents */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
              <span>Current Live Support Agents:</span>
              <span className="font-mono text-blue-600 dark:text-blue-400 text-base font-bold">
                {currentAgents} Agents
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="200"
              step="5"
              value={currentAgents}
              onChange={e => setCurrentAgents(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>5</span>
              <span>100</span>
              <span>200+</span>
            </div>
          </div>

          {/* Monthly Telecom/PBX Infrastructure Cost */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
              <span>Monthly PBX / Telecom Maintenance ($):</span>
              <span className="font-mono text-blue-600 dark:text-blue-400 text-base font-bold">
                ${infrastructureCost.toLocaleString("en-US")}/mo
              </span>
            </div>
            <input
              type="range"
              min="2000"
              max="50000"
              step="1000"
              value={infrastructureCost}
              onChange={e => setInfrastructureCost(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>$2,000</span>
              <span>$25,000</span>
              <span>$50,000</span>
            </div>
          </div>
        </div>

        {/* Financial Results Output */}
        <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Estimated Annual Savings
            </div>
            <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight font-mono">
              ${Math.round(annualSavings).toLocaleString("en-US")}
            </div>
            <div className="mt-1 text-xs text-slate-400 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Projected ROI: <strong className="text-white">{roiPercentage}%</strong> in Year 1</span>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 space-y-3 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Current Annual Spend:</span>
                <span className="font-mono text-slate-400">${Math.round(annualCurrentCost).toLocaleString("en-US")}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Optimized Dialiqo Solution:</span>
                <span className="font-mono text-emerald-400 font-bold">${Math.round(annualNewCost).toLocaleString("en-US")}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Automated Calls (68% FCR):</span>
                <span className="font-mono text-cyan-400 font-bold">{Math.round(monthlyCallVolume * automationRate).toLocaleString("en-US")}/mo</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <Button
              onClick={onOpenConsultation}
              variant="glow"
              size="md"
              className="w-full"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Custom Proposal & Blueprint
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
