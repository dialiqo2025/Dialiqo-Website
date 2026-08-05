"use client";
import React, { useState } from 'react';
import { Shield, CheckCircle2, Lock } from 'lucide-react';

interface UtilityPageProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation?: () => void;
}

export const PrivacyPolicyPage: React.FC<UtilityPageProps> = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const toc = [
    { id: 'overview', title: '1. Overview & Scope' },
    { id: 'data-collected', title: '2. Information We Collect' },
    { id: 'voice-ai-data', title: '3. Voice AI & Stream Processing' },
    { id: 'use-of-data', title: '4. How We Use Information' },
    { id: 'data-sharing', title: '5. Sub-processors & Carrier Peering' },
    { id: 'data-security', title: '6. Security & Encryption Standards' },
    { id: 'user-rights', title: '7. Your Rights (GDPR & CCPA)' },
    { id: 'contact-dpo', title: '8. Contact Data Protection Officer' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-20 selection:bg-blue-500 selection:text-white">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-cyan-400 text-xs font-mono font-bold border border-blue-800">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>Legal & Data Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-mono">
            Effective Date: January 15, 2026 | Version 2.4 | Applicable to Global Cloud & Telemetry Services
          </p>
        </div>
      </section>

      {/* Main Body Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Sticky Table of Contents Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Document Index
            </h3>
            <nav className="space-y-1">
              {toc.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`block px-3 py-2 rounded-xl text-xs font-mono transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold border-l-2 border-blue-600'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500 space-y-2">
              <div className="flex items-center gap-2 text-emerald-500 font-bold">
                <CheckCircle2 className="w-4 h-4" /> GDPR & CCPA Compliant
              </div>
              <p className="text-[11px] leading-relaxed">
                Need a signed Data Processing Addendum (DPA) or Business Associate Agreement (BAA)? Contact our legal desk at privacy@dialiqo.com.
              </p>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-10 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <section id="overview" className="space-y-3">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
              1. Overview & Scope
            </h2>
            <p>
              Dialiqo Ultimate Solutions Inc. ("Dialiqo", "we", "us", or "our") is committed to protecting the privacy, security, and confidentiality of customer data, real-time voice streams, telemetry metrics, and personal information processed through our enterprise software, SIP proxy engines, AI agents, and web properties.
            </p>
            <p>
              This Privacy Policy describes our practices regarding information collected through our global communications network, APIs, web interfaces, and customer portals.
            </p>
          </section>

          <section id="data-collected" className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
              2. Information We Collect
            </h2>
            <p>We collect information in three main categories:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-slate-900 dark:text-white">Account & Contact Information:</strong> Name, work email address, phone number, corporate entity, billing address, and authentication credentials when setting up an account or submitting an inquiry.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Telephony Metadata & Call Detail Records (CDRs):</strong> Originating/terminating SIP IP addresses, call durations, jitter, packet loss metrics, codec types (G.711, Opus), and latency telemetry required to enforce carrier SLAs and routing efficiency.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Technical Device & Usage Data:</strong> IP addresses, browser user-agents, operating system identifiers, and system logs collected automatically via secure telemetry agents.
              </li>
            </ul>
          </section>

          <section id="voice-ai-data" className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
              3. Voice AI & Stream Processing Safeguards
            </h2>
            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-blue-700 dark:text-blue-300 text-xs font-mono">
                <Lock className="w-4 h-4 text-blue-500" /> Zero Training Guarantee on Customer Streams
              </div>
              <p className="text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
                Dialiqo NEVER uses customer voice streams, real-time RTP audio buffers, or transcriptions to train foundational public LLM models. All stream processing occurs in ephemeral, encrypted memory buffers that are instantly purged upon session termination unless explicit customer logging is enabled.
              </p>
            </div>
          </section>

          <section id="use-of-data" className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
              4. How We Use Information
            </h2>
            <p>Information is processed solely for legitimate business purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Provisioning, routing, and maintaining carrier-grade SIP voice trunks and AI pipelines.</li>
              <li>Detecting fraudulent robocalling, voice spoofing, and unauthorized network intrusion.</li>
              <li>Generating accurate billing usage reports and SLA uptime metric verifications.</li>
              <li>Complying with statutory telecom regulations and lawful judicial orders.</li>
            </ul>
          </section>

          <section id="data-sharing" className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
              5. Sub-processors & Carrier Peering
            </h2>
            <p>
              To deliver global low-latency voice, Dialiqo peers directly with Tier-1 carriers and utilizes audited infrastructure providers including AWS, GCP, Equinix Bare Metal, and Bandwidth/Twilio carrier exchanges.
            </p>
          </section>

          <section id="data-security" className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
              6. Security & Encryption Standards
            </h2>
            <p>
              All audio streams are encrypted in transit using TLS 1.3 and SRTP (Secure Real-Time Transport Protocol). Data at rest is encrypted using AES-256 with key rotation managed via Hardware Security Modules (HSM). Dialiqo maintains SOC 2 Type II, ISO 27001, and HIPAA compliance certifications.
            </p>
          </section>

          <section id="user-rights" className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
              7. Your Rights (GDPR & CCPA)
            </h2>
            <p>
              Depending on your jurisdiction, you have rights to access, rectify, port, or request deletion of your personal data. You may exercise these rights at any time by contacting our privacy team.
            </p>
          </section>

          <section id="contact-dpo" className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
              8. Contact Data Protection Officer
            </h2>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 font-mono text-xs space-y-2">
              <div className="font-bold text-slate-900 dark:text-white">Dialiqo Data Protection Office (DPO)</div>
              <div>Email: <a href="mailto:privacy@dialiqo.com" className="text-blue-600 dark:text-blue-400 underline">privacy@dialiqo.com</a></div>
              <div>Address: 500 Howard Street, Suite 800, San Francisco, CA 94105, USA</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
