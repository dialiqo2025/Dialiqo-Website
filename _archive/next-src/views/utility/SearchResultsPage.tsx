"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Search, ArrowRight } from "lucide-react";
import { SectionHeader } from "../../components/common/SectionHeader";
import { Button } from "../../components/common/Button";
import { RESOURCES_DATA } from "../../data/dialiqoData";
import {
  SERVICES_MEGA_MENU,
  PRODUCTS_MEGA_MENU,
  VOIP_SOLUTIONS_MEGA_MENU,
  INDUSTRIES_MEGA_MENU,
} from "@/lib/navMenus";
import { pageToPath } from "@/lib/routes";

interface UtilityPageProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation?: () => void;
  searchQueryParam?: string;
}

const LIVE_PAGES = [
  ...SERVICES_MEGA_MENU.coreServices.items.map((item) => ({
    type: "Services",
    title: item.label,
    desc: item.href,
    href: item.href,
  })),
  ...SERVICES_MEGA_MENU.groups.flatMap((group) =>
    group.items.map((item) => ({
      type: "Services",
      title: item.label,
      desc: item.href,
      href: item.href,
    }))
  ),
  ...PRODUCTS_MEGA_MENU.links.map((item) => ({
    type: "Products",
    title: item.label,
    desc: item.href,
    href: item.href,
  })),
  ...VOIP_SOLUTIONS_MEGA_MENU.items.map((item) => ({
    type: "VoIP Solution",
    title: item.label,
    desc: item.href,
    href: item.href,
  })),
  ...INDUSTRIES_MEGA_MENU.items.map((item) => ({
    type: "Industries",
    title: item.label,
    desc: item.href,
    href: item.href,
  })),
];

export const SearchResultsPage: React.FC<UtilityPageProps> = ({
  onNavigate,
  searchQueryParam = "",
}) => {
  void onNavigate;
  const router = useRouter();
  const [query, setQuery] = useState(searchQueryParam || "Voice AI");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = ["All", "Services", "Products", "VoIP Solution", "Industries", "Resources"];

  const results: { type: string; title: string; desc: string; href: string }[] = [];

  if (query.trim()) {
    const q = query.toLowerCase();

    LIVE_PAGES.forEach((page) => {
      if (page.title.toLowerCase().includes(q) || page.desc.toLowerCase().includes(q)) {
        results.push(page);
      }
    });

    RESOURCES_DATA.forEach((r) => {
      if (r.title.toLowerCase().includes(q) || r.summary.toLowerCase().includes(q)) {
        results.push({
          type: "Resources",
          title: r.title,
          desc: r.summary,
          href: pageToPath("resource-detail", r.slug),
        });
      }
    });
  }

  const filteredResults =
    categoryFilter === "All"
      ? results
      : results.filter((r) => r.type === categoryFilter);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-20 selection:bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader
          eyebrow="Search Engine"
          title="Search Dialiqo Knowledge Base"
          description="Find services, products, industries, and blog articles."
        />

        <div className="max-w-2xl mx-auto relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search keywords e.g. FreeSWITCH, Voice AI, SIP..."
            className="w-full pl-12 pr-4 py-3.5 text-sm font-mono rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none shadow-lg"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                categoryFilter === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="text-center font-mono text-xs text-slate-500">
          Found <span className="font-bold text-blue-600 dark:text-blue-400">{filteredResults.length}</span> matching entries for &quot;{query}&quot;
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, idx) => (
              <motion.div
                key={`${item.href}-${idx}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03 }}
                onClick={() => router.push(item.href)}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all cursor-pointer shadow-sm hover:shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 flex-1">
                  <span className="px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-mono text-[10px] font-bold border border-blue-200 dark:border-blue-800">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-1 text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                  <span>View Entry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))
          ) : (
            <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 font-mono text-xs text-slate-500">
              <p>No results matched your query. Try searching for &quot;SIP&quot;, &quot;AI&quot;, or &quot;VoIP&quot;.</p>
              <Button onClick={() => setQuery("Voice AI")} variant="outline">
                Reset Query
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
