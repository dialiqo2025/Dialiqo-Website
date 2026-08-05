"use client";
import React, { useState } from 'react';
import { Cookie as CookieIcon, Sliders, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/common/Button';

interface UtilityPageProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation?: () => void;
}

export const CookiePolicyPage: React.FC<UtilityPageProps> = () => {
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: true,
    functional: true,
    marketing: false
  });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const cookieList = [
    { name: '__dlq_session', category: 'Essential', purpose: 'Encrypted session key for portal authentication', duration: 'Session' },
    { name: '__dlq_csrf', category: 'Essential', purpose: 'CSRF security token preventing unauthorized requests', duration: '1 Day' },
    { name: 'dlq_telemetry_opt', category: 'Analytics', purpose: 'Stores user preference for performance diagnostic reporting', duration: '1 Year' },
    { name: 'dlq_theme_mode', category: 'Functional', purpose: 'Remembers dark/light theme preference across pages', duration: '365 Days' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-20 selection:bg-blue-500 selection:text-white">
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-cyan-400 text-xs font-mono font-bold border border-blue-800">
            <CookieIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Browser Storage & Preferences</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Cookie Policy & Preference Center
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-mono">
            Control how cookies and local telemetry storage are used during your session.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        {/* Preference Control Box */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Cookie Preferences
              </h2>
              <p className="text-xs text-slate-500 font-mono mt-1">
                Customize your cookie consent choices below.
              </p>
            </div>
            <Sliders className="w-6 h-6 text-blue-500" />
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            {/* Essential */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  Essential Cookies <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold">Required</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">Necessary for secure session login, CSRF protection, and page navigation. Cannot be disabled.</div>
              </div>
              <input type="checkbox" checked disabled className="w-5 h-5 accent-blue-600 opacity-60 cursor-not-allowed" />
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">Performance & Analytics Cookies</div>
                <div className="text-xs text-slate-500 mt-1">Helps us measure page load times, latency bottlenecks, and overall app performance.</div>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={e => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="w-5 h-5 accent-blue-600 cursor-pointer"
              />
            </div>

            {/* Functional */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">Functional & Personalization</div>
                <div className="text-xs text-slate-500 mt-1">Remembers your dark mode preferences, selected regional hub, and preferred code snippets.</div>
              </div>
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={e => setPreferences({ ...preferences, functional: e.target.checked })}
                className="w-5 h-5 accent-blue-600 cursor-pointer"
              />
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">Marketing & Retargeting</div>
                <div className="text-xs text-slate-500 mt-1">Allows tailored promotional content on partner platforms. (Disabled by default).</div>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={e => setPreferences({ ...preferences, marketing: e.target.checked })}
                className="w-5 h-5 accent-blue-600 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            {savedSuccess ? (
              <span className="text-xs font-mono font-bold text-emerald-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Cookie Preferences Updated!
              </span>
            ) : (
              <span className="text-xs font-mono text-slate-400">Your preferences are saved in local browser storage.</span>
            )}

            <Button onClick={handleSave} variant="primary" size="md">
              Save Preference Settings
            </Button>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Active Cookie Inventory
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400">
                  <th className="pb-3 font-semibold">Cookie Name</th>
                  <th className="pb-3 font-semibold">Category</th>
                  <th className="pb-3 font-semibold">Purpose</th>
                  <th className="pb-3 font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {cookieList.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-3 font-bold text-blue-600 dark:text-blue-400">{item.name}</td>
                    <td className="py-3">{item.category}</td>
                    <td className="py-3 text-slate-500 dark:text-slate-400">{item.purpose}</td>
                    <td className="py-3 font-bold">{item.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
