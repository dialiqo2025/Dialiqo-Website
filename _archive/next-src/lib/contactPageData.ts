/**
 * Copy aligned to https://dialiqo.com/contact/
 */

export const CONTACT_PAGE_SEO = {
  title: "Contact Dialiqo | VoIP Development Services & Software Solutions",
  description:
    "When you partner with us, our expert and certified team supports you every step of the way, ensuring your project progresses smoothly and efficiently.",
} as const;

export const CONTACT_HERO = {
  title: "Contact Us",
} as const;

export const CONTACT_INTRO = {
  title: "Get in touch with us!",
  description:
    "When you partner with us, our expert and certified team supports you every step of the way, ensuring your project progresses smoothly and efficiently.",
} as const;

export const CONTACT_DETAILS = [
  {
    label: "INDIA",
    value: "E509 Ganesh Glory 11, Ahmedabad, Gujarat 382470, INDIA",
    href: "https://www.google.com/maps/search/?api=1&query=E509+Ganesh+Glory+11,+Ahmedabad,+Gujarat+382470,+INDIA",
    kind: "maps" as const,
  },
  {
    label: "USA",
    value: "Fremont, CA 94536",
    href: null,
    kind: "text" as const,
  },
  {
    label: "Office Email",
    value: "Info@dialiqo.com",
    href: "mailto:info@dialiqo.com",
    kind: "email" as const,
  },
  {
    label: "Phone Number",
    value: "+91 9974542501",
    href: "tel:+919974542501",
    kind: "phone" as const,
  },
] as const;

export const CONTACT_FORM = {
  title: "Ready to Get Started?",
  note: "Your email address will not be published. Required fields are marked *",
  submit: "SEND MESSAGE",
} as const;

export const CONTACT_SCHEDULE = {
  title: "Schedule a call",
  description:
    "Pick a time that works for you. Our team will confirm your consultation and send a calendar invite with meeting details.",
} as const;
