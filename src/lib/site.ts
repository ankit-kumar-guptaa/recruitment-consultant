export const siteConfig = {
  name: "Recruitment Consultant",
  legalName: "Recruitment Consultant",
  tagline: "People | Growth | Success",
  domain: "recruitmentconsultant.co.in",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://recruitmentconsultant.co.in",
  description:
    "Recruitment Consultant is a pan-India hiring partner connecting companies with pre-screened talent. Permanent staffing, contract hiring, executive search and RPO across IT, BFSI, manufacturing, healthcare and more.",
  shortDescription:
    "Pan-India recruitment consultancy for permanent staffing, contract hiring, executive search and RPO.",
  email: "info@recruitmentconsultant.co.in",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsapp: "919876543210",
  address: {
    street: "Business District",
    locality: "New Delhi",
    region: "Delhi",
    postalCode: "110001",
    country: "IN",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/recruitmentconsultant",
    facebook: "https://www.facebook.com/recruitmentconsultant",
    instagram: "https://www.instagram.com/recruitmentconsultant",
    twitter: "https://x.com/recruitmentcons",
  },
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Job Seekers", href: "/job-seekers" },
  { label: "Employers", href: "/employers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/**
 * Client wordmarks shown in the "trusted by" strip.
 * Replace these with the logos of companies you actually work with
 * (and that have approved being listed) before going live.
 */
export const clientLogos = [
  "TATA",
  "Infosys",
  "HCL",
  "Wipro",
  "amazon",
  "accenture",
  "airtel",
  "Reliance",
];

export const heroHighlights = [
  { icon: "network", title: "Pan India", subtitle: "Talent Network" },
  { icon: "shield", title: "Trusted by", subtitle: "Leading Companies" },
  { icon: "bolt", title: "Faster", subtitle: "Hiring Process" },
  { icon: "target", title: "Opportunities", subtitle: "Across All Sectors" },
] as const;

export const services = [
  {
    icon: "users",
    title: "Permanent Staffing",
    description:
      "Full-time hiring for every level — from fresh graduates to senior leadership — with pre-screened, role-ready candidates.",
    href: "/services#permanent-staffing",
  },
  {
    icon: "clock",
    title: "Contract & Temp Staffing",
    description:
      "Scale teams up or down on demand with contract-to-hire and project-based professionals, fully payroll compliant.",
    href: "/services#contract-staffing",
  },
  {
    icon: "crown",
    title: "Executive Search",
    description:
      "Confidential CXO and leadership mandates run by dedicated consultants with mapped industry networks.",
    href: "/services#executive-search",
  },
  {
    icon: "layers",
    title: "RPO Solutions",
    description:
      "We run all or part of your recruitment function — sourcing, screening, scheduling and offer management.",
    href: "/services#rpo",
  },
  {
    icon: "cap",
    title: "Campus Hiring",
    description:
      "Bulk fresher drives across engineering, management and skill-based colleges, with assessments built in.",
    href: "/services#campus-hiring",
  },
  {
    icon: "file",
    title: "Payroll & Compliance",
    description:
      "Statutory compliance, payroll processing and onboarding support so your extended workforce stays audit-ready.",
    href: "/services#payroll",
  },
] as const;

export const industries = [
  { icon: "chip", name: "IT & Software" },
  { icon: "bank", name: "BFSI" },
  { icon: "factory", name: "Manufacturing" },
  { icon: "health", name: "Healthcare & Pharma" },
  { icon: "cart", name: "Retail & E-commerce" },
  { icon: "truck", name: "Logistics & Supply Chain" },
  { icon: "signal", name: "Telecom" },
  { icon: "book", name: "Education & EdTech" },
  { icon: "building", name: "Real Estate & Infra" },
  { icon: "cup", name: "Hospitality & Travel" },
  { icon: "car", name: "Automotive" },
  { icon: "headset", name: "BPO & Shared Services" },
] as const;

export const heroStats = [
  {
    value: 5000,
    suffix: "+",
    label: "Successful Placements",
    icon: "users",
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Happy Clients",
    icon: "building",
    tone: "bg-navy-100 text-navy-700",
  },
  {
    value: 48,
    suffix: " hrs",
    label: "Average Shortlist Time",
    icon: "bolt",
    tone: "bg-gold-soft text-[#b8770a]",
  },
  {
    value: 94,
    suffix: "%",
    label: "One-Year Retention",
    icon: "shield",
    tone: "bg-navy-100 text-navy-700",
  },
] as const;

export const hiringProcess = [
  {
    step: "01",
    title: "Understand the Role",
    description:
      "We map the job description, team structure, budget and must-have skills before a single profile is sourced.",
  },
  {
    step: "02",
    title: "Source & Screen",
    description:
      "Our consultants search our pan-India database, referrals and passive networks, then screen on skill and intent.",
  },
  {
    step: "03",
    title: "Shortlist & Interview",
    description:
      "You receive a ranked shortlist with evaluation notes. We coordinate every interview round end to end.",
  },
  {
    step: "04",
    title: "Offer & Onboard",
    description:
      "We support negotiation, documentation and joining follow-ups, plus a replacement guarantee on every hire.",
  },
] as const;

export const whyUs = [
  {
    icon: "target",
    title: "Role-First Sourcing",
    description:
      "Every mandate gets a dedicated consultant who knows the domain, not a generic CV blast.",
  },
  {
    icon: "bolt",
    title: "Shortlists in 48 Hours",
    description:
      "An active, continuously refreshed talent pool means you interview quickly instead of waiting weeks.",
  },
  {
    icon: "shield",
    title: "Replacement Guarantee",
    description:
      "If a placed candidate does not work out within the agreed period, we replace them at no extra cost.",
  },
  {
    icon: "network",
    title: "Pan-India Reach",
    description:
      "Metro, tier-2 and tier-3 hiring across 12+ industries, including bulk and multi-location drives.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "We closed eight engineering roles in under a month. The shortlists were sharp and every candidate had already been briefed properly.",
    name: "Priya Sharma",
    role: "Head of Talent, SaaS Product Company",
  },
  {
    quote:
      "Their team handled a 60-person warehouse ramp-up across three cities for us, including compliance. It simply worked.",
    name: "Rahul Mehta",
    role: "Operations Director, Logistics Firm",
  },
  {
    quote:
      "As a candidate I was guided through every round and never left guessing. I joined a role that actually matched my goals.",
    name: "Aisha Khan",
    role: "Senior Financial Analyst",
  },
] as const;

export const faqs = [
  {
    question: "How quickly can you share the first shortlist?",
    answer:
      "For most mid-level roles we share a screened shortlist within 48 working hours of the requirement being signed off. Niche and leadership mandates typically take 5 to 7 working days because of the depth of mapping involved.",
  },
  {
    question: "Which locations and industries do you hire for?",
    answer:
      "We recruit across India — metros as well as tier-2 and tier-3 cities — for IT and software, BFSI, manufacturing, healthcare and pharma, retail and e-commerce, logistics, telecom, education, real estate, hospitality, automotive and shared services.",
  },
  {
    question: "Do you charge job seekers any fee?",
    answer:
      "No. Our services are completely free for candidates. We are paid by the hiring company, so you should never be asked for money at any stage of the process.",
  },
  {
    question: "What is your replacement guarantee?",
    answer:
      "If a placed candidate leaves or is found unsuitable within the guarantee period agreed in your contract, we run the search again and provide a replacement at no additional professional fee.",
  },
  {
    question: "Can you manage bulk or campus hiring drives?",
    answer:
      "Yes. We run volume hiring, walk-in drives and campus recruitment programmes, including assessments, logistics coordination and offer roll-out for hundreds of positions at a time.",
  },
] as const;

export const aboutPoints = [
  {
    icon: "target",
    title: "Consultant-led, not CV-led",
    description:
      "One named consultant owns your mandate end to end — they brief candidates properly and tell you honestly when a role needs repositioning.",
  },
  {
    icon: "network",
    title: "An active talent network",
    description:
      "A continuously refreshed database plus referral and passive networks across 12+ industries and every major Indian city.",
  },
  {
    icon: "shield",
    title: "Accountable on outcomes",
    description:
      "Transparent SLAs, weekly pipeline reporting and a replacement guarantee on every placement we make.",
  },
] as const;

export const cities = [
  "Delhi NCR",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Ahmedabad",
  "Kolkata",
  "Jaipur",
  "Indore",
  "Chandigarh",
  "Coimbatore",
  "Lucknow",
  "Nagpur",
  "Kochi",
  "Bhubaneswar",
] as const;

export const insights = [
  {
    art: "hiring" as const,
    category: "Hiring Strategy",
    readingTime: "6 min read",
    title: "How to cut your time-to-hire without lowering the bar",
    excerpt:
      "Most delays are not caused by a shortage of candidates. They are caused by unclear briefs, slow feedback loops and interview panels that keep changing.",
    href: "/blog/cut-time-to-hire",
  },
  {
    art: "salary" as const,
    category: "Market Insights",
    readingTime: "8 min read",
    title: "India salary benchmarks: what candidates expect in 2026",
    excerpt:
      "Offer expectations have shifted sharply in tier-2 cities. Here is what we are seeing across engineering, sales, finance and operations roles.",
    href: "/blog/india-salary-benchmarks",
  },
  {
    art: "resume" as const,
    category: "For Job Seekers",
    readingTime: "5 min read",
    title: "The resume mistakes that quietly cost you interviews",
    excerpt:
      "Recruiters spend seconds on a first pass. These five fixes make your experience readable, searchable and far harder to skip.",
    href: "/blog/resume-mistakes",
  },
] as const;

export const shortlistPreview = {
  role: "Senior Backend Engineer",
  location: "Bengaluru · Hybrid",
  candidates: [
    { initials: "NR", name: "N. Rao", match: 96, note: "Go · Kafka · 7 yrs", tone: "bg-navy-600" },
    { initials: "SK", name: "S. Kapoor", match: 91, note: "Java · AWS · 6 yrs", tone: "bg-emerald-600" },
    { initials: "AM", name: "A. Menon", match: 88, note: "Node · K8s · 8 yrs", tone: "bg-navy-800" },
  ],
} as const;
