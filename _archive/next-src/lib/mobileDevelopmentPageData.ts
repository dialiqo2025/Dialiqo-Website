/**
 * Copy aligned to https://dialiqo.com/services/mobile-web/mobile-development/
 */

export const MOBILE_DEV_PAGE_SEO = {
  title: "Mobile App Development | Android & iOS App Development Company",
  description:
    "Dialiqo provides Mobile App Development for Android & iOS with secure, scalable, and user-friendly designs. Our Mobile Development powers enterprises and startups with feature-rich mobile solutions.",
} as const;

export const MOBILE_DEV_HERO = {
  title: "Transform Your Ideas with a Leading Mobile App Design Agency",
  description:
    "Mobile applications are thriving ecosystems in the digital world with a heartbeat that matches that of your company. And an authentic phone app development company listens and adapts according to the customer. We know what your users want before they do, and we turn them into your raving fans.",
  cta: "Inquire Now",
} as const;

export const MOBILE_DEV_INTRO = {
  title: "Mobile Applications for every business in the Artificial Intelligence era",
  description:
    "With the rise of Artificial Intelligence, companies across every industry are realizing that AI-enhanced mobile applications are now a business necessity rather than a choice. As a leading mobile app design agency, we specialize in creating custom mobile app solutions that are highly personalized, adapt in real-time, recognize usage patterns, anticipate user needs, and deliver the most intuitive user interfaces.",
  cta: "Let\u2019s Talk",
} as const;

export const MOBILE_DEV_PILLARS = {
  title: "8 key pillars that define Us a strong Mobile App Design Agency",
  description:
    "At Dialiqo, our work is comprehensive and we have a unique approach to mobile app development which makes us distinctly ahead:",
  items: [
    "Strategic Vision Engineering",
    "Comprehensive Discovery & Diagnostic Consulting",
    "Innovative Experience Design",
    "Advanced Development Methodology",
    "Comprehensive Quality Assurance",
    "Intelligent Deployment & Integration",
    "Continuous Evolution & Support",
    "Data-Driven Performance Analytics",
  ],
} as const;

export const MOBILE_DEV_WHAT = {
  title: "What do we do as a mobile app design and development company?",
  items: [
    {
      title: "Build Adaptive Design Ecosystems",
      desc: "We don\u2019t create interfaces; we build living spaces that adapt to the DNA of your brand. Our user experiences are narrative interactions designed keeping in mind your business demands and turning it into simple and engaging interactions.",
    },
    {
      title: "Cross-Platform Engineering",
      desc: "We are not constrained by traditional platform silos and deliver experiences that are integrated. We believe in a unified code; no matter the device \u2013 be it iOS or Android or future digital interfaces. It is a language that addresses all the devices; hence our code.",
    },
    {
      title: "Intelligent Feature Architecture",
      desc: "In addition to core development, we design smart mobile app environments that can learn our customers\u2019 preferences, embed business processes, and design friction less mobile applications that can resolve real-life challenges with optimal ease of use.",
    },
    {
      title: "Performance Intelligence",
      desc: "We come up with apps with predictive performance capabilities. Our mobile application development services are designed to grow and adapt, no matter how many users it has or how complex the program is.",
    },
    {
      title: "Security-First Development",
      desc: "Security is not an addition to our services, it is a fundamental approach and we create apps that are like digital fortresses. We create multiple tier security that ensures data privacy and sanctity yet they are smooth unblemished client interfaces.",
    },
    {
      title: "Continuous Evolution Strategy",
      desc: "Mobile app development and its successful launch is just the beginning. Our adaptive maintenance strategies involve gradually improving your digital product with user feedback, new technologies, and the changing market.",
    },
  ],
} as const;

export const MOBILE_DEV_INDUSTRIES = {
  title:
    "Top 5 Industries Critically Dependent on Mobile Application Development Services",
  description:
    "Mobile App Design and Development is the need of the hour in retail, healthcare, finance, manufacturing, and education domains. They allow customers to have customized shopping experiences, help in diagnosing diseases, offer wise financial solutions, improve the supply chain and offer smart education. These applications are important not only in the technological field, but are in fact much more diverse and promising.",
  steps: [
    "Healthcare & Medical Services",
    "Financial Services & Fintech",
    "Logistics & Transportation",
    "Education & government",
    "Hospitality & Tourism",
  ],
} as const;

export const MOBILE_DEV_CTA_BAND = {
  title:
    "Custom Phone App Development: Your Antidote to Competition and Elixir of Relevancy.",
  cta: "Book a Call",
} as const;

