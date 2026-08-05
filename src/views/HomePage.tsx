"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Phone,
  Radio,
  Network,
  Smartphone,
  Headphones,
  CheckCircle2,
  Server,
  Mic,
  Shield,
  Cloud,
  Code2,
  Users,
  Building2,
} from "lucide-react";
import { Button } from "../components/common/Button";
import { TestimonialsSection } from "../components/common/TestimonialsSection";
import { SERVICES_DATA, STATS_METRICS, TECHNOLOGIES_DATA } from "../data/dialiqoData";

interface HomePageProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

const HERO_CAPABILITIES = [
  { label: "VoIP", icon: Phone },
  { label: "WebRTC", icon: Radio },
  { label: "SIP", icon: Network },
  { label: "Voice AI", icon: Mic },
  { label: "Mobile", icon: Smartphone },
  { label: "24/7 Support", icon: Headphones },
];

const TAILORED_SOLUTIONS = [
  {
    title: "Omnichannel Customer Experience",
    desc: "Unify voice, chat, SMS, and WhatsApp on one carrier-grade CCaaS fabric.",
  },
  {
    title: "Custom Softswitch Engineering",
    desc: "Kamailio, FreeSWITCH, and OpenSIPS platforms tuned for your traffic profile.",
  },
  {
    title: "Real-Time Voice AI Agents",
    desc: "Sub-300ms speech-to-speech agents with CRM and telephony tool calling.",
  },
  {
    title: "SIP Trunking & SBC Layers",
    desc: "Secure session border control, LCR, and multi-carrier interconnects.",
  },
  {
    title: "Web & Mobile Softphones",
    desc: "WebRTC browsers and native apps with HD audio and presence.",
  },
  {
    title: "Cloud & DevOps for Telecom",
    desc: "Multi-region Kubernetes, observability, and five-nines deployment pipelines.",
  },
];

const SERVICE_ICONS = [Phone, Radio, Network, Mic, Cloud, Code2];

