import { notFound } from "next/navigation";
import { INDUSTRIES_DATA } from "@/data/dialiqoData";
import { THEMED_INDUSTRY_PATHS } from "@/lib/routes";
import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import IndustryDetailClient from "./IndustryDetailClient";

export function generateStaticParams() {
  return INDUSTRIES_DATA.filter((i) => !THEMED_INDUSTRY_PATHS[i.slug]).map(
    (i) => ({ slug: i.slug })
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = INDUSTRIES_DATA.find((i) => i.slug === slug);
  if (!item || THEMED_INDUSTRY_PATHS[slug]) return {};
  return buildMetadata({
    title: item.title,
    description: item.shortDesc || item.heroDesc,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = INDUSTRIES_DATA.find((i) => i.slug === slug);
  if (!item || THEMED_INDUSTRY_PATHS[slug]) notFound();

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: item.title, path: `/industries/${slug}` },
    ]),
    serviceJsonLd({
      name: item.title,
      description: item.shortDesc,
      path: `/industries/${slug}`,
    }),
    faqJsonLd(item.faqs),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <IndustryDetailClient slug={slug} />
    </>
  );
}
