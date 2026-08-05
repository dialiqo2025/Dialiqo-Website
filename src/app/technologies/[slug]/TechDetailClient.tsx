"use client";

import { TechDetailPage } from "@/views/TechDetailPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function TechDetailClient({ slug }: { slug: string }) {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <TechDetailPage
      techSlug={slug}
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
