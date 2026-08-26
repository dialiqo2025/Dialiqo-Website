import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SentimentAnalysisServicePage } from "@/components/services/SentimentAnalysisServicePage";
import {
  SENTIMENT_FAQS,
  SENTIMENT_PAGE_SEO,
} from "@/lib/sentimentAnalysisPageData";

const PATH = "/services/ai-ml-development-services/sentiment-analysis";

export async function generateMetadata() {
  return buildMetadata({
    title: SENTIMENT_PAGE_SEO.title,
    description: SENTIMENT_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function SentimentAnalysisPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "AI-ML", path: "/services/ai-ml-development-services" },
      { name: "Sentiment Analysis", path: PATH },
    ]),
    serviceJsonLd({
      name: "Sentiment Analysis Solutions",
      description: SENTIMENT_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd([...SENTIMENT_FAQS]),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <SentimentAnalysisServicePage />
    </>
  );
}
