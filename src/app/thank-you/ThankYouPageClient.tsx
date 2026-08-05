"use client";

import { ThankYouPage } from "@/views/utility/ThankYouPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function ThankYouPageClient() {
  const { navigate } = usePageHandlers();
  return <ThankYouPage onNavigate={navigate} />;
}
