"use client";

import { NotFoundPage } from "@/views/utility/NotFoundPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function NotFound() {
  const { navigate } = usePageHandlers();
  return <NotFoundPage onNavigate={navigate} />;
}
