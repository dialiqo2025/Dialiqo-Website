"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote, 
  Building2, 
  CheckCircle2, 
  ThumbsUp, 
  Globe, 
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';
import { TestimonialItem } from '../../types';
import { TESTIMONIALS_DATA, TESTIMONIAL_TRUST_STATS } from '../../data/dialiqoData';
import { SectionHeader } from './SectionHeader';
import Link from "next/link";
import {
  linkButtonBase,
  linkButtonSizes,
  linkButtonVariants,
} from "./linkButtonStyles";

interface TestimonialsSectionProps {
  testimonials?: TestimonialItem[];
  onNavigate?: (page: string, slug?: string) => void;
  autoPlayInterval?: number;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = TESTIMONIALS_DATA,
  onNavigate,
  autoPlayInterval = 6000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // We want to calculate maxIndex based on screen size (3 items visible on desktop, 1 on mobile)
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = testimonials.length;
  const maxIndex = Math.max(0, totalItems - visibleCount);

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  // AutoPlay effect
  useEffect(() => {
    if (!isAutoPlayActive || totalItems <= visibleCount) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlayActive, maxIndex, visibleCount, totalItems, autoPlayInterval]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section 
      className="testimonials-section relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950/80 overflow-hidden border-y border-slate-200/80 dark:border-slate-800"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsAutoPlayActive(false)}
      onMouseLeave={() => setIsAutoPlayActive(true)}
    >
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <SectionHeader
          id="testimonials-heading"
          eyebrow="our clients"
          title="What Our Clients' Say"
          description="See what our clients say about partnering with Dialiqo to build scalable, secure, and innovative software solutions."
        />

        {/* TRUST BADGE STATS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm"
        >
          {TESTIMONIAL_TRUST_STATS.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3.5 p-2 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/60 dark:border-blue-800/60">
                {stat.icon === 'CheckCircle2' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                {stat.icon === 'ThumbsUp' && <ThumbsUp className="w-5 h-5 text-blue-500" />}
                {stat.icon === 'Globe' && <Globe className="w-5 h-5 text-cyan-500" />}
                {stat.icon === 'ShieldCheck' && <ShieldCheck className="w-5 h-5 text-indigo-500" />}
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900 dark:text-white font-mono leading-none">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CAROUSEL CONTROLS & TESTIMONIALS GRID */}
        <div className="relative">
          {/* Navigation Controls Bar (Top right or overlay) */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Showing {currentIndex + 1} - {Math.min(currentIndex + visibleCount, totalItems)} of {totalItems} Client Reviews</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next testimonials"
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonials Slider Window */}
          <div 
            className="overflow-hidden rounded-3xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex gap-6 transition-transform duration-500 ease-out"
              animate={{ x: `-${currentIndex * (100 / visibleCount + 1.5)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="h-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top Decorative Quote Badge */}
                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity text-blue-600 dark:text-blue-400">
                      <Quote className="w-16 h-16" />
                    </div>

                    <div className="space-y-4 relative z-10">
                      {/* Rating & Industry Tag */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-amber-400">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-mono font-bold text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                          {item.industry}
                        </span>
                      </div>

                      {/* Quote Text */}
                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic pt-2">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Client Info & Company Profile */}
                    <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-3.5">
                        <img
                          src={item.avatarUrl}
                          alt={item.name}
                          className="w-11 h-11 rounded-full object-cover border-2 border-blue-500/80 shadow-sm shrink-0"
                        />
                        <div>
                          <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                            {item.name}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {item.title}, <span className="font-semibold text-blue-600 dark:text-blue-400">{item.company}</span>
                          </p>
                        </div>
                      </div>

                      {/* Company Logo / Placeholder Badge */}
                      <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === i
                    ? 'w-8 bg-blue-600 dark:bg-blue-500'
                    : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA BUTTON TO CASE STUDIES */}
        <div className="pt-4 text-center">
          <Link
            href="/case-studies"
            className={`${linkButtonBase} ${linkButtonSizes.lg} ${linkButtonVariants.outline} gap-2`}
          >
            <span>View More Success Stories &amp; Case Studies</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
