/**
 * Copy aligned to https://dialiqo.com/voip-solutions-for-fintech/
 */

export const FINTECH_PAGE_SEO = {
  title: "Secure VoIP Solutions for FinTech | Cloud Business Phone System",
  description:
    "Enhance customer communication with Dialiqo's secure VoIP solutions for FinTech. Benefit from reliable cloud phone systems, intelligent call routing, and scalable communication.",
} as const;

export const FINTECH_HERO = {
  title: "VoIP Solutions for Fintech",
  image: "/images/industries/real-estate-hero-office.jpg",
} as const;

export const FINTECH_WHY = {
  title:
    "Why Fintech and Banking Organizations Need a Purpose-Built VoIP Solution",
  paragraphs: [
    "The financial services sector operates in the most strictly regulated communication environment out of all the industries. The recording of conversations, the storage of data, the persons authorized to have access to it, and how long it has to be retained are all governed by an array of federal and state legislation that applies to every single call involving personal information about accounts, loans, investments, and payments. The standard VoIP system for any company was not designed with those demands in mind; therefore, its use is inherently risky from a regulatory point of view.",
    "On top of that, the fintech industry is developing at a pace that puts incredible pressure on the telecommunication infrastructure. Mobile banks, mobile payment systems, online lending platforms, and investment applications are gaining large numbers of customers quickly and require a solution that scales equally fast and does not demand any planning or capital spending in advance. Fintech clients also have exceptionally high expectations. They want the same level of speed and performance in voice communications that they receive when using an application.",
    "A VoIP solution dedicated to the fintech and banking industries helps solve these challenges. It provides control and compliance management for compliance managers, tools for prompt services for customer-focused employees and performance metrics for the executive board.",
  ],
  cta: "Get Started Today!",
} as const;

export const FINTECH_EFFORT = {
  title: "Reducing Customer Effort in Financial Support Calls",
  intro:
    "A customer calling a bank or a fintech company is likely experiencing some form of financial stress. Hold times, multiple rounds of verification, and switching to different departments are just some of the friction points experienced by the customer. With VoIP technology, however, the customer experience can be streamlined by way of:",
  items: [
    "Smart IVR that recognizes the caller’s account even before an agent gets on the line and routes accordingly depending on the customer’s latest account transactions",
    "Screen pops that allow the agent to see all account details of the caller even before greeting the customer",
    "Callback and virtual queuing, which eliminates hold times even during busy hours",
    "Workforce management capabilities that make sure the call center has sufficient staffing during peak call periods",
    "Automatic post-call survey sent out via SMS after each call",
  ],
  cta: "Request a Call",
} as const;

export const FINTECH_COMPLIANCE = {
  title: "Compliance Requirements That Financial VoIP Must Meet",
  items: [
    {
      title: "FINRA and SEC Call Recording Standards",
      desc: "According to FINRA and SEC regulations, brokers and advisors should record some of their calls with customers. They include calls related to investment advice and securities transactions. Therefore, you have to find a VoIP phone system with features such as automatic call recording and storage that cannot be easily changed. Besides, the system should enable compliance officers to find and export particular recordings as required. Violations of these requirements will lead to fines from financial authorities that will exceed the costs of a properly configured phone system.",
    },
    {
      title: "PCI DSS Compliance for Payment Call Handling",
      desc: "According to the PCI DSS standard, any call where customers enter payment card information should be protected properly. In order to provide a VoIP solution for a fintech company, you have to make sure that the chosen platform allows the pause and resume call recording function. This feature will help to stop recording when customers tell their credit card numbers. DTMF masking is another useful feature. It replaces tones made by customers when entering cards via keypad.",
    },
    {
      title: "GLBA Data Privacy Obligations",
      desc: "GLBA mandates that the financial information of customers must be kept private by all financial institutions. In the case of VoIP, it entails call encryption, secure storage of recordings, restricted access control regarding who is allowed to retrieve the recorded calls, and documentation of data handling activities, in accordance with the guidelines provided in GLBA. The service provider of your VoIP application must have the capability to sign a data processing agreement.",
    },
    {
      title: "MiFID II for International Financial Operations",
      desc: "Any financial firm that deals with European clients or works in an EU jurisdiction needs to meet the MiFID II communication recording standards, which are sometimes stricter than the regulations in the US. VoIP systems with global compliance features provide jurisdictional recording policies, multiregion data storage capabilities, and documentation that conforms to both US and EU guidelines.",
    },
  ],
} as const;

