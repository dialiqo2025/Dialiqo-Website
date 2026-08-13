import Link from "next/link";
import { TECHNOLOGIES_DATA } from "@/data/dialiqoData";
import { TECH_LOGOS } from "@/lib/homeData";
import { pageToPath } from "@/lib/routes";

export function TechMarquee() {
  const items = [...TECH_LOGOS, ...TECH_LOGOS];

  return (
    <section
      className="tech-partners-section py-10 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 overflow-hidden"
      aria-label="Technology partners"
    >
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-white dark:from-slate-900 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-white dark:from-slate-900 to-transparent"
          aria-hidden="true"
        />
        <ul className="flex w-max animate-tech-marquee list-none m-0 p-0">
          {items.map((name, idx) => {
            const match = TECHNOLOGIES_DATA.find(
              (t) =>
                t.name.toLowerCase().includes(name.toLowerCase()) ||
                name.toLowerCase().includes(t.slug)
            );
            const href = match
              ? pageToPath("technology-detail", match.slug)
              : "/technologies";

            return (
              <li key={`${name}-${idx}`} className="mx-6 sm:mx-10 shrink-0">
                <Link
                  href={href}
                  className="text-sm sm:text-base font-bold tracking-wide text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase font-mono whitespace-nowrap"
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
