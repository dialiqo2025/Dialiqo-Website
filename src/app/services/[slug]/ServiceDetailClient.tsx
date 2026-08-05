"use client";

import { ServiceDetailPage } from "@/views/ServiceDetailPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <ServiceDetailPage
      serviceSlug={slug}
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
