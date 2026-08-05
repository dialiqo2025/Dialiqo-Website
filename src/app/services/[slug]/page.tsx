import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/data/dialiqoData";
import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = SERVICES_DATA.find((s) => s.slug === slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.shortDesc || item.heroDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = SERVICES_DATA.find((s) => s.slug === slug);
  if (!item) notFound();

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: item.title, path: `/services/${slug}` },
    ]),
    serviceJsonLd({
      name: item.title,
      description: item.shortDesc,
      path: `/services/${slug}`,
    }),
    faqJsonLd(item.faqs),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <ServiceDetailClient slug={slug} />
    </>
  );
}
