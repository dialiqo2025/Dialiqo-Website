"use client";

import { CaseStudiesPage } from "@/views/CaseStudyDetailPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function CaseStudiesPageClient() {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <CaseStudiesPage
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
