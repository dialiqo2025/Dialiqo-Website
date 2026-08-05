import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import TermsPageClient from "./TermsPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "Master services agreement and terms of use for Dialiqo Ultimate Solutions Inc. engineering, consulting, and platform services.",
  path: "/terms-conditions",
});

export default function TermsConditions() {
  return <TermsPageClient />;
}
