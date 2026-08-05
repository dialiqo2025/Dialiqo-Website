"use client";

import { IndustryDetailPage } from "@/views/IndustryDetailPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function IndustryDetailClient({ slug }: { slug: string }) {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <IndustryDetailPage
      industrySlug={slug}
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
