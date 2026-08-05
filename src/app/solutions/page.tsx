import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SolutionsPageClient from "./SolutionsPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Architecture Studio & ROI Calculator",
  description:
    "Explore Dialiqo’s interactive architecture studio and ROI calculator for Voice AI agents, SIP trunks, and cloud telecom deployments.",
  path: "/solutions",
});

export default function Solutions() {
  return <SolutionsPageClient />;
}
