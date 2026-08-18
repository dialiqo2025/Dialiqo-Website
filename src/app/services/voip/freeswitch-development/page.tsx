import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { FreeswitchServicePage } from "@/components/services/FreeswitchServicePage";
import { FREESWITCH_FAQS, FREESWITCH_PAGE_SEO } from "@/lib/freeswitchPageData";

const PATH = "/services/voip/freeswitch-development";

export async function generateMetadata() {
  return buildMetadata({
    title: FREESWITCH_PAGE_SEO.title,
    description: FREESWITCH_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function FreeswitchDevelopmentPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "VoIP", path: "/services/voip-development" },
      { name: "FreeSWITCH", path: PATH },
    ]),
    serviceJsonLd({
      name: "FreeSWITCH Development",
      description: FREESWITCH_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...FREESWITCH_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <FreeswitchServicePage />
    </>
  );
}
