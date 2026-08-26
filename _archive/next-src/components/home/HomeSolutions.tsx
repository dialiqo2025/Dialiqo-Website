import { CheckCircle2 } from "lucide-react";
import { TAILORED_SOLUTIONS } from "@/lib/homeData";
import { typo } from "@/lib/typography";

export function HomeSolutions() {
  return (
    <section
      className="solutions-section py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950"
      aria-labelledby="solutions-heading"
    >
      <div className="container max-w-7xl mx-auto">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <p className={`${typo.eyebrow} text-blue-600 dark:text-blue-400 mb-3`}>
            Our Solutions
          </p>
          <h2
            id="solutions-heading"
            className={`${typo.sectionTitle} text-slate-900 dark:text-white`}
          >
            Specialized and Tailor-Made Solutions
          </h2>
          <p className={`mt-4 ${typo.subtitle} text-slate-600 dark:text-slate-400`}>
            Our dedicated team helps you with solutions that best suit your needs
            and make way for seamless business growth.
          </p>
        </header>

        <div className="solutions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TAILORED_SOLUTIONS.map((item, i) => (
            <article
              key={item.title}
              className="solution-card relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
            >
              <span
                className="absolute right-4 top-3 text-5xl font-black text-slate-100 dark:text-slate-800 select-none pointer-events-none"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative flex gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
