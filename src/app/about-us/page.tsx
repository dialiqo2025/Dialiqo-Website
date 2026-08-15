import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { AboutUsPage } from "@/components/about/AboutUsPage";
import { ABOUT_PAGE_SEO } from "@/lib/aboutPageData";

const PATH = "/about-us";

export async function generateMetadata() {
  return buildMetadata({
    title: ABOUT_PAGE_SEO.title,
    description: ABOUT_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function AboutUsRoute() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "About Us", path: PATH },
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <AboutUsPage />
    </>
  );
}
