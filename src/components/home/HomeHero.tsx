import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Radio,
  Network,
  Smartphone,
  Headphones,
  Mic,
} from "lucide-react";
import { ServerLinkButton } from "@/components/common/ServerLinkButton";
import { HERO_CAPABILITIES, HERO_IMAGE } from "@/lib/homeData";
import { typo } from "@/lib/typography";

const CAPABILITY_ICONS = {
  VoIP: Phone,
  WebRTC: Radio,
  SIP: Network,
  "Voice AI": Mic,
  Mobile: Smartphone,
  "24/7 Support": Headphones,
} as const;

export function HomeHero() {
  return (
    <section
      className="hero-section relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-28 pb-16"
      aria-labelledby="hero-heading"
    >
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-slate-950/85" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/90"
        aria-hidden="true"
      />

      <div className="container relative z-10 max-w-5xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          id="hero-heading"
          className={`${typo.heroTitle} text-white leading-[1.1]`}
        >
          Own Your Communication Platform
          <br className="hidden sm:block" /> by Customizing Every Layer
        </h1>

        <p className={`mt-5 ${typo.subtitle} text-slate-300 max-w-2xl mx-auto`}>
          Carrier-grade VoIP, sub-300ms Voice AI, and cloud engineering built
          for enterprises that need full control of every protocol layer.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ServerLinkButton
            href="/contact"
            variant="glow"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
          >
            Book Consultation
          </ServerLinkButton>
          <ServerLinkButton
            href="/services"
            variant="outline"
            size="lg"
            className="!border-white/30 !text-white hover:!bg-white/10"
          >
            Explore Services
          </ServerLinkButton>
        </div>

        <ul className="mt-12 mx-auto max-w-4xl rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-5 grid grid-cols-3 sm:grid-cols-6 gap-4 list-none p-0">
          {HERO_CAPABILITIES.map((label) => {
            const Icon = CAPABILITY_ICONS[label];
            return (
              <li key={label} className="flex flex-col items-center gap-2 text-center">
                <div
                  className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300"
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-slate-200">
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
