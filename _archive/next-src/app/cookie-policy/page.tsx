import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CookiePolicyPageClient from "./CookiePolicyPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "How Dialiqo uses cookies and similar technologies, preference controls, and options to manage tracking on dialiqo.com.",
  path: "/cookie-policy",
});

export default function CookiePolicy() {
  return <CookiePolicyPageClient />;
}
