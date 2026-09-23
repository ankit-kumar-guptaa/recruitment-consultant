import type { industries } from "./site";

export type ServiceFaq = { question: string; answer: string };

export type ServiceDetail = {
  slug: string;
  /** Matches the `icon` names in components/ui/Icon.tsx */
  icon: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  bestFor: string[];
  includes: { title: string; description: string }[];
  steps: { step: string; title: string; description: string }[];
  examples: { label: string; roles: string }[];
  commercials: { label: string; value: string }[];
  faqs: ServiceFaq[];
  related: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "permanent-staffing",
    icon: "users",
    name: "Permanent Staffing",
    h1: "Permanent Staffing Services in India",
    metaTitle: "Permanent Staffing Services in India | Contingency Recruitment",
    metaDescription:
      "Permanent staffing services for employers across India. Screened shortlists in 48 working hours, no upfront fee, invoiced only on joining, with a 90-day replacement guarantee.",
    intro: [
      "Permanent staffing is the core of what we do: you tell us the role, we run the search, and you pay only when your chosen candidate actually joins. No subscription, no upfront retainer, no cost for a search that does not close.",
      "We work as a contingency partner on most permanent mandates, which means our commercial interest is aligned with yours — we earn when you hire, so we do not pad a shortlist with profiles that were never going to move.",
    ],
    bestFor: [
      "Roles from fresher intakes up to senior management",
      "Companies without a full in-house recruitment team",
      "Replacing a resignation quickly without disrupting the team",
      "Building a new function where you have no existing pipeline",
      "Startups making their first ten to fifty hires",
    ],
    includes: [
      {
        title: "Role and market briefing",
        description:
          "Before sourcing starts we pressure-test the job description, budget band and must-have skills against what the market will actually give you at that number.",
      },
      {
        title: "Screened, briefed candidates",
        description:
          "Every profile has been spoken to on the phone, checked on notice period, current and expected compensation, location and genuine intent to move.",
      },
      {
        title: "Ranked shortlist with notes",
        description:
          "You get a shortlist, not a CV dump — each candidate ranked with a short evaluation note on where they fit and where they do not.",
      },
      {
        title: "Interview coordination",
        description:
          "We schedule every round, chase panel feedback, prepare candidates and flag drop-out risk before it becomes a surprise.",
      },
      {
        title: "Offer and joining support",
        description:
          "Negotiation support, counter-offer management, documentation follow-up and check-ins right through to the joining date.",
      },
      {
        title: "90-day replacement guarantee",
        description:
          "If the placement does not work out within 90 days of joining, we rerun the search at no additional professional fee.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Sign-off on the brief",
        description:
          "A consultant takes the JD, reporting line, budget, location and timeline, and confirms the fee and guarantee in writing.",
      },
      {
        step: "02",
        title: "Source and screen",
        description:
          "We search our database, referral network and passive channels, then screen on skill, stability and intent.",
      },
      {
        step: "03",
        title: "Shortlist in 48 hours",
        description:
          "A ranked shortlist with evaluation notes for most mid-level roles; five to seven working days for niche skills.",
      },
      {
        step: "04",
        title: "Interview, offer, join",
        description:
          "We run coordination end to end and stay on the mandate until the candidate is at their desk.",
      },
    ],
    examples: [
      { label: "Technology", roles: "Backend, frontend, DevOps, QA, data engineering, product management" },
      { label: "Sales & Marketing", roles: "Enterprise sales, inside sales, key accounts, performance marketing, brand" },
      { label: "Finance & Accounts", roles: "Controller, FP&A, accounts payable, internal audit, taxation" },
      { label: "Operations & Supply Chain", roles: "Plant operations, quality, planning, procurement, warehouse management" },
      { label: "HR & Admin", roles: "HRBP, talent acquisition, compensation and benefits, payroll, facilities" },
    ],
    commercials: [
      { label: "Model", value: "Contingency — no upfront fee" },
      { label: "Fee", value: "Percentage of annual CTC, agreed in writing before the search" },
      { label: "Invoiced", value: "After the candidate joins" },
      { label: "Guarantee", value: "90 days from date of joining" },
    ],
    faqs: [
      {
        question: "How much does permanent staffing cost in India?",
        answer:
          "Permanent recruitment is charged as a percentage of the candidate's annual CTC, payable after they join. The exact percentage depends on the seniority of the role and how hard the skill is to find, and it is agreed in writing before we start. There is no upfront or retainer fee on contingency mandates.",
      },
      {
        question: "What if we hire nobody from your shortlist?",
        answer:
          "Then you pay nothing. On a contingency mandate you are invoiced only when a candidate we introduced actually joins. That is also why we tell you early if a role is priced or scoped in a way that will not close.",
      },
      {
        question: "Can you work exclusively on a role?",
        answer:
          "Yes, and it usually produces a better outcome. An exclusive mandate lets us invest more consultant time in mapping the market rather than racing other agencies to the same job-portal profiles. Exclusivity is optional and does not change the contingency structure.",
      },
      {
        question: "Do you handle background verification?",
        answer:
          "We verify employment history, notice period and compensation during screening, and reference checks are available on request. Formal third-party background verification can be arranged through our partners and is billed at cost.",
      },
    ],
    related: ["contract-staffing", "executive-search", "rpo"],
  },

  {
    slug: "contract-staffing",
    icon: "clock",
    name: "Contract & Temporary Staffing",
    h1: "Contract & Temporary Staffing Services in India",
    metaTitle: "Contract Staffing Companies in India | Temporary Staffing Agency",
    metaDescription:
      "Contract and temporary staffing across India with payroll, PF, ESIC and statutory compliance held by us. Scale project teams, seasonal peaks and interim roles without adding permanent headcount.",
    intro: [
      "Contract staffing lets you add people without adding permanent headcount. The worker sits in your team and reports to your manager, but they are on our payroll — so PF, ESIC, professional tax, payslips, statutory filings and audit records are our responsibility, not your HR team's.",
      "It is the fastest way to staff a project, cover a maternity or notice-period gap, or ramp a new site before you know what the steady-state headcount should be. Contract-to-hire conversion is available on every assignment.",
    ],
    bestFor: [
      "Project teams with a defined end date",
      "Seasonal and festive peaks in retail, logistics and e-commerce",
      "Covering notice periods, maternity leave and long absences",
      "New-site ramp-ups before headcount is finalised",
      "Roles you want to try before converting to permanent",
      "Keeping headcount flexible when budgets are frozen",
    ],
    includes: [
      {
        title: "We hold the payroll",
        description:
          "Monthly payroll processing, payslips, reimbursements and full-and-final settlement for every contract worker on the assignment.",
      },
      {
        title: "Statutory compliance",
        description:
          "PF and ESIC registration and remittance, professional tax, labour welfare fund, monthly challans and returns filed on time.",
      },
      {
        title: "Audit-ready records",
        description:
          "Attendance, wage registers, statutory registers and documentation maintained so your principal-employer audits pass cleanly.",
      },
      {
        title: "Onboarding and exit",
        description:
          "Offer letters, documentation, background checks where required, induction support and structured exit formalities.",
      },
      {
        title: "Replacement cover",
        description:
          "If a contract worker leaves mid-assignment we replace them, so your project timeline does not slip.",
      },
      {
        title: "Contract-to-hire conversion",
        description:
          "Convert any contractor to your own payroll on pre-agreed terms once you know you want to keep them.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Scope the assignment",
        description:
          "Headcount, skills, location, duration, shift pattern and the markup — agreed in a written work order.",
      },
      {
        step: "02",
        title: "Source and deploy",
        description:
          "We recruit, verify and onboard. For volume assignments we run drives so the whole cohort starts together.",
      },
      {
        step: "03",
        title: "Run payroll and compliance",
        description:
          "Monthly payroll, statutory remittances and filings, with compliance reports shared to your team.",
      },
      {
        step: "04",
        title: "Extend, convert or close",
        description:
          "Extend the assignment, convert the person to your payroll, or run a clean exit with full-and-final settlement.",
      },
    ],
    examples: [
      { label: "IT & Engineering", roles: "Developers, testers, support engineers, implementation consultants" },
      { label: "Warehousing & Logistics", roles: "Pickers, packers, loaders, supervisors, inventory executives" },
      { label: "Retail & Front Office", roles: "Store associates, promoters, cashiers, customer service executives" },
      { label: "Manufacturing", roles: "Machine operators, technicians, quality inspectors, shift supervisors" },
      { label: "Back Office & BPO", roles: "Data entry, voice and non-voice agents, F&A processing, verification" },
    ],
    commercials: [
      { label: "Model", value: "Monthly markup on the worker's CTC" },
      { label: "Payroll", value: "Held by us — PF, ESIC, PT and filings included" },
      { label: "Minimum term", value: "Typically one month, no maximum" },
      { label: "Conversion", value: "Contract-to-hire on pre-agreed terms" },
    ],
    faqs: [
      {
        question: "Who is the legal employer of a contract worker?",
        answer:
          "We are. The worker is on our payroll and we are responsible for wages, PF, ESIC, professional tax and statutory filings. You remain the principal employer for workplace and safety obligations, and we give you the compliance records you need for that.",
      },
      {
        question: "How is contract staffing priced?",
        answer:
          "You pay the worker's CTC plus a monthly markup that covers payroll processing, statutory employer contributions, compliance and our service. The markup is agreed in the work order before deployment, and it drops as headcount goes up.",
      },
      {
        question: "Can we convert a contractor to our own payroll?",
        answer:
          "Yes. Contract-to-hire is built into every assignment. Conversion terms — including any conversion fee and the minimum period on contract — are agreed upfront so there are no surprises later.",
      },
      {
        question: "What compliance documents will we receive?",
        answer:
          "Monthly PF and ESIC challans, professional tax remittance proof, wage registers, attendance records and statutory returns. These are the documents a principal-employer audit asks for, and we keep them ready.",
      },
    ],
    related: ["payroll-compliance", "bulk-hiring", "permanent-staffing"],
  },

  {
    slug: "executive-search",
    icon: "crown",
    name: "Executive Search",
    h1: "Executive Search & Leadership Hiring in India",
    metaTitle: "Executive Search Firm in India | CXO & Leadership Hiring",
    metaDescription:
      "Retained executive search for CXO, VP and functional-head roles across India. Confidential market mapping, competency-based assessment and a milestone-driven process run by a dedicated consultant.",
    intro: [
      "Leadership hiring is not a faster version of ordinary recruitment. The people you want are not applying anywhere, they will not respond to a job advert, and the search usually cannot be made public at all.",
      "Our executive search practice runs on a retained, exclusive basis. A dedicated consultant maps the relevant companies and people in your market, approaches them confidentially, assesses them against a competency framework agreed with you, and gives you a market intelligence report alongside the shortlist.",
    ],
    bestFor: [
      "CXO, CEO, CFO, CTO, COO and CHRO mandates",
      "VP and functional-head roles owning a P&L or a large team",
      "Confidential replacements where the incumbent is still in the seat",
      "Building a leadership bench ahead of a fundraise or expansion",
      "Board and advisory appointments",
      "First senior hire into a new market or product line",
    ],
    includes: [
      {
        title: "Market mapping",
        description:
          "A researched map of the companies and people who could do this job, not just those who are visibly looking.",
      },
      {
        title: "Confidential approach",
        description:
          "Candidates are approached discreetly, with your identity disclosed only at a stage you are comfortable with.",
      },
      {
        title: "Competency assessment",
        description:
          "Structured, competency-based interviews against a framework agreed with you, with written assessment reports.",
      },
      {
        title: "Market intelligence report",
        description:
          "Compensation benchmarks, talent availability and why candidates said yes or no — useful even before you hire.",
      },
      {
        title: "Referencing",
        description:
          "Detailed reference conversations with former managers, peers and reports, conducted with the candidate's consent.",
      },
      {
        title: "Onboarding support",
        description:
          "We stay in contact through notice period and the first months, which is when leadership hires most often wobble.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Engagement and brief",
        description:
          "Agree the role, the competency framework, the target company list and the search timeline. Retainer stage one is invoiced.",
      },
      {
        step: "02",
        title: "Research and mapping",
        description:
          "We build the long list from the mapped market and approach candidates confidentially.",
      },
      {
        step: "03",
        title: "Assessment and shortlist",
        description:
          "Competency interviews, written assessments and a shortlist of typically four to six genuinely relevant candidates.",
      },
      {
        step: "04",
        title: "Selection and close",
        description:
          "Client interviews, referencing, offer structuring and negotiation, then support through notice period and joining.",
      },
    ],
    examples: [
      { label: "General Management", roles: "CEO, Managing Director, Country Head, Business Unit Head" },
      { label: "Finance", roles: "CFO, Finance Director, Head of FP&A, Head of Internal Audit" },
      { label: "Technology & Product", roles: "CTO, VP Engineering, Head of Product, Head of Data" },
      { label: "Sales & Marketing", roles: "CRO, VP Sales, CMO, National Sales Head" },
      { label: "Operations & HR", roles: "COO, Plant Head, Supply Chain Head, CHRO" },
    ],
    commercials: [
      { label: "Model", value: "Retained and exclusive" },
      { label: "Fee", value: "Staged across engagement, shortlist and placement" },
      { label: "Typical timeline", value: "Shortlist in five to seven weeks" },
      { label: "Guarantee", value: "Extended guarantee period, agreed per mandate" },
    ],
    faqs: [
      {
        question: "Why is executive search retained rather than contingency?",
        answer:
          "Because the work happens before there is a shortlist. Mapping a market, approaching senior people confidentially and assessing them properly takes weeks of consultant time, and it cannot be done on the chance that a placement might result. A retainer buys you that research — and you receive the market intelligence even if you decide not to hire.",
      },
      {
        question: "How confidential is the search?",
        answer:
          "Completely, if you need it to be. We can approach the market without naming you, brief candidates under NDA, and exclude named competitors or your own group companies from the search. Confidential replacements where the current incumbent does not know are a routine part of this practice.",
      },
      {
        question: "How long does a leadership search take?",
        answer:
          "Typically five to seven weeks to a shortlist, and three to five months from engagement to joining once notice periods are factored in. Niche or heavily regulated roles can take longer, and we will say so at the briefing rather than at week eight.",
      },
      {
        question: "What if the leadership hire does not work out?",
        answer:
          "Retained mandates carry an extended guarantee period, agreed per engagement and usually longer than the 90 days we offer on permanent staffing. If the appointment fails within that window we rerun the search under the original fee.",
      },
    ],
    related: ["permanent-staffing", "rpo", "contract-staffing"],
  },

  {
    slug: "rpo",
    icon: "layers",
    name: "RPO Services",
    h1: "RPO Services — Recruitment Process Outsourcing in India",
    metaTitle: "RPO Services India | Recruitment Process Outsourcing Company",
    metaDescription:
      "Recruitment process outsourcing in India. Embedded recruiters working inside your process and ATS on a fixed monthly retainer, with SLA-driven delivery and weekly pipeline reporting.",
    intro: [
      "RPO is for companies hiring continuously rather than occasionally. Instead of paying a percentage on every placement, you get a recruiter or a recruitment team embedded in your process, working in your ATS, using your employer brand, on a fixed monthly fee.",
      "At volume this is materially cheaper per hire than contingency recruitment, and it gives you something contingency cannot: a pipeline that keeps building between requisitions, so the next role starts from a warm list rather than from zero.",
    ],
    bestFor: [
      "Twenty or more hires a year in a repeatable role family",
      "Scaling teams where requisitions open faster than HR can fill them",
      "Companies with no in-house talent acquisition function yet",
      "Covering a TA team through a hiring surge or a resignation",
      "Bringing a runaway agency spend back under control",
      "Standardising a hiring process across multiple locations",
    ],
    includes: [
      {
        title: "Dedicated recruiters",
        description:
          "Named recruiters assigned to your account, working your requisitions only — on site, remote or hybrid as you prefer.",
      },
      {
        title: "Your process, your brand",
        description:
          "We work inside your ATS and interview process, and represent your employer brand to candidates, not ours.",
      },
      {
        title: "SLA-driven delivery",
        description:
          "Agreed targets for time to shortlist, submission-to-interview ratio, offer acceptance and time to fill.",
      },
      {
        title: "Sourcing and screening at depth",
        description:
          "Database, referral, passive outreach and campaign sourcing, with structured phone screens before any submission.",
      },
      {
        title: "Weekly pipeline reporting",
        description:
          "Funnel metrics per requisition, ageing analysis, drop-out reasons and a clear view of what is blocking each close.",
      },
      {
        title: "Talent pipelining",
        description:
          "We keep building pools for your recurring roles between requisitions, so the next opening starts warm.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Scope and SLA",
        description:
          "Hiring plan, role families, volumes, tooling and the SLA, documented before the team is assigned.",
      },
      {
        step: "02",
        title: "Embed the team",
        description:
          "Recruiters are onboarded into your ATS, process, interview panels and employer brand guidelines.",
      },
      {
        step: "03",
        title: "Run the funnel",
        description:
          "Sourcing, screening, scheduling, feedback chasing and offer management against the agreed SLA.",
      },
      {
        step: "04",
        title: "Report and improve",
        description:
          "Weekly funnel reviews and a monthly business review to adjust sourcing mix, panel load or the process itself.",
      },
    ],
    examples: [
      { label: "Technology scale-ups", roles: "Engineering, product, data and QA hiring across multiple squads" },
      { label: "BPO & shared services", roles: "Continuous voice, non-voice, F&A and HRO hiring across shifts" },
      { label: "Retail & QSR", roles: "Store and outlet hiring across regions on a rolling basis" },
      { label: "Manufacturing groups", roles: "Plant, quality and maintenance hiring across multiple sites" },
      { label: "BFSI", roles: "Branch banking, sales and collections hiring at scale" },
    ],
    commercials: [
      { label: "Model", value: "Fixed monthly retainer per recruiter or per project" },
      { label: "Cost per hire", value: "Predictable, and materially lower than contingency at volume" },
      { label: "Typical term", value: "Three to twelve months, renewable" },
      { label: "Reporting", value: "Weekly funnel report, monthly business review" },
    ],
    faqs: [
      {
        question: "How is RPO different from just using a recruitment agency?",
        answer:
          "An agency is paid per placement and works your role alongside other clients. An RPO recruiter is paid a fixed monthly fee and works only your requisitions, inside your ATS and under your employer brand. At volume the cost per hire is much lower, and the pipeline keeps building between requisitions instead of resetting each time.",
      },
      {
        question: "At what hiring volume does RPO make sense?",
        answer:
          "As a rule of thumb, around twenty or more hires a year in a repeatable role family. Below that, contingency usually works out cheaper. We will tell you honestly which side of the line you are on — including when the answer is that you do not need RPO yet.",
      },
      {
        question: "Do the recruiters sit with our team?",
        answer:
          "Whichever works for you. Recruiters can be on site at your office, fully remote, or hybrid. What matters more is that they are in your ATS, in your interview process and on your internal channels, so they operate as part of your team rather than as an external vendor.",
      },
      {
        question: "Can RPO cover only part of our hiring?",
        answer:
          "Yes. Many clients start with one role family or one location — the part that is hurting most — and extend once the SLA is proving out. You can also use RPO for sourcing and screening only, and keep interviewing and offer management in house.",
      },
    ],
    related: ["bulk-hiring", "permanent-staffing", "contract-staffing"],
  },

  {
    slug: "bulk-hiring",
    icon: "cap",
    name: "Bulk & Campus Hiring",
    h1: "Bulk Hiring & Campus Recruitment in India",
    metaTitle: "Bulk Hiring Agency & Campus Recruitment Services in India",
    metaDescription:
      "Volume hiring and campus recruitment across India — 50 to 500+ positions with walk-in drives, assessments, venue and logistics coordination, offer roll-out and joining follow-up.",
    intro: [
      "Volume hiring fails for boring reasons: not enough candidates reach the venue, assessments take too long, offers go out late and half the joiners never turn up. We run drives as a logistics problem as much as a recruitment one.",
      "Whether it is 60 warehouse associates across three cities, a 300-seat BPO ramp-up or a campus season across twelve colleges, you get one project manager, a daily numbers report and a joining forecast you can plan around.",
    ],
    bestFor: [
      "New site, plant or warehouse ramp-ups",
      "Seasonal and festive volume hiring",
      "BPO and shared-services seat fills across shifts",
      "Retail store openings across multiple cities",
      "Campus recruitment across engineering and management colleges",
      "Fresher intakes with training-linked assessments",
    ],
    includes: [
      {
        title: "Sourcing at volume",
        description:
          "Database, field sourcing, referral campaigns, vernacular outreach and local channels that actually fill a venue.",
      },
      {
        title: "Assessments",
        description:
          "Aptitude, typing, voice and versant, domain and practical tests, scored and reported on the same day.",
      },
      {
        title: "Drive logistics",
        description:
          "Venue, registration desks, slot management, panel coordination and crowd flow so a drive does not collapse by noon.",
      },
      {
        title: "Campus management",
        description:
          "College relationships, pre-placement talks, coordination with placement cells and campus-to-corporate onboarding.",
      },
      {
        title: "Offer roll-out",
        description:
          "Same-day or next-day offers where possible, because a fresher who waits a week will accept somebody else's letter.",
      },
      {
        title: "Joining follow-up",
        description:
          "Structured contact between offer and joining date, which is where volume hiring normally leaks the most.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Plan the drive",
        description:
          "Headcount, locations, eligibility criteria, assessment design, dates and the joining forecast.",
      },
      {
        step: "02",
        title: "Fill the funnel",
        description:
          "Multi-channel sourcing with a target walk-in ratio, plus confirmation calls the day before each drive.",
      },
      {
        step: "03",
        title: "Run assessment day",
        description:
          "Registration, screening, assessments and interviews on one site, with live numbers shared through the day.",
      },
      {
        step: "04",
        title: "Offer and onboard",
        description:
          "Rapid offer roll-out, documentation, joining follow-up and a daily tracker until the cohort is on the floor.",
      },
    ],
    examples: [
      { label: "Warehouse & logistics", roles: "Pickers, packers, loaders, supervisors, delivery associates" },
      { label: "BPO & customer service", roles: "Voice, chat, email support, collections, back-office processing" },
      { label: "Retail", roles: "Store associates, cashiers, promoters, stock executives" },
      { label: "Manufacturing", roles: "Operators, helpers, technicians, quality inspectors, line supervisors" },
      { label: "Campus freshers", roles: "Graduate engineer trainees, management trainees, sales trainees" },
    ],
    commercials: [
      { label: "Model", value: "Per-hire fee at volume rates, or project fee" },
      { label: "Scale", value: "50 to 500+ positions per drive" },
      { label: "Deployment", value: "Permanent or on our contract payroll" },
      { label: "Reporting", value: "Daily numbers through the drive, joining tracker after" },
    ],
    faqs: [
      {
        question: "How quickly can you run a bulk hiring drive?",
        answer:
          "For a standard profile in a city we already cover, two to three weeks from sign-off to the first drive day — roughly a week to plan and build the funnel, then the drive itself. Multi-city ramp-ups and campus seasons are planned further ahead because college calendars and venue availability dictate the dates.",
      },
      {
        question: "Do you handle the assessments?",
        answer:
          "Yes. We design and run aptitude, typing, voice and versant, domain and practical assessments appropriate to the role, and share same-day scored reports. If you have your own assessment platform we will run your tests instead.",
      },
      {
        question: "What joining ratio should we plan for?",
        answer:
          "It varies by role, location and competition, and we will give you a realistic forecast at the planning stage rather than an optimistic one. The lever that matters most is the gap between offer and joining date — we keep structured contact through that window, because that is where volume hiring leaks.",
      },
      {
        question: "Can the hires be on your payroll instead of ours?",
        answer:
          "Yes. Bulk drives are frequently combined with our contract staffing service, so the cohort is deployed on our payroll with PF, ESIC and statutory compliance handled by us, and converted to your payroll later if you choose.",
      },
    ],
    related: ["contract-staffing", "rpo", "payroll-compliance"],
  },

  {
    slug: "payroll-compliance",
    icon: "file",
    name: "Payroll & Compliance",
    h1: "Third-Party Payroll & Statutory Compliance Services in India",
    metaTitle: "Third Party Payroll Services India | Statutory Compliance Outsourcing",
    metaDescription:
      "Third-party payroll outsourcing and statutory compliance in India — PF, ESIC, professional tax, monthly challans, wage registers and audit-ready records for your contractual workforce.",
    intro: [
      "Payroll is not hard until it is wrong. A missed PF remittance, an unregistered worker or a wage register that does not reconcile turns into a notice, a penalty and a very unpleasant audit.",
      "We hold the payroll for your contractual and extended workforce and take the statutory obligations with it — registration, remittance, returns and records — so your HR and finance teams stop spending their month on challans.",
    ],
    bestFor: [
      "Companies with contract or temporary staff on site",
      "Multi-state workforces with different professional tax rules",
      "Businesses without an in-house payroll or compliance team",
      "Principal employers preparing for a labour audit",
      "Start-ups that want headcount without setting up payroll infrastructure",
      "Anyone currently running payroll on spreadsheets",
    ],
    includes: [
      {
        title: "Monthly payroll processing",
        description:
          "Attendance and leave input, salary computation, deductions, payslips, bank transfer files and reimbursements.",
      },
      {
        title: "PF and ESIC",
        description:
          "Registration, monthly contribution computation, challan generation, remittance and return filing within due dates.",
      },
      {
        title: "Professional tax and LWF",
        description:
          "State-wise professional tax and labour welfare fund handled correctly for multi-state workforces.",
      },
      {
        title: "TDS on salary",
        description:
          "Tax computation, declaration collection, proof verification, quarterly returns and Form 16 issuance.",
      },
      {
        title: "Statutory registers",
        description:
          "Wage registers, attendance registers, muster rolls and the documentation a principal-employer audit asks for.",
      },
      {
        title: "Full and final settlement",
        description:
          "Exit computation, recoveries, gratuity where applicable, relieving documentation and settlement within agreed timelines.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Onboard the workforce",
        description:
          "Employee master data, statutory registrations, bank and KYC documentation, and the compliance calendar.",
      },
      {
        step: "02",
        title: "Monthly input cut-off",
        description:
          "Attendance, overtime, leave and any one-off inputs collected against a fixed monthly cut-off date.",
      },
      {
        step: "03",
        title: "Process and disburse",
        description:
          "Payroll computed and checked, payslips issued, salaries disbursed and statutory remittances made on time.",
      },
      {
        step: "04",
        title: "File and report",
        description:
          "Returns filed, challans and registers shared with you, and a monthly compliance status report.",
      },
    ],
    examples: [
      { label: "Contract workforce", roles: "Payroll and compliance for staff deployed at your site" },
      { label: "Multi-state teams", roles: "State-wise PT, LWF and minimum-wage handling" },
      { label: "Project teams", roles: "Fixed-term payroll with clean closure and settlement" },
      { label: "Audit support", roles: "Records, registers and challans for principal-employer audits" },
      { label: "Exit management", roles: "Full and final settlement, Form 16, relieving documentation" },
    ],
    commercials: [
      { label: "Model", value: "Per employee per month, or bundled into a contract-staffing markup" },
      { label: "Covers", value: "Payroll, PF, ESIC, PT, LWF, TDS, registers and returns" },
      { label: "Cut-off", value: "Fixed monthly input date, agreed at onboarding" },
      { label: "Reporting", value: "Monthly compliance status report and document pack" },
    ],
    faqs: [
      {
        question: "What is third-party payroll?",
        answer:
          "The worker does their job in your team and under your supervision, but they are legally employed and paid by us. We issue the offer letter and payslips, run the payroll, and remit PF, ESIC, professional tax and TDS. You receive one consolidated invoice instead of managing individual employment obligations.",
      },
      {
        question: "Does this remove our compliance risk entirely?",
        answer:
          "It moves the direct employer obligations — wages, PF, ESIC, PT and filings — to us, and we give you the challans and registers proving they were met. You remain the principal employer for workplace, safety and working-conditions obligations, so a small amount of responsibility stays with you by law. We will be explicit about that split in the agreement rather than over-promising.",
      },
      {
        question: "Can you take over payroll for staff already with us?",
        answer:
          "Yes. Transitioning an existing contractual workforce onto our payroll is routine. We handle re-documentation, statutory transfers and a clean cut-over date, usually aligned to the start of a month so the reporting stays tidy.",
      },
      {
        question: "How do you handle multi-state professional tax?",
        answer:
          "Professional tax slabs and due dates differ by state, and some states have no PT at all. We maintain state-wise configuration for every location where you have staff, remit against the correct registration and file the state returns on their individual due dates.",
      },
    ],
    related: ["contract-staffing", "bulk-hiring", "permanent-staffing"],
  },
];

export const serviceBySlug = new Map(
  serviceDetails.map((service) => [service.slug, service]),
);

export type IndustryName = (typeof industries)[number]["name"];
