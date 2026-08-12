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
  Mic,
  Cloud,
  Code2,
  Users,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../components/common/Button";
import { LinkButton } from "../components/common/LinkButton";
import { TestimonialsSection } from "../components/common/TestimonialsSection";
import { TECHNOLOGIES_DATA } from "../data/dialiqoData";
import { pageToPath } from "@/lib/routes";
import { typo } from "@/lib/typography";

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
    title: "Sessions Border Controller (SBC)",
    desc: "Secure SIP interconnects with topology hiding, DoS protection, and multi-carrier trunk management.",
  },
  {
    title: "IP PBX Software",
    desc: "Custom FreeSWITCH and Asterisk PBX platforms with extensions, queues, and enterprise call routing.",
  },
  {
    title: "Unified Communications",
    desc: "Voice, video, chat, and presence on one stack so teams collaborate without switching tools.",
  },
  {
    title: "Interactive Voice Response (IVR)",
    desc: "Intelligent IVR flows with DTMF, speech recognition, and CRM-driven call routing.",
  },
  {
    title: "WebRTC",
    desc: "Browser and mobile softphones with HD audio, low-latency media, and seamless SIP bridging.",
  },
  {
    title: "MVNO Billing Solution",
    desc: "Real-time rating, prepaid/postpaid billing, and usage analytics built for MVNO and telecom operators.",
  },
];

const SERVICE_ICONS = [Phone, Radio, Network, Mic, Cloud, Code2];

