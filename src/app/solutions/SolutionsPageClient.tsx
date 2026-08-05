"use client";

import { SolutionsPage } from "@/views/SolutionsPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function SolutionsPageClient() {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <SolutionsPage
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
