"use client";

import { useEffect, useState } from "react";
import { SearchResultsPage } from "@/views/utility/SearchResultsPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function SearchPageClient({ query }: { query: string }) {
  const { navigate } = usePageHandlers();
  const [q, setQ] = useState(query);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQ(params.get("q") || query || "");
  }, [query]);

  return <SearchResultsPage onNavigate={navigate} searchQueryParam={q} />;
}
