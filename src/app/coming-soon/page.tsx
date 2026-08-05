import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ComingSoonPageClient from "./ComingSoonPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Coming Soon",
  description: "This Dialiqo experience is launching soon. Subscribe for updates.",
  path: "/coming-soon",
  noIndex: true,
});

export default function ComingSoon() {
  return <ComingSoonPageClient />;
}
