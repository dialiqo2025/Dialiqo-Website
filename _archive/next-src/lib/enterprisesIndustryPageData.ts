/**
 * Copy aligned to https://dialiqo.com/voip-solutions-for-enterprises/
 */

export const ENTERPRISES_PAGE_SEO = {
  title: "VoIP Solutions for Enterprises | Secure, Scalable Cloud Calling",
  description:
    "Replace legacy PBX with an enterprise VoIP platform built for scale, security, and compliance. Unified voice, video, and messaging across every office and country.",
} as const;

export const ENTERPRISES_HERO = {
  title: "VoIP Solutions for Enterprises",
  image: "/images/industries/real-estate-hero-office.jpg",
} as const;

export const ENTERPRISES_WHY = {
  title:
    "Enterprise Communication at the Scale and Security Level Large Organizations Require",
  paragraphs: [
    "Enterprises are operating in an environment where there is an unprecedented level of communication complexity. They have many employees, in different locations, spread out in several different countries. All these entities have their own communication needs, compliance issues, and integration concerns. Old-fashioned PBX solutions that have been deployed long before cloud communication came about, and which are costly, hard to maintain and increasingly incapable of meeting the needs of the contemporary workforce. The challenge of delivering a superior quality of service while reducing costs and managing hybrid models of working has made modernizing VoIP for enterprises one of the top priorities of IT projects in big companies.",
    "An enterprise-grade VoIP solution is more than just a telephone system. It is a communication platform that includes voice, video, messages, and collaboration all integrated into a single system and serving thousands of users in several different locations. It offers the security and compliance features required by the enterprise-level IT and legal departments, the management capabilities that enable the IT department to control such a massive deployment with limited manpower, and reliability guarantees.",
    "The move from traditional telephony to an enterprise VoIP solution through the cloud is among the biggest IT decisions a large company will have to take. It requires the same care and deliberation as any other major technological investment. This web page explains the criteria that an enterprise must consider when it decides to adopt a VoIP solution, the nature of the adoption process, and vendor evaluation.",
  ],
  cta: "Get Started Today!",
} as const;

export const ENTERPRISES_MIGRATION = {
  title: "Enterprise VoIP Migration: What the Process Looks Like",
  intro:
    "Migrating a large enterprise from legacy telephony to a cloud VoIP platform is a significant undertaking that requires careful planning, strong vendor support, and a phased approach that minimizes risk to business operations. A well-managed enterprise VoIP migration typically follows these stages:",
  items: [
    "Discovery and audit of existing infrastructure, including all current phone numbers, user accounts, integrations, and site-specific configurations",
    "Design of the target-state architecture, including routing configuration, integration design, user management structure, and site deployment order",
    "Pilot deployment at one or two representative locations to validate the design and identify issues before broader rollout",
    "Phased rollout by location or business unit, with number porting scheduled to minimize disruption at each site",
    "User training and change management to ensure adoption and address concerns across the organization",
    "Post-deployment optimization based on usage data, user feedback, and performance monitoring",
  ],
  followUp:
    "The timeline for an enterprise migration varies significantly with organizational complexity. A large enterprise with 50 locations and deep legacy integrations may require six to twelve months to complete a full migration. Having a vendor with documented enterprise migration experience and a dedicated implementation team is essential for keeping that process on schedule and on budget.",
  cta: "Request a Call",
} as const;

export const ENTERPRISES_CHALLENGES = {
  title: "The Challenges That Make Enterprise VoIP Different",
  items: [
    {
      title: "Scale: Thousands of Users Across Many Locations",
      desc: "The management of a phone system that involves thousands of users and multiple sites cannot be compared to the management of the same system in a fifty-person business environment. Enterprise VoIP systems have to provide bulk provisioning, call routing that is site-specific, centralized management that includes site-level delegation, and high-quality calls irrespective of the difference in local infrastructure. The complexity of such deployment makes the administration platform and technical support for implementation equally important to the feature list itself.",
    },
    {
      title: "Security and Compliance Requirements",
      desc: "IT professionals and lawyers of an enterprise always impose stringent security requirements on every technology platform, and VoIP is not an exception. The end-to-end encryption of calls and recordings, single sign-on integration with enterprise authentication systems, role-based access controls, data sovereignty options for regulated sectors, and the SOC 2 Type II certification of the VoIP vendor are basic enterprise requirements. Certain industries, like finance, healthcare, and contractors of the government, have additional compliance requirements on top of the basic security needs.",
    },
    {
      title: "Integration with Enterprise IT Infrastructure",
      desc: "Enterprises have an ecosystem of IT components that may include Active Directory or Azure AD for user management, CRM for front-office use, help desk software for back-office use, and other applications like ERP, workforce management, and other internal enterprise applications. Not only should the integration be available; the quality of integration and how tightly coupled the components will be is important as well. Native two-way synchronization with updates occurring in real-time would be much better than one-way synchronization scheduled on some time interval.",
    },
    {
      title: "Global Operations and International Telephony",
      desc: "In case if the company operates globally in several countries, it would need to take into account such additional aspects as international telephony with its specifics like regulatory compliance, emergency calling laws, and local number porting regulations. The VoIP solution should provide international services with local number coverage, compliance documentation for each jurisdiction, emergency calling compliance, and the ability to manage all international branches using the single global administration interface.",
    },
    {
      title: "Business Continuity and Disaster Recovery",
      desc: "Enterprise communications networks are considered part of critical infrastructure. This is evident from the standards set for availability, redundancy, and disaster recovery requirements. For instance, enterprise service level agreements (SLAs) should ensure a minimum availability of 99.999 percent, which implies no more than six minutes of downtime in a year. To fulfill these SLAs, there needs to be geographically diversified infrastructure, automatic switching at the carrier level, the ability to automatically route calls in case a location is experiencing networking problems, and disaster recovery procedures.",
    },
  ],
} as const;

