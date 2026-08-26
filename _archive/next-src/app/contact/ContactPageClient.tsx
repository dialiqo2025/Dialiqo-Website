"use client";

import { ContactPage } from "@/views/ContactPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function ContactPageClient() {
  const { navigate, openConsultation } = usePageHandlers();
  return (
    <ContactPage
      onNavigate={navigate}
      onOpenConsultation={openConsultation}
    />
  );
}
