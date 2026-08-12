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
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
      />
      <HomePageClient />
    </>
  );
}