export const ENTERPRISES_FEATURES = {
  title: "Core Features of an Enterprise VoIP Platform",
  items: [
    {
      title: "Unified Communications Across Voice, Video, and Messaging",
      desc: "Most mature enterprise VoIP systems provide much more than just voice calling and offer true unified communications. Users interact via voice calls, video calls, team messaging, and document exchange in one unified application with consistent identity and presence in all modes of communication. This cuts down on tool redundancy, helps teams work better from different locations, and leaves only one platform to administer instead of several separate agreements and integrations between applications for each mode of communication.",
    },
    {
      title: "Enterprise-Grade Contact Center Integration",
      desc: "Larger enterprises usually have several contact centers, which might include customer service contact centers, IT helpdesks, internal shared services contact centers, and other specialized contact centers. The inclusion of a contact center into an enterprise VoIP platform allows for bringing all these contact centers under the same administration umbrella as the rest of the corporate phone system.",
    },
    {
      title: "SSO and Active Directory Integration",
      desc: "In a large company, the user management on the level of the telephone system needs to integrate with the enterprise identity management system. As soon as a new employee is hired in the company and an account for him/her is created in the Active Directory, his/her VoIP extension and corresponding rights will be provisioned automatically. At the moment of departure of the employee, the access to the system needs to be revoked automatically as well. SSO integration guarantees that the employees will have access to the communication platform using the same login details and authentication procedure used for accessing any other enterprise applications.",
    },
    {
      title: "Advanced Call Routeing and IVR at Enterprise Scale",
      desc: "The configurations of enterprise call routeing systems might be rather complex, representing the corporate structure of large organisations with different divisions, departments, locations, and front-line teams of specialists. The enterprise VoIP system allows configuring a sophisticated routeing engine able to handle such complexity through time-based routeing, skill-based distribution, multilevel IVR menus, routeing to backup teams or locations, and flexible configuration options which allow creating complex routeing logic without writing code.",
    },
    {
      title: "Centralized Administration with Delegated Management",
      desc: "The central IT organization cannot possibly oversee every configuration change made by thousands of end-users across multiple locations. Enterprise-grade VoIP solutions support a tiered administration scheme that allows central IT organizations to have control over the whole system while delegating specific administrative functions to location managers, department heads, or local IT organizations. This allows keeping control over the whole system while distributing workloads to those who are close to particular teams’ needs.",
    },
    {
      title: "Analytics, Reporting, and Workforce Management",
      desc: "Enterprise communication managers need information about usage patterns, system performance, and workforce productivity in terms of granularity and scope that go far beyond requirements of smaller companies. Usage reports across all the company’s locations, department-specific reports on number of calls, call handling times, compliance reports on regulated communication, and real-time dashboards for operation centers are some of the features required from an enterprise VoIP solution.",
    },
  ],
} as const;

export const ENTERPRISES_WHO = {
  title: "Who This Solution Is Right For",
  items: [
    "Large enterprises replacing legacy on-premise PBX systems across multiple office locations",
    "Multinational corporations seeking a unified global communication platform across all operating countries",
    "Enterprises in regulated industries that need security, compliance, and audit capabilities built into the phone system",
    "Large organizations supporting hybrid workforces that need consistent communication tools regardless of work location",
    "Corporations with large customer-facing contact center operations requiring tight integration with enterprise voice infrastructure",
    "IT leaders looking to consolidate communication vendors, reduce infrastructure costs, and simplify long-term telephony management",
  ],
} as const;

