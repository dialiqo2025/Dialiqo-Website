"use client";

import { IndustriesPage } from "@/views/IndustryDetailPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function IndustriesPageClient() {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <IndustriesPage
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
