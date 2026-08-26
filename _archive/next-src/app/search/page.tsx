import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SearchPageClient from "./SearchPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Search Results",
  description: "Search Dialiqo services, industries, technologies, case studies, and resources.",
  path: "/search",
  noIndex: true,
});

/** Static export: query string is read client-side. */
export default function Search() {
  return <SearchPageClient query="" />;
}
