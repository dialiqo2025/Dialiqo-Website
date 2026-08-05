"use client";

import { ServicesPage } from "@/views/ServiceDetailPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function ServicesPageClient() {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <ServicesPage
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