const HOME_SERVICES = [
  {
    title: "VOIP",
    desc: "Discover High-quality VoIP Services. From developing scalable platforms to enhancing your existing infrastructure, we guarantee flawless execution and superior quality with every project.",
    slug: "voip-development",
  },
  {
    title: "AI-ML",
    desc: "Stay Ahead of the Curve with Our Innovative AI/ML Development. We help you transform data into actionable insights that provide efficiency and drive growth for your business.",
    slug: "ai-development",
  },
  {
    title: "DevOps",
    desc: "Offering Customized DevOps Solutions for Superior Performance. Our DevOps services are designed to ensure faster delivery, enhanced collaboration, and superior performance.",
    slug: "devops",
  },
  {
    title: "QA Services",
    desc: "QA Services That Ensure Highest Quality. Our performance oriented services make sure that your software delivers in an efficient, reliable and secure manner for your business needs.",
    slug: "qa-testing",
  },
  {
    title: "Mobile & Web",
    desc: "Advanced Web and Mobile Development Services. We integrate the latest technologies to ensure a seamless experience while maintaining security, performance, and innovation.",
    slug: "web-development",
  },
  {
    title: "Staff Augmentation",
    desc: "Build a high-skilled team with our comprehensive Staff Augmentation Services that ensure you achieve your business goals on time and keep you ahead of the innovation.",
    slug: "staff-augmentation",
  },
];

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

  const missionStats = [
    {
      value: "20 +",
      label: "Years of Experience",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      value: "35 +",
      label: "Trusted Clients",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    },
    {
      value: "50 +",
      label: "Professionals",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    },
    {
      value: "57 +",
      label: "Completed Projects",
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

        <div className="relative z-10 max-w-5xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${typo.eyebrow} text-blue-400 mb-5`}
          > Ultimate Solutions
          </motion.p> */}

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className={`${typo.heroTitle} text-white leading-[1.1]`}
          >
            Own Your Communication Platform
            <br className="hidden sm:block" /> by Customizing Every Layer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className={`mt-5 ${typo.subtitle} text-slate-300 max-w-2xl mx-auto`}
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
            <LinkButton
              href="/contact"
              variant="glow"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Book Consultation
            </LinkButton>
            <LinkButton
              href="/services"
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white/10"
            >
              Explore Services
            </LinkButton>
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
            <p className={`${typo.eyebrow} text-blue-600 dark:text-blue-400 mb-3`}>
              Our Solutions
            </p>
            <h2 className={`${typo.sectionTitle} text-slate-900 dark:text-white`}>
              Specialized and Tailor-Made Solutions
            </h2>
            <p className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}>
              Our dedicated team helps you with solutions that best suit your needs
              and make way for seamless business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TAILORED_SOLUTIONS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
              >
                <span className="absolute right-4 top-3 text-5xl font-black text-slate-100 dark:text-slate-800 select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <p className={`${typo.eyebrow} text-blue-300 mb-3`}>
              WHAT WE DO?
            </p>
            <h2 className={`${typo.sectionTitle} leading-tight`}>
              Our Mission is to Deliver Growth and Efficiency
            </h2>
            <p className="mt-5 text-slate-300 leading-relaxed max-w-lg">
              We deliver end-to-end VoIP development services designed to support your growth. We align every solution with your business goals, ensuring innovation, flexibility, and success in today&apos;s evolving digital landscape.
            </p>
            <Button
              onClick={onOpenConsultation}
              variant="primary"
              size="md"
              className="mt-8"
            >
              GET IN TOUCH
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
      <section className="py-10 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-white dark:from-slate-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-white dark:from-slate-900 to-transparent" />
          <div className="flex w-max animate-tech-marquee">
            {[...TECH_LOGOS, ...TECH_LOGOS].map((name, idx) => {
              const match = TECHNOLOGIES_DATA.find(
                (t) =>
                  t.name.toLowerCase().includes(name.toLowerCase()) ||
                  name.toLowerCase().includes(t.slug)
              );
              const href = match
                ? pageToPath("technology-detail", match.slug)
                : "/technologies";
              return (
                <Link
                  key={`${name}-${idx}`}
                  href={href}
                  className="mx-6 sm:mx-10 shrink-0 text-sm sm:text-base font-bold tracking-wide text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase font-mono whitespace-nowrap"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SERVICES GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className={`${typo.eyebrow} text-blue-600 dark:text-blue-400 mb-3`}>
              OUR SERVICES
            </p>
            <h2 className={`${typo.sectionTitle} text-slate-900 dark:text-white`}>
              Dialiqo&apos;s Cutting-Edge VoIP Development Services
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Comprehensive services with assured quality and uncompromised standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_SERVICES.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <Link
                    href={pageToPath("service-detail", service.slug)}
                    className="block group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-7 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all h-full"
                  >
                    <div className="absolute top-6 right-6 w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className={`pr-14 ${typo.cardTitle} text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {service.desc}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <LinkButton
              href="/services"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Services
            </LinkButton>
          </div>
        </div>
      </section>

      {/* 6. ABOUT / COMPANY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`inline-flex items-center gap-2 ${typo.eyebrow} text-blue-600 dark:text-blue-400 mb-3`}>
              <Building2 className="w-4 h-4" /> FREESWITCH, ASTERISK &amp; OPENSIPS SOLUTIONS
            </div>
            <h2 className={`${typo.sectionTitle} text-slate-900 dark:text-white`}>
              Leading VoIP Development Company
            </h2>
            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              Dialiqo is a leading VoIP development company delivering custom VoIP software solutions using FreeSWITCH, Asterisk, Kamailio, and OpenSIPS for businesses worldwide. We specialize in scalable VoIP systems, carrier-grade solutions, and enterprise communication platforms, along with mobile and web development for seamless integration across devices. Our expertise includes QA services, VoIP testing, QA automation, and API testing to ensure high-performance and reliable systems. We also provide advanced AI and ML solutions, including sentiment analysis, AI chatbots, and AI voicebot connectors, to enhance customer engagement. Additionally, our DevOps services and staff augmentation help businesses scale efficiently with expert resources and smooth deployment processes.
            </p>
            <LinkButton
              href="/about"
              variant="primary"
              size="md"
              className="mt-8"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              GET IN TOUCH
            </LinkButton>
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
          <p className="text-slate-300">
            Drop us a line! We are here to answer your questions 24/7
          </p>
          <h2 className={`mt-4 ${typo.sectionTitle} text-white`}>
            Your Go-To VoIP Development Company
          </h2>
          <Button
            onClick={onOpenConsultation}
            variant="glow"
            size="lg"
            className="mt-8"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            GET IN TOUCH
          </Button>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <TestimonialsSection onNavigate={onNavigate} />

      {/* 9. READY TO GET STARTED + FORM */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`${typo.sectionTitle} text-slate-900 dark:text-white`}>
              Ready To Get Started?
            </h2>
            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              With decades of experience and deep expertise in VoIP, mobile, and web development, Dialiqo builds future-proof, intuitive, and highly scalable solutions that empower businesses worldwide. From custom VoIP software development using FreeSWITCH, Asterisk, Kamailio, and OpenSIPS to mobile applications, web platforms, and enterprise communication systems, we deliver technology that drives real business outcomes. Our team also specializes in QA testing, automation, API testing, AI-powered chatbots, sentiment analysis, AI voicebot connectors, DevOps, and staff augmentation services, ensuring reliable performance and smooth scalability. Partner with Dialiqo to transform your business with next-gen, tech-empowered solutions designed for growth.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-8 border border-slate-800 shadow-2xl">
            {formSent ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className={`${typo.contentTitle}`}>Message received</h3>
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
                    placeholder="Your Name *"
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
                    placeholder="Your Email *"
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
                    placeholder="Your Number *"
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
                    placeholder="Message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full rounded-xl bg-white text-slate-950 font-bold text-sm py-3.5 hover:bg-slate-100 transition-colors disabled:opacity-60 cursor-pointer"
                >
                  {formSubmitting ? "Sending..." : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
