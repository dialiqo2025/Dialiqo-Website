"use client";

import { CookiePolicyPage } from "@/views/utility/CookiePolicyPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function CookiePolicyPageClient() {
  const { navigate } = usePageHandlers();
  return <CookiePolicyPage onNavigate={navigate} />;
}
