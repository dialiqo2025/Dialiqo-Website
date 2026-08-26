import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Class5ServicePage } from "@/components/services/Class5ServicePage";
import { CLASS5_FAQS, CLASS5_PAGE_SEO } from "@/lib/class5PageData";

const PATH = "/voip-solution/class-5-softswitch-solutions";

export async function generateMetadata() {
  return buildMetadata({
    title: CLASS5_PAGE_SEO.title,
    description: CLASS5_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function Class5SoftswitchPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "VoIP Solution", path: "/voip-solution" },
      { name: "Class 5 Softswitch", path: PATH },
    ]),
    serviceJsonLd({
      name: "Class 5 Softswitch",
      description: CLASS5_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...CLASS5_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <Class5ServicePage />
    </>
  );
}
