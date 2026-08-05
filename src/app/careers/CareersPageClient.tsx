"use client";

import { CareersPage } from "@/views/CareersPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function CareersPageClient() {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <CareersPage
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