const TECH_LOGOS = [
  "Asterisk",
  "FreeSWITCH",
  "Kamailio",
  "OpenSIPS",
  "React",
  "Next.js",
  "Kubernetes",
  "AWS",
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const featuredServices = SERVICES_DATA.slice(0, 6);
  const missionStats = [
    {
      value: "20+",
      label: "Years of Combined Engineering Depth",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      value: STATS_METRICS[1]?.value ?? "4.2M+",
      label: "Daily Calls Across Global Edges",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    },
    {
      value: STATS_METRICS[0]?.value ?? "99.999%",
      label: "Carrier-Grade Uptime SLA",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    },
    {
      value: STATS_METRICS[4]?.value ?? "50+",
      label: "Enterprise Global Clients",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setFormSubmitting(true);
    try {
      await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.phone || "Website Inquiry",
          service: "Homepage Contact",
          notes: form.message,
          estimatedBudget: "TBD",
        }),
      });
      setFormSent(true);
      setTimeout(() => onNavigate("thank-you"), 600);
    } catch {
      setFormSent(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* 1. FULL-BLEED HERO */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/90" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs mb-5"
          > Ultimate Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] uppercase"
          >
            Own Your Communication Platform
            <br className="hidden sm:block" /> by Customizing Every Layer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Carrier-grade VoIP, sub-300ms Voice AI, and cloud engineering built
            for enterprises that need full control of every protocol layer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Button
              onClick={onOpenConsultation}
              variant="glow"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Book Consultation
            </Button>
            <Button
              onClick={() => onNavigate("services")}
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white/10"
            >
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-12 mx-auto max-w-4xl rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-5"
          >
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {HERO_CAPABILITIES.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-slate-200">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SPECIALIZED SOLUTIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Specialized and Tailor-Made Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-8">
              {TAILORED_SOLUTIONS.slice(0, 3).map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative pl-2"
                >
                  <span className="absolute -z-0 right-0 top-0 text-5xl font-black text-slate-100 dark:text-slate-900 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative mx-auto w-full max-w-md aspect-square">
              <div className="absolute inset-6 rounded-full bg-blue-500/10 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80"
                alt="Dialiqo telecom and voice infrastructure engineering"
                className="relative z-10 w-full h-full object-cover rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl"
              />
            </div>

            <div className="space-y-8">
              {TAILORED_SOLUTIONS.slice(3).map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative pl-2"
                >
                  <span className="absolute -z-0 right-0 top-0 text-5xl font-black text-slate-100 dark:text-slate-900 select-none">
                    {String(i + 4).padStart(2, "0")}
                  </span>
                  <div className="relative flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION + STATS */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Our Mission is to Deliver Growth and Efficiency
            </h2>
            <p className="mt-5 text-slate-300 leading-relaxed max-w-lg">
              Dialiqo partners with carriers, healthcare systems, and global
              enterprises to replace brittle telephony stacks with resilient
              SIP, Voice AI, and cloud platforms — measured in latency, SLA, and
              total cost of ownership.
            </p>
            <Button
              onClick={() => onNavigate("about")}
              variant="primary"
              size="md"
              className="mt-8"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {missionStats.map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl min-h-[160px] border border-white/10 group"
              >
                <img
                  src={stat.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/75" />
                <div className="relative z-10 p-5 h-full flex flex-col justify-end">
                  <div className="text-3xl sm:text-4xl font-black font-mono text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-300 leading-snug">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECH / PARTNER RIBBON */}
      <section className="py-10 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TECH_LOGOS.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => {
                  const match = TECHNOLOGIES_DATA.find(
                    (t) => t.name.toLowerCase().includes(name.toLowerCase()) ||
                      name.toLowerCase().includes(t.slug)
                  );
                  if (match) onNavigate("technology-detail", match.slug);
                  else onNavigate("technologies");
                }}
                className="text-sm sm:text-base font-bold tracking-wide text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase font-mono cursor-pointer"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Dialiqo&apos;s Cutting-Edge VoIP &amp; AI Development Services
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              From softswitch cores to autonomous voice agents — engineered for
              scale, security, and measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
              return (
                <motion.button
                  key={service.id}
                  type="button"
                  onClick={() => onNavigate("service-detail", service.slug)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="text-left group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-7 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all cursor-pointer"
                >
                  <div className="absolute top-6 right-6 w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="pr-14 text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Button
              onClick={() => onNavigate("services")}
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* 6. ABOUT / COMPANY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-4 h-4" /> About Dialiqo
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Leading VoIP &amp; Voice AI Development Company
            </h2>
            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              We design and ship production telecom systems — not slideware.
              Dialiqo engineers FreeSWITCH/Kamailio clusters, real-time speech
              AI pipelines, enterprise web/mobile apps, and multi-cloud
              operations for organizations that cannot afford downtime.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Full-stack ownership from SBC to AI agent runtime",
                "SOC 2, HIPAA, and PCI-ready delivery practices",
                "Global POPs with 48-hour senior engineer onboarding",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
            <Button
              onClick={() => onNavigate("about")}
              variant="primary"
              size="md"
              className="mt-8"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Learn More
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[2rem] blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80"
              alt="Dialiqo engineering team collaborating on VoIP platforms"
              className="relative rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs rounded-2xl bg-slate-950/90 backdrop-blur border border-white/10 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">Enterprise Partner</div>
                  <div className="text-xs text-slate-400">
                    Voice · SIP · Cloud · AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FULL-BLEED CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Your Go-To VoIP &amp; Voice AI Development Company
          </h2>
          <p className="mt-4 text-slate-300">
            Tell us your traffic profile, latency targets, and compliance
            constraints — we&apos;ll blueprint the stack.
          </p>
          <Button
            onClick={onOpenConsultation}
            variant="glow"
            size="lg"
            className="mt-8"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Hire Us Now
          </Button>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <TestimonialsSection onNavigate={onNavigate} />

      {/* 9. READY TO GET STARTED + FORM */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Ready To Get Started?
            </h2>
            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Share a few details about your VoIP, Voice AI, or cloud project.
              A Dialiqo solutions architect will respond within one business
              day with next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                NDA-friendly discovery
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-blue-600" />
                Architecture-first proposals
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-8 border border-slate-800 shadow-2xl">
            {formSent ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Message received</h3>
                <p className="mt-2 text-sm text-slate-400">
                  We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                    Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 (415) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full rounded-xl bg-white text-slate-950 font-bold text-sm py-3.5 hover:bg-slate-100 transition-colors disabled:opacity-60 cursor-pointer"
                >
                  {formSubmitting ? "Sending..." : "Submit Now"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
