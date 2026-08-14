import { pageToPath } from "@/lib/routes";

export type MegaMenuLink = {
  label: string;
  href: string;
};

export type MegaMenuGroup = {
  title: string;
  href?: string;
  items: MegaMenuLink[];
};

/** Service mega-menu structure aligned to live Dialiqo WordPress nav. */
export const SERVICES_MEGA_MENU = {
  heading: "Dialiqo's Cutting-Edge VoIP Development Services",
  description:
    "Comprehensive services with assured quality and uncompromised standards.",
  coreServices: {
    title: "Core Services",
    items: [
      { label: "VoIP Solutions", href: "/solutions" },
      {
        label: "VoIP Consulting Services",
        href: pageToPath("service-detail", "software-consulting"),
      },
      {
        label: "VoIP Migration Services",
        href: pageToPath("service-detail", "voip-development"),
      },
    ] as MegaMenuLink[],
  },
  groups: [
    {
      title: "VoIP",
      href: pageToPath("service-detail", "voip-development"),
      items: [
        {
          label: "FreeSWITCH",
          href: "/services/voip/freeswitch-development",
        },
        {
          label: "Asterisk",
          href: pageToPath("technology-detail", "asterisk"),
        },
        {
          label: "OpenSIPS",
          href: pageToPath("technology-detail", "opensips"),
        },
        {
          label: "Kamailio",
          href: pageToPath("technology-detail", "kamailio"),
        },
      ],
    },
    {
      title: "Mobile & Web",
      href: pageToPath("service-detail", "mobile-web"),
      items: [
        {
          label: "Web Development",
          href: pageToPath("service-detail", "web-development"),
        },
        {
          label: "Mobile Development",
          href: pageToPath("service-detail", "mobile-app-development"),
        },
      ],
    },
    {
      title: "QA Services",
      href: pageToPath("service-detail", "qa-testing-services"),
      items: [
        {
          label: "VoIP Testing",
          href: pageToPath("service-detail", "qa-testing-services"),
        },
        {
          label: "QA Automation",
          href: pageToPath("service-detail", "qa-testing-services"),
        },
        {
          label: "API Testing",
          href: pageToPath("service-detail", "qa-testing-services"),
        },
      ],
    },
    {
      title: "AI-ML",
      href: pageToPath("service-detail", "ai-ml-development-services"),
      items: [
        {
          label: "Sentiment Analysis",
          href: pageToPath("service-detail", "ai-development"),
        },
        {
          label: "Chatbot",
          href: pageToPath("service-detail", "ai-chatbot-development"),
        },
        {
          label: "AI Voicebot Connector",
          href: pageToPath("service-detail", "voice-ai-solutions"),
        },
      ],
    },
    {
      title: "DevOps",
      href: pageToPath("service-detail", "devops-consulting-services"),
      items: [
        {
          label: "Staff Augmentation",
          href: pageToPath("service-detail", "staff-augmentation"),
        },
      ],
    },
    {
      title: "Hire Developers",
      href: pageToPath("service-detail", "staff-augmentation"),
      items: [
        {
          label: "Hire WebRTC Developers",
          href: pageToPath("service-detail", "staff-augmentation"),
        },
        {
          label: "Hire VoIP Developers",
          href: pageToPath("service-detail", "staff-augmentation"),
        },
        {
          label: "Hire OpenSIPS Developers",
          href: pageToPath("service-detail", "staff-augmentation"),
        },
        {
          label: "Hire Kamailio Developers",
          href: pageToPath("service-detail", "staff-augmentation"),
        },
        {
          label: "Hire FreeSWITCH Developers",
          href: pageToPath("service-detail", "staff-augmentation"),
        },
        {
          label: "Hire Asterisk Developers",
          href: pageToPath("service-detail", "staff-augmentation"),
        },
      ],
    },
  ] as MegaMenuGroup[],
};

/** Our Products mega-menu — Contact Center & VoIP Billing. */
export type ProductFeature = {
  label: string;
  href: string;
  tagline: string;
  description: string;
};

export const PRODUCTS_MEGA_MENU = {
  heading: "Our Products",
  description: "Ready-to-deploy platforms built for modern communication businesses.",
  links: [
    {
      label: "Contact Center",
      href: "/solutions",
    },
    {
      label: "VoIP Billing",
      href: "/solutions",
    },
  ] as MegaMenuLink[],
  featured: [
    {
      label: "Contact Center",
      href: "/solutions",
      tagline: "Omnichannel Contact Center",
      description:
        "AI-powered contact center with voice, chat, email, and 24/7 agent support — built for high-volume customer engagement.",
    },
    {
      label: "VoIP Billing",
      href: "/solutions",
      tagline: "Real-Time Telecom Billing",
      description:
        "Prepaid and postpaid VoIP billing with CDR rating, analytics, invoicing, and usage insights for operators and MVNOs.",
    },
  ] as ProductFeature[],
};

/** VoIP Solution mega-menu — numbered solution cards. */
export type VoipSolutionItem = MegaMenuLink & {
  number: string;
};

export const VOIP_SOLUTIONS_MEGA_MENU = {
  heading: "VoIP Solution",
  description:
    "Specialized VoIP platforms for carriers, enterprises, and communication providers.",
  items: [
    { label: "IVR", number: "01", href: "/solutions" },
    { label: "UC", number: "02", href: "/solutions" },
    { label: "WebRTC", number: "03", href: "/solutions" },
    { label: "SBC", number: "04", href: "/solutions" },
    { label: "MVNO", number: "05", href: "/solutions" },
    { label: "Class 5 Softswitch", number: "06", href: "/solutions" },
    { label: "Class 4 Softswitch", number: "07", href: "/solutions" },
    { label: "MVNO Billing", number: "08", href: "/solutions" },
  ] as VoipSolutionItem[],
};

/** Industries mega-menu — live Dialiqo industry list. */
export const INDUSTRIES_MEGA_MENU = {
  heading: "Industries",
  description: "VoIP and communication solutions tailored for every industry.",
  items: [
    {
      label: "Real Estate",
      href: pageToPath("industry-detail", "real-estate"),
    },
    {
      label: "Hotels",
      href: pageToPath("industry-detail", "hospitality"),
    },
    {
      label: "Healthcare",
      href: pageToPath("industry-detail", "healthcare"),
    },
    {
      label: "Ecommerce",
      href: pageToPath("industry-detail", "retail"),
    },
    {
      label: "Centers",
      href: "/solutions",
    },
    {
      label: "Education",
      href: pageToPath("industry-detail", "education"),
    },
    {
      label: "Fintech",
      href: pageToPath("industry-detail", "finance"),
    },
    {
      label: "Insurance",
      href: pageToPath("industry-detail", "insurance"),
    },
    {
      label: "Logistics",
      href: pageToPath("industry-detail", "logistics"),
    },
    {
      label: "Recruitment",
      href: "/industries",
    },
    {
      label: "Enterprises",
      href: "/industries",
    },
    {
      label: "SaaS Companies",
      href: "/industries",
    },
    {
      label: "Telecom",
      href: pageToPath("industry-detail", "telecommunications"),
    },
    {
      label: "Travel Agencies",
      href: pageToPath("industry-detail", "travel"),
    },
  ] as MegaMenuLink[],
};


