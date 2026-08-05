import type { Metadata } from "next";
import { JOB_OPENINGS_DATA } from "@/data/dialiqoData";
import { buildMetadata, jobPostingJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import CareersPageClient from "./CareersPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Join Dialiqo’s Voice AI and systems engineering team. Open roles in VoIP, SIP infrastructure, AI agents, and cloud SRE.",
  path: "/careers",
});

export default function Careers() {
  const jsonLd = JOB_OPENINGS_DATA.map((j) =>
    jobPostingJsonLd({
      title: j.title,
      description: j.overview,
      location: j.location,
      type: j.type,
      department: j.department,
    })
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <CareersPageClient />
    </>
  );
}
