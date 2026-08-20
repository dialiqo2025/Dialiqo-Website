import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { DevopsServicePage } from "@/components/services/DevopsServicePage";
import { DEVOPS_FAQS, DEVOPS_PAGE_SEO } from "@/lib/devopsPageData";

const PATH = "/services/devops-consulting-services";

export async function generateMetadata() {
  return buildMetadata({
    title: DEVOPS_PAGE_SEO.title,
    description: DEVOPS_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function DevopsConsultingPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "DevOps", path: PATH },
    ]),
    serviceJsonLd({
      name: "DevOps Consulting Services",
      description: DEVOPS_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...DEVOPS_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <DevopsServicePage />
    </>
  );
}
