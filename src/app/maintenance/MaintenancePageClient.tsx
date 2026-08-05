"use client";

import { MaintenancePage } from "@/views/utility/MaintenancePage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function MaintenancePageClient() {
  const { navigate } = usePageHandlers();
  return <MaintenancePage onNavigate={navigate} />;
}
