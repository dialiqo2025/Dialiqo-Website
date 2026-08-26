"use client";

import { useEffect } from "react";

/** Static-export friendly redirect (next/navigation redirect is unsupported in export). */
export function RedirectClient({ href }: { href: string }) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-300 p-8">
      <p>
        Redirecting to{" "}
        <a className="text-blue-400 underline" href={href}>
          {href}
        </a>
        …
      </p>
    </main>
  );
}
