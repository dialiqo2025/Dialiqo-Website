import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = buildMetadata({
  title: "About Dialiqo",
  description:
    "Dialiqo Ultimate Solutions engineers global Voice AI agents, FreeSWITCH & Kamailio SIP infrastructure, and multi-cloud telecom platforms for enterprise scale.",
  path: "/about",
});

export default function About() {
  return <AboutPageClient />;
}
