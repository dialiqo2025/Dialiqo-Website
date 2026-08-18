import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { HireAsteriskServicePage } from "@/components/services/HireAsteriskServicePage";
import {
  HIRE_ASTERISK_FAQS,
  HIRE_ASTERISK_PAGE_SEO,
} from "@/lib/hireAsteriskPageData";

const PATH = "/hire-asterisk-developers";

export async function generateMetadata() {
  return buildMetadata({
    title: HIRE_ASTERISK_PAGE_SEO.title,
    description: HIRE_ASTERISK_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function HireAsteriskDevelopersPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Hire Developers", path: "/services/staff-augmentation" },
      { name: "Hire Asterisk Developers", path: PATH },
    ]),
    serviceJsonLd({
      name: "Hire Asterisk Developers",
      description: HIRE_ASTERISK_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...HIRE_ASTERISK_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <HireAsteriskServicePage />
    </>
  );
}
