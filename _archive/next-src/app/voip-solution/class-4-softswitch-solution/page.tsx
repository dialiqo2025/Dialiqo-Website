import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Class4ServicePage } from "@/components/services/Class4ServicePage";
import { CLASS4_FAQS, CLASS4_PAGE_SEO } from "@/lib/class4PageData";

const PATH = "/voip-solution/class-4-softswitch-solution";

export async function generateMetadata() {
  return buildMetadata({
    title: CLASS4_PAGE_SEO.title,
    description: CLASS4_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function Class4SoftswitchPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "VoIP Solution", path: "/voip-solution" },
      { name: "Class 4 Softswitch", path: PATH },
    ]),
    serviceJsonLd({
      name: "Class 4 Softswitch",
      description: CLASS4_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...CLASS4_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <Class4ServicePage />
    </>
  );
}
