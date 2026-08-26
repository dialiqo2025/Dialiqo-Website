"use client";

import { BlogListingPage } from "@/views/BlogDetailPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function ResourcesPageClient() {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <BlogListingPage
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
