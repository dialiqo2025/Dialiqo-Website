import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SearchPageClient from "./SearchPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Search Results",
  description: "Search Dialiqo services, industries, technologies, case studies, and resources.",
  path: "/search",
  noIndex: true,
});

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return <SearchPageClient query={q || ""} />;
}
