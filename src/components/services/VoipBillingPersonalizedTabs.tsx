"use client";

import { useState } from "react";
import { VOIP_BILLING_PERSONALIZED } from "@/lib/voipBillingPageData";
import { typo } from "@/lib/typography";

export function VoipBillingPersonalizedTabs() {
  const [active, setActive] = useState(0);
  const current = VOIP_BILLING_PERSONALIZED.items[active];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {VOIP_BILLING_PERSONALIZED.items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActive(i)}
            className={`rounded-2xl px-4 py-4 text-sm font-bold text-left transition-colors cursor-pointer ${
              active === i
                ? "bg-blue-600 text-white"
                : "bg-slate-900/40 text-white border border-white/20 hover:border-white/40"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <p className={`mt-8 ${typo.subtitle} text-slate-300 max-w-4xl`}>
        {current.desc}
      </p>
    </div>
  );
}
