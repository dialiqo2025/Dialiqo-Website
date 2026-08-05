import { notFound } from "next/navigation";
import { TECHNOLOGIES_DATA } from "@/data/dialiqoData";
import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import TechDetailClient from "./TechDetailClient";

export function generateStaticParams() {
  return TECHNOLOGIES_DATA.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = TECHNOLOGIES_DATA.find((t) => t.slug === slug);
  if (!item) return {};
  return buildMetadata({
    title: item.name,
    description: item.shortDesc || item.heroDesc,
    path: `/technologies/${slug}`,
  });
}

export default async function TechDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = TECHNOLOGIES_DATA.find((t) => t.slug === slug);
  if (!item) notFound();

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Technologies", path: "/technologies" },
      { name: item.name, path: `/technologies/${slug}` },
    ]),
    serviceJsonLd({
      name: item.name,
      description: item.shortDesc,
      path: `/technologies/${slug}`,
    }),
    faqJsonLd(item.faqs),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <TechDetailClient slug={slug} />
    </>
  );
}
