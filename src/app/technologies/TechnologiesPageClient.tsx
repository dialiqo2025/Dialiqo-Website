"use client";

import { TechnologiesPage } from "@/views/TechDetailPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function TechnologiesPageClient() {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <TechnologiesPage
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
