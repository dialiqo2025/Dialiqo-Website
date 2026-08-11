"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Logo } from "../common/Logo";
import {
  SERVICES_DATA,
  INDUSTRIES_DATA,
  TRUST_BADGES,
} from "../../data/dialiqoData";
import { pageToPath } from "@/lib/routes";

const LIVE_TECH_LINKS = [
  { name: "FreeSWITCH", slug: "freeswitch" },
  { name: "Asterisk", slug: "asterisk" },
  { name: "Kamailio", slug: "kamailio" },
  { name: "OpenSIPS", slug: "opensips" },
] as const;

interface FooterProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

const linkClass = "hover:text-blue-400 transition-colors";

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }
  };

  void onOpenConsultation;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-12 border-b border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <Logo
              variant="dark"
              size="md"
              onClick={() => onNavigate("home")}
              className="mb-3"
            />
            <p className="text-slate-400 max-w-xl text-base leading-relaxed">
              Global technology partner specializing in Carrier-Grade VoIP
              Switching, Sub-300ms Voice AI Agents, Enterprise Web & Mobile
              Systems, and Cloud DevOps Engineering.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-900/90 p-6 rounded-2xl border border-slate-800">
            <h4 className="text-sm font-bold text-white mb-2">
              Subscribe to Dialiqo Tech Briefings
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Monthly whitepapers on SIP packet engineering, generative Voice AI
              models, and cloud microservice resilience.
            </p>

            {newsletterSubscribed ? (
              <div className="text-xs text-emerald-400 font-semibold flex items-center gap-2 p-3 bg-emerald-950/60 rounded-xl border border-emerald-800">
                <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing to
                Dialiqo Tech Insights!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="cto@enterprise.com"
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs rounded-xl transition-all shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div>
            <h5 className="text-xs font-semibold uppercase text-slate-200 tracking-wider mb-4 font-mono">
              Core Services
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SERVICES_DATA.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href={pageToPath("service-detail", s.slug)}
                    className={linkClass}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase text-slate-200 tracking-wider mb-4 font-mono">
              Industries
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {INDUSTRIES_DATA.map((i) => (
                <li key={i.id}>
                  <Link
                    href={pageToPath("industry-detail", i.slug)}
                    className={linkClass}
                  >
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase text-slate-200 tracking-wider mb-4 font-mono">
              VoIP Stack
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {LIVE_TECH_LINKS.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={pageToPath("technology-detail", t.slug)}
                    className={linkClass}
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase text-slate-200 tracking-wider mb-4 font-mono">
              Company
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/about" className={linkClass}>
                  About Dialiqo
                </Link>
              </li>
              <li>
                <Link href="/solutions" className={linkClass}>
                  Solutions & Products
                </Link>
              </li>
              <li>
                <Link href="/resources" className={linkClass}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h5 className="text-xs font-semibold uppercase text-slate-200 tracking-wider mb-4 font-mono">
              Global HQ
            </h5>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2 text-slate-400">
              <div className="font-bold text-white">San Francisco HQ</div>
              <p>500 Howard Street, Suite 800, San Francisco, CA 94105</p>
              <p className="text-blue-400 font-mono">+1 (415) 890-3400</p>
              <p className="text-cyan-400 font-mono">sf@dialiqo.com</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-slate-500">
              Security & Compliance:
            </span>
            {TRUST_BADGES.map((badge, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px]"
              >
                {badge.name}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-emerald-400 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>All Systems Operational (99.999% SLA)</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/60 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Dialiqo Ultimate Solutions Inc.
            All rights reserved.
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 font-mono">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