export const FINTECH_FEATURES = {
  title: "Core Features of a Compliant Financial Services VoIP Platform",
  items: [
    {
      title: "Automated and Selective Call Recording",
      desc: "The automatic recording of all incoming and outgoing calls is the base of any compliant phone system for financial services. The system should provide the capability to configure compliance officers to set up selective call recording by types of calls, configure retention periods per type of call, configure access per role to recordings, and generate audit reports with recording activity.",
    },
    {
      title: "Agent Desktop with CRM Integration",
      desc: "Financial services agents deal with some of the most private conversations between a company and its clients. An agent’s desktop environment should ensure quick retrieval of the full account information upon making a call without needing an agent to look through multiple sources of information during a conversation.",
    },
    {
      title: "Fraud Detection and Voice Authentication",
      desc: "Fraudsters trying to hack into bank accounts by means of voice impersonation are a legitimate concern today. The advanced VoIP systems used in fintech come equipped with voice biometric authentication, which checks the identity of the caller on the basis of his/her voiceprint, thus avoiding the need to ask any security questions that could easily be found out. The call authentication protects against the fraud but also enables the legitimate customer to get access faster.",
    },
    {
      title: "Omnichannel Customer Communication",
      desc: "In today’s fintech environment, a customer expects to reach support by various communication channels and have his/her history maintained across all of them. A VoIP system combining telephone calls, texts, e-mails, and in-app chat into one agent interface allows you to avoid the siloed experiences of your clients that not only dissatisfies them but also poses the risk of non-compliance issues.",
    },
    {
      title: "Real-Time Supervisor Monitoring and Dashboards",
      desc: "For a finance contact center, the supervisor must have complete awareness of what’s going on at all times on the floor. Having live dashboards that monitor the status of agents, queues, average handle time, and escalations will give the supervisor an opportunity to allocate resources as soon as possible without compromising the service level agreement. In case of any compliance issues during a live call, the supervisor can help by whispering or taking control of the call through the platform.",
    },
    {
      title: "Scaling Communication for Fast-Growing Fintech Companies",
      desc: "One of the defining characteristics of successful fintech companies is rapid growth. A lending platform handling 500 support calls a month today may be handling 5,000 calls a month 18 months from now. A neobank that launches with a small customer service team will need to multiply that team several times over within two years to keep pace with user growth. Cloud-based VoIP platforms scale with fintech growth without requiring advance planning or infrastructure investment. New agents are added in minutes. New phone numbers are provisioned instantly. Geographic expansion into new markets or countries does not require hardware procurement or local vendor negotiations. The platform grows as the business grows, and monthly costs scale proportionally with actual usage.",
    },
  ],
} as const;

export const FINTECH_WHO = {
  title: "Who This Solution Is Right For",
  items: [
    "Digital banks/neobanks are growing their customer support alongside the fast-growing number of customers.",
    "Lending companies/mortgage lenders handling large volumes of borrower communication",
    "Brokerage firms/investment advisors are required to record calls with regulators FINRA/SEC.",
    "Credit unions looking for an inexpensive way to upgrade their outdated telephony systems to be compliant",
    "Payment processors/fintech companies building customer communication systems from scratch that are compliant",
    "Insurance tech companies handling policyholder communication under state regulations",
  ],
} as const;

