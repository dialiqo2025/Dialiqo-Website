import { notFound } from "next/navigation";
import { INDUSTRIES_DATA } from "@/data/dialiqoData";
import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import IndustryDetailClient from "./IndustryDetailClient";

export function generateStaticParams() {
  return INDUSTRIES_DATA.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = INDUSTRIES_DATA.find((i) => i.slug === slug);
  if (!item) return {};
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
  if (!item) notFound();

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
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
