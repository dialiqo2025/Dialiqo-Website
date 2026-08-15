import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { HireKamailioServicePage } from "@/components/services/HireKamailioServicePage";
import {
  HIRE_KAMAILIO_FAQS,
  HIRE_KAMAILIO_PAGE_SEO,
} from "@/lib/hireKamailioPageData";

const PATH = "/hire-kamailio-developers";

export async function generateMetadata() {
  return buildMetadata({
    title: HIRE_KAMAILIO_PAGE_SEO.title,
    description: HIRE_KAMAILIO_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function HireKamailioDevelopersPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Hire Developers", path: "/services/staff-augmentation" },
      { name: "Hire Kamailio Developers", path: PATH },
    ]),
    serviceJsonLd({
      name: "Hire Kamailio Developers",
      description: HIRE_KAMAILIO_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...HIRE_KAMAILIO_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <HireKamailioServicePage />
    </>
  );
}
