"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Logo } from "../common/Logo";
import { pageToPath } from "@/lib/routes";

interface FooterProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

const linkClass = "text-slate-400 hover:text-white transition-colors";

const OUR_SERVICES = [
  { label: "VoIP Development", slug: "voip-development" },
  { label: "AI-ML Development", slug: "ai-ml-development-services" },
  { label: "Web Development", slug: "web-development" },
  { label: "Mobile App Development", slug: "mobile-app-development" },
  { label: "DevOps Services", slug: "devops-consulting-services" },
  { label: "QA Services", slug: "qa-testing-services" },
  { label: "AI Voicebot Connector", slug: "voice-ai-solutions" },
] as const;

const SOCIAL_LINKS = [
  { label: "WhatsApp", href: "https://wa.me/919974542501", Icon: MessageCircle },
  { label: "Email", href: "mailto:info@dialiqo.com", Icon: Mail },
  { label: "LinkedIn", href: "https://linkedin.com/company/dialiqo", Icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/dialiqo", Icon: Twitter },
  { label: "Facebook", href: "https://facebook.com/dialiqo", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/dialiqo", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@dialiqo", Icon: Youtube },
] as const;

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  void onNavigate;
  void onOpenConsultation;

  return (
    <footer id="site-footer" className="site-footer bg-slate-950 text-slate-300 pt-14 pb-8 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Dialiqo home" className="inline-block mb-4">
              <Logo variant="dark" size="md" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Delivering Custom Technology Solutions That Accelerate Business
              Growth
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h5 className="text-sm font-bold text-white mb-4">Our Services</h5>
            <ul className="space-y-2.5 text-sm">
              {OUR_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={pageToPath("service-detail", s.slug)}
                    className={linkClass}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-sm font-bold text-white mb-4">Company</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className={linkClass}>
                  About Us
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

          {/* Products */}
          <div>
            <h5 className="text-sm font-bold text-white mb-4">Products</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions" className={linkClass}>
                  Contact Center
                </Link>
              </li>
              <li>
                <Link href="/solutions" className={linkClass}>
                  VoIP Billing
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h5 className="text-sm font-bold text-white mb-4">Get In Touch</h5>
            <div className="space-y-4 text-sm text-slate-400">
              <div>
                <div className="font-bold text-white mb-0.5">INDIA</div>
                <p>E509 Ganesh Glory 11, Ahmedabad</p>
              </div>
              <div>
                <div className="font-bold text-white mb-0.5">USA</div>
                <p>Fremont, CA 94536</p>
              </div>
              <a
                href="tel:+919974542501"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-blue-400" />
                +91 9974542501
              </a>
              <a
                href="mailto:info@dialiqo.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-blue-400" />
                info@dialiqo.com
              </a>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          Made with <span className="text-red-500">❤️</span> in India | &copy;{" "}
          {new Date().getFullYear()} Dialiqo Technologies LLP
        </div>
      </div>
    </footer>
  );
};
