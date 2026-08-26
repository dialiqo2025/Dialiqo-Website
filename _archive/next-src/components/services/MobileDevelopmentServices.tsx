"use client";

import { useState } from "react";
import { MOBILE_DEV_SERVICES } from "@/lib/mobileDevelopmentPageData";
import { typo } from "@/lib/typography";

export function MobileDevelopmentServices() {
  const [active, setActive] = useState(0);
  const current = MOBILE_DEV_SERVICES.items[active];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {MOBILE_DEV_SERVICES.items.map((item, i) => (
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
      <div className={`mt-8 ${typo.subtitle} text-slate-300 max-w-4xl space-y-4`}>
        {current.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
