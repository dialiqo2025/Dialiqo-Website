import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Dialiqo | Voice AI, SIP Telecom Infrastructure & Cloud Engineering",
  description:
    "Dialiqo Ultimate Solutions Inc. delivers sub-150ms Voice AI agents, high-concurrency FreeSWITCH & Kamailio SIP trunks, custom software engineering, and multi-cloud telemetry infrastructure.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return <HomePageClient />;
}
