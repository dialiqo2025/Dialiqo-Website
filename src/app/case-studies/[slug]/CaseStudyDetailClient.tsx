"use client";

import { CaseStudyDetailPage } from "@/views/CaseStudyDetailPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function CaseStudyDetailClient({ slug }: { slug: string }) {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <CaseStudyDetailPage
      slug={slug}
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
