"use client";
import React from 'react';
import { motion } from 'motion/react';
import { 
  PhoneCall, Cpu, MessageSquare, Bot, Mic, Globe, Smartphone, Layers, 
  CheckCircle2, Zap, Server, Shield, Cloud, Terminal, Code, Database, 
  Activity, Users, Compass, FileCode, Workflow, ArrowRight, Settings
} from 'lucide-react';

interface ServiceIllustrationProps {
  slug: string;
}

export const ServiceIllustration: React.FC<ServiceIllustrationProps> = ({ slug }) => {
  // Normalize slug for robust matching
  const normalizedSlug = slug.toLowerCase();

  // 1b. QA TESTING
  if (normalizedSlug.includes('qa')) {
    return (
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-emerald-600/10 pointer-events-none" />
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Quality Assurance Matrix</h4>
              <p className="text-xs text-slate-400 font-mono">VoIP · Automation · API Validation</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
            Bug-Free
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col items-center">
            <CheckCircle2 className="w-5 h-5 text-blue-400 mb-2" />
            <div className="font-bold text-sm text-slate-200">VoIP Testing</div>
            <div className="mt-1 text-[10px] text-slate-500 font-mono">Call Quality / MOS</div>
          </div>
          <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 flex flex-col items-center">
            <Zap className="w-5 h-5 text-cyan-400 mb-2" />
            <div className="font-bold text-sm text-cyan-200">QA Automation</div>
            <div className="mt-1 text-[10px] text-cyan-400/80 font-mono">CI / Regression</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col items-center">
            <FileCode className="w-5 h-5 text-emerald-400 mb-2" />
            <div className="font-bold text-sm text-slate-200">API Testing</div>
            <div className="mt-1 text-[10px] text-slate-500 font-mono">Security / Perf</div>
          </div>
        </div>
      </div>
    );
  }

  // 1. VOIP DEVELOPMENT
  if (normalizedSlug.includes('voip')) {
    return (
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Carrier SIP Telephony Fabric</h4>
              <p className="text-xs text-slate-400 font-mono">Kamailio SBC + FreeSWITCH Cluster</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
            99.999% SLA
          </span>
        </div>

        {/* Nodes Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col items-center">
            <div className="text-xs font-mono text-blue-400 mb-1">PSTN / SIP</div>
            <div className="font-bold text-sm text-slate-200">SIP Trunk</div>
            <div className="mt-2 text-[10px] text-slate-500 font-mono">G.711 / Opus</div>
          </div>

          <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 flex flex-col items-center relative">
            <div className="text-xs font-mono text-cyan-400 mb-1">Load Balancer</div>
            <div className="font-bold text-sm text-cyan-200">Kamailio SBC</div>
            <div className="mt-2 text-[10px] text-cyan-400/80 font-mono">Sub-10ms Routing</div>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 flex flex-col items-center">
            <div className="text-xs font-mono text-purple-400 mb-1">Media Cluster</div>
            <div className="font-bold text-sm text-purple-200">FreeSWITCH</div>
            <div className="mt-2 text-[10px] text-purple-300/80 font-mono">100k+ Channels</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col items-center">
            <div className="text-xs font-mono text-emerald-400 mb-1">Client Endpoint</div>
            <div className="font-bold text-sm text-slate-200">WebRTC / App</div>
            <div className="mt-2 text-[10px] text-emerald-400/80 font-mono">SRTP Encrypted</div>
          </div>
        </div>

        {/* Telemetry Metrics Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap justify-between text-xs font-mono text-slate-400">
          <span>Packet Jitter: <strong className="text-emerald-400">&lt; 2ms</strong></span>
          <span>Codec Transcode: <strong className="text-blue-400">Hardware Accel</strong></span>
          <span>Failover Time: <strong className="text-purple-400">&lt; 50ms</strong></span>
        </div>
      </div>
    );
  }

  // 2. VOICE AI
  if (normalizedSlug.includes('voice-ai') || normalizedSlug.includes('voice-ai-solutions')) {
    return (
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
              <Mic className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Speech-to-Speech Realtime Engine</h4>
              <p className="text-xs text-slate-400 font-mono">Sub-300ms Human Parity Voice AI</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold">
            Sub-300ms
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-purple-400 font-mono">01. AUDIO IN</div>
            <div className="font-bold text-xs text-white mt-1">WebRTC / Phone</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-cyan-400 font-mono">02. ASR</div>
            <div className="font-bold text-xs text-white mt-1">Deepgram Streaming</div>
          </div>
          <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-700">
            <div className="text-[10px] text-purple-300 font-mono">03. REASONING</div>
            <div className="font-bold text-xs text-purple-200 mt-1">Gemini / OpenAI</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-emerald-400 font-mono">04. TTS</div>
            <div className="font-bold text-xs text-white mt-1">ElevenLabs Neural</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-blue-400 font-mono">05. AUDIO OUT</div>
            <div className="font-bold text-xs text-white mt-1">Zero Latency Stream</div>
          </div>
        </div>

        <div className="mt-6 p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-mono">Voice Activity Detection (VAD) Instant Barge-in Active</span>
          </div>
          <span className="text-emerald-400 font-bold font-mono">70+ Accents Supported</span>
        </div>
      </div>
    );
  }

  // 3. AI AGENT DEVELOPMENT
  if (normalizedSlug.includes('ai-agent')) {
    return (
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Multi-Agent Workflow DAG</h4>
              <p className="text-xs text-slate-400 font-mono">LangGraph Orchestration & Tool Calling</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold">
            Autonomous
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-mono text-emerald-400 mb-1">Goal Orchestrator</div>
            <div className="font-bold text-sm text-white">Supervisor Agent</div>
            <p className="text-[11px] text-slate-400 mt-2">Decomposes enterprise objective into sub-tasks.</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60">
            <div className="text-xs font-mono text-emerald-300 mb-1">Execution Tools</div>
            <div className="font-bold text-sm text-emerald-200">Worker Agents</div>
            <p className="text-[11px] text-emerald-100/80 mt-2">Executes SQL, REST APIs, and CRM updates.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-mono text-cyan-400 mb-1">Safety Guardrails</div>
            <div className="font-bold text-sm text-white">Human-In-The-Loop</div>
            <p className="text-[11px] text-slate-400 mt-2">Sign-off required for high-risk operations.</p>
          </div>
        </div>
      </div>
    );
  }

  // 4. AI CHATBOT DEVELOPMENT
  if (normalizedSlug.includes('ai-chatbot')) {
    return (
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Omnichannel Messaging Hub</h4>
              <p className="text-xs text-slate-400 font-mono">WhatsApp, Web Widget, Slack, MS Teams</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
            Omnichannel
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold text-emerald-400">WhatsApp</div>
            <div className="text-[10px] text-slate-400 mt-1">Cloud API Direct</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold text-blue-400">Web Portal</div>
            <div className="text-[10px] text-slate-400 mt-1">React SDK Widget</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold text-purple-400">Slack & Teams</div>
            <div className="text-[10px] text-slate-400 mt-1">Employee Assist</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold text-amber-400">CRM Handoff</div>
            <div className="text-[10px] text-slate-400 mt-1">Zendesk / HubSpot</div>
          </div>
        </div>
      </div>
    );
  }

  // 5. AI DEVELOPMENT
  if (normalizedSlug.includes('ai-') || normalizedSlug.includes('ai')) {
    return (
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Enterprise RAG & LLM Pipeline</h4>
              <p className="text-xs text-slate-400 font-mono">Private Knowledge Grounding & Vector Search</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold">
            Zero Retention
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-mono text-blue-400 mb-1">Knowledge Base</div>
            <div className="font-bold text-sm text-white">Document Chunking</div>
            <p className="text-[11px] text-slate-400 mt-1">PDFs, SQL, Confluence, Notion</p>
          </div>
          <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800">
            <div className="text-xs font-mono text-cyan-400 mb-1">Semantic Store</div>
            <div className="font-bold text-sm text-white">Vector DB (Qdrant)</div>
            <p className="text-[11px] text-cyan-200/80 mt-1">Sub-15ms Similarity Search</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-mono text-purple-400 mb-1">Model Gateway</div>
            <div className="font-bold text-sm text-white">LLM Fine-Tuning</div>
            <p className="text-[11px] text-slate-400 mt-1">OpenAI, Claude 3.5, Gemini</p>
          </div>
        </div>
      </div>
    );
  }

  // 6. DEVOPS & CLOUD ENGINEERING
  if (normalizedSlug.includes('devops') || normalizedSlug.includes('cloud')) {
    return (
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Cloud className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">GitOps & Kubernetes Infrastructure</h4>
              <p className="text-xs text-slate-400 font-mono">Automated CI/CD & Terraform Multi-Cloud</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
            Zero Downtime
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-mono text-blue-400">Git Commit</div>
            <div className="font-bold text-xs text-white mt-1">GitHub / GitLab</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-mono text-cyan-400">CI Build</div>
            <div className="font-bold text-xs text-white mt-1">Docker Image</div>
          </div>
          <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800">
            <div className="text-xs font-mono text-purple-400">GitOps Sync</div>
            <div className="font-bold text-xs text-purple-200 mt-1">ArgoCD Deploy</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-mono text-emerald-400">Production</div>
            <div className="font-bold text-xs text-white mt-1">AWS / K8s Cluster</div>
          </div>
        </div>
      </div>
    );
  }

  // 7. WEB / REACT / NEXTJS / LARAVEL / NODEJS
  if (
    normalizedSlug.includes('web') || 
    normalizedSlug.includes('react') || 
    normalizedSlug.includes('next') || 
    normalizedSlug.includes('laravel') || 
    normalizedSlug.includes('node')
  ) {
    return (
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Full-Stack Application Architecture</h4>
              <p className="text-xs text-slate-400 font-mono">Edge Rendering, APIs & Distributed Database</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-bold">
            High Concurrency
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-mono text-indigo-400 mb-1">Frontend Layer</div>
            <div className="font-bold text-sm text-white">Modern UI Components</div>
            <p className="text-[11px] text-slate-400 mt-1">Sub-second page load Core Web Vitals</p>
          </div>
          <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800">
            <div className="text-xs font-mono text-cyan-400 mb-1">Backend API Engine</div>
            <div className="font-bold text-sm text-white">Microservices & Queues</div>
            <p className="text-[11px] text-cyan-200/80 mt-1">REST / GraphQL / WebSockets</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-mono text-emerald-400 mb-1">Data Layer</div>
            <div className="font-bold text-sm text-white">PostgreSQL & Redis</div>
            <p className="text-[11px] text-slate-400 mt-1">High-throughput ACID transactions</p>
          </div>
        </div>
      </div>
    );
  }

  // 8. MOBILE / FLUTTER / ANDROID / IOS
  if (
    normalizedSlug.includes('mobile') || 
    normalizedSlug.includes('flutter') || 
    normalizedSlug.includes('android') || 
    normalizedSlug.includes('ios')
  ) {
    return (
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Mobile System Architecture</h4>
              <p className="text-xs text-slate-400 font-mono">60fps Native UI & Offline Sync</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold">
            60 FPS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-mono text-blue-400 mb-1">UI Presentation</div>
            <div className="font-bold text-sm text-white">Fluid Touch Interface</div>
            <p className="text-[11px] text-slate-400 mt-1">Smooth animations & responsive layouts</p>
          </div>
          <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800">
            <div className="text-xs font-mono text-cyan-400 mb-1">Native Hardware Bridge</div>
            <div className="font-bold text-sm text-white">Camera, Audio, Biometrics</div>
            <p className="text-[11px] text-cyan-200/80 mt-1">Background Push & Bluetooth</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-mono text-purple-400 mb-1">Sync & Security</div>
            <div className="font-bold text-sm text-white">Encrypted Local DB</div>
            <p className="text-[11px] text-slate-400 mt-1">Offline-first data replication</p>
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT / CONSULTING / QA / DESIGN / STAFF AUG
  return (
    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
            <Workflow className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-base text-white">Enterprise Practice Delivery Model</h4>
            <p className="text-xs text-slate-400 font-mono">Agile Execution & Architectural Validation</p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold">
          ISO Certified
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <div className="text-xs font-mono text-blue-400 mb-1">Phase 1</div>
          <div className="font-bold text-sm text-white">Audit & Strategy</div>
          <p className="text-[11px] text-slate-400 mt-1">Requirements & System Blueprint</p>
        </div>
        <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800">
          <div className="text-xs font-mono text-cyan-400 mb-1">Phase 2</div>
          <div className="font-bold text-sm text-white">Agile Execution</div>
          <p className="text-[11px] text-cyan-200/80 mt-1">Sprint delivery & Live demos</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <div className="text-xs font-mono text-emerald-400 mb-1">Phase 3</div>
          <div className="font-bold text-sm text-white">Scale & Support</div>
          <p className="text-[11px] text-slate-400 mt-1">24/7 Operations & Maintenance</p>
        </div>
      </div>
    </div>
  );
};
