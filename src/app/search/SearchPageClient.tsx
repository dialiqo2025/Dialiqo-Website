"use client";

import { SearchResultsPage } from "@/views/utility/SearchResultsPage";
import { usePageHandlers } from "@/components/providers/usePageHandlers";

export default function SearchPageClient({ query }: { query: string }) {
  const { navigate } = usePageHandlers();
  return (
    <SearchResultsPage onNavigate={navigate} searchQueryParam={query} />
  );
}
