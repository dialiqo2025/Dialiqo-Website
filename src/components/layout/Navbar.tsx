"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ChevronDown, Menu, X, ArrowRight
} from 'lucide-react';
import { LinkButton } from '../common/LinkButton';
import { Logo } from '../common/Logo';
import { SERVICES_DATA, INDUSTRIES_DATA, SOLUTIONS_DATA } from '../../data/dialiqoData';
import { pageToPath } from '@/lib/routes';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
  onOpenSearch
}) => {
  void onOpenConsultation;
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'services' | 'industries' | 'solutions' | 'company' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="site-header" className="site-header fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Notification Bar */}
      {/* <div className="bg-slate-950 text-white text-[11px] sm:text-xs py-1.5 px-4 text-center border-b border-slate-800 flex items-center justify-center gap-2 font-mono">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Dialiqo Telemetry Edge v4.2 Active: Sub-300ms Voice AI & 99.999% SLA Carrier Fabric</span>
        <button
          onClick={onOpenConsultation}
          className="underline text-cyan-400 hover:text-cyan-300 ml-2 font-sans font-semibold cursor-pointer"
        >
          Book Briefing &rarr;
        </button>
      </div> */}

      {/* Main Glassmorphic Header */}
      <nav
        id="site-navigation"
        aria-label="Primary Navigation"
        onMouseLeave={() => setActiveMegaMenu(null)}
        className={`w-full transition-all duration-200 border-b ${
          scrolled || activeMegaMenu
            ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-slate-200/80 dark:border-slate-800 shadow-md'
            : 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border-slate-200/40 dark:border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Dialiqo home">
            <Logo size="md" />
          </Link>

          {/* Navigation Links (Desktop) */}
          <ul className="menu hidden lg:flex items-center gap-1 font-medium text-sm text-slate-700 dark:text-slate-300 list-none m-0 p-0">
            {/* Services Dropdown */}
            <li className="relative">
              <Link
                href="/services"
                aria-expanded={activeMegaMenu === 'services'}
                onMouseEnter={() => setActiveMegaMenu('services')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all ${
                  currentPage === 'services' || currentPage === 'service-detail' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
                }`}
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </Link>
            </li>

            {/* Industries Dropdown */}
            <li className="relative">
              <Link
                href="/industries"
                aria-expanded={activeMegaMenu === 'industries'}
                onMouseEnter={() => setActiveMegaMenu('industries')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all ${
                  currentPage === 'industries' || currentPage === 'industry-detail' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
                }`}
              >
                Industries
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </Link>
            </li>

            {/* Solutions / Products (maps from live /voip-solution & /products) */}
            <li className="relative">
              <Link
                href="/solutions"
                aria-expanded={activeMegaMenu === 'solutions'}
                onMouseEnter={() => setActiveMegaMenu('solutions')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all ${
                  currentPage === 'solutions' || currentPage === 'solution-detail' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
                }`}
              >
                Solutions
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </Link>
            </li>

            {/* Blog */}
            <li>
            <Link
              href="/resources"
              className={`px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all ${
                currentPage === 'resources' || currentPage === 'resource-detail' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
              }`}
            >
              Blog
            </Link>

            </li>

            {/* Company */}
            <li>
              <Link
                href="/about"
                onMouseEnter={() => setActiveMegaMenu('company')}
                className={`px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all ${
                  currentPage === 'about' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
                }`}
              >
                Company
              </Link>
            </li>

            <li>
            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all ${
                currentPage === 'contact' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
              }`}
            >
              Contact
            </Link>
            </li>
          </ul>

          {/* Right Action Tools */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Button (⌘K) */}
            <button
              type="button"
              aria-label="Search Dialiqo (Cmd+K)"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
              {/* <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-slate-200 dark:bg-slate-800 rounded font-mono text-slate-600 dark:text-slate-300">
                ⌘K
              </kbd> */}
            </button>

            {/* Schedule Demo CTA */}
            <LinkButton
              href="/contact"
              variant="glow"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Book Consultation
            </LinkButton>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              aria-label="Open search dialog"
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay (Desktop) */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15 }}
              onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
              onMouseLeave={() => setActiveMegaMenu(null)}
              className="absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-2xl py-8 px-6 sm:px-12 z-50"
            >
              <div className="max-w-7xl mx-auto">
                {activeMegaMenu === 'services' && (
                  <div>
                    <div className="flex justify-between items-center pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">Our Engineering Services</h4>
                        <p className="text-xs text-slate-500">Carrier-grade telecom, voice AI, and enterprise web solutions.</p>
                      </div>
                      <Link
                        href="/services"
                        onClick={() => setActiveMegaMenu(null)}
                        className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                      >
                        View All 20+ Services &rarr;
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {SERVICES_DATA.slice(0, 8).map(s => (
                        <Link
                          key={s.id}
                          href={pageToPath('service-detail', s.slug)}
                          onClick={() => setActiveMegaMenu(null)}
                          className="group p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-900 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
                        >
                          <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                            {s.title}
                            {s.badge && <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">{s.badge}</span>}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                            {s.shortDesc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeMegaMenu === 'industries' && (
                  <div>
                    <div className="flex justify-between items-center pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">Industries Served</h4>
                      <Link
                        href="/industries"
                        onClick={() => setActiveMegaMenu(null)}
                        className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Explore All Industries &rarr;
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {INDUSTRIES_DATA.map(i => (
                        <Link
                          key={i.id}
                          href={pageToPath('industry-detail', i.slug)}
                          onClick={() => setActiveMegaMenu(null)}
                          className="group p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-900 transition-all"
                        >
                          <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {i.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1 mt-1">
                            {i.shortDesc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeMegaMenu === 'solutions' && (
                  <div>
                    <div className="flex justify-between items-center pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">Enterprise Software Solutions</h4>
                      <Link
                        href="/solutions"
                        onClick={() => setActiveMegaMenu(null)}
                        className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Browse All Solutions &rarr;
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {SOLUTIONS_DATA.map(sol => (
                        <Link
                          key={sol.id}
                          href="/solutions"
                          onClick={() => setActiveMegaMenu(null)}
                          className="group p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:bg-blue-50/40 dark:hover:bg-slate-900 transition-all"
                        >
                          <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600">
                            {sol.title}
                          </div>
                          <div className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-mono">{sol.tagline}</div>
                          <div className="text-xs text-slate-500 line-clamp-2 mt-2">{sol.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeMegaMenu === 'company' && (
                  <div className="grid grid-cols-2 gap-6">
                    <Link
                      href="/about"
                      onClick={() => setActiveMegaMenu(null)}
                      className="p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900"
                    >
                      <div className="font-bold text-sm text-slate-900 dark:text-white">About Dialiqo</div>
                      <div className="text-xs text-slate-500 mt-1">Our story, mission, timeline, and leadership.</div>
                    </Link>

                    <Link
                      href="/contact"
                      onClick={() => setActiveMegaMenu(null)}
                      className="p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900"
                    >
                      <div className="font-bold text-sm text-slate-900 dark:text-white">Global Contact & Offices</div>
                      <div className="text-xs text-slate-500 mt-1">San Francisco, London, Singapore, Dubai, Tokyo.</div>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-4 shadow-2xl"
            >
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left font-bold text-slate-900 dark:text-white py-2">
                Home
              </Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left font-bold text-slate-900 dark:text-white py-2">
                Services
              </Link>
              <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left font-bold text-slate-900 dark:text-white py-2">
                Industries
              </Link>
              <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left font-bold text-slate-900 dark:text-white py-2">
                Solutions
              </Link>
              <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left font-bold text-slate-900 dark:text-white py-2">
                Blog
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left font-bold text-slate-900 dark:text-white py-2">
                About
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left font-bold text-slate-900 dark:text-white py-2">
                Contact
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
