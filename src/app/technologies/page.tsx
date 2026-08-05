import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import TechnologiesPageClient from "./TechnologiesPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Tech Stack & Architecture",
  description:
    "Dialiqo’s engineering stack: Kamailio, FreeSWITCH, eBPF, WebRTC, Kubernetes, and real-time AI inference for carrier-grade voice platforms.",
  path: "/technologies",
});

export default function Technologies() {
  return <TechnologiesPageClient />;
}
