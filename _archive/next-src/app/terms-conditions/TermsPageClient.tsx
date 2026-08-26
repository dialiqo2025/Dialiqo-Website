"use client";

import { TermsPage } from "@/views/utility/TermsPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function TermsPageClient() {
  const { navigate } = usePageHandlers();
  return <TermsPage onNavigate={navigate} />;
}
