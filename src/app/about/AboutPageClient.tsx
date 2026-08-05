"use client";

import { AboutPage } from "@/views/AboutPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function AboutPageClient() {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <AboutPage
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
