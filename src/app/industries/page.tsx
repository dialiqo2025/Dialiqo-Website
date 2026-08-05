import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import IndustriesPageClient from "./IndustriesPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Industry Solutions",
  description:
    "Industry-specific Voice AI and telecom solutions for healthcare, finance, retail, education, and enterprise contact centers.",
  path: "/industries",
});

export default function Industries() {
  return <IndustriesPageClient />;
}
