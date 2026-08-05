"use client";

import { HomePage } from "@/views/HomePage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function HomePageClient() {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <HomePage
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
