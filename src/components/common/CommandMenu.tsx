"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, ArrowRight, Layers } from "lucide-react";
import {
  SERVICES_MEGA_MENU,
  PRODUCTS_MEGA_MENU,
  VOIP_SOLUTIONS_MEGA_MENU,
  INDUSTRIES_MEGA_MENU,
} from "@/lib/navMenus";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, slug?: string) => void;
}

const LIVE_SEARCH_LINKS = [
  ...SERVICES_MEGA_MENU.coreServices.items,
  ...SERVICES_MEGA_MENU.groups.flatMap((group) => [
    ...(group.href ? [{ label: group.title, href: group.href }] : []),
    ...group.items,
  ]),
  ...PRODUCTS_MEGA_MENU.links,
  ...VOIP_SOLUTIONS_MEGA_MENU.items.map(({ label, href }) => ({ label, href })),
  ...INDUSTRIES_MEGA_MENU.items,
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/resources" },
];

export const CommandMenu: React.FC<CommandMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  void onNavigate;
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();
  const filtered = LIVE_SEARCH_LINKS.filter((item) =>
    item.label.toLowerCase().includes(q)
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
          <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
            <Search className="w-5 h-5 text-slate-400 mr-3" />
            <input
              type="text"
              autoFocus
              aria-label="Search Dialiqo pages"
              placeholder="Search services, products, and industries... (Esc to close)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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

          <div className="max-h-[60vh] overflow-y-auto p-4">
            {filtered.length > 0 ? (
              <div>
                <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5 px-2">
                  <Layers className="w-3.5 h-3.5" /> Pages ({filtered.length})
                </div>
                <div className="space-y-1">
                  {filtered.slice(0, 12).map((item) => (
                    <button
                      key={`${item.label}-${item.href}`}
                      type="button"
                      onClick={() => {
                        router.push(item.href);
                        onClose();
                      }}
                      className="group flex w-full items-center justify-between p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 text-slate-900 dark:text-white cursor-pointer transition-all text-left"
                    >
                      <div>
                        <div className="font-semibold text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {item.href}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="px-2 py-6 text-sm text-slate-500">No matching pages.</p>
            )}
          </div>

          <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 flex justify-between">
            <span>Search live Dialiqo pages</span>
            <span className="font-mono">Dialiqo ⌘K</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
