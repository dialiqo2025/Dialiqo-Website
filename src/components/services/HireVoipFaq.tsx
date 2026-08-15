"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HIRE_VOIP_FAQS } from "@/lib/hireVoipPageData";
import { typo } from "@/lib/typography";

export function HireVoipFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {HIRE_VOIP_FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <article
            key={faq.question}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full p-5 text-left flex items-start justify-between gap-3 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className={`${typo.cardTitle} text-slate-900 dark:text-white`}>
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-slate-400 transition-transform ${
                  isOpen ? "rotate-180 text-blue-500" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </article>
        );
      })}
    </div>
  );
}
