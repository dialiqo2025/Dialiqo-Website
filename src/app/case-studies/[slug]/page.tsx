import { notFound } from "next/navigation";
import { CASE_STUDIES_DATA } from "@/data/dialiqoData";
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

export function generateStaticParams() {
  return CASE_STUDIES_DATA.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = CASE_STUDIES_DATA.find((c) => c.slug === slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.summary,
    path: `/case-studies/${slug}`,
    image: item.heroImage,
    type: "article",
  });
}

export default async function CaseStudyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = CASE_STUDIES_DATA.find((c) => c.slug === slug);
  if (!item) notFound();

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/case-studies" },
      { name: item.title, path: `/case-studies/${slug}` },
    ]),
    articleJsonLd({
      title: item.title,
      description: item.summary,
      path: `/case-studies/${slug}`,
      image: item.heroImage,
    }),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <CaseStudyDetailClient slug={slug} />
    </>
  );
}
