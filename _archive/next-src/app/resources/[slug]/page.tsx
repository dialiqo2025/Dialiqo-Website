import { notFound } from "next/navigation";
import { RESOURCES_DATA } from "@/data/dialiqoData";
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import BlogDetailClient from "./BlogDetailClient";

export function generateStaticParams() {
  return RESOURCES_DATA.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = RESOURCES_DATA.find((r) => r.slug === slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.summary,
    path: `/resources/${slug}`,
    image: item.coverImage,
    type: "article",
  });
}

export default async function ResourceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = RESOURCES_DATA.find((r) => r.slug === slug);
  if (!item) notFound();

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: item.title, path: `/resources/${slug}` },
    ]),
    articleJsonLd({
      title: item.title,
      description: item.summary,
      path: `/resources/${slug}`,
      image: item.coverImage,
      datePublished: item.publishedDate,
      author: item.author,
    }),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogDetailClient slug={slug} />
    </>
  );
}
