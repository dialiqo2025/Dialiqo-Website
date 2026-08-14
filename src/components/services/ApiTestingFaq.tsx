"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { API_TESTING_FAQS } from "@/lib/apiTestingPageData";
import { typo } from "@/lib/typography";

export function ApiTestingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {API_TESTING_FAQS.map((faq, i) => {
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
              <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>{faq.answer}</p>
                {faq.bullets && faq.bullets.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 space-y-1">
                    {faq.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
