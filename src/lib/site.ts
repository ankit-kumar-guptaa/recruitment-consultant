export const siteConfig = {
  name: "Recruitment Consultant",
  legalName: "Recruitment Consultant",
  tagline: "People | Potential | Progress",
  domain: "recruitmentconsultant.co.in",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://recruitmentconsultant.co.in",
  description:
    "Recruitment Consultant is a pan-India recruitment agency for employers. We handle permanent staffing, contract and temporary staffing, executive search, RPO, bulk and campus hiring across 12+ industries — with screened shortlists in 48 hours and a replacement guarantee on every placement.",
  shortDescription:
    "Pan-India recruitment agency for employers — permanent staffing, contract hiring, executive search, RPO and payroll outsourcing.",
  foundedYear: 2010,
  email: "info@recruitmentconsultant.co.in",
  careersEmail: "careers@recruitmentconsultant.co.in",
  /**
   * The phone number is never rendered as text anywhere on the site — the
   * client asked for email-first contact. Call and WhatsApp actions still work
   * through these values, but the UI only ever shows a label.
   * Flip `showPhoneNumber` to true if that decision changes.
   */
  showPhoneNumber: false,
  phoneDisplay: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsapp: "919876543210",
  officeHours: "Monday to Saturday, 9:30 am – 6:30 pm IST",
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

/**
 * Primary commercial keywords, employer side (India).
 * Head terms live in the H1, metadata and service names; the rest are worked
 * into section headings, body copy, the FAQ and internal link anchors.
 * Job-seeker terms are deliberately secondary — see README.
 */
export const targetKeywords = {
  head: [
    "recruitment agency in India",
    "recruitment consultancy in India",
    "staffing company in India",
    "manpower consultancy in India",
    "placement agency for companies",
  ],
  service: [
    "permanent staffing services",
    "contract staffing companies in India",
    "temporary staffing agency India",
    "executive search firm India",
    "RPO services India",
    "recruitment process outsourcing India",
    "bulk hiring agency",
    "campus recruitment agency India",
    "third party payroll services India",
  ],
  commercial: [
    "hire employees in India",
    "recruitment agency charges in India",
    "recruitment agency for startups India",
    "IT recruitment agency India",
    "best recruitment agency for manufacturing",
  ],
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Employers", href: "/employers" },
  { label: "Job Seekers", href: "/job-seekers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/**
 * Client wordmarks shown in the "trusted by" strip.
 * Replace with companies you actually work with and have permission to list.
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
  { icon: "bolt", title: "48-Hour", subtitle: "Screened Shortlists" },
  { icon: "network", title: "100+ Cities", subtitle: "Pan-India Sourcing" },
  { icon: "shield", title: "90-Day", subtitle: "Replacement Guarantee" },
  { icon: "file", title: "No Upfront Fee", subtitle: "Pay On Joining" },
] as const;

export const heroStats = [
  {
    value: 5000,
    suffix: "+",
    label: "Positions Closed",
    icon: "users",
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Employers Served",
    icon: "building",
    tone: "bg-navy-100 text-navy-700",
  },
  {
    value: 48,
    suffix: " hrs",
    label: "To First Shortlist",
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

export const services = [
  {
    icon: "users",
    title: "Permanent Staffing Services",
    description:
      "End-to-end permanent recruitment for junior, mid and senior roles. You receive a ranked shortlist with evaluation notes, and pay only when your chosen candidate joins.",
    points: ["Junior to CXO", "Contingency or retained", "Pay on joining"],
    href: "/services/permanent-staffing",
  },
  {
    icon: "clock",
    title: "Contract & Temporary Staffing",
    description:
      "Scale teams for projects, seasonal peaks and interim gaps. We hold the payroll, PF, ESIC and statutory compliance, so headcount stays flexible without adding risk.",
    points: ["Contract-to-hire", "We hold the payroll", "Full statutory cover"],
    href: "/services/contract-staffing",
  },
  {
    icon: "crown",
    title: "Executive Search & Leadership Hiring",
    description:
      "Confidential CXO, VP and functional-head mandates run by a dedicated consultant with a mapped industry network, competency-based assessment and market intelligence.",
    points: ["Confidential search", "Mapped talent pools", "Retained model"],
    href: "/services/executive-search",
  },
  {
    icon: "layers",
    title: "RPO — Recruitment Process Outsourcing",
    description:
      "We run all or part of your talent acquisition on an SLA — sourcing, screening, scheduling, offer management and reporting — as an embedded extension of your HR team.",
    points: ["Embedded recruiters", "SLA-driven", "Monthly or per-hire"],
    href: "/services/rpo",
  },
  {
    icon: "cap",
    title: "Bulk & Campus Hiring",
    description:
      "Volume drives for BPO, retail, warehousing, manufacturing and sales, plus campus recruitment across engineering and management colleges — assessments and logistics included.",
    points: ["50 to 500+ hires", "Walk-in drives", "Assessments included"],
    href: "/services/bulk-hiring",
  },
  {
    icon: "file",
    title: "Payroll Outsourcing & Compliance",
    description:
      "Third-party payroll, onboarding documentation, PF/ESIC registration, monthly challans and audit-ready records for your extended and contractual workforce.",
    points: ["Third-party payroll", "PF · ESIC · PT", "Audit-ready records"],
    href: "/services/payroll-compliance",
  },
] as const;

export const industries = [
  {
    icon: "chip",
    name: "IT & Software",
    roles: "Engineering, data, cloud, product, QA",
  },
  { icon: "bank", name: "BFSI", roles: "Banking, NBFC, insurance, fintech" },
  {
    icon: "factory",
    name: "Manufacturing",
    roles: "Plant, quality, maintenance, EHS",
  },
  {
    icon: "health",
    name: "Healthcare & Pharma",
    roles: "Clinical, R&D, regulatory, sales",
  },
  {
    icon: "cart",
    name: "Retail & E-commerce",
    roles: "Store ops, category, supply chain",
  },
  {
    icon: "truck",
    name: "Logistics & Supply Chain",
    roles: "Warehouse, transport, planning",
  },
  { icon: "signal", name: "Telecom", roles: "Network, field ops, enterprise sales" },
  { icon: "book", name: "Education & EdTech", roles: "Academic, counselling, sales" },
  {
    icon: "building",
    name: "Real Estate & Infra",
    roles: "Projects, sales, civil, procurement",
  },
  { icon: "cup", name: "Hospitality & Travel", roles: "Front office, F&B, operations" },
  { icon: "car", name: "Automotive", roles: "Design, production, aftersales" },
  {
    icon: "headset",
    name: "BPO & Shared Services",
    roles: "Voice, non-voice, F&A, HRO",
  },
] as const;

export const hiringProcess = [
  {
    step: "01",
    title: "Requirement & Role Mapping",
    description:
      "A consultant takes the brief: job description, reporting structure, budget band, must-have skills, location and joining timeline. We flag anything that will make the role hard to fill before the search starts.",
  },
  {
    step: "02",
    title: "Sourcing & Screening",
    description:
      "We search our pan-India database, referral network and passive channels, then screen on skill, stability, notice period and compensation fit — so you never interview a candidate who was never going to accept.",
  },
  {
    step: "03",
    title: "Shortlist & Interviews",
    description:
      "You receive a ranked shortlist with evaluation notes within 48 working hours for most roles. We coordinate every interview round, chase feedback and keep candidates warm.",
  },
  {
    step: "04",
    title: "Offer, Joining & Guarantee",
    description:
      "We support negotiation, offer roll-out, documentation and joining follow-ups, then stay in touch through probation. Every permanent placement carries a 90-day replacement guarantee.",
  },
] as const;

export const whyUs = [
  {
    icon: "bolt",
    title: "Shortlists in 48 Hours",
    description:
      "An active, continuously refreshed talent pool across 12+ industries means you start interviewing in days, not weeks.",
  },
  {
    icon: "target",
    title: "One Consultant Owns the Role",
    description:
      "A named specialist who knows your sector runs the mandate end to end — no CV blasts, no handoffs, no chasing a shared inbox.",
  },
  {
    icon: "shield",
    title: "90-Day Replacement Guarantee",
    description:
      "If a permanent placement does not work out within 90 days of joining, we rerun the search at no additional professional fee.",
  },
  {
    icon: "file",
    title: "No Upfront Fee",
    description:
      "Permanent mandates are contingency-based. You are invoiced only after your chosen candidate actually joins.",
  },
] as const;

export const aboutPoints = [
  {
    icon: "target",
    title: "Built for employers, not job boards",
    description:
      "We are a recruitment consultancy, not a database subscription. Every profile you see has been spoken to, screened and briefed on your role before it reaches your inbox.",
  },
  {
    icon: "network",
    title: "Pan-India reach, local knowledge",
    description:
      "Metro hubs, tier-2 manufacturing belts and emerging tech corridors — with consultants who know local salary bands, notice-period norms and attrition patterns.",
  },
  {
    icon: "shield",
    title: "Compliance handled end to end",
    description:
      "For contract and temporary staffing we hold the payroll and manage PF, ESIC, professional tax and statutory filings, so your extended workforce stays audit-ready.",
  },
] as const;

/** Engagement models — answers "how do recruitment agency fees work in India". */
export const hiringModels = [
  {
    name: "Contingency Hiring",
    best: "Most permanent roles, junior to senior",
    fee: "% of annual CTC, on joining",
    points: [
      "Zero upfront cost — invoiced only after the candidate joins",
      "Shortlist typically within 48 working hours",
      "90-day replacement guarantee included",
    ],
    featured: false,
  },
  {
    name: "Retained Search",
    best: "CXO, VP and confidential leadership mandates",
    fee: "Staged fee across the search",
    points: [
      "Dedicated consultant with a mapped, researched talent pool",
      "Competency-based assessment and market intelligence report",
      "Exclusive, confidential and milestone-driven",
    ],
    featured: true,
  },
  {
    name: "Contract Staffing",
    best: "Project, seasonal and interim headcount",
    fee: "Monthly markup on CTC",
    points: [
      "We hold the payroll, PF, ESIC and statutory compliance",
      "Scale up or down without changing your headcount plan",
      "Contract-to-hire conversion available",
    ],
    featured: false,
  },
  {
    name: "RPO / Dedicated Recruiter",
    best: "Continuous or high-volume hiring",
    fee: "Fixed monthly retainer",
    points: [
      "Recruiters embedded in your process and ATS",
      "Predictable cost per hire at volume",
      "Weekly pipeline and SLA reporting",
    ],
    featured: false,
  },
] as const;

/** In-house hiring vs. a recruitment partner — comparison table. */
export const comparison = {
  columns: ["Hiring in-house only", "With Recruitment Consultant"],
  rows: [
    {
      label: "Time to first shortlist",
      inhouse: "2–4 weeks of job-board sourcing",
      withUs: "48 working hours for most roles",
    },
    {
      label: "Reach",
      inhouse: "Candidates actively applying",
      withUs: "Active + passive + referral networks, pan-India",
    },
    {
      label: "Screening",
      inhouse: "HR generalist reviews CVs",
      withUs: "Sector specialist screens skill, stability and intent",
    },
    {
      label: "Offer drop-outs",
      inhouse: "Discovered on the joining date",
      withUs: "Notice period and counter-offer risk checked upfront",
    },
    {
      label: "Cost if it fails",
      inhouse: "Full cost of a re-run search",
      withUs: "Free replacement within 90 days",
    },
    {
      label: "Compliance for contract staff",
      inhouse: "Your legal and payroll team",
      withUs: "We hold payroll, PF, ESIC and filings",
    },
  ],
} as const;

export const cities = [
  "Delhi NCR",
  "Gurugram",
  "Noida",
  "Mumbai",
  "Pune",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Ahmedabad",
  "Kolkata",
  "Jaipur",
  "Indore",
  "Chandigarh",
  "Coimbatore",
  "Lucknow",
  "Kochi",
] as const;

export const testimonials = [
  {
    quote:
      "We closed eight engineering roles in under a month. The shortlists were sharp and every candidate had already been briefed on the role, the stack and the compensation band.",
    name: "Priya Sharma",
    role: "Head of Talent, SaaS Product Company",
  },
  {
    quote:
      "They ran a 60-person warehouse ramp-up across three cities for us, including payroll and statutory compliance. Our internal team did not have to touch it.",
    name: "Rahul Mehta",
    role: "Operations Director, Logistics Firm",
  },
  {
    quote:
      "Our CFO search was confidential and we could not post it anywhere. They mapped the market, gave us four genuinely relevant profiles and we closed in seven weeks.",
    name: "Anand Iyer",
    role: "Managing Director, Manufacturing Group",
  },
] as const;

export const insights = [
  {
    art: "hiring" as const,
    category: "Hiring Strategy",
    readingTime: "6 min read",
    title: "How to cut time-to-hire without lowering the bar",
    excerpt:
      "Most delays are not caused by a shortage of candidates. They are caused by unclear briefs, slow feedback loops and interview panels that keep changing.",
    href: "/blog/cut-time-to-hire",
  },
  {
    art: "salary" as const,
    category: "Market Insights",
    readingTime: "8 min read",
    title: "What recruitment agencies charge in India in 2026",
    excerpt:
      "Contingency percentages, retained milestones and contract-staffing markups explained — plus what actually drives the number up or down.",
    href: "/blog/recruitment-agency-fees-india",
  },
  {
    art: "resume" as const,
    category: "Employer Guide",
    readingTime: "7 min read",
    title: "Contract staffing vs permanent hiring: which fits the role?",
    excerpt:
      "A practical framework for deciding when to add headcount, when to hire on contract, and what each option really costs over 12 months.",
    href: "/blog/contract-vs-permanent-hiring",
  },
] as const;

export const shortlistPreview = {
  role: "Senior Backend Engineer",
  location: "Bengaluru · Hybrid",
  candidates: [
    {
      initials: "NR",
      name: "N. Rao",
      match: 96,
      note: "Go · Kafka · 7 yrs · 30-day notice",
      tone: "bg-navy-600",
    },
    {
      initials: "SK",
      name: "S. Kapoor",
      match: 91,
      note: "Java · AWS · 6 yrs · Immediate",
      tone: "bg-emerald-600",
    },
    {
      initials: "AM",
      name: "A. Menon",
      match: 88,
      note: "Node · K8s · 8 yrs · 45-day notice",
      tone: "bg-navy-800",
    },
  ],
} as const;

export const faqs = [
  {
    question: "What does a recruitment agency charge in India?",
    answer:
      "For permanent roles we work on contingency: a percentage of the candidate's annual CTC, invoiced only after they join. The percentage depends on the seniority and difficulty of the role, and is agreed in writing before the search starts. Retained executive search is billed in stages across the mandate, contract staffing carries a monthly markup on CTC, and RPO is a fixed monthly retainer. There is never an upfront fee for contingency hiring.",
  },
  {
    question: "How quickly will we get the first shortlist?",
    answer:
      "For most mid-level roles we share a screened shortlist within 48 working hours of the requirement being signed off. Niche technical roles and leadership mandates typically take five to seven working days because of the depth of market mapping involved.",
  },
  {
    question: "What happens if the candidate leaves or does not work out?",
    answer:
      "Every permanent placement carries a 90-day replacement guarantee from the date of joining. If the candidate leaves or is found unsuitable in that window, we rerun the search and provide a replacement at no additional professional fee. Longer guarantee periods can be agreed for retained leadership mandates.",
  },
  {
    question: "Which industries and locations do you recruit for?",
    answer:
      "We hire across IT and software, BFSI, manufacturing, healthcare and pharma, retail and e-commerce, logistics, telecom, education, real estate, hospitality, automotive and BPO or shared services. Our consultants cover Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Ahmedabad, Kolkata and tier-2 and tier-3 cities across India, and we can source for 100+ locations on request.",
  },
  {
    question: "Can you handle bulk hiring or a new-site ramp-up?",
    answer:
      "Yes. We run volume hiring drives, walk-in events and campus recruitment programmes for 50 to 500+ positions, including assessments, venue and logistics coordination, offer roll-out and joining follow-up. For contract headcount we also hold the payroll and statutory compliance.",
  },
  {
    question: "Do you provide contract staffing with payroll and compliance?",
    answer:
      "Yes. Under contract and temporary staffing the worker is on our payroll. We manage PF, ESIC, professional tax, monthly challans, onboarding documentation and audit-ready records, so your compliance exposure stays with us rather than with your team.",
  },
  {
    question: "How is a recruitment consultancy different from a job portal?",
    answer:
      "A job portal gives you access to applications and leaves the sourcing, screening, coordination and closing to your team. A recruitment consultancy does that work for you: we reach passive candidates who are not applying anywhere, screen on skill and intent, manage the interview process and take ownership of the closure — and with contingency hiring you pay only for a result.",
  },
  {
    question: "Do job seekers pay any fee?",
    answer:
      "No. Our services are completely free for candidates. We are paid by the hiring company, so no candidate should ever be asked for money at any stage of the process.",
  },
] as const;

/** Years in business, derived so it never goes stale. */
export const yearsInBusiness = new Date().getFullYear() - siteConfig.foundedYear;

export const milestones = [
  {
    year: "2010",
    title: "Recruitment Consultant is founded",
    description:
      "We start as a two-person permanent-recruitment desk in Delhi NCR, hiring for IT and BFSI clients who needed faster shortlists than job portals could give them.",
  },
  {
    year: "2014",
    title: "Contract staffing and payroll added",
    description:
      "Clients asked us to hold contract headcount as well as fill it, so we built an in-house payroll and statutory compliance function for PF, ESIC and professional tax.",
  },
  {
    year: "2017",
    title: "Executive search practice launched",
    description:
      "A dedicated retained-search team for CXO, VP and functional-head mandates, with competency-based assessment and market mapping.",
  },
  {
    year: "2020",
    title: "Remote-first hiring at scale",
    description:
      "Through the pandemic we moved the entire process online — video screening, digital documentation and remote onboarding — and kept clients hiring.",
  },
  {
    year: "2023",
    title: "RPO and bulk hiring",
    description:
      "Embedded recruiter teams and volume drives for BPO, retail, warehousing and manufacturing clients ramping up new sites across tier-2 India.",
  },
  {
    year: "Today",
    title: "Pan-India, 12+ industries",
    description:
      "Consultants covering 16 cities and sourcing across 100+ locations, with permanent, contract, executive search, RPO and payroll under one roof.",
  },
] as const;

export const values = [
  {
    icon: "target",
    title: "Tell the truth about the role",
    description:
      "If a budget will not attract the profile you want, or a JD is written for two different jobs, we say so before the search starts — not three weeks in.",
  },
  {
    icon: "users",
    title: "Treat candidates like people",
    description:
      "Every candidate is briefed properly, told where they stand and never charged a rupee. That is also why they answer our calls when the next role opens.",
  },
  {
    icon: "shield",
    title: "Own the outcome",
    description:
      "One named consultant stays on the mandate until the candidate joins, and the replacement guarantee means a bad hire costs us, not you.",
  },
  {
    icon: "bolt",
    title: "Move at the speed of hiring",
    description:
      "Good candidates are off the market in days. Our process is built to get you a real shortlist in 48 working hours, not a CV dump in two weeks.",
  },
] as const;

export const jobSeekerSteps = [
  {
    step: "01",
    title: "Share your profile",
    description:
      "Send us your CV with the roles, locations and salary range you are targeting. No fee, ever.",
  },
  {
    step: "02",
    title: "Talk to a consultant",
    description:
      "A sector specialist calls you, understands what you actually want next and tells you honestly where you fit in today's market.",
  },
  {
    step: "03",
    title: "Get matched and briefed",
    description:
      "We put you forward only for roles that match. You get the full brief — team, manager, budget and growth path — before every interview.",
  },
  {
    step: "04",
    title: "Offer and joining support",
    description:
      "We help with negotiation, documentation and notice-period planning, and stay in touch after you join.",
  },
] as const;
