import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CaseStudiesPageClient from "./CaseStudiesPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Enterprise Case Studies",
  description:
    "Real-world Dialiqo case studies: carrier VoIP scale-outs, healthcare Voice AI triage, fintech SIP fraud defense, and measurable ROI benchmarks.",
  path: "/case-studies",
});

export default function CaseStudies() {
  return <CaseStudiesPageClient />;
}
