import Image from "next/image";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { MISSION_STATS } from "@/lib/homeData";
import { typo } from "@/lib/typography";

export function HomeMission() {
  return (
    <section
      className="mission-section relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden"
      aria-labelledby="mission-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="container relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className={`${typo.eyebrow} text-blue-300 mb-3`}>WHAT WE DO?</p>
          <h2 id="mission-heading" className={`${typo.sectionTitle} leading-tight`}>
            Our Mission is to Deliver Growth and Efficiency
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed max-w-lg">
            We deliver end-to-end VoIP development services designed to support
            your growth. We align every solution with your business goals,
            ensuring innovation, flexibility, and success in today&apos;s evolving
            digital landscape.
          </p>
          <ServerLinkButton href="/contact" variant="primary" size="md" className="mt-8">
            GET IN TOUCH
          </ServerLinkButton>
        </div>

        <div className="mission-stats grid grid-cols-2 gap-4">
          {MISSION_STATS.map((stat) => (
            <article
              key={stat.label}
              className="relative overflow-hidden rounded-2xl min-h-40 border border-white/10"
            >
              <Image
                src={stat.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-slate-950/75" aria-hidden="true" />
              <div className="relative z-10 p-5 h-full min-h-40 flex flex-col justify-end">
                <p className="text-3xl sm:text-4xl font-black font-mono text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-300 leading-snug">
                  {stat.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
