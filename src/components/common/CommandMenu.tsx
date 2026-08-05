"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, Layers, Cpu, Shield, BookOpen, Building, Briefcase } from 'lucide-react';
import { SERVICES_DATA, TECHNOLOGIES_DATA, CASE_STUDIES_DATA, INDUSTRIES_DATA } from '../../data/dialiqoData';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, slug?: string) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredServices = SERVICES_DATA.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.shortDesc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredTech = TECHNOLOGIES_DATA.filter(t =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCases = CASE_STUDIES_DATA.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.clientName.toLowerCase().includes(query.toLowerCase())
  );

  const filteredIndustries = INDUSTRIES_DATA.filter(i =>
    i.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-md">
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Search and command palette"
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl"
        >
          {/* Search Header */}
          <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
            <Search className="w-5 h-5 text-slate-400 mr-3" />
            <input
              type="text"
              autoFocus
              aria-label="Search services, technologies, and case studies"
              placeholder="Type to search services, technologies, case studies... (Esc to close)"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base"
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
            {/* Services */}
            {filteredServices.length > 0 && (
              <div>
                <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5 px-2">
                  <Layers className="w-3.5 h-3.5" /> Services ({filteredServices.length})
                </div>
                <div className="space-y-1">
                  {filteredServices.slice(0, 4).map(item => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onNavigate('service-detail', item.slug);
                        onClose();
                      }}
                      className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 text-slate-900 dark:text-white cursor-pointer transition-all"
                    >
                      <div>
                        <div className="font-semibold text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {item.shortDesc}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            {filteredTech.length > 0 && (
              <div>
                <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5 px-2">
                  <Cpu className="w-3.5 h-3.5" /> Technologies ({filteredTech.length})
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {filteredTech.slice(0, 4).map(item => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onNavigate('technology-detail', item.slug);
                        onClose();
                      }}
                      className="p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 hover:border-blue-500/40 hover:bg-blue-50/50 dark:hover:bg-slate-800/60 cursor-pointer transition-all"
                    >
                      <div className="font-semibold text-xs text-slate-900 dark:text-white">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-slate-500">{item.category}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Case Studies */}
            {filteredCases.length > 0 && (
              <div>
                <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5 px-2">
                  <Briefcase className="w-3.5 h-3.5" /> Case Studies ({filteredCases.length})
                </div>
                <div className="space-y-1">
                  {filteredCases.slice(0, 3).map(item => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onNavigate('case-study-detail', item.slug);
                        onClose();
                      }}
                      className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 text-slate-900 dark:text-white cursor-pointer transition-all"
                    >
                      <div>
                        <div className="font-semibold text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {item.title}
                        </div>
                        <div className="text-xs text-blue-600 dark:text-blue-400 font-mono">
                          {item.clientName}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 flex justify-between">
            <span>Navigation hint: Click any result to inspect</span>
            <span className="font-mono">Dialiqo ⌘K</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