export const ENTERPRISES_CTA_BAND = {
  title: "Ready to Modernize Enterprise Communication at Your Organization?",
  subtitle: "Request an Enterprise VoIP Consultation",
  paragraph:
    "Our enterprise team works with large organizations to design, plan, and deploy cloud communication platforms that meet the security, scale, and integration requirements of complex corporate environments.",
  cta: "Request Quote",
} as const;

export const ENTERPRISES_FAQS = [
  {
    question:
      "What uptime and reliability standards should an enterprise require from a VoIP provider?",
    answer:
      "Enterprises need to ensure that the SLA includes a minimum of 99.999 uptime, also known as “five nines.” This amounts to under six minutes of downtime in any given year. Apart from the percentage guarantee, the SLA needs to include financial penalties substantial enough to capture the real cost of downtime. It is important for the vendor to reveal their infrastructure locations, failover architecture, and the previous uptimes. Maintenance should not count towards uptime time, and it should be done in off-peak hours and with prior notification.",
  },
  {
    question:
      "How does enterprise VoIP handle compliance requirements for regulated industries?",
    answer:
      "VoIP systems for businesses belonging to regulated industries offer multiple layers of compliance features. The first layer comprises features such as end-to-end encryption, data residency features, which ensure that call data remains within the geographical bounds specified by the user, and SOC 2 Type II Certification at the infrastructure level. In terms of features, these are automatic call recording with tamperproof storage of calls with customizable retention periods, role-based access to recordings by limiting access based on roles, audit trails of access to all functions of the system, and pausing the call recording process when confidential information is being exchanged. For each regulated industry, the vendor should be able to show compliance with respective frameworks, like HIPAA, FINRA, PCI DSS, or GDPR.",
  },
  {
    question:
      "Can enterprise VoIP integrate with Microsoft Teams or other existing collaboration platforms?",
    answer:
      "Yes. Many businesses have integrated Microsoft Teams or another collaboration platform for messaging and video and require that their enterprise calling capabilities be integrated into the collaboration platform itself as opposed to being integrated alongside the platform as an additional application. Several VoIP vendors provide Direct Routing and Operator Connect services, which allow carriers to provide carrier-grade PSTN calling right inside the Microsoft Teams platform. This can also be done in case of other popular collaboration platforms like Google Workspace and Cisco Webex.",
  },
  {
    question:
      "How long does an enterprise VoIP migration typically take, and what disrupts the timeline?",
    answer:
      "Enterprise migrations usually take from three to twelve months depending on the organization's complexity. The key drivers for time impact are the number of locations to migrate; complexity of legacy integration, which needs to be rebuilt or rewritten; availability of internal IT resources to perform the project; and speed of the number porting process, which may depend on the number of numbers to be ported and cooperation of the incumbent carrier. The most frequent cause of delays in an enterprise migration is underallocation of internal project management resources for the project. One of the main success factors of a large-scale migration is having an internal project owner.",
  },
  {
    question:
      "What happens to our phone numbers during an enterprise VoIP migration?",
    answer:
      "All existing phone numbers, from individual employee phone numbers that allow direct dial-in to the office main number, toll-free numbers, and departmental numbers, can all be transferred to the new VoIP solution. Number transfer is generally handled per location as part of the phased migration approach. While transferring numbers per location, all calls placed to existing numbers will be routed properly without any disruption to the business processes. Depending upon the carrier and the number of phone numbers to be transferred, the process takes anywhere between two and four weeks post submission. Your VoIP provider would coordinate the whole process for you.",
  },
  {
    question:
      "How does enterprise VoIP support employees working from home or in hybrid arrangements?",
    answer:
      "Enterprise VoIP hosted in the cloud is designed to support a flexible workforce. The employees can dial in via a softphone application in their laptop or the smartphone application in their phone, without regard to the physical place where they happen to be. The call quality would depend upon the quality of the Internet connection provided by the employee rather than the network infrastructure or hardware. In the case of enterprise deployment, there is usually information about network needs at home offices, suggested headsets for remote workers, and security configurations like using a VPN or accessing the cloud directly.",
  },
  {
    question:
      "How does centralized administration work for an enterprise with IT teams in multiple locations?",
    answer:
      "Enterprise VoIP systems are structured on a hierarchical administration structure. The entire administration control lies with the global IT department, and they have full access to the system, all user accounts, all location profiles, all routing profiles, and all compliance and security profiles. Below that, the location-based administrators could have restricted access to managing all the users, extensions, and configurations related to their location alone and not those that can affect others. The head of the departments or team managers could be given even more restricted access, like being able to manage the call routing profiles of their own team members or the voicemail settings of their own team members.",
  },
] as const;

export const ENTERPRISES_CONTACT = {
  title: "Get in Touch",
  description:
    "Tell us about your locations, users, and current PBX footprint and we’ll tailor an enterprise VoIP consultation for your migration.",
} as const;
