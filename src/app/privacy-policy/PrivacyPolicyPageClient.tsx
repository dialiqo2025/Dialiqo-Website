"use client";

import { PrivacyPolicyPage } from "@/views/utility/PrivacyPolicyPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function PrivacyPolicyPageClient() {
  const { navigate } = usePageHandlers();
  return <PrivacyPolicyPage onNavigate={navigate} />;
}
