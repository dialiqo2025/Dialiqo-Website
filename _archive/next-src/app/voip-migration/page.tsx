import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { VoipMigrationServicePage } from "@/components/services/VoipMigrationServicePage";
import {
  VOIP_MIGRATION_FAQS,
  VOIP_MIGRATION_PAGE_SEO,
} from "@/lib/voipMigrationPageData";

const PATH = "/voip-migration";

export async function generateMetadata() {
  return buildMetadata({
    title: VOIP_MIGRATION_PAGE_SEO.title,
    description: VOIP_MIGRATION_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function VoipMigrationPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "VoIP Migration", path: PATH },
    ]),
    serviceJsonLd({
      name: "VoIP Migration Services",
      description: VOIP_MIGRATION_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...VOIP_MIGRATION_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <VoipMigrationServicePage />
    </>
  );
}