export const MOBILE_DEV_SERVICES = {
  title: "Our Mobile Application Development Services",
  items: [
    {
      title: "Exceptional Development",
      paragraphs: [
        "At Dialiqo, our experienced developers have expertise in a wide range of applications and can fully explore the opportunity of AR (Augmented Reality) and VR (Virtual Reality) to unleash the surrounding reality or implement the most progressive AI (Artificial Intelligence) and ML (Machine Learning) to develop smart applications.",
      ],
    },
    {
      title: "Client-Centric Approach",
      paragraphs: [
        "We remain proud of the fact that we produce high quality works after passing through rigorous quality control mechanisms when delivering the work to the client. Our goal here is to exceed expectations, developing not just functional but lasting impression on the users and the businesses for which we work.",
      ],
    },
    {
      title: "SEO-Friendly Optimization",
      paragraphs: [
        "We aim to develop apps that increase your overall ranking in search results, therefore increasing the number of people likely to find your application on their very own. We ensure SEO-friendly architectures, lightning-fast performance, and seamless user experiences across multiple devices and platforms.",
      ],
    },
    {
      title: "Agile Deployment",
      paragraphs: [
        "We strive to develop applications that quickly enable your product to get to the market on time. Our approach ensures faster time-to-market, allowing businesses to quickly capitalize on emerging opportunities, respond to market dynamics, and stay ahead of competitive landscapes.",
      ],
    },
  ],
} as const;

export const MOBILE_DEV_CROSS = {
  title:
    "Cross platform mobile application development- a cost-effective and time-saving solution",
  paragraphs: [
    "Cross-platform mobile application development refers to the concept of creating an app that runs on multiple operating systems and devices. This approach allows developers to build a single application with a shared code base for different platforms. Popular cross-platform app development frameworks include React Native, Flutter, Xamarin, and Ionic. These frameworks enable developers to use languages like JavaScript, Dart, and C# to create apps that are compiled into native code for each platform. As a mobile app design agency, we help you leverage these technologies to create efficient, user-friendly, and high-performance apps that reach a broader audience.",
    "Cross-platform apps typically incorporate a web-based development paradigm such as HTML, CSS, or Javascript, and are hosted within a platform-dependent shell. This container enables feature and API access by the app, giving the user an almost native experience. Cross-platform development is important for organizations that need to target as many networks as possible within budget. It allows developers to build a single application and deploy it on the Apple operating system, Google\u2019s Android operating system and the Windows operating system bringing in more clients. In conclusion, the cross-platform development enables the developers to maintain one interface for both platforms making it easier to develop branching apps with less time and money. This approach is perfect for businesses that require getting to the large amount of users via single application without the extra cost of developing the application for two platforms.",
  ],
} as const;

export type MobileDevFaqItem = {
  question: string;
  answer: string;
  bullets?: readonly string[];
};

export const MOBILE_DEV_FAQS: readonly MobileDevFaqItem[] = [
  {
    question: "How much does it cost to develop a mobile application?",
    answer:
      "The cost of mobile app development varies significantly based on complexity, features, platforms, and design requirements. We provide detailed, transparent cost breakdowns after preliminary discussion and work closely with clients to optimize budgets without compromising quality.",
  },
  {
    question: "How long does it take to develop a mobile application?",
    answer:
      "Typical mobile app development timelines range from 3 to 6 months depending on the amount of work and complexity of the app. A simple app with basic features might take 3-4 months, while more complex applications with advanced features can take 6-9 months. Our IoS and Android App Development process ensures efficient timelines, regular communication, and flexible milestones to meet your specific business requirements.",
  },
  {
    question: "Do you develop apps for both iOS and Android platforms?",
    answer:
      "Absolutely! We specialize in cross-platform mobile app development, creating native and hybrid applications for both iOS and Android. Our team of expert developers ensures seamless performance, consistent user experience, and platform-specific optimization. We can also develop progressive web apps that work across multiple devices and platforms.",
  },
  {
    question: "What is your app development process?",
    answer: "Our comprehensive development process includes:",
    bullets: [
      "Initial consultation and requirement analysis",
      "Strategic planning and conceptualization",
      "Wireframing and prototype design",
      "User experience (UX) and user interface (UI) design",
      "Development and coding",
      "Rigorous quality assurance testing",
      "Deployment and post-launch support",
      "Continuous optimization and updates",
    ],
  },
  {
    question: "How do you ensure the security of the mobile application?",
    answer: "Security is our top priority. We implement multiple layers of protection including:",
    bullets: [
      "Secure coding practices",
      "Encryption of sensitive data",
      "Regular security audits",
      "Compliance with industry standards",
      "Protection against potential cyber threats",
      "Secure authentication mechanisms",
      "Ongoing security updates and monitoring",
    ],
  },
  {
    question: "What ongoing support do you provide after app launch?",
    answer: "Our post-launch support includes:",
    bullets: [
      "Regular performance monitoring",
      "Security updates",
      "Bug fixes",
      "Platform compatibility maintenance",
      "Feature enhancements",
      "Technical support",
      "Performance optimization",
      "Scalability adjustments",
    ],
  },
];

export function mobileDevFaqPlainText(faq: MobileDevFaqItem): string {
  if (!faq.bullets?.length) return faq.answer;
  return `${faq.answer}\n${faq.bullets.map((item) => `- ${item}`).join("\n")}`;
}

export const MOBILE_DEV_CONTACT = {
  title: "Ready To Get Started?",
  description:
    "With decades of experience and know-how of software development essentials, we build future-proof, intuitive, and highly scalable web, mobile, and VoIP solutions. Bring the ultimate success for your business with Next-Gen, Tech-Empowered Solutions.",
} as const;
