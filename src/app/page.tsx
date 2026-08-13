import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HERO_IMAGE } from "@/lib/homeData";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeSolutions } from "@/components/home/HomeSolutions";
import { HomeMission } from "@/components/home/HomeMission";
import { TechMarquee } from "@/components/home/TechMarquee";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeCtaBand } from "@/components/home/HomeCtaBand";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeContactSection } from "@/components/home/HomeContactSection";

export const metadata: Metadata = buildMetadata({
  title: "VoIP Development Company, Custom VoIP Software Solutions | Dialiqo",
  description:
    "Dialiqo is a leading VoIP Development Company delivering custom VoIP software solutions using FreeSWITCH, Asterisk, Kamailio & OpenSIPS. Trusted for scalable VoIP systems, carrier-grade solutions, and enterprise communication platforms worldwide.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <link rel="preload" as="image" href={HERO_IMAGE} />
      <HomeHero />
      <HomeSolutions />
      <HomeMission />
      <TechMarquee />
      <HomeServices />
      <HomeAbout />
      <HomeCtaBand />
      <HomeTestimonials />
      <HomeContactSection />
    </>
  );
}
