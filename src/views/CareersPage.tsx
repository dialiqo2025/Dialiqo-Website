"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  User,
  Mail,
  FileText,
  Send,
  X,
  Search,
  Sparkles,
  HeartHandshake,
  Laptop,
  GraduationCap,
  Palmtree,
  ShieldCheck,
  DollarSign,
  Users,
  Award,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  UploadCloud,
  Globe,
  Zap,
  Coffee,
  Check,
  Star,
  MessageSquare,
  Building,
  Calendar,
  Terminal,
  Code
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { Button } from '../components/common/Button';
import { JOB_OPENINGS_DATA } from '../data/dialiqoData';
import { JobOpening } from '../types';
import { typo } from '@/lib/typography';

interface CareersPageProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeJob, setActiveJob] = useState<JobOpening | null>(null);
  const [isApplyingModal, setIsApplyingModal] = useState<boolean>(false);

  // Application form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedinUrl: '',
    githubUrl: '',
    position: '',
    coverLetter: '',
    agreedTerms: false
  });
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState<boolean>(false);

  // FAQ accordion state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const departments = ['All', 'VoIP Infrastructure', 'AI Research', 'Cloud Operations'];

  const filteredJobs = JOB_OPENINGS_DATA.filter(job => {
    const matchesDept = selectedDept === 'All' || job.department === selectedDept;
    const matchesSearch =
      searchQuery === '' ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleOpenApplyModal = (job?: JobOpening) => {
    if (job) {
      setActiveJob(job);
      setFormData(prev => ({ ...prev, position: job.title }));
    } else {
      setActiveJob(null);
      setFormData(prev => ({ ...prev, position: 'General Application / Spontaneous' }));
    }
    setIsApplyingModal(true);
    setApplicationSubmitted(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFileName(e.target.files[0].name);
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      // Keep state visible for user feedback
    }, 500);
  };

  // Company culture pillars
  const culturePillars = [
    {
      icon: Terminal,
      title: 'Engineering Craftsmanship',
      description: 'We care deeply about zero-fluff code, sub-millisecond network benchmarking, clean architecture, and fundamental technical elegance.'
    },
    {
      icon: Laptop,
      title: 'Autonomous & Remote-First',
      description: 'Work from wherever you feel most inspired. We value asynchronous clear writing, deep focus blocks, and results over presence.'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Mastery',
      description: 'Every engineer receives $3,000 annually for books, research conferences, certifications, and dedicated weekly research hours.'
    },
    {
      icon: ShieldCheck,
      title: 'Radical Transparency',
      description: 'Open architectural blueprints, visible salary bands, clear equity vesting schedules, and direct access to founders and technical leaders.'
    },
    {
      icon: Globe,
      title: 'Global & Diverse Team',
      description: 'Our distributed team spans 18 countries across 5 continents, bringing diverse perspectives to complex global telecom challenges.'
    },
    {
      icon: Zap,
      title: 'Impact at Global Scale',
      description: 'Your code will route over 50,000,000 real-time voice calls and AI streaming sessions for Fortune 500 enterprises every day.'
    }
  ];

  // Benefits & perks
  const benefits = [
    {
      icon: DollarSign,
      title: 'Top 1% Global Pay & Equity',
      description: 'SF/NYC benchmarked competitive salary ranges, meaningful initial stock option grants (RSUs), and annual performance bonuses.',
      category: 'Financial'
    },
    {
      icon: Coffee,
      title: 'Home Office & Tech Stipend',
      description: '$2,500 initial budget to build your dream home setup + top-spec M-series MacBook Pro or Linux workstation + $150/mo internet.',
      category: 'Workplace'
    },
    {
      icon: HeartHandshake,
      title: '100% Employer-Paid Healthcare',
      description: 'Comprehensive medical, dental, and vision insurance for you and your dependents with zero deductible options and HSA matches.',
      category: 'Wellness'
    },
    {
      icon: Palmtree,
      title: 'Unlimited PTO & Paid Sabbatical',
      description: 'Minimum 25 mandatory days off, 12 company holidays, plus a 4-week fully paid sabbatical every 3 years of tenure.',
      category: 'Rest & Life'
    },
    {
      icon: Users,
      title: 'Parental & Family Care',
      description: '16 weeks fully paid parental leave for both primary and secondary caregivers, plus flexible phased return-to-work schedules.',
      category: 'Family'
    },
    {
      icon: GraduationCap,
      title: '$3,000 Annual Growth Fund',
      description: 'Coverage for DefCon, KubeCon, IEEE, or SIP conferences, specialized courses, technical books, and 1-on-1 executive coaching.',
      category: 'Growth'
    }
  ];

  // Hiring Process Steps
  const hiringProcessSteps = [
    {
      step: '01',
      title: 'Application & Code Review',
      timeframe: '48 Hours',
      description: 'Our engineering hiring managers review your resume, GitHub profile, open-source commits, or system architecture portfolio.'
    },
    {
      step: '02',
      title: 'Technical Discovery Conversation',
      timeframe: '30 Minutes',
      description: 'A relaxed video chat with a principal engineer to discuss past projects, your technical philosophies, and mutual goals.'
    },
    {
      step: '03',
      title: 'Practical Architecture Deep Dive',
      timeframe: '90 Minutes',
      description: 'No LeetCode trivia or whiteboard tricks. We work together on a real-world system design challenge tailored to your field.'
    },
    {
      step: '04',
      title: 'Culture Fit & Formal Offer',
      timeframe: '48 Hours',
      description: 'Meet our CTO and VP of Engineering, review your competitive offer package (salary, equity, perks), and celebrate joining!'
    }
  ];

  // Employee Testimonials
  const employeeTestimonials = [
    {
      name: 'Dmitri Ivanov',
      role: 'Principal Telecom Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      tenure: '3 Years at Dialiqo',
      quote: 'At Dialiqo, I have full autonomy to solve C-level SIP proxy routing challenges without micro-management. Building systems that handle 50,000 active concurrent calls with sub-millisecond jitter is the most rewarding work of my career.',
      badge: 'VoIP Team'
    },
    {
      name: 'Elena Rostova',
      role: 'Head of AI Security Research',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      tenure: '2 Years at Dialiqo',
      quote: 'The intersection of generative voice AI and kernel-level network security is brand new. Here, we build zero-trust eBPF firewalls that drop malicious packets in 5 nanoseconds. The engineering rigor is incredible.',
      badge: 'AI Research'
    },
    {
      name: 'Marcus Vance',
      role: 'VP of Network Reliability',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      tenure: '4 Years at Dialiqo',
      quote: 'Working remotely across London, San Francisco, and Singapore with engineers who genuinely respect work-life balance while maintaining 99.999% carrier SLA is a breath of fresh air.',
      badge: 'Cloud SRE'
    }
  ];

  // Career FAQs
  const faqs = [
    {
      q: 'Are all engineering positions 100% remote?',
      a: 'Yes! All engineering, AI research, and cloud infrastructure roles are 100% remote-first. You can work from anywhere in the world where you have a reliable internet connection. We also offer co-working membership stipends if you prefer working outside your home.'
    },
    {
      q: 'How do you handle time zone differences across global teams?',
      a: 'We prioritize clear asynchronous communication in Slack and GitHub over synchronous meetings. Each squad maintains 4 core overlapping collaboration hours daily, leaving the rest of your day for uninterrupted deep engineering work.'
    },
    {
      q: 'What hardware and development environment do you provide?',
      a: 'Every new engineer receives a top-spec Apple M-series MacBook Pro or Linux workstation, along with a $2,500 setup budget for 4K monitors, ergonomic chairs, standing desks, and audio gear.'
    },
    {
      q: 'How are salary bands and compensation equity structured?',
      a: 'We benchmark all compensation against top-tier SF/NYC tech standards regardless of where you live. Our compensation packages include a competitive base salary, stock option grants (RSUs) with 4-year vesting, and annual performance bonuses.'
    },
    {
      q: 'Can international candidates apply if Dialiqo does not have an office in my country?',
      a: 'Absolutely! We hire globally via localized company entities or Employer of Record (EOR) partners like Deel, ensuring you receive full local healthcare, pension contributions, and employment protections in your home country.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-20 selection:bg-blue-500 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/90 text-cyan-300 text-xs font-mono font-bold border border-blue-800/80 shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Join Dialiqo Engineering & AI Research</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`${typo.heroTitle} leading-tight max-w-4xl mx-auto text-white`}
          >
            Shape the Future of Real-Time Voice AI & Telecom
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${typo.subtitle} text-slate-300 max-w-3xl mx-auto`}
          >
            We are building sub-300ms real-time voice streaming engines, global SIP edge proxy clusters, and zero-trust AI security for fortune 500 enterprises. Work remotely with world-class peers.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6"
          >
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
              <div className="text-2xl font-extrabold text-cyan-400 font-mono">100%</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Remote-First Culture</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
              <div className="text-2xl font-extrabold text-emerald-400 font-mono">4.9 / 5.0</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Glassdoor & Team Rating</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">$180k - $280k</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Average Senior Band + Equity</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
              <div className="text-2xl font-extrabold text-indigo-400 font-mono">18+ Countries</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Global Team Reach</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <a href="#open-positions">
              <Button variant="glow" size="lg" icon={<Briefcase className="w-4 h-4" />}>
                Explore Open Positions
              </Button>
            </a>
            <a href="#company-culture">
              <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
                Learn About Culture
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY CULTURE SECTION */}
      <section id="company-culture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 scroll-mt-28">
        <SectionHeader
          eyebrow="Engineering Culture"
          title="Principles That Define How We Build"
          description="We are engineers, researchers, and builders driven by deep technical curiosity, autonomy, and high standards of execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {culturePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-200 dark:border-blue-800">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`${typo.contentTitle} text-slate-900 dark:text-white`}>
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. BENEFITS & PERKS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeader
            eyebrow="Benefits & Compensation"
            title="Designed for Your Well-Being & Mastery"
            description="We invest heavily in our team members with top-tier compensation, comprehensive healthcare, and generous lifestyle stipends."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((ben, idx) => {
              const Icon = ben.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-200 dark:border-cyan-800">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400">
                      {ben.category}
                    </span>
                  </div>

                  <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white`}>
                    {ben.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {ben.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OPEN POSITIONS SECTION */}
      <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 scroll-mt-28">
        <SectionHeader
          eyebrow="Current Openings"
          title="Find Your Next Engineering Challenge"
          description="Explore our open positions in VoIP infrastructure, multi-modal AI research, and cloud SRE."
        />

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Department Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by title, stack, or region..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-900 dark:text-white placeholder-slate-400 border border-transparent focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Job Listings List */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all shadow-sm hover:shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold border border-blue-200 dark:border-blue-800">
                      {job.department}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-500" /> {job.location}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" /> {job.type}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-emerald-500" /> {job.experienceLevel}
                    </span>
                  </div>

                  <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    {job.overview}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.requirements.slice(0, 3).map((req, rIdx) => (
                      <span
                        key={rIdx}
                        className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {req.length > 50 ? `${req.slice(0, 50)}...` : req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Button
                    onClick={() => handleOpenApplyModal(job)}
                    variant="primary"
                    size="md"
                    className="cursor-pointer"
                  >
                    View Details & Apply &rarr;
                  </Button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
              <p className="text-sm text-slate-500 font-mono">No specific openings match your filter.</p>
              <Button onClick={() => handleOpenApplyModal()} variant="outline">
                Submit Spontaneous / Open Application
              </Button>
            </div>
          )}
        </div>

        {/* Open Spontaneous Application Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-slate-900 border border-blue-800/60 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className={`${typo.contentTitle} text-white`}>Don't see an exact match?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We are always eager to meet world-class C++ VoIP developers, Rust systems specialists, and AI researchers. Send us your portfolio for future openings.
            </p>
          </div>
          <Button onClick={() => handleOpenApplyModal()} variant="glow" size="md" className="shrink-0">
            Send Open Application
          </Button>
        </div>
      </section>

      {/* 5. HIRING PROCESS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeader
            eyebrow="Hiring Process"
            title="Fast, Respectful & Transparent"
            description="We respect your time. Our hiring process takes an average of 10 business days with zero fluff or artificial tests."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {hiringProcessSteps.map((stepItem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                    {stepItem.step}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/20">
                    {stepItem.timeframe}
                  </span>
                </div>

                <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white`}>
                  {stepItem.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {stepItem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EMPLOYEE TESTIMONIALS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <SectionHeader
          eyebrow="Team Perspectives"
          title="What Our Engineers Say"
          description="Hear directly from the team members shaping Dialiqo's technology and culture every day."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {employeeTestimonials.map((emp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-xl transition-all"
            >
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "{emp.quote}"
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={emp.avatar}
                    alt={emp.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-blue-500 shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {emp.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {emp.role}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold border border-slate-200 dark:border-slate-700 shrink-0">
                  {emp.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. FAQS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-12">
          <SectionHeader
            eyebrow="Candidate FAQs"
            title="Frequently Asked Questions"
            description="Got questions about applying, remote workflows, or compensation? We have clear answers."
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full p-6 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. APPLICATION MODAL */}
      <AnimatePresence>
        {isApplyingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsApplyingModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {applicationSubmitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className={`${typo.contentTitle} text-slate-900 dark:text-white`}>
                    Application Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for applying for <span className="font-bold text-blue-600 dark:text-blue-400">{formData.position}</span>. Our lead engineering hiring manager will review your submission and get back to you within 48 hours.
                  </p>
                  <Button onClick={() => setIsApplyingModal(false)} variant="primary">
                    Close Window
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <span className={`${typo.eyebrow} text-blue-600 dark:text-blue-400 font-mono`}>
                      Engineering Career Application
                    </span>
                    <h3 className={`${typo.contentTitle} text-slate-900 dark:text-white mt-1`}>
                      {activeJob ? activeJob.title : 'Spontaneous Application'}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Please fill out the details below. Our team reviews all engineering submissions within 48 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmitApplication} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Alexei Romanov"
                          className="w-full px-3.5 py-2.5 text-xs font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alexei@dev.com"
                          className="w-full px-3.5 py-2.5 text-xs font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          LinkedIn / Portfolio URL *
                        </label>
                        <input
                          type="url"
                          required
                          value={formData.linkedinUrl}
                          onChange={e => setFormData({ ...formData, linkedinUrl: e.target.value })}
                          placeholder="https://linkedin.com/in/username"
                          className="w-full px-3.5 py-2.5 text-xs font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          GitHub / Code Sample URL *
                        </label>
                        <input
                          type="url"
                          required
                          value={formData.githubUrl}
                          onChange={e => setFormData({ ...formData, githubUrl: e.target.value })}
                          placeholder="https://github.com/username"
                          className="w-full px-3.5 py-2.5 text-xs font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Resume Upload Box */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Attach Resume / CV (PDF, DOCX) *
                      </label>
                      <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-4 text-center hover:border-blue-500 transition-colors bg-slate-50/50 dark:bg-slate-800/50">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <UploadCloud className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                        <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block">
                          {attachedFileName ? attachedFileName : 'Click or Drag & Drop Resume File Here'}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          Max file size 10MB (PDF or Word)
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Cover Letter & Technical Background Summary
                      </label>
                      <textarea
                        rows={3}
                        value={formData.coverLetter}
                        onChange={e => setFormData({ ...formData, coverLetter: e.target.value })}
                        placeholder="Briefly describe your experience with FreeSWITCH, C++, Rust, Python AsyncIO, or K8s..."
                        className="w-full p-3 text-xs font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        required
                        id="agreeTerms"
                        checked={formData.agreedTerms}
                        onChange={e => setFormData({ ...formData, agreedTerms: e.target.checked })}
                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                      <label htmlFor="agreeTerms" className="text-[11px] text-slate-500 dark:text-slate-400 cursor-pointer">
                        I agree to Dialiqo storing my application data for recruitment purposes.
                      </label>
                    </div>

                    <Button type="submit" variant="glow" size="md" className="w-full cursor-pointer">
                      Submit Job Application
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 9. CTA SECTION */}
      <CTASection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
