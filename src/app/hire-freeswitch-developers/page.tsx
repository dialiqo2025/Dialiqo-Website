import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { HireFreeswitchServicePage } from "@/components/services/HireFreeswitchServicePage";
import {
  HIRE_FREESWITCH_FAQS,
  HIRE_FREESWITCH_PAGE_SEO,
} from "@/lib/hireFreeswitchPageData";

const PATH = "/hire-freeswitch-developers";

export async function generateMetadata() {
  return buildMetadata({
    title: HIRE_FREESWITCH_PAGE_SEO.title,
    description: HIRE_FREESWITCH_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function HireFreeswitchDevelopersPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Hire Developers", path: "/services/staff-augmentation" },
      { name: "Hire FreeSWITCH Developers", path: PATH },
    ]),
    serviceJsonLd({
      name: "Hire FreeSWITCH Developers",
      description: HIRE_FREESWITCH_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...HIRE_FREESWITCH_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <HireFreeswitchServicePage />
    </>
  );
}
