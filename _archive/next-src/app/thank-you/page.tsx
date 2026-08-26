import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ThankYouPageClient from "./ThankYouPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Thank You",
  description: "Your request was received. A Dialiqo engineer will follow up shortly.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYou() {
  return <ThankYouPageClient />;
}
