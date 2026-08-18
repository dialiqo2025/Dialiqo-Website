import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { ChatbotServicePage } from "@/components/services/ChatbotServicePage";
import {
  CHATBOT_FAQS,
  CHATBOT_PAGE_SEO,
  chatbotFaqPlainText,
} from "@/lib/chatbotPageData";

const PATH = "/services/ai-ml-development-services/chatbot-services";

export async function generateMetadata() {
  return buildMetadata({
    title: CHATBOT_PAGE_SEO.title,
    description: CHATBOT_PAGE_SEO.description,
    path: PATH,
    absoluteTitle: true,
  });
}

export default function ChatbotServicesPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "AI-ML", path: "/services/ai-ml-development-services" },
      { name: "Chatbot", path: PATH },
    ]),
    serviceJsonLd({
      name: "Chatbot Development Services",
      description: CHATBOT_PAGE_SEO.description,
      path: PATH,
    }),
    faqJsonLd(
      CHATBOT_FAQS.map((faq) => ({
        question: faq.question,
        answer: chatbotFaqPlainText(faq),
      }))
    ),
  ].filter(Boolean);

  return (
    <>
      <JsonLd data={jsonLd} />
      <ChatbotServicePage />
    </>
  );
}