export const FINTECH_CTA_BAND = {
  title: "Take the First Step Toward a Compliant, Scalable Phone System",
  subtitle: "Get a Free Fintech and Banking VoIP Consultation",
  paragraph:
    "Our team understands the compliance requirements of financial services organizations. We will walk you through exactly how our platform handles call recording, data security, and regulatory documentation.",
  demoLabel: "Book My Free Fintech VoIP Consultation",
  cta: "Request Quote",
} as const;

export const FINTECH_FAQS = [
  {
    question:
      "How does a VoIP system meet FINRA call recording requirements for broker-dealers?",
    answer:
      "A VoIP system fulfilling FINRA requirements automatically records all necessary conversations with clients, keeps the recorded files in tamper-proof, write-once storage with customizable retention periods, and provides search tools that make it possible to find certain files based on the date, agent, client, or call contents. The system generates log files containing information about all access to the recordings. You should obtain from your VoIP provider a document confirming their compliance with FINRA requirements and be ready for any help from the VoIP provider during the regulatory examination.",
  },
  {
    question:
      "What is PCI DSS pause and resume recording, and why does a fintech company need it?",
    answer:
      "According to PCI DSS requirements, recording and storing cardholder information such as card number, CVV code, and entry of the PIN is prohibited. The pause and resume recording feature automatically suspends the recording of the call as soon as the customer starts giving any card information and resumes recording after processing this data. Without this feature, each recording containing card information would create a violation of PCI compliance.",
  },
  {
    question:
      "Can our fintech customer support team work remotely on a compliant VoIP platform?",
    answer:
      "Yes, there are a lot of fintech companies operating large-scale remote customer support centers using cloud-based VoIP platforms. The compliance controls, voice recording, and supervisor monitoring features perform in exactly the same way no matter if the agent is present in the contact center or works from home. Security issues in terms of remote agents involve mandatory use of virtual private network connections and endpoint security programs, plus configuration of the VoIP platform to limit access from nonauthorized devices or networks.",
  },
  {
    question:
      "How do banking VoIP systems handle voice authentication to prevent fraud?",
    answer:
      "In the case of platforms with the voice biometric functionality, the voice print is created for each registered customer through the analysis of his/her voice during regular calls. Then, when a person claiming to be this particular customer calls in, his/her voice is compared to the voiceprint, and the match score is generated in real time. If the score is not high enough, the call is flagged for further verification.",
  },
  {
    question:
      "What uptime guarantees should a financial institution require from a VoIP provider?",
    answer:
      "A minimum of 99.99 percent uptime should be required, which means there will be only one hour of downtime a year at most. In addition to the percentage, the coverage of the uptime guarantee needs to be reviewed: downtime during maintenance hours will not be counted in, and the remedies for downtime will sometimes be very small compensation credits only. It is advisable to look for service providers with redundant architecture and status dashboards available in real time.",
  },
  {
    question:
      "How long does it take to implement a VoIP system in a bank or financial institution?",
    answer:
      "It takes from two to three weeks for smaller banks such as a credit union or a fintech startup with simple routing. For a mid-sized bank with complex integration and numerous locations, the deployment can take from eight to twelve weeks. Large enterprise deployments can take several months and go through a phased deployment process. The vendor's team should provide a clear project timeline with milestones.",
  },
  {
    question:
      "Can the VoIP system integrate with our core banking platform or loan origination system?",
    answer:
      "Most enterprise VoIP systems support integration with leading core banking software through API integration, built-in connectors, or middleware applications. Once the call is received, account details, loan information, or past transaction history will pop up on the agent’s screen automatically. Campaigns for collecting outstanding payments, contacting loan applicants, or selling additional products can be initiated directly from the core banking application. This will need to be discussed during pre-sales discussions.",
  },
] as const;

export const FINTECH_CONTACT = {
  title: "Get in Touch",
  description:
    "Tell us about your bank, fintech, or lending operation and we’ll tailor a compliant VoIP demo for your support and recording workflow.",
} as const;
