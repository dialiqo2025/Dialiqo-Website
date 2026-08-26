import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PrivacyPolicyPageClient from "./PrivacyPolicyPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Dialiqo privacy policy covering data collection, processing, security standards, and your rights when using our Voice AI and telecom platforms.",
  path: "/privacy-policy",
});

export default function PrivacyPolicy() {
  return <PrivacyPolicyPageClient />;
}
