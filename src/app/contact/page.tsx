import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Contact Engineering Desk",
  description:
    "Reach Dialiqo’s engineering desk for Voice AI, SIP infrastructure, and cloud telephony consultations. Global offices and 24/7 support channels.",
  path: "/contact",
});

export default function Contact() {
  return <ContactPageClient />;
}
