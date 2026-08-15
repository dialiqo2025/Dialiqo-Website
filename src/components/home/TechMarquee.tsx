import Link from "next/link";
import { TECHNOLOGIES_DATA } from "@/data/dialiqoData";
import { TECH_LOGOS } from "@/lib/homeData";
import { pageToPath } from "@/lib/routes";

type TechMarqueeProps = {
  items?: readonly string[];
  variant?: "links" | "chips";
  className?: string;
};

export function TechMarquee({
  items = TECH_LOGOS,
  variant = "links",
  className,
}: TechMarqueeProps) {
  const loop = [...items, ...items];
  const isChips = variant === "chips";

  return (
    <section
      className={
        className ??
        "tech-partners-section py-10 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 overflow-hidden"
      }
      aria-label="Technology partners"
    >
      <div className="relative">
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 ${
            isChips
              ? "bg-gradient-to-r from-slate-950 to-transparent"
              : "bg-gradient-to-r from-white dark:from-slate-900 to-transparent"
          }`}
          aria-hidden="true"
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 ${
            isChips
              ? "bg-gradient-to-l from-slate-950 to-transparent"
              : "bg-gradient-to-l from-white dark:from-slate-900 to-transparent"
          }`}
          aria-hidden="true"
        />
        <ul className="flex w-max animate-tech-marquee list-none m-0 p-0 items-center">
          {loop.map((name, idx) => {
            const match = TECHNOLOGIES_DATA.find(
              (t) =>
                t.name.toLowerCase().includes(name.toLowerCase()) ||
                name.toLowerCase().includes(t.slug)
            );
            const href = match
              ? pageToPath("technology-detail", match.slug)
              : "/technologies";

            return (
              <li
                key={`${name}-${idx}`}
                className={isChips ? "mx-3 sm:mx-4 shrink-0" : "mx-6 sm:mx-10 shrink-0"}
              >
                {isChips ? (
                  <span className="inline-flex items-center justify-center min-w-[8.5rem] px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-sm font-bold text-white whitespace-nowrap">
                    {name}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-sm sm:text-base font-bold tracking-wide text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase font-mono whitespace-nowrap"
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
