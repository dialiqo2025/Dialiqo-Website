import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { VoicebotServicePage } from "@/components/services/VoicebotServicePage";
import {
  VOICEBOT_FAQS,
  VOICEBOT_PAGE_SEO,
} from "@/lib/voicebotPageData";

const PATH = "/services/ai-voicebot-connector";

export async function generateMetadata() {
  return buildMetadata({
    title: VOICEBOT_PAGE_SEO.title,
    description: VOICEBOT_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function AiVoicebotConnectorPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "AI-ML", path: "/services/ai-ml-development-services" },
      { name: "AI Voicebot Connector", path: PATH },
    ]),
    serviceJsonLd({
      name: "AI Voicebot Connector",
      description: VOICEBOT_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...VOICEBOT_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <VoicebotServicePage />
    </>
  );
}
