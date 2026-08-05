"use client";

import { BlogDetailPage } from "@/views/BlogDetailPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function BlogDetailClient({ slug }: { slug: string }) {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <BlogDetailPage
      slug={slug}
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
