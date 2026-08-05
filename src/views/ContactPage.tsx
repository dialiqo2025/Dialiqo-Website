"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  Globe, 
  Building2, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  ExternalLink, 
  QrCode, 
  Users, 
  Check, 
  Zap, 
  ArrowRight,
  User,
  Building,
  FileText,
  Lock,
  Smartphone
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { Button } from '../components/common/Button';
import { GLOBAL_OFFICES } from '../data/dialiqoData';

interface ContactPageProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenConsultation }) => {
  // Contact form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    region: 'San Francisco HQ (North America)',
    serviceFocus: 'VoIP Modernization & SIP Trunking',
    concurrencyVolume: '1,000 - 10,000 concurrent calls',
    message: '',
    requireNda: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Selected Office Map Pin
  const [selectedOffice, setSelectedOffice] = useState(GLOBAL_OFFICES[0]);

  // Calendly Interactive Widget State
  const [bookingStep, setBookingStep] = useState<1 | 2 | 3>(1);
  const [selectedTopic, setSelectedTopic] = useState('Sub-300ms Voice AI Architecture');
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 10:00 AM PST');
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM');
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    company: '',
    notes: ''
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // WhatsApp QR Code Modal
  const [showQrCode, setShowQrCode] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Office Images mapping
  const officeImages: Record<string, string> = {
    'San Francisco': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=800',
    'London': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800',
    'Singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800',
    'Dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    'Tokyo': 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800'
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+14158903400');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  const contactFaqs = [
    {
      q: 'How fast does Dialiqo respond to enterprise sales inquiries?',
      a: 'Inquiries submitted through this direct desk are routed immediately to our principal engineering leaders in San Francisco, London, or Singapore based on your operating timezone. You will receive an initial response and preliminary assessment within 2 business hours.'
    },
    {
      q: 'Do you execute mutual NDAs prior to discussing proprietary architecture?',
      a: 'Yes. If you check the "Request NDA" box in the contact form, our legal team will issue a standard mutual NDA to your work email within 30 minutes, or you can email your standard corporate NDA to legal@dialiqo.com.'
    },
    {
      q: 'Can we schedule an on-site architectural briefing at one of your global offices?',
      a: 'Absolutely. We regularly host executive architecture workshops and technical discovery sessions at our offices in San Francisco, London, Singapore, Dubai, and Tokyo. Alternatively, our senior architects can travel to your location.'
    },
    {
      q: 'What information should we prepare for our initial discovery briefing?',
      a: 'To make the briefing as productive as possible, having a high-level overview of your current telephony stack (e.g. FreeSWITCH, Asterisk, Avaya, Cisco, Twilio), active call volume / concurrent channels, target latency requirements, and compliance constraints (e.g. HIPAA, PCI-DSS) is helpful.'
    },
    {
      q: 'How do 24/7 SLA emergency escalation hotlines work for existing clients?',
      a: 'Contracted enterprise clients receive direct access to dedicated PagerDuty integration webhooks and high-priority carrier escalation phone lines that bridge directly to on-call Tier-3 Site Reliability Engineers in under 60 seconds.'
    }
  ];

  const timeSlots = ['09:00 AM', '10:30 AM', '01:30 PM', '03:00 PM', '04:30 PM'];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-20 selection:bg-blue-500 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/90 text-cyan-300 text-xs font-mono font-bold border border-blue-800/80 shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>24/7 Global Solutions Engineering Desk</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto text-white"
          >
            Connect With Dialiqo Solutions Architects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you are building sub-300ms Voice AI pipelines, modernizing legacy carrier SIP trunks, or conducting a zero-trust telecom audit, our team is ready to assist across 5 regional hubs.
          </motion.p>

