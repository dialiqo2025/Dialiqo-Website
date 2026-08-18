import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { HireOpensipsServicePage } from "@/components/services/HireOpensipsServicePage";
import {
  HIRE_OPENSIPS_FAQS,
  HIRE_OPENSIPS_PAGE_SEO,
} from "@/lib/hireOpensipsPageData";

const PATH = "/hire-open-sips-developers";

export async function generateMetadata() {
  return buildMetadata({
    title: HIRE_OPENSIPS_PAGE_SEO.title,
    description: HIRE_OPENSIPS_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function HireOpensipsDevelopersPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Hire Developers", path: "/services/staff-augmentation" },
      { name: "Hire OpenSIPS Developers", path: PATH },
    ]),
    serviceJsonLd({
      name: "Hire OpenSIPS Developers",
      description: HIRE_OPENSIPS_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...HIRE_OPENSIPS_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <HireOpensipsServicePage />
    </>
  );
}
