"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { pageToPath } from "@/lib/routes";
import { CommandMenu } from "@/components/common/CommandMenu";
import { ConsultationModal } from "@/components/common/ConsultationModal";

type AppContextValue = {
  navigate: (page: string, slug?: string) => void;
  openConsultation: (serviceName?: string) => void;
  openSearch: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within AppProviders");
  }
  return ctx;
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useCallback(
    (page: string, slug?: string) => {
      const path = pageToPath(page, slug);
      router.push(path);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [router]
  );

  const openConsultation = useCallback((serviceName?: string) => {
    if (serviceName) setConsultationService(serviceName);
    setConsultationOpen(true);
  }, []);

  const openSearch = useCallback(() => setSearchOpen(true), []);

  return (
    <AppContext.Provider value={{ navigate, openConsultation, openSearch }}>
      {children}
      <CommandMenu
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigate}
      />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialService={consultationService}
      />
    </AppContext.Provider>
  );
}
