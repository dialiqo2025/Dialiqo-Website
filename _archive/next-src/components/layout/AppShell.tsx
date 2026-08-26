"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useApp } from "@/components/providers/AppProviders";
import { pathToPage } from "@/lib/routes";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const { navigate, openConsultation, openSearch } = useApp();
  const currentPage = pathToPage(pathname);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-xl focus:shadow-2xl focus:font-mono focus:text-xs"
      >
        Skip to main content
      </a>

      <Navbar
        currentPage={currentPage}
        onNavigate={navigate}
        onOpenConsultation={() => openConsultation()}
        onOpenSearch={openSearch}
      />

      <main id="main-content" role="main" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>

      <Footer
        onNavigate={navigate}
        onOpenConsultation={() => openConsultation()}
      />
    </div>
  );
}
