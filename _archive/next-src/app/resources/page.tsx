import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ResourcesPageClient from "./ResourcesPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Knowledge Base",
  description:
    "Technical insights on Voice AI latency, FreeSWITCH modules, Kamailio clustering, WebRTC, and cloud telecom architecture from Dialiqo engineers.",
  path: "/resources",
});

export default function Resources() {
  return <ResourcesPageClient />;
}