          {/* Key SLA Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6"
          >
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
              <div className="text-2xl font-extrabold text-cyan-400 font-mono">&lt; 2 Hours</div>
              <div className="text-xs text-slate-400 font-mono mt-1">First Response SLA</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
              <div className="text-2xl font-extrabold text-emerald-400 font-mono">24 / 7 / 365</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Active SRE Monitoring</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">5 Regional Hubs</div>
              <div className="text-xs text-slate-400 font-mono mt-1">SF, London, SG, Dubai, Tokyo</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
              <div className="text-2xl font-extrabold text-indigo-400 font-mono">SOC 2 & ISO</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Certified Data Protection</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <a href="#contact-form">
              <Button variant="glow" size="lg" icon={<Send className="w-4 h-4" />}>
                Send Direct Message
              </Button>
            </a>
            <a href="#calendly-section">
              <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800" icon={<Calendar className="w-4 h-4" />}>
                Book Calendly Discovery Session
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pt-16">
        
        {/* 2. FORM & SIDEBAR SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 scroll-mt-28" id="contact-form">
          {/* LEFT: DIRECT CONTACT FORM */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                  Enterprise Inquiry Desk
                </span>
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-full font-bold border border-emerald-500/20">
                  Engineers On Duty
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Send a Direct Technical Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Fill out the form below to connect directly with our solution architects.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6 bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-8 border border-slate-200 dark:border-slate-800"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  Inquiry Transmitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-blue-600 dark:text-blue-400">{formData.fullName}</span>. An Enterprise Solution Executive from our <span className="font-semibold text-slate-900 dark:text-white">{formData.region}</span> team has received your message and will reply within 2 hours.
                </p>
                <Button onClick={() => setFormSubmitted(false)} variant="outline">
                  Send Another Inquiry
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. David Sterling"
                        className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="d.sterling@aurabank.com"
                        className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (415) 890-0000"
                        className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Aura Financial Group"
                        className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Operating Region / Hub
                    </label>
                    <select
                      value={formData.region}
                      onChange={e => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none cursor-pointer"
                    >
                      <option>San Francisco HQ (North America)</option>
                      <option>London Hub (Europe & UK)</option>
                      <option>Singapore Hub (Asia-Pacific)</option>
                      <option>Dubai Hub (Middle East & Africa)</option>
                      <option>Tokyo Hub (Japan & East Asia)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Primary Service Interest
                    </label>
                    <select
                      value={formData.serviceFocus}
                      onChange={e => setFormData({ ...formData, serviceFocus: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none cursor-pointer"
                    >
                      <option>VoIP Modernization & SIP Trunking</option>
                      <option>Sub-300ms Voice AI Agents</option>
                      <option>Cloud Infrastructure & Kamailio SRE</option>
                      <option>Custom Software & Mobile Solutions</option>
                      <option>Zero-Trust Security & Biometrics</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Project Message / Technical Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your active telephony infrastructure, target call volume, desired SLAs, or AI integration goals..."
                    className="w-full p-3.5 text-xs font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="requireNda"
                    checked={formData.requireNda}
                    onChange={e => setFormData({ ...formData, requireNda: e.target.checked })}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="requireNda" className="text-[11px] text-slate-600 dark:text-slate-400 cursor-pointer flex items-center gap-1">
                    <Lock className="w-3 h-3 text-amber-500" />
                    <span>Issue formal mutual NDA prior to detailed architecture review</span>
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  className="w-full cursor-pointer mt-2"
                  disabled={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                >
                  {isSubmitting ? 'Transmitting Message...' : 'Submit Enterprise Inquiry'}
                </Button>
              </form>
            )}
          </div>

          {/* RIGHT: QUICK ACTION CARDS (WhatsApp & Direct Hotline) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WHATSAPP CTA CARD */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-900 text-white border border-emerald-800/80 shadow-xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    WhatsApp Desk Active
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-emerald-900/80 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-700">
                  Replies &lt; 5 mins
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                  WhatsApp Quick Connect
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Need an immediate answer regarding SIP trunk routing, pricing, or emergency API limits? Connect directly with our on-duty solution engineers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-800/60 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Direct Number:</span>
                  <span className="font-bold text-emerald-400">+1 (415) 890-3400</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Operating Desk:</span>
                  <span className="text-slate-200">Global SRE & Sales</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/14158903400"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Start Chat on WhatsApp</span>
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* EMERGENCY SRE CARRIER HOTLINE CARD */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Tier-3 Carrier Emergency Line</span>
              </div>

              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Active Client Incident Escalation
              </h4>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                If you are an existing enterprise customer with a P1 critical incident, contact your dedicated escalation PIN or trigger PagerDuty directly.
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">Global Incident Line:</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">+1 (800) 555-DIALIQO</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CALENDLY PLACEHOLDER (INTERACTIVE MEETING BOOKER) */}
        <section id="calendly-section" className="scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-cyan-400 text-xs font-mono font-bold border border-blue-800">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Calendly Embedded Booking Widget</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">
                Book a 30-Minute Architecture Discovery Session
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Pick a date and time slot below to schedule a live video consultation with a Dialiqo Principal Solutions Architect.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                alt="Architect Host"
                className="w-11 h-11 rounded-full object-cover border-2 border-blue-500 shrink-0"
              />
              <div className="text-xs font-mono">
                <div className="font-bold text-white">Alexei Petrov</div>
                <div className="text-slate-400">Lead Architect Host</div>
              </div>
            </div>
          </div>

          {bookingConfirmed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-slate-800/80 border border-emerald-500/40 text-center space-y-6 max-w-2xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">Meeting Confirmed!</h3>
                <p className="text-xs text-slate-300 mt-2">
                  Calendar invitation sent to <span className="font-bold text-cyan-400">{bookingDetails.email}</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-left text-xs font-mono space-y-2 max-w-md mx-auto">
                <div className="flex justify-between"><span className="text-slate-400">Topic:</span> <span className="text-white font-bold">{selectedTopic}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Time:</span> <span className="text-cyan-400 font-bold">{selectedDate} @ {selectedSlot}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Video Link:</span> <span className="text-blue-400 underline">https://meet.dialiqo.com/arch-briefing</span></div>
              </div>

              <Button onClick={() => setBookingConfirmed(false)} variant="outline" className="border-slate-700 text-white">
                Book Another Time
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* STEP 1: SELECT TOPIC */}
              <div className="space-y-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  1. Select Discussion Topic
                </span>
                <div className="space-y-2">
                  {[
                    'Sub-300ms Voice AI Architecture',
                    'VoIP & SIP Trunk Migration',
                    'Kamailio & Cloud SRE Optimization',
                    'Zero-Trust Security & Biometrics'
                  ].map(topic => (
                    <button
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`w-full text-left p-3 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                        selectedTopic === topic
                          ? 'bg-blue-600 text-white border-blue-400 font-bold shadow-md'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 2: SELECT TIME SLOT */}
              <div className="space-y-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  2. Pick Available Time Slot
                </span>
                <div className="text-xs font-mono text-slate-300 pb-1">
                  📅 {selectedDate}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer text-center border ${
                        selectedSlot === slot
                          ? 'bg-emerald-600 text-white border-emerald-400 font-bold shadow-md'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 3: ATTENDEE DETAILS */}
              <form onSubmit={handleBookingSubmit} className="space-y-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  3. Enter Attendee Info
                </span>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={bookingDetails.name}
                    onChange={e => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Work Email *"
                    value={bookingDetails.email}
                    onChange={e => setBookingDetails({ ...bookingDetails, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={bookingDetails.company}
                    onChange={e => setBookingDetails({ ...bookingDetails, company: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <Button type="submit" variant="glow" size="md" className="w-full cursor-pointer">
                  Confirm Briefing Slot &rarr;
                </Button>
              </form>
            </div>
          )}
        </section>

        {/* 4. OFFICE LOCATIONS & INTERACTIVE MAP */}
        <section className="space-y-12">
          <SectionHeader
            eyebrow="Global Footprint"
            title="Regional Offices & Interactive Map"
            description="Explore our 5 global office locations in major technology and financial capitals."
          />

          {/* MAP CANVAS & OFFICE DETAILS SELECTOR */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            {/* MAP VIEWPORT / GRAPHIC INTERACTIVE CANVAS */}
            <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 relative min-h-[380px] flex flex-col justify-between overflow-hidden">
              {/* Background Map Graphic Illustration */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-950 text-cyan-400 text-xs font-mono font-bold border border-blue-800">
                  📍 Map View: {selectedOffice.city}, {selectedOffice.country}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Lat: {selectedOffice.lat} | Lng: {selectedOffice.lng}
                </span>
              </div>

              {/* Interactive World Map Node Pulsers */}
              <div className="relative z-10 my-8 py-10 flex items-center justify-around gap-2 flex-wrap">
                {GLOBAL_OFFICES.map(office => {
                  const isSelected = selectedOffice.city === office.city;
                  return (
                    <button
                      key={office.city}
                      onClick={() => setSelectedOffice(office)}
                      className={`group relative p-3 rounded-2xl transition-all cursor-pointer flex items-center gap-2 border ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-400 shadow-lg scale-105'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <span className="text-xl">{office.flag}</span>
                      <span className="text-xs font-mono font-bold">{office.city}</span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Office Image Banner */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-800 h-44 shadow-lg group">
                <img
                  src={officeImages[selectedOffice.city] || officeImages['San Francisco']}
                  alt={selectedOffice.city}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white font-mono text-xs">
                  <div>
                    <div className="font-bold">{selectedOffice.city} Office Hub</div>
                    <div className="text-[10px] text-slate-300">{selectedOffice.timezone}</div>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(selectedOffice.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold transition-all"
                  >
                    <span>Open Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* SELECTED OFFICE DETAILED INFORMATION PANEL */}
            <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{selectedOffice.flag}</span>
                  {selectedOffice.isHeadquarters && (
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-mono font-bold border border-amber-500/20">
                      Global Headquarters
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {selectedOffice.city}, {selectedOffice.country}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                    {selectedOffice.address}
                  </p>
                </div>

                <div className="space-y-2 pt-2 text-xs font-mono border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-500 flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-blue-500" /> Telephone:
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">{selectedOffice.phone}</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-500 flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-cyan-500" /> Email:
                    </span>
                    <span className="font-bold text-cyan-600 dark:text-cyan-400">{selectedOffice.email}</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-500 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-500" /> Timezone:
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">{selectedOffice.timezone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <Button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, region: `${selectedOffice.city} Hub` }));
                    const element = document.getElementById('contact-form');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Contact {selectedOffice.city} Regional Team &rarr;
                </Button>
              </div>
            </div>
          </div>

          {/* ALL 5 OFFICE CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLOBAL_OFFICES.map(office => (
              <div
                key={office.city}
                onClick={() => setSelectedOffice(office)}
                className={`p-6 rounded-3xl bg-white dark:bg-slate-900 border transition-all cursor-pointer shadow-sm hover:shadow-xl space-y-4 ${
                  selectedOffice.city === office.city
                    ? 'border-blue-500 ring-2 ring-blue-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{office.flag}</span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {office.timezone}
                  </span>
                </div>

                <div>
                  <h4 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                    {office.city}
                    {office.isHeadquarters && (
                      <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 text-[9px] font-mono font-bold">
                        HQ
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {office.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1 font-mono text-xs">
                  <div className="text-blue-600 dark:text-blue-400 font-bold">{office.phone}</div>
                  <div className="text-cyan-600 dark:text-cyan-400">{office.email}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. BUSINESS HOURS & TELEMETRY DESK TABLE */}
        <section className="py-8 bg-slate-100/70 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Global Business & Operational Hours
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Regional commercial desks operate during local business hours. 24/7 SRE Telemetry active continuously.
              </p>
            </div>

            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
              ● SRE Telemetry Online
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400">
                  <th className="pb-3 font-semibold">Regional Office</th>
                  <th className="pb-3 font-semibold">Timezone</th>
                  <th className="pb-3 font-semibold">Commercial Hours</th>
                  <th className="pb-3 font-semibold">Carrier Support</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="py-3 font-bold text-slate-900 dark:text-white">San Francisco HQ</td>
                  <td className="py-3">PST (UTC-8)</td>
                  <td className="py-3">08:00 AM - 06:00 PM</td>
                  <td className="py-3 text-emerald-500 font-bold">24/7 Active</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-slate-900 dark:text-white">London Hub</td>
                  <td className="py-3">GMT (UTC+0)</td>
                  <td className="py-3">08:30 AM - 06:30 PM</td>
                  <td className="py-3 text-emerald-500 font-bold">24/7 Active</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-slate-900 dark:text-white">Singapore Hub</td>
                  <td className="py-3">SGT (UTC+8)</td>
                  <td className="py-3">09:00 AM - 06:00 PM</td>
                  <td className="py-3 text-emerald-500 font-bold">24/7 Active</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-slate-900 dark:text-white">Dubai Hub</td>
                  <td className="py-3">GST (UTC+4)</td>
                  <td className="py-3">09:00 AM - 06:00 PM</td>
                  <td className="py-3 text-emerald-500 font-bold">24/7 Active</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-slate-900 dark:text-white">Tokyo Hub</td>
                  <td className="py-3">JST (UTC+9)</td>
                  <td className="py-3">09:00 AM - 06:00 PM</td>
                  <td className="py-3 text-emerald-500 font-bold">24/7 Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. CONTACT FAQS SECTION */}
        <section className="space-y-8">
          <SectionHeader
            eyebrow="Contact & Sales FAQs"
            title="Frequently Asked Questions"
            description="Clear answers regarding response times, NDA execution, and on-site discovery workshops."
          />

          <div className="space-y-4 max-w-4xl mx-auto">
            {contactFaqs.map((faq, idx) => {
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
        </section>

        {/* 7. CTA SECTION */}
        <CTASection onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};
