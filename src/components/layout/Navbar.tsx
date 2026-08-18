"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, Menu, X, ArrowRight, Headphones, Receipt, CheckCircle2 } from 'lucide-react';
import { LinkButton } from '../common/LinkButton';
import { Logo } from '../common/Logo';
import {
  SERVICES_MEGA_MENU,
  PRODUCTS_MEGA_MENU,
  VOIP_SOLUTIONS_MEGA_MENU,
  INDUSTRIES_MEGA_MENU,
} from '@/lib/navMenus';

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
  const [activeMegaMenu, setActiveMegaMenu] = useState<'services' | 'products' | 'solutions' | 'industries' | 'company' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<'services' | 'products' | 'industries' | null>(null);

  const megaTriggerClass = (isOpen: boolean, isCurrent: boolean) =>
    `flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer ${
      isOpen ? 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400' : ''
    } ${isCurrent ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`;

  const toggleMobileSection = (section: 'services' | 'products' | 'industries') => {
    setMobileSection((current) => (current === section ? null : section));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSection(null);
  };

  const mobileServiceLinks = [
    ...SERVICES_MEGA_MENU.coreServices.items,
    ...SERVICES_MEGA_MENU.groups.flatMap((group) => group.items),
  ];

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
          activeMegaMenu
            ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 shadow-md'
            : scrolled
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
              <button
                type="button"
                aria-expanded={activeMegaMenu === 'services'}
                aria-haspopup="true"
                onMouseEnter={() => setActiveMegaMenu('services')}
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'services' ? null : 'services')}
                className={megaTriggerClass(
                  activeMegaMenu === 'services',
                  currentPage === 'service-detail'
                )}
              >
                Service
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>
            </li>

            {/* Our Products */}
            <li className="relative">
              <button
                type="button"
                aria-expanded={activeMegaMenu === 'products'}
                aria-haspopup="true"
                onMouseEnter={() => setActiveMegaMenu('products')}
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'products' ? null : 'products')}
                className={megaTriggerClass(
                  activeMegaMenu === 'products',
                  currentPage === 'solutions' || currentPage === 'solution-detail'
                )}
              >
                Our Products
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>
            </li>

            {/* VoIP Solution */}
            <li className="relative">
              <Link
                href="/voip-solution"
                aria-expanded={activeMegaMenu === 'solutions'}
                onMouseEnter={() => setActiveMegaMenu('solutions')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all ${
                  activeMegaMenu === 'solutions' ? 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400' : ''
                } ${
                  currentPage === 'voip-solution' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
                }`}
              >
                VoIP Solution
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </Link>
            </li>

            {/* Industries Dropdown */}
            <li className="relative">
              <button
                type="button"
                aria-expanded={activeMegaMenu === 'industries'}
                aria-haspopup="true"
                onMouseEnter={() => setActiveMegaMenu('industries')}
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'industries' ? null : 'industries')}
                className={megaTriggerClass(
                  activeMegaMenu === 'industries',
                  currentPage === 'industry-detail'
                )}
              >
                Industries
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>
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

            {/* Company — About Us & Contact Us stay here */}
            <li>
              <Link
                href="/about-us"
                onMouseEnter={() => setActiveMegaMenu('company')}
                className={`px-3.5 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all ${
                  activeMegaMenu === 'company' ? 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400' : ''
                } ${
                  currentPage === 'about' || currentPage === 'contact' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
                }`}
              >
                Company
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
              onClick={() => {
                setMobileMenuOpen((open) => !open);
                setMobileSection(null);
              }}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Dim the page so an open mega menu reads as a distinct layer */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              key="mega-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              aria-hidden="true"
              className="fixed inset-0 top-20 z-30 bg-slate-950/45 dark:bg-black/55 pointer-events-none"
            />
          )}
        </AnimatePresence>

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
              className="absolute top-full left-0 right-0 z-50 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-700 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-slate-200/70 dark:ring-white/10 py-8 px-6 sm:px-12"
            >
              <div className="max-w-7xl mx-auto">
                {activeMegaMenu === 'services' && (
                  <div>
                    <div className="pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                      <div className="max-w-xl">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {SERVICES_MEGA_MENU.heading}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">
                          {SERVICES_MEGA_MENU.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Core Services */}
                      <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 transition-all hover:border-blue-400 hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:bg-blue-50/40 dark:hover:bg-slate-800">
                        <div className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wide">
                          {SERVICES_MEGA_MENU.coreServices.title}
                        </div>
                        <ul className="space-y-2 list-none m-0 p-0">
                          {SERVICES_MEGA_MENU.coreServices.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                onClick={() => setActiveMegaMenu(null)}
                                className="group flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              >
                                <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-70 group-hover:opacity-100 shrink-0" />
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Category groups */}
                      {SERVICES_MEGA_MENU.groups.map((group) => (
                        <div
                          key={group.title}
                          className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 transition-all hover:border-blue-400 hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:bg-blue-50/40 dark:hover:bg-slate-800"
                        >
                          {group.href ? (
                            <Link
                              href={group.href}
                              onClick={() => setActiveMegaMenu(null)}
                              className="font-bold text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wide"
                            >
                              {group.title}
                            </Link>
                          ) : (
                            <div className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wide">
                              {group.title}
                            </div>
                          )}
                          <ul className="mt-3 space-y-2 list-none m-0 p-0">
                            {group.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  onClick={() => setActiveMegaMenu(null)}
                                  className="group flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                  <ArrowRight className="w-3 h-3 text-blue-500 opacity-70 group-hover:opacity-100 shrink-0" />
                                  <span>{item.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeMegaMenu === 'industries' && (
                  <div>
                    <div className="pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {INDUSTRIES_MEGA_MENU.heading}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">
                          {INDUSTRIES_MEGA_MENU.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {INDUSTRIES_MEGA_MENU.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveMegaMenu(null)}
                          className="group flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:bg-blue-50/40 dark:hover:bg-slate-900 transition-all"
                        >
                          <span className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-4 h-4" />
                          </span>
                          <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 uppercase tracking-wide">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeMegaMenu === 'products' && (
                  <div>
                    <div className="pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {PRODUCTS_MEGA_MENU.heading}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">
                          {PRODUCTS_MEGA_MENU.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Product list */}
                      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <div className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wide">
                          Our Products
                        </div>
                        <ul className="space-y-2.5 list-none m-0 p-0">
                          {PRODUCTS_MEGA_MENU.links.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                onClick={() => setActiveMegaMenu(null)}
                                className="group flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wide"
                              >
                                <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-70 group-hover:opacity-100 shrink-0" />
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Featured product cards */}
                      {PRODUCTS_MEGA_MENU.featured.map((product) => {
                        const Icon =
                          product.label === "Contact Center" ? Headphones : Receipt;
                        return (
                          <Link
                            key={product.label}
                            href={product.href}
                            onClick={() => setActiveMegaMenu(null)}
                            className="group p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:bg-blue-50/40 dark:hover:bg-slate-900 transition-all"
                          >
                            <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 uppercase tracking-wide">
                              {product.label}
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-mono">
                              {product.tagline}
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mt-2 leading-relaxed">
                              {product.description}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeMegaMenu === 'solutions' && (
                  <div>
                    <div className="flex justify-between items-start gap-6 pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {VOIP_SOLUTIONS_MEGA_MENU.heading}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">
                          {VOIP_SOLUTIONS_MEGA_MENU.description}
                        </p>
                      </div>
                      <Link
                        href="/voip-solution"
                        onClick={() => setActiveMegaMenu(null)}
                        className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
                      >
                        Browse All Solutions &rarr;
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {VOIP_SOLUTIONS_MEGA_MENU.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveMegaMenu(null)}
                          className="group relative flex items-center gap-3 overflow-hidden p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:bg-blue-50/40 dark:hover:bg-slate-900 transition-all"
                        >
                          <span className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-4 h-4" />
                          </span>
                          <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 uppercase tracking-wide">
                            {item.label}
                          </span>
                          <span
                            className="absolute right-3 bottom-1 text-4xl font-black text-slate-100 dark:text-slate-800 select-none pointer-events-none"
                            aria-hidden="true"
                          >
                            {item.number}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeMegaMenu === 'company' && (
                  <div className="grid grid-cols-2 gap-6">
                    <Link
                      href="/about-us"
                      onClick={() => setActiveMegaMenu(null)}
                      className="group p-4 rounded-xl border border-slate-200 dark:border-slate-700 transition-all hover:border-blue-400 hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:bg-blue-50/40 dark:hover:bg-slate-800"
                    >
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">About Us</div>
                      <div className="text-xs text-slate-500 mt-1">Our story, mission, timeline, and leadership.</div>
                    </Link>

                    <Link
                      href="/contact"
                      onClick={() => setActiveMegaMenu(null)}
                      className="group p-4 rounded-xl border border-slate-200 dark:border-slate-700 transition-all hover:border-blue-400 hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:bg-blue-50/40 dark:hover:bg-slate-800"
                    >
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Contact Us</div>
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
              <Link href="/" onClick={closeMobileMenu} className="block w-full text-left font-bold text-slate-900 dark:text-white py-2">
                Home
              </Link>
              <div>
                <button
                  type="button"
                  aria-expanded={mobileSection === 'services'}
                  onClick={() => toggleMobileSection('services')}
                  className="flex w-full items-center justify-between font-bold text-slate-900 dark:text-white py-2 cursor-pointer"
                >
                  Service
                  <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${mobileSection === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSection === 'services' && (
                  <ul className="pl-3 pb-2 space-y-1 list-none m-0">
                    {mobileServiceLinks.map((item) => (
                      <li key={`${item.label}-${item.href}`}>
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block py-1.5 text-sm text-slate-600 dark:text-slate-400"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <button
                  type="button"
                  aria-expanded={mobileSection === 'products'}
                  onClick={() => toggleMobileSection('products')}
                  className="flex w-full items-center justify-between font-bold text-slate-900 dark:text-white py-2 cursor-pointer"
                >
                  Our Products
                  <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${mobileSection === 'products' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSection === 'products' && (
                  <ul className="pl-3 pb-2 space-y-1 list-none m-0">
                    {PRODUCTS_MEGA_MENU.links.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block py-1.5 text-sm text-slate-600 dark:text-slate-400"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Link href="/voip-solution" onClick={closeMobileMenu} className="block w-full text-left font-bold text-slate-900 dark:text-white py-2">
                VoIP Solution
              </Link>
              <div>
                <button
                  type="button"
                  aria-expanded={mobileSection === 'industries'}
                  onClick={() => toggleMobileSection('industries')}
                  className="flex w-full items-center justify-between font-bold text-slate-900 dark:text-white py-2 cursor-pointer"
                >
                  Industries
                  <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${mobileSection === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSection === 'industries' && (
                  <ul className="pl-3 pb-2 space-y-1 list-none m-0">
                    {INDUSTRIES_MEGA_MENU.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block py-1.5 text-sm text-slate-600 dark:text-slate-400"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Link href="/resources" onClick={closeMobileMenu} className="block w-full text-left font-bold text-slate-900 dark:text-white py-2">
                Blog
              </Link>
              <Link href="/about-us" onClick={closeMobileMenu} className="block w-full text-left font-bold text-slate-900 dark:text-white py-2">
                About Us
              </Link>
              <Link href="/contact" onClick={closeMobileMenu} className="block w-full text-left font-bold text-slate-900 dark:text-white py-2">
                Contact Us
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
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
