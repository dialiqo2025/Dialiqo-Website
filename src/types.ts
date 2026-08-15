export type PageType = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'service-detail'
  | 'industries' 
  | 'industry-detail'
  | 'technologies' 
  | 'technology-detail'
  | 'solutions'
  | 'solution-detail'
  | 'voip-solution'
  | 'case-studies' 
  | 'case-study-detail'
  | 'resources' 
  | 'resource-detail'
  | 'careers' 
  | 'contact'
  | 'privacy-policy'
  | 'terms-conditions'
  | 'cookie-policy'
  | 'not-found'
  | 'thank-you'
  | 'search-results'
  | 'coming-soon'
  | 'maintenance';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  category: 'AI & Voice' | 'VoIP & Telecom' | 'Web & Mobile' | 'Cloud & DevOps' | 'Consulting & Staffing';
  iconName: string;
  badge?: string;
  featured?: boolean;
  
  // Standard Service Detail Template fields
  heroDescription: string;
  overview: string;
  challenges: { title: string; desc: string }[];
  solution: { title: string; desc: string; highlights: string[] };
  benefits: { title: string; metric: string; desc: string }[];
  techStack: string[];
  process: { step: number; title: string; duration: string; desc: string }[];
  whyDialiqo: { title: string; desc: string }[];
  relatedCaseStudyIds: string[];
  faqs: { question: string; answer: string }[];
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  iconName: string;
  shortDesc: string;
  heroDesc: string;
  challenges: { problem: string; impact: string }[];
  expertise: string[];
  solutions: { name: string; description: string }[];
  technologiesUsed: string[];
  successStoryId?: string;
  faqs: { question: string; answer: string }[];
}

export interface TechnologyItem {
  id: string;
  slug: string;
  category: 'Languages & Frameworks' | 'AI & LLMs' | 'Telecom & VoIP' | 'Cloud & Infrastructure' | 'Databases & Storage';
  name: string;
  iconName: string;
  shortDesc: string;
  heroDesc: string;
  whyThisTech: string[];
  ourExpertise: string;
  architecturalHighlights: string[];
  featuredProjects: string[];
  benefits: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  architectureOverview: string;
  targetIndustries: string[];
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  clientIndustry: string;
  location: string;
  summary: string;
  heroImage?: string;
  clientOverview?: {
    companySize: string;
    headquarters: string;
    globalPresence: string;
    description: string;
  };
  metrics: { label: string; value: string; detail: string }[];
  problem: string;
  challengesList?: { title: string; detail: string }[];
  solution: string;
  solutionHighlights?: string[];
  technologyStack: string[];
  architectureDiagramDesc: string;
  architectureLayers?: { layer: string; components: string[]; description: string }[];
  timeline: string;
  developmentPhases?: { phase: string; duration: string; title: string; description: string }[];
  results: string[];
  gallery?: { title: string; category: string; description: string; imageUrl: string }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
  };
}

export interface ResourceItem {
  id: string;
  slug: string;
  title: string;
  category: 'Blog' | 'Whitepaper' | 'Guide' | 'Webinar' | 'Documentation' | string;
  author: string;
  authorRole: string;
  authorAvatar?: string;
  authorBio?: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  coverImage?: string;
  contentMarkdown?: string;
  tags: string[];
  featured?: boolean;
  toc?: { id: string; title: string; level: number }[];
  sections?: {
    id: string;
    title: string;
    paragraphs: string[];
    codeSnippet?: {
      language: string;
      filename?: string;
      code: string;
    };
    callout?: {
      type: 'tip' | 'warning' | 'info' | 'architecture';
      title: string;
      text: string;
    };
    quote?: {
      text: string;
      author: string;
    };
  }[];
  commentsCount?: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  company: string;
  avatarUrl: string;
  logoUrl?: string;
  rating: number;
  quote: string;
  industry: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: 'Engineering' | 'AI Research' | 'VoIP Infrastructure' | 'Cloud Operations' | 'Product & UI/UX' | 'Sales';
  location: string;
  type: 'Full-Time' | 'Remote' | 'Hybrid';
  experienceLevel: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

export interface GlobalOffice {
  city: string;
  country: string;
  flag: string;
  address: string;
  phone: string;
  email: string;
  lat: number;
  lng: number;
  timezone: string;
  isHeadquarters?: boolean;
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedIn?: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  service: string;
  estimatedBudget: string;
  callVolume?: string;
  notes?: string;
  date?: string;
  time?: string;
}
