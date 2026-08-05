import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Enterprise Voice AI, FreeSWITCH & Kamailio engineering, custom software, and cloud telecom infrastructure services from Dialiqo Ultimate Solutions.",
  path: "/services",
});

export default function Services() {
  return <ServicesPageClient />;
}
