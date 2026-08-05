"use client";

import { useApp } from "@/components/providers/AppProviders";

/** Shared navigate / consultation handlers for App Router page clients. */
export function usePageHandlers() {
  const { navigate, openConsultation } = useApp();
  return { navigate, openConsultation };
}
