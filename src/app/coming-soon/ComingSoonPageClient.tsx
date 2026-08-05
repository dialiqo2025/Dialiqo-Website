"use client";

import { ComingSoonPage } from "@/views/utility/ComingSoonPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function ComingSoonPageClient() {
  const { navigate } = usePageHandlers();
  return <ComingSoonPage onNavigate={navigate} />;
}
