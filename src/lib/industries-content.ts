/**
 * Industry (sector practice) landing pages — /industries/<slug>.
 *
 * Every record below is written sector-first: the roles that sector actually
 * hires, the skills and certifications its hiring managers screen on, what
 * specifically makes the sector hard to recruit for, where its talent sits
 * geographically, and how its notice periods and attrition behave. None of
 * that transfers between sectors, which is how the set stays well clear of
 * the "swap one noun" pattern Google treats as scaled content abuse. See
 * docs/SEO-PAGE-PLAN.md for the quality gates this set is held to.
 */

export type IndustryPage = {
  slug: string;
  /** Icon key from components/ui/Icon.tsx */
  icon: string;
  /** Title-case sector name, as used in headings and nav */
  name: string;
  /** Lower-case form for use mid-sentence */
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** The keyword this page is built to own. */
  primaryKeyword: string;
  /** 2–3 paragraphs of sector context. */
  intro: string[];
  /** Roles grouped by the function that owns the headcount. */
  rolesByFunction: { label: string; roles: string }[];
  /** Skills, tools and certifications that decide a shortlist in this sector. */
  skills: { group: string; items: string }[];
  /** What actually makes hiring hard here. */
  challenges: { title: string; description: string }[];
  /** Where the talent concentrates. `slug` links to a city page when we have one. */
  talentHubs: { city: string; slug?: string; note: string }[];
  /** Notice period, attrition and offer behaviour specific to the sector. */
  hiringNotes: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  /** Sibling industry slugs — 3 per page, varied anchors on the page itself. */
  related: string[];
};

export const industryPages: IndustryPage[] = [
  {
    slug: "it-software-recruitment",
    icon: "chip",
    name: "IT & Software",
    label: "IT and software",
    h1: "IT Recruitment Agency in India — Engineering, Data, Cloud & Product Hiring",
    metaTitle: "IT Recruitment Agency in India | Software & Tech Hiring",
    metaDescription:
      "IT recruitment agency in India for engineering, data, cloud, QA and product roles. Technically screened shortlists in 48 hours across Bengaluru, Hyderabad, Pune, NCR and Chennai. No upfront fee.",
    primaryKeyword: "IT recruitment agency India",
    intro: [
      "IT hiring in India is not short of candidates — it is short of candidates who clear a technical screen and then actually join. A single backend opening will draw 300 applications on a job portal, of which perhaps six have written production code in the stack you need, and two of those are already holding a counter-offer. Our technology practice exists to collapse that funnel before it reaches your engineering managers.",
      "We recruit across product companies, GCCs, IT services firms and funded startups, and the screen changes with each. A product company wants depth in one stack and system design ability; an IT services account wants breadth, client-facing communication and billability from week one; a GCC wants stability and the ability to work across time zones. Submitting the same profile to all three is why most agency shortlists get rejected.",
      "Every technology profile we submit carries a written screening note: the stack the candidate has genuinely shipped in versus what the CV claims, the scale they have operated at, their current and expected CTC, notice period, buyout position, and whether they are interviewing elsewhere. Your engineers should spend their interview slots on candidates worth hiring, not on CV verification.",
    ],
    rolesByFunction: [
      {
        label: "Backend & platform",
        roles:
          "Java, Spring Boot, Node.js, Python, Golang, .NET, microservices architects, API and platform engineers",
      },
      {
        label: "Frontend & mobile",
        roles:
          "React, Angular, Vue, TypeScript, React Native, Flutter, native Android (Kotlin) and iOS (Swift)",
      },
      {
        label: "Data & AI",
        roles:
          "Data engineers, analytics engineers, data scientists, ML and MLOps engineers, BI and Power BI developers",
      },
      {
        label: "Cloud, DevOps & SRE",
        roles:
          "AWS, Azure and GCP engineers, Kubernetes and Terraform specialists, DevOps leads, SREs, cloud architects",
      },
      {
        label: "QA & release",
        roles:
          "Automation QA (Selenium, Cypress, Playwright), SDETs, performance testers, release and build engineers",
      },
      {
        label: "Product & delivery",
        roles:
          "Product managers, product owners, business analysts, Scrum masters, delivery and engineering managers",
      },
      {
        label: "Security & infrastructure",
        roles:
          "Application security, SOC and VAPT analysts, IAM engineers, network and systems administrators",
      },
      {
        label: "Leadership",
        roles:
          "Engineering directors, VP Engineering, CTOs, heads of data and heads of platform (via executive search)",
      },
    ],
    skills: [
      {
        group: "What we verify technically",
        items:
          "Depth in the primary language, system design at the stated level, database and query ability, cloud exposure that is hands-on rather than certification-only, and testing discipline",
      },
      {
        group: "Certifications that carry weight",
        items:
          "AWS Solutions Architect and DevOps Engineer, Azure Administrator and Solutions Architect Expert, GCP Professional Cloud Architect, CKA/CKAD, OSCP and CEH for security, PSM/CSM and SAFe for delivery",
      },
      {
        group: "Signals we treat as red flags",
        items:
          "Stack listed but never shipped, three employers in four years without a reason, a buyout expectation nobody has budgeted for, and a CTC jump of more than 60% with no change in scope",
      },
    ],
    challenges: [
      {
        title: "Counter-offers close faster than you do",
        description:
          "Good engineers in India routinely receive a counter-offer within 24 hours of resigning. If your process takes four weeks from first interview to offer letter, you will lose candidates you already selected. We compress interview scheduling and tell you up front where a role's timeline is the real problem.",
      },
      {
        title: "Notice periods of 60 to 90 days",
        description:
          "Service companies enforce 90-day notice and many refuse buyouts. That makes the real cost of an IT hire a quarter of lost delivery, so we always surface notice period and buyout position in the shortlist, not after selection.",
      },
      {
        title: "CV inflation is structural, not occasional",
        description:
          "Stack keyword stuffing is normal in the Indian IT market because portal search rewards it. We screen against what the candidate actually built, with a project-level conversation, before you see the profile.",
      },
      {
        title: "Compensation benchmarks move every two quarters",
        description:
          "A band you set in January is often 15% light by July for in-demand skills like Golang, data engineering and platform SRE. We tell you where your budget sits against the live market rather than running a search that cannot close.",
      },
    ],
    talentHubs: [
      {
        city: "Bengaluru",
        slug: "bengaluru",
        note: "Deepest product and platform engineering pool in the country, and the most competitive — expect multiple offers in play on any strong profile.",
      },
      {
        city: "Hyderabad",
        slug: "hyderabad",
        note: "Global capability centres and large product engineering teams; strong for cloud, data and enterprise platform skills.",
      },
      {
        city: "Pune",
        slug: "pune",
        note: "Services plus product mix with better salary economics than Bengaluru, and strong Java, .NET and embedded talent.",
      },
      {
        city: "Delhi NCR",
        slug: "delhi-ncr",
        note: "Startup and D2C engineering, SaaS sales engineering, and a large analytics and consulting-tech pool across Gurugram and Noida.",
      },
      {
        city: "Chennai",
        slug: "chennai",
        note: "Services delivery at scale, BFSI technology and embedded engineering; typically the most stable tenure of the major hubs.",
      },
    ],
    hiringNotes: [
      { label: "Typical notice period", value: "60–90 days; 30 days in startups and most GCC-to-GCC moves" },
      { label: "Realistic time to offer", value: "2–4 weeks for mid-level engineers, 5–8 weeks for architects and leads" },
      { label: "Offer-to-join drop", value: "15–25% market-wide; we keep ours under 10% with scheduled engagement through notice" },
      { label: "Expected hike", value: "25–40% on a lateral move; higher only where the scope genuinely changes" },
      { label: "Remote and hybrid", value: "Hybrid is now the default; fully remote widens the pool but raises the counter-offer risk" },
    ],
    faqs: [
      {
        question: "Do you technically screen IT candidates or just forward CVs?",
        answer:
          "Every profile goes through a structured conversation with a consultant who recruits only for technology, covering the primary stack, a recent project end to end, scale handled and testing practice. You receive a written screening note with each CV. Where you want a coding assessment, we coordinate your test or run one on your platform before submission.",
      },
      {
        question: "Can you hire for a stack as niche as Golang, Rust or MLOps?",
        answer:
          "Yes, but the search runs differently. Niche stacks are headhunted from a known set of companies rather than sourced from portals, so expect a 3–5 week timeline and a shortlist of 3–4 genuinely qualified people rather than ten. We tell you at briefing stage how deep the pool actually is in your city and budget band.",
      },
      {
        question: "How do you handle 90-day notice periods and buyouts?",
        answer:
          "Notice period and buyout expectation are captured before submission and printed on the shortlist, so you can select on availability as well as skill. Where you are willing to fund a buyout we filter for candidates whose employers permit it, and we stay in structured contact with the candidate through the whole notice period to prevent a late counter-offer.",
      },
      {
        question: "Do you also provide contract IT staffing?",
        answer:
          "Yes. A large share of our technology work is contract and contract-to-hire for project ramp-ups, with the engineer on our payroll and full statutory compliance handled by us. This is the usual route for a six-to-twelve month delivery push or when headcount approval is pending.",
      },
    ],
    related: ["bfsi-recruitment", "bpo-shared-services-recruitment", "telecom-recruitment"],
  },
  {
    slug: "bfsi-recruitment",
    icon: "bank",
    name: "BFSI",
    label: "banking, financial services and insurance",
    h1: "BFSI Recruitment Agency — Banking, NBFC, Insurance & Fintech Hiring in India",
    metaTitle: "BFSI Recruitment Agency India | Banking, NBFC & Insurance Hiring",
    metaDescription:
      "BFSI recruitment agency for banks, NBFCs, insurers and fintechs in India. Relationship management, credit, risk, collections, compliance and branch banking roles — screened for regulatory fit and vintage.",
    primaryKeyword: "BFSI recruitment agency",
    intro: [
      "BFSI hiring is judged on two things a generalist recruiter rarely checks: product vintage and book portability. A relationship manager with eight years in the same city, the same customer segment and a book they can credibly carry is worth more than a candidate with a stronger CV and no local network. We screen on both before a profile reaches you.",
      "Our BFSI practice covers private and small finance banks, NBFCs, housing finance, insurance (life, general and health), broking, asset management and fintech lenders. Each has its own regulatory frame — RBI for banks and NBFCs, IRDAI for insurance, SEBI for broking and AMCs — and candidates do not move between them as freely as their CVs suggest. A gold-loan collections manager is not a credit card collections manager.",
      "Because the sector is audited, we take background verification seriously from the first conversation: employment gaps, exits during an audit cycle, IRDAI or NISM certification status and any history of a regulatory observation are all surfaced in writing. Finding out at the offer stage is expensive for everybody.",
    ],
    rolesByFunction: [
      {
        label: "Sales & distribution",
        roles:
          "Relationship managers (retail, SME, corporate, wealth, NRI), branch managers, cluster and area heads, bancassurance and agency channel leads",
      },
      {
        label: "Credit & risk",
        roles:
          "Credit managers and analysts (retail, LAP, SME, corporate), underwriters, credit policy, risk analytics, fraud risk and FRM specialists",
      },
      {
        label: "Collections & recovery",
        roles:
          "Collections managers by bucket, legal recovery, SARFAESI and repossession teams, tele-calling collections leads",
      },
      {
        label: "Operations",
        roles:
          "Branch banking operations, trade finance, treasury back office, loan processing, KYC and onboarding, reconciliation",
      },
      {
        label: "Compliance, audit & legal",
        roles:
          "Compliance officers, AML and KYC analysts, internal audit, concurrent audit, secretarial and regulatory reporting",
      },
      {
        label: "Insurance specialist",
        roles:
          "Actuarial, claims assessors and surveyors, medical underwriters, agency development managers, group health specialists",
      },
      {
        label: "Fintech & digital lending",
        roles:
          "Product managers for lending and payments, digital collections, co-lending partnership leads, credit data scientists",
      },
      {
        label: "Leadership",
        roles:
          "Business heads, zonal and regional heads, CROs, CFOs, heads of credit and heads of compliance (via executive search)",
      },
    ],
    skills: [
      {
        group: "What decides a BFSI shortlist",
        items:
          "Product vintage in the exact product, geography and customer segment, book size and portability, achievement against target for the last three years, and a clean audit record",
      },
      {
        group: "Certifications that matter",
        items:
          "IRDAI licensing and IC-38 for insurance, NISM series for broking and AMC roles, JAIIB and CAIIB for banking, CA, CFA, FRM and PRM for credit, risk and treasury, CAMS for AML",
      },
      {
        group: "Signals we treat as red flags",
        items:
          "A relationship manager moving cities and claiming the same book, repeated exits inside the audit cycle, missing IRDAI or NISM validity, and target achievement that cannot be evidenced",
      },
    ],
    challenges: [
      {
        title: "Branch-level roles are hyperlocal",
        description:
          "A sales or collections hire needs to live inside the catchment, know the local market and often speak the local language. Pan-India sourcing does not solve a vacancy in Hapur or Nashik; a local network does. That is why we recruit city by city rather than from a single central desk.",
      },
      {
        title: "Attrition is the highest of any sector we serve",
        description:
          "Frontline sales and collections attrition of 35–50% a year is normal across NBFCs and insurance. Hiring one person at a time is a losing game, so we plan BFSI frontline hiring as a rolling pipeline with a replacement guarantee rather than one-off mandates.",
      },
      {
        title: "Regulatory and background checks fail late",
        description:
          "An offer withdrawn at the verification stage costs four weeks. We front-load certification validity, employment gap explanations and reference checks so that failures surface in week one, not week five.",
      },
      {
        title: "Fintech and traditional BFSI pay on different curves",
        description:
          "A digital lender will pay 30–40% more for a credit data scientist than a bank will, while a bank offers stability and a brand a fintech cannot match. We position your role honestly against whichever side of that line you sit on instead of running a search that loses every offer.",
      },
    ],
    talentHubs: [
      {
        city: "Mumbai",
        slug: "mumbai",
        note: "Head-office market for banks, insurers, AMCs and broking — the only real pool for treasury, actuarial, compliance and corporate banking leadership.",
      },
      {
        city: "Delhi NCR",
        slug: "delhi-ncr",
        note: "NBFC and fintech lending headquarters across Gurugram and Noida, plus a deep retail and SME relationship-management pool.",
      },
      {
        city: "Bengaluru",
        slug: "bengaluru",
        note: "Fintech, payments and digital lending product and risk-analytics talent, well ahead of the rest of the country.",
      },
      {
        city: "Chennai",
        slug: "chennai",
        note: "Strong in insurance operations, vehicle and gold loan NBFCs, and shared-service finance centres.",
      },
      {
        city: "Hyderabad",
        slug: "hyderabad",
        note: "Growing BFSI capability centres handling risk, analytics and operations for global banks.",
      },
      {
        city: "Jaipur, Lucknow & Indore",
        slug: "jaipur",
        note: "Tier-2 branch expansion markets — the pool is thinner and local-language sales experience is non-negotiable.",
      },
    ],
    hiringNotes: [
      { label: "Typical notice period", value: "30 days for frontline sales and collections, 60–90 days for corporate and compliance roles" },
      { label: "Realistic time to offer", value: "1–2 weeks for branch-level roles, 4–8 weeks for credit, risk and compliance leadership" },
      { label: "Frontline attrition", value: "35–50% a year in sales and collections — plan a rolling pipeline, not single hires" },
      { label: "Expected hike", value: "20–30% for frontline moves; variable pay structure often matters more than fixed CTC" },
      { label: "Background verification", value: "Assume full BGV with CIBIL and reference checks; we pre-screen for anything that will fail it" },
    ],
    faqs: [
      {
        question: "Can you hire branch-level sales teams across tier-2 and tier-3 towns?",
        answer:
          "Yes, and this is a large part of our BFSI work. We recruit inside the catchment, screen for local-language ability and existing customer relationships, and run it as a bulk mandate where you are opening several branches at once. Our Hapur and Jaipur presence plus a referral network of local field recruiters is what makes small-town coverage practical.",
      },
      {
        question: "How do you verify that a relationship manager's book is real?",
        answer:
          "We ask for segment, ticket size, product mix and three years of target achievement, then test it against the geography and the employer's own product footprint. A claim that does not reconcile is flagged on the shortlist note. We also ask explicitly whether the book is portable to your product set, because frequently it is not.",
      },
      {
        question: "Do you handle credit, risk and compliance hiring as well as sales?",
        answer:
          "Yes. Credit managers, underwriters, risk analytics, internal audit, AML and KYC and compliance officers are a core part of the practice, and we screen on certification validity (CA, CFA, FRM, CAMS) as well as on product exposure. Senior compliance and CRO mandates run through our executive search desk.",
      },
      {
        question: "What do you charge for high-volume frontline BFSI hiring?",
        answer:
          "Volume frontline mandates are priced per position or as a flat monthly retainer rather than as a percentage of CTC, because a percentage model does not work at that salary level. Specialist and leadership roles are charged as a percentage of annual CTC with the usual 90-day replacement guarantee. Send us the role count and locations and we will quote against them.",
      },
    ],
    related: ["bpo-shared-services-recruitment", "it-software-recruitment", "real-estate-infra-recruitment"],
  },
  {
    slug: "manufacturing-recruitment",
    icon: "factory",
    name: "Manufacturing",
    label: "manufacturing and engineering",
    h1: "Manufacturing Recruitment Agency in India — Plant, Quality, Maintenance & EHS Hiring",
    metaTitle: "Manufacturing Recruitment Agency India | Plant & Engineering Hiring",
    metaDescription:
      "Manufacturing recruitment agency in India for production, quality, maintenance, EHS and supply chain roles. Plant-level hiring across NCR, Pune, Chennai, Ahmedabad and Coimbatore industrial belts.",
    primaryKeyword: "manufacturing recruitment agency India",
    intro: [
      "Manufacturing roles are won or lost on willingness to relocate. The skill exists — a maintenance engineer who has run the exact line you operate is findable — but they are sitting 600 km away in a company town, with a family settled there and a salary that does not stretch to metro rent. Our manufacturing practice screens for relocation reality before skill fit, because that is the constraint that actually kills plant mandates.",
      "We hire across discrete and process manufacturing: auto components, capital goods, chemicals and specialty chemicals, FMCG plants, packaging, textiles, steel and fabrication, electronics and EMS. The vocabulary changes completely between them. A process plant wants DCS and PLC exposure, GMP discipline and shutdown planning; an auto-component plant wants cycle time, OEE, PPAP and IATF audit experience. We staff each with consultants who speak that vocabulary.",
      "A plant shortlist from us states the machines and processes the candidate has actually run, the certifications they hold, the audit standards they have faced, their current location and family situation, and their realistic joining date. Hiring managers in manufacturing have no patience for CV prose, so we do not send any.",
    ],
    rolesByFunction: [
      {
        label: "Production & operations",
        roles:
          "Production engineers and managers, shift in-charge, plant heads, works managers, line supervisors, process engineers",
      },
      {
        label: "Quality",
        roles:
          "QA and QC engineers, quality managers, NPD and APQP engineers, calibration and metrology, customer quality and warranty",
      },
      {
        label: "Maintenance & reliability",
        roles:
          "Mechanical, electrical and instrumentation maintenance, utilities, TPM and reliability engineers, CNC and robotics maintenance",
      },
      {
        label: "EHS & sustainability",
        roles:
          "Safety officers and EHS managers, fire and safety, environment and ETP, ESG and sustainability reporting",
      },
      {
        label: "Design & engineering",
        roles:
          "Design engineers (CAD, CAE, SolidWorks, CATIA, NX), tool design, project and plant engineering, automation and PLC programming",
      },
      {
        label: "Supply chain & stores",
        roles:
          "Purchase and sourcing, vendor development, production planning, stores and inventory, logistics and dispatch",
      },
      {
        label: "Technical sales & service",
        roles:
          "Application and sales engineers, after-sales service, service managers, spares and AMC business",
      },
      {
        label: "Leadership",
        roles:
          "Plant heads, operations directors, heads of manufacturing excellence, VP Operations and COO mandates (via executive search)",
      },
    ],
    skills: [
      {
        group: "What we verify on the floor",
        items:
          "Specific machines and processes run, line capacity and volumes handled, OEE and rejection numbers owned, shutdown and commissioning exposure, and audit standards personally faced",
      },
      {
        group: "Certifications and standards that matter",
        items:
          "IATF 16949, ISO 9001 and ISO 14001, ISO 45001, GMP and GLP for pharma-adjacent plants, Six Sigma Green and Black Belt, NEBOSH and IOSH for EHS, boiler operation and electrical supervisor licences",
      },
      {
        group: "Signals we treat as red flags",
        items:
          "A CV listing standards the candidate only read about, no answer on numbers they owned, and relocation agreed verbally but never discussed with family",
      },
    ],
    challenges: [
      {
        title: "Relocation to plant locations, not cities",
        description:
          "Most plants are in industrial estates an hour or more from any city — Manesar, Chakan, Sanand, Hosur, Pithampur. Candidates accept and then withdraw once they visit. We screen on family situation, schooling needs and spouse employment up front, and we tell you honestly when a band will not attract anyone to relocate.",
      },
      {
        title: "Skill names are not transferable across sub-sectors",
        description:
          "Chemical process maintenance and auto-component maintenance share a job title and almost nothing else. We map the mandate to the sub-sector and the plant's actual equipment list rather than to a job title, which is why our rejection rate at CV stage is low.",
      },
      {
        title: "Shift and statutory constraints shape the pool",
        description:
          "Rotational night shifts, statutory limits on women's night working in some states, and contract-labour ratios all narrow a search before skill is considered. We build the compliance frame into the brief instead of discovering it at onboarding.",
      },
      {
        title: "Blue-collar and staff hiring need different machinery",
        description:
          "Operators, ITI fitters, welders and machine operators are hired in volume through local trade institutes and contractors, not through portals. We run those as bulk mandates, often on our payroll as contract staffing, separately from the engineer-level search.",
      },
    ],
    talentHubs: [
      {
        city: "Delhi NCR & Faridabad belt",
        slug: "delhi-ncr",
        note: "Auto components, fabrication and capital goods across Faridabad, Manesar, Bhiwadi and Ghaziabad — the deepest staff-level engineering pool in the north.",
      },
      {
        city: "Pune & Chakan",
        slug: "pune",
        note: "Auto, auto-component and engineering cluster with the strongest design and quality talent in the country.",
      },
      {
        city: "Chennai & Hosur",
        slug: "chennai",
        note: "Auto OEMs, EMS and electronics manufacturing; strong production and quality depth with lower attrition than the north.",
      },
      {
        city: "Ahmedabad & Sanand",
        slug: "ahmedabad",
        note: "Chemicals, specialty chemicals, pharma plants, textiles and packaging — the main pool for process and ETP talent.",
      },
      {
        city: "Coimbatore",
        slug: "coimbatore",
        note: "Pumps, foundry, textile machinery and precision engineering, with a strong ITI and diploma supply base.",
      },
      {
        city: "Indore & Pithampur",
        slug: "indore",
        note: "Growing central-India plant belt; usually the most cost-effective location to hire staff-level engineers.",
      },
    ],
    hiringNotes: [
      { label: "Typical notice period", value: "30 days at staff level, 60–90 days for plant heads and senior managers" },
      { label: "Realistic time to offer", value: "2–3 weeks for engineers, 6–10 weeks for plant leadership with relocation" },
      { label: "Attrition", value: "Low at engineer level and above (8–15%); high in contract operator roles" },
      { label: "Expected hike", value: "15–25% on a lateral move; relocation allowance often matters more than the hike" },
      { label: "Relocation", value: "Assume a plant visit before acceptance; budget joining and family relocation support" },
    ],
    faqs: [
      {
        question: "Can you recruit for a plant in a remote industrial location?",
        answer:
          "Yes — most of our manufacturing mandates are outside metros. We search the surrounding industrial belt first, because a candidate already living in that region is far more likely to join and stay, then widen to candidates who have worked in a comparable plant town. We screen on family, schooling and spouse-employment constraints before submitting, which is what keeps the offer-drop rate down.",
      },
      {
        question: "Do you supply blue-collar workers as well as engineers?",
        answer:
          "Yes. ITI trades, machine operators, welders, fitters, electricians, helpers and packers are hired in volume through local institute and contractor networks, usually on our payroll as contract staffing with PF, ESIC and statutory compliance handled by us. Engineer and manager-level roles run as a separate permanent search.",
      },
      {
        question: "How do you assess technical skill for a plant role?",
        answer:
          "By making the candidate talk through the actual line. Which machines, what cycle time, what volumes, what rejection rate did they own, what happened in the last shutdown, which audit did they face and what observations came out of it. That conversation separates real floor experience from a well-written CV faster than any test.",
      },
      {
        question: "Can you help with IATF or ISO audit-driven hiring deadlines?",
        answer:
          "Yes. Audit-driven mandates — a quality engineer needed before a customer audit, an EHS officer needed for a statutory requirement — are run on a compressed timeline with a shortlist inside 48 hours, and we filter specifically for candidates who have personally faced that audit standard rather than worked in a certified plant.",
      },
    ],
    related: ["automotive-recruitment", "logistics-supply-chain-recruitment", "healthcare-pharma-recruitment"],
  },
  {
    slug: "healthcare-pharma-recruitment",
    icon: "health",
    name: "Healthcare & Pharma",
    label: "healthcare and pharmaceuticals",
    h1: "Pharma & Healthcare Recruitment Agency in India — Clinical, R&D, Regulatory & Sales",
    metaTitle: "Pharma Recruitment Agency India | Healthcare & Life Sciences Hiring",
    metaDescription:
      "Pharma and healthcare recruitment agency in India. Formulation and API R&D, QA/QC, regulatory affairs, clinical research, hospital operations and medical sales — screened for GMP and audit readiness.",
    primaryKeyword: "pharma recruitment agency India",
    intro: [
      "Pharma hiring carries a regulatory consequence that almost no other sector does. A QA head who has never faced a USFDA inspection, a regulatory affairs manager who has filed only in unregulated markets, a production chemist who has worked outside a GMP frame — any of those can cost a site an observation. So our life sciences screen starts with audit and market exposure, not years of experience.",
      "The practice spans formulations and API manufacturers, CDMOs and CROs, biotech, medical devices and diagnostics, hospitals and diagnostic chains. These are genuinely different labour markets. A formulation R&D scientist and a hospital quality manager share the word 'healthcare' and nothing else, and even within pharma a candidate from a domestic-market company often cannot step into a regulated-market site.",
      "Hospital and provider-side hiring runs on its own logic: registration and licence validity, specialty and super-specialty availability in the city, patient-load experience, and NABH or JCI accreditation exposure. We screen clinical credentials against the issuing council, because an expired registration discovered after joining is a compliance problem, not an HR one.",
    ],
    rolesByFunction: [
      {
        label: "R&D & formulation",
        roles:
          "Formulation development, analytical development (ADL), API and process chemistry, biotech and biosimilars, device R&D, IP and patents",
      },
      {
        label: "Quality",
        roles:
          "QA and QC officers and managers, qualification and validation (CSV, IQ/OQ/PQ), quality heads, documentation and QMS specialists",
      },
      {
        label: "Regulatory affairs",
        roles:
          "US, EU, emerging-market and India filings, DMF and ANDA, dossier compilation, CMC, pharmacovigilance and drug safety",
      },
      {
        label: "Manufacturing & engineering",
        roles:
          "Production chemists and officers, packing, sterile and injectable manufacturing, plant engineering, utilities and HVAC validation",
      },
      {
        label: "Clinical research",
        roles:
          "Clinical research associates, project managers, data management, biostatistics, medical writing, site management",
      },
      {
        label: "Commercial & medical affairs",
        roles:
          "Medical representatives, area and regional sales managers, KAM, hospital and institutional sales, product and brand managers, MSLs",
      },
      {
        label: "Hospitals & diagnostics",
        roles:
          "Hospital operations and unit heads, nursing superintendents, lab managers, radiology and imaging technologists, NABH quality leads, medical administration",
      },
      {
        label: "Leadership",
        roles:
          "Site heads, heads of quality and regulatory, R&D directors, hospital CEOs and COOs (via executive search)",
      },
    ],
    skills: [
      {
        group: "What we verify first",
        items:
          "Which regulatory audits the candidate personally faced (USFDA, EU-GMP, MHRA, WHO-GMP, TGA, CDSCO), which markets they have filed in, dosage forms and equipment handled, and GMP or GLP depth rather than exposure",
      },
      {
        group: "Qualifications and certifications",
        items:
          "B.Pharm, M.Pharm, MSc Chemistry and PhD for R&D and quality; RA certifications and RAC; GCP for clinical roles; council registration for nursing, pharmacy and allied health; NABH and NABL for provider-side quality",
      },
      {
        group: "Signals we treat as red flags",
        items:
          "Audit experience claimed at site level but not personally, expired professional registration, data-integrity history, and regulated-market filing claims with no dossier to point to",
      },
    ],
    challenges: [
      {
        title: "Audit exposure cannot be learned on the job fast enough",
        description:
          "For a site facing an inspection, hiring someone who has never been in the room is not a risk you can carry. The pool of people with genuine regulated-market audit experience in any given city is small, so these mandates are headhunted from a known list of sites rather than sourced.",
      },
      {
        title: "Plant locations are narrow and concentrated",
        description:
          "Pharma manufacturing sits in a handful of clusters — Hyderabad, Ahmedabad and Baddi above all — and candidates rarely relocate out of a cluster where their whole career network lives. Hiring for a site outside those clusters means paying a relocation premium and accepting a longer timeline.",
      },
      {
        title: "Field sales attrition is structural",
        description:
          "Medical representative attrition of 30–40% a year, territory by territory, means pharma field hiring is a continuous pipeline exercise. We run it as rolling bulk hiring by territory with local-language screening, not as one-off replacement searches.",
      },
      {
        title: "Clinical staffing is licence-constrained, not CV-constrained",
        description:
          "Nurses, technologists and allied health staff are available in volume but registration validity, specialty experience and shift willingness decide who can actually be placed. We verify registration at screening, because the alternative is an offer withdrawn at joining.",
      },
    ],
    talentHubs: [
      {
        city: "Hyderabad",
        slug: "hyderabad",
        note: "India's largest pharma cluster — the primary pool for API, formulation R&D, analytical development and regulatory affairs.",
      },
      {
        city: "Ahmedabad & Gujarat belt",
        slug: "ahmedabad",
        note: "Formulations, API, CDMO and injectable sites across Ahmedabad, Vadodara and Ankleshwar; strong production and quality depth.",
      },
      {
        city: "Mumbai",
        slug: "mumbai",
        note: "Corporate, regulatory, medical affairs, business development and marketing headquarters for most Indian pharma majors.",
      },
      {
        city: "Bengaluru",
        slug: "bengaluru",
        note: "Biotech, biosimilars, medical devices, diagnostics and CRO talent, plus the deepest clinical data management pool.",
      },
      {
        city: "Delhi NCR",
        slug: "delhi-ncr",
        note: "Hospital chains, diagnostics, medical devices and institutional sales, with CDSCO-facing regulatory roles close to the regulator.",
      },
      {
        city: "Chennai & Kochi",
        slug: "kochi",
        note: "Hospital and diagnostics hiring at scale, and the main supply market for nursing and allied health staff.",
      },
    ],
    hiringNotes: [
      { label: "Typical notice period", value: "30 days for field sales and clinical staff, 60–90 days for quality, regulatory and R&D" },
      { label: "Realistic time to offer", value: "2 weeks for field and clinical roles, 4–8 weeks for regulatory and quality leadership" },
      { label: "Attrition", value: "30–40% in field sales; under 12% in R&D, quality and regulatory" },
      { label: "Expected hike", value: "20–30%; regulated-market audit experience commands a clear premium" },
      { label: "Verification", value: "Council registration, qualification and audit-exposure checks completed before submission" },
    ],
    faqs: [
      {
        question: "Can you find QA and regulatory candidates with USFDA audit experience?",
        answer:
          "Yes, and we treat it as a headhunt rather than a search. The realistic pool for genuine USFDA or EU-GMP facing experience in any city is a defined set of sites, so we map those sites, approach the individuals directly, and confirm that the exposure was personal rather than site-level. Expect a shortlist of three to five people over four to six weeks, not a long list in a week.",
      },
      {
        question: "Do you recruit for hospitals and diagnostics as well as pharma companies?",
        answer:
          "Yes. Hospital operations, unit heads, nursing leadership, lab and radiology managers, NABH quality leads and medical administration are a distinct part of the practice, with registration validity and accreditation exposure verified at screening. Volume nursing and technologist hiring is run as a bulk mandate by city.",
      },
      {
        question: "How do you handle medical representative hiring across territories?",
        answer:
          "As a rolling territory-wise pipeline. We screen for the therapeutic segment, the doctor coverage the candidate actually holds in that specific territory, local-language fluency and two-wheeler availability. Because field attrition is high by nature, most clients keep a standing mandate with us rather than raising a fresh requisition for each exit.",
      },
      {
        question: "Can you support a new plant or site commissioning?",
        answer:
          "Yes. Site commissioning is a staged hiring plan, not a set of vacancies: quality and regulatory leadership first, then production and engineering, then operators and contract staff timed to validation batches. We build that sequence with you and can run the operator layer on our own payroll until the site stabilises.",
      },
    ],
    related: ["manufacturing-recruitment", "bpo-shared-services-recruitment", "education-edtech-recruitment"],
  },
  {
    slug: "retail-ecommerce-recruitment",
    icon: "cart",
    name: "Retail & E-commerce",
    label: "retail and e-commerce",
    h1: "Retail & E-commerce Recruitment Agency in India — Store Ops, Category & Fulfilment Hiring",
    metaTitle: "Retail Recruitment Agency India | E-commerce & Store Hiring",
    metaDescription:
      "Retail and e-commerce recruitment agency in India. Store managers, cluster heads, category and buying teams, visual merchandising, fulfilment and quick-commerce dark store hiring at volume.",
    primaryKeyword: "retail recruitment agency",
    intro: [
      "Retail hiring is a footfall problem disguised as an HR problem. A store opens on a fixed date whether or not the team is in place, and a store that opens understaffed loses its first-month numbers permanently. So retail mandates are judged almost entirely on whether a full team — manager, supervisors, cashiers, floor staff — is trained and on the floor before the shutter goes up.",
      "We work across organised retail (apparel, footwear, jewellery, electronics, grocery, beauty, QSR), e-commerce marketplaces and D2C brands, and quick commerce. The requirement profile is completely different at each: a fashion retailer wants conversion and ATV discipline plus visual merchandising sense; a quick-commerce operator wants dark-store throughput and rider management; a D2C brand wants performance-marketing and marketplace-operations skill that barely existed five years ago.",
      "Because the volumes are high and the salary bands are modest, we price retail store hiring per position rather than as a percentage of CTC, and we run new-store openings as a dated project plan with a named coordinator for each city.",
    ],
    rolesByFunction: [
      {
        label: "Store operations",
        roles:
          "Store managers, assistant and department managers, cluster and area managers, cashiers, customer service and floor associates",
      },
      {
        label: "Category & buying",
        roles:
          "Category managers, buyers and merchandisers, planning and allocation, assortment and pricing analysts, private label",
      },
      {
        label: "Visual merchandising & retail design",
        roles:
          "VM executives and managers, store design and projects, retail rollout and fit-out coordination",
      },
      {
        label: "E-commerce & marketplace",
        roles:
          "Marketplace and account managers, listings and catalogue, pricing and ads (Amazon, Flipkart, quick commerce), D2C growth",
      },
      {
        label: "Performance marketing & CRM",
        roles:
          "Performance marketing, SEO and content, CRM and retention, social and influencer, marketing analytics",
      },
      {
        label: "Supply chain & fulfilment",
        roles:
          "Warehouse and fulfilment centre managers, dark store managers, last-mile and rider operations, inventory and reverse logistics",
      },
      {
        label: "Support functions",
        roles:
          "Retail HR business partners, loss prevention and audit, retail finance and MIS, training managers",
      },
      {
        label: "Leadership",
        roles:
          "Retail heads, heads of category, business heads for D2C and marketplaces, COO mandates (via executive search)",
      },
    ],
    skills: [
      {
        group: "What a retail shortlist is judged on",
        items:
          "Store or portfolio size handled, conversion, ATV and UPT numbers owned, shrinkage control, team size managed, and format experience (mall, high street, airport, large-format)",
      },
      {
        group: "What matters on the e-commerce side",
        items:
          "Platform-level ownership on Amazon, Flipkart, Blinkit or Zepto, GMV handled, ROAS and CAC discipline, and hands-on tooling (Shopify, Unicommerce, GA4, Meta and Google Ads)",
      },
      {
        group: "Signals we treat as red flags",
        items:
          "No numbers for their own store, a cluster role claimed with single-store experience, and a marketplace CV with no account they can name",
      },
    ],
    challenges: [
      {
        title: "Store openings are date-driven and unforgiving",
        description:
          "A delayed hire is a delayed opening. We staff openings backwards from the launch date, with the manager hired four to six weeks ahead so they can recruit and train their own floor team — which is the only approach that holds up in practice.",
      },
      {
        title: "Frontline attrition of 50%+ a year",
        description:
          "Floor staff and cashiers leave for a thousand rupees more down the road. Hiring retail frontline one vacancy at a time is unworkable, so we maintain a city-wise standing pipeline and most clients keep a rolling mandate rather than raising individual requisitions.",
      },
      {
        title: "Seasonal peaks compress the calendar",
        description:
          "Festive, end-of-season sale and quick-commerce peak demand arrives at a known date with a known team size. We plan those as contract staffing on our payroll so headcount scales back down cleanly instead of becoming a permanent cost.",
      },
      {
        title: "Catchment language and shift willingness narrow the pool",
        description:
          "Mall shifts run to 10 pm, and customers expect to be served in the local language. We screen on both before submission, which is why our frontline rejection rate at interview is low compared with portal-sourced applicants.",
      },
    ],
    talentHubs: [
      {
        city: "Mumbai",
        slug: "mumbai",
        note: "Head-office market for most national retail and D2C brands; deepest category, buying and marketing pool.",
      },
      {
        city: "Bengaluru",
        slug: "bengaluru",
        note: "E-commerce, quick commerce and D2C headquarters — marketplace operations and growth marketing talent concentrate here.",
      },
      {
        city: "Delhi NCR",
        slug: "delhi-ncr",
        note: "Largest organised retail footprint in the country plus apparel and footwear sourcing offices in Gurugram and Noida.",
      },
      {
        city: "Hyderabad & Chennai",
        slug: "hyderabad",
        note: "Fast mall expansion and strong jewellery and electronics retail; local-language screening is essential.",
      },
      {
        city: "Pune & Ahmedabad",
        slug: "pune",
        note: "Growing large-format and grocery retail, and the main fulfilment-centre belts for western India.",
      },
      {
        city: "Indore, Jaipur & Lucknow",
        slug: "indore",
        note: "Tier-2 expansion markets where store teams must be hired locally — our usual route is a city-level bulk mandate.",
      },
    ],
    hiringNotes: [
      { label: "Typical notice period", value: "15–30 days at store level, 60 days for category and head-office roles" },
      { label: "Realistic time to offer", value: "3–10 days for store staff, 3–5 weeks for category and marketing roles" },
      { label: "Frontline attrition", value: "40–60% a year — plan rolling pipelines and over-hire for openings" },
      { label: "Expected hike", value: "15–25% at store level; e-commerce and growth roles command 30%+" },
      { label: "Peak staffing", value: "Festive and sale peaks are best run as contract staffing on our payroll" },
    ],
    faqs: [
      {
        question: "Can you staff a complete new store before its opening date?",
        answer:
          "Yes, and that is how most of our retail work is structured. We plan backwards from your launch date, hire the store manager four to six weeks early so they can be part of selecting their own team, then fill supervisors, cashiers and floor staff in a single local drive. Walk-in drives in the catchment are usually faster and cheaper than portal sourcing for frontline roles.",
      },
      {
        question: "How do you handle festive and seasonal peak hiring?",
        answer:
          "As contract staffing on our payroll, with a defined start and end date, so your permanent headcount is unaffected and PF, ESIC and statutory compliance stay with us. We agree the ramp-up and ramp-down calendar in advance, including the buffer needed for the attrition that always occurs mid-peak.",
      },
      {
        question: "Do you recruit for e-commerce and D2C roles, not just stores?",
        answer:
          "Yes. Marketplace account managers, catalogue and listings teams, performance marketers, CRM and retention managers, and fulfilment and dark-store operations are a growing share of the practice. We screen these on numbers the candidate personally owned — GMV, ROAS, CAC, throughput — because platform CVs are easy to inflate.",
      },
      {
        question: "What does retail store hiring cost?",
        answer:
          "Store-level and frontline hiring is priced per position or as a flat fee for a full-store mandate, since a percentage of CTC does not work at those salary levels. Head-office, category and leadership roles are charged as a percentage of annual CTC with a 90-day replacement guarantee. Send us the store list and role count for a quote.",
      },
    ],
    related: ["logistics-supply-chain-recruitment", "hospitality-travel-recruitment", "bpo-shared-services-recruitment"],
  },
  {
    slug: "logistics-supply-chain-recruitment",
    icon: "truck",
    name: "Logistics & Supply Chain",
    label: "logistics and supply chain",
    h1: "Logistics Recruitment Agency in India — Warehouse, Transport & Supply Chain Hiring",
    metaTitle: "Logistics Recruitment Agency India | Supply Chain & Warehouse Hiring",
    metaDescription:
      "Logistics and supply chain recruitment agency in India. Warehouse and fulfilment managers, transport and fleet operations, last-mile, freight forwarding, customs and planning roles — hired at volume.",
    primaryKeyword: "logistics recruitment agency India",
    intro: [
      "Logistics hiring lives on a daily operating clock. A warehouse that is short of staff on a Monday does not catch up by Friday; the backlog compounds. That makes speed of hiring, and the ability to supply people in volume to a specific pin code, worth more in this sector than the polish of any individual CV.",
      "We recruit across 3PL and contract logistics, e-commerce fulfilment and last mile, freight forwarding and customs clearance, cold chain, express and courier, and in-house supply chain teams at manufacturers and retailers. The screen is operational: throughput handled, SKU count, dispatch volumes, fleet size, WMS and TMS exposure, and whether the candidate has run a site against an SLA with penalties attached.",
      "Because logistics sites cluster around highways, ports and city peripheries — Bhiwandi, Luhari, Chakan, Sriperumbudur, Panvel — we recruit from the surrounding commute radius rather than from the city centre. A candidate who cannot reach the site before the first shift is not a candidate.",
    ],
    rolesByFunction: [
      {
        label: "Warehouse & fulfilment",
        roles:
          "Warehouse and site managers, fulfilment centre leads, shift and inbound/outbound in-charge, inventory and cycle-count teams, dark store managers",
      },
      {
        label: "Transport & fleet",
        roles:
          "Transport and fleet managers, dispatch and control tower, route planners, driver and vehicle compliance, workshop and maintenance",
      },
      {
        label: "Last mile & delivery",
        roles:
          "Last-mile hub managers, delivery station leads, rider and DA supervisors, hub operations and reverse logistics",
      },
      {
        label: "Freight forwarding & customs",
        roles:
          "Ocean and air freight executives, pricing and procurement, customs brokerage and documentation, CHA operations, EXIM compliance",
      },
      {
        label: "Planning & analytics",
        roles:
          "Demand and supply planners, S&OP managers, network design and modelling, logistics cost analysts, control-tower analysts",
      },
      {
        label: "Business development",
        roles:
          "3PL solution sales, key account managers, tender and bid management, solution design engineers",
      },
      {
        label: "Cold chain & specialised",
        roles:
          "Cold chain operations, pharma and GDP-compliant logistics, hazardous goods handling, bonded warehouse operations",
      },
      {
        label: "Leadership",
        roles:
          "Regional and national operations heads, supply chain directors, heads of network and CXO mandates (via executive search)",
      },
    ],
    skills: [
      {
        group: "What we screen on operationally",
        items:
          "Daily throughput and dispatch volumes handled, square footage and SKU count, team size including contract labour, SLA and penalty exposure, and cost-per-shipment ownership",
      },
      {
        group: "Systems and certifications",
        items:
          "WMS and TMS platforms (SAP EWM, Manhattan, Blue Yonder, Unicommerce), SAP MM/SD, Excel and SQL for planning roles, CHA licence and EXIM documentation, GDP for pharma logistics, forklift and safety certification",
      },
      {
        group: "Signals we treat as red flags",
        items:
          "A site manager who cannot state their own throughput, fleet experience without compliance exposure, and commute distance that quietly rules the candidate out",
      },
    ],
    challenges: [
      {
        title: "Sites are peripheral and commute decides acceptance",
        description:
          "Warehousing parks sit 30–60 km from the city they serve. We source from the surrounding towns and villages, not the metro core, and we screen commute honestly — because a candidate who accepts a two-hour one-way commute will leave within the quarter.",
      },
      {
        title: "Volume labour is a contractor market, not a portal market",
        description:
          "Loaders, pickers, packers, forklift operators and delivery associates are hired through local networks, trade institutes and field drives. We run those as contract staffing on our payroll with full statutory compliance, which also solves the contract-labour licensing exposure for the client.",
      },
      {
        title: "Peaks are predictable but brutal",
        description:
          "Festive, Big Billion-style sale events and month-end dispatch cycles need 2–3x the baseline headcount for a defined window. That is a ramp-up plan agreed weeks in advance, with over-hiring built in for mid-peak attrition.",
      },
      {
        title: "Compliance exposure sits with the principal employer",
        description:
          "Contract labour in logistics brings CLRA licensing, PF and ESIC, and minimum-wage obligations that ultimately fall back on the principal employer. We take that on contractually, maintain the registers and share monthly compliance documentation.",
      },
    ],
    talentHubs: [
      {
        city: "Mumbai & Bhiwandi",
        slug: "mumbai",
        note: "India's largest warehousing cluster plus JNPT port and freight-forwarding depth — the primary pool for 3PL and EXIM talent.",
      },
      {
        city: "Delhi NCR",
        slug: "delhi-ncr",
        note: "North-India hub across Luhari, Farukhnagar, Bhiwadi and Ghaziabad, with the deepest last-mile and express operations pool.",
      },
      {
        city: "Bengaluru",
        slug: "bengaluru",
        note: "E-commerce fulfilment, quick commerce and supply chain technology and planning roles.",
      },
      {
        city: "Chennai",
        slug: "chennai",
        note: "Port-led freight forwarding, customs brokerage and auto inbound logistics around Sriperumbudur and Ennore.",
      },
      {
        city: "Pune & Ahmedabad",
        slug: "pune",
        note: "Chakan, Talegaon and Sanand belts — strong in manufacturing inbound logistics and contract warehousing.",
      },
      {
        city: "Kolkata & Bhubaneswar",
        slug: "kolkata",
        note: "Eastern distribution and port logistics; a thinner managerial pool, so relocation is often part of the plan.",
      },
    ],
    hiringNotes: [
      { label: "Typical notice period", value: "15–30 days for site operations, 60 days for planning and corporate roles" },
      { label: "Realistic time to offer", value: "Under a week for volume roles, 2–4 weeks for site managers and planners" },
      { label: "Attrition", value: "60%+ in volume roles; 15–20% at supervisory and managerial level" },
      { label: "Expected hike", value: "15–25%; shift allowance and site transport often decide acceptance" },
      { label: "Compliance", value: "CLRA, PF, ESIC and minimum-wage obligations handled by us on contract mandates" },
    ],
    faqs: [
      {
        question: "Can you supply warehouse manpower at volume within a week?",
        answer:
          "For most locations, yes. Volume roles — pickers, packers, loaders, forklift operators, delivery associates — are hired through local field drives and institute networks rather than portals, and we maintain standing pipelines in the major warehousing belts. The usual constraint is not sourcing but documentation and induction, so we start those in parallel.",
      },
      {
        question: "Do you take on the contract labour compliance?",
        answer:
          "Yes. On contract staffing mandates the workers are on our payroll, and PF, ESIC, minimum wages, CLRA registers and monthly statutory filings are our responsibility. You receive monthly compliance documentation so your own principal-employer exposure is evidenced and auditable.",
      },
      {
        question: "How do you handle hiring for a warehouse far outside the city?",
        answer:
          "We source from the towns and villages within an honest commute radius of the site, not from the metro core, and we factor in whether site transport is provided. For managerial roles we look first at candidates already working in that belt, because they have already solved the commute question and are far more likely to stay.",
      },
      {
        question: "Can you hire planning and supply chain analytics roles too?",
        answer:
          "Yes. Demand and supply planners, S&OP managers, network design and control-tower analysts are a distinct part of the practice, screened on modelling ability and tooling (SQL, Excel at depth, planning platforms) rather than on operational throughput. These are corporate-office roles with longer notice periods and a 3–5 week timeline.",
      },
    ],
    related: ["manufacturing-recruitment", "retail-ecommerce-recruitment", "automotive-recruitment"],
  },
  {
    slug: "telecom-recruitment",
    icon: "signal",
    name: "Telecom",
    label: "telecom and networks",
    h1: "Telecom Recruitment Agency — Network, Field Operations & Enterprise Sales Hiring in India",
    metaTitle: "Telecom Recruitment Agency India | Network & Field Ops Hiring",
    metaDescription:
      "Telecom recruitment agency in India for network planning and RF, 5G rollout, fibre and FTTH operations, NOC, OSS/BSS, tower infrastructure and enterprise telecom sales roles.",
    primaryKeyword: "telecom recruitment agency",
    intro: [
      "Telecom hiring follows rollout geography, not headquarters geography. A 5G or fibre programme creates demand for RF engineers, survey teams and field supervisors in specific circles for a specific number of quarters, then moves on. Recruiting for it means being able to staff a circle at short notice and then release the headcount cleanly — which is why most of our telecom work runs as contract or contract-to-hire rather than permanent search.",
      "We cover operators, tower and infrastructure companies, OEMs and network integrators, fibre and ISP players, and the managed-services firms that run networks on their behalf. The distinction matters: an operator-side planning engineer and a vendor-side implementation engineer are judged on different things, and a candidate from a managed-services background often has deeper hands-on exposure than an operator CV at the same grade.",
      "Field telecom roles are also the most location-specific we handle. Circle-level knowledge, local-language ability and comfort with travel across a state are screened before technical fit, because a technically perfect candidate who will not travel the circle is of no use on a rollout.",
    ],
    rolesByFunction: [
      {
        label: "Network planning & design",
        roles:
          "RF planning and optimisation, transmission and microwave planning, core and IP network design, 5G and NR planning, capacity planning",
      },
      {
        label: "Rollout & implementation",
        roles:
          "Project managers for rollout, site acquisition, survey and TSSR, installation and commissioning, integration engineers, EHS for tower work",
      },
      {
        label: "Fibre & FTTH",
        roles:
          "OFC planning and route survey, splicing and OTDR teams, FTTH operations, last-mile ISP operations, fibre maintenance supervisors",
      },
      {
        label: "Operations & NOC",
        roles:
          "NOC engineers and shift leads, field maintenance, fault and trouble-ticket management, SLA and uptime management, energy and DG management",
      },
      {
        label: "OSS/BSS & telecom IT",
        roles:
          "OSS/BSS engineers, mediation and billing, charging systems, provisioning, network automation and scripting",
      },
      {
        label: "Enterprise sales & solutions",
        roles:
          "Enterprise and SME telecom sales, solution architects for connectivity and cloud, key account managers, channel and partner sales",
      },
      {
        label: "Tower & infrastructure",
        roles:
          "Tower operations and cluster managers, site maintenance, energy and fuel management, infra project and rollout coordinators",
      },
      {
        label: "Leadership",
        roles:
          "Circle heads, network operations heads, rollout programme directors and enterprise business heads (via executive search)",
      },
    ],
    skills: [
      {
        group: "What we verify technically",
        items:
          "Hands-on tooling (Atoll, ASSET, TEMS, Nemo, OTDR, Netcracker), technology generations actually worked on, circle and vendor exposure, and site or route counts personally delivered",
      },
      {
        group: "Certifications that matter",
        items:
          "CCNA, CCNP and CCIE for IP and core roles, Nokia and Ericsson product certifications, PMP for rollout programme managers, ITIL for NOC and managed services, working-at-height and tower safety certification for field roles",
      },
      {
        group: "Signals we treat as red flags",
        items:
          "5G listed with no live site exposure, planning tools claimed but never licensed to them, and unwillingness to travel a circle that only surfaces after joining",
      },
    ],
    challenges: [
      {
        title: "Demand is project-shaped, not headcount-shaped",
        description:
          "A rollout needs 40 engineers for six quarters and then 8. Hiring all 40 permanently creates a redundancy problem you pay for later. We structure these as contract staffing on our payroll with a defined ramp-down, so the cost profile matches the project.",
      },
      {
        title: "Circle-level staffing cannot be done from a central desk",
        description:
          "A UP East rollout needs people who know UP East. We recruit circle by circle with local-language screening and realistic travel expectations, which is slower to set up and far more reliable than sourcing nationally and hoping for relocation.",
      },
      {
        title: "Field safety and compliance narrow the pool legitimately",
        description:
          "Tower climbing and working-at-height roles require certification and medical fitness. We verify both before submission, because an uncertified field hire is a liability exposure for the client, not a saving.",
      },
      {
        title: "Experienced planning talent is scarce and chased",
        description:
          "Genuine RF optimisation and core-network design experience sits with a few hundred people per circle, all known to each other and to every competing vendor. Those roles are headhunted, with a realistic four-to-six-week timeline and a premium band.",
      },
    ],
    talentHubs: [
      {
        city: "Delhi NCR",
        slug: "delhi-ncr",
        note: "Operator and OEM headquarters in Gurugram and Noida — the main pool for planning, enterprise sales and programme management.",
      },
      {
        city: "Bengaluru",
        slug: "bengaluru",
        note: "R&D, core network, OSS/BSS and network automation talent, plus OEM engineering centres.",
      },
      {
        city: "Mumbai",
        slug: "mumbai",
        note: "Enterprise telecom sales, data centre and connectivity solutions, and a dense metro network operations market.",
      },
      {
        city: "Hyderabad & Chennai",
        slug: "chennai",
        note: "Managed services, NOC operations and southern circle rollout teams.",
      },
      {
        city: "Lucknow & Jaipur",
        slug: "lucknow",
        note: "Circle operations and field rollout hubs for UP and Rajasthan, where local-language field teams must be hired in state.",
      },
      {
        city: "Kolkata & Bhubaneswar",
        slug: "bhubaneswar",
        note: "Eastern circle operations and fibre rollout; the managerial pool is thin, so we often source from adjacent circles.",
      },
    ],
    hiringNotes: [
      { label: "Typical notice period", value: "15–30 days for field and vendor-side roles, 60–90 days for operator-side positions" },
      { label: "Realistic time to offer", value: "1–2 weeks for field roles, 4–6 weeks for planning and optimisation specialists" },
      { label: "Attrition", value: "High in field and vendor roles (30%+) as projects end; low on the operator side" },
      { label: "Expected hike", value: "20–30%; project-based contract roles often command a higher monthly rate instead" },
      { label: "Engagement model", value: "Contract or contract-to-hire for rollout phases; permanent for planning and operator roles" },
    ],
    faqs: [
      {
        question: "Can you staff a circle-wide rollout at short notice?",
        answer:
          "Yes. Rollout staffing is run circle by circle through local field networks, with survey, installation and commissioning teams hired against your site plan and ramped down as the phase closes. These are normally contract engagements on our payroll so your permanent headcount and redundancy exposure stay clean.",
      },
      {
        question: "Do you recruit for fibre and FTTH operations?",
        answer:
          "Yes — OFC route survey, splicing and OTDR teams, FTTH operations and last-mile ISP roles are a growing part of the practice. Splicing and field roles are screened hands-on, including tool familiarity and willingness to work night maintenance windows, which is where most field hires actually fall over.",
      },
      {
        question: "How do you find RF planning and optimisation engineers?",
        answer:
          "By headhunting a known pool rather than searching portals. We map the operators, OEMs and managed-services firms active in the circle, approach engineers directly, and verify tool-level and technology-generation exposure in the screening conversation. Expect three to five genuinely qualified profiles over four to six weeks.",
      },
      {
        question: "Can you handle enterprise telecom sales hiring?",
        answer:
          "Yes. Enterprise and SME connectivity sales, solution architects and key account managers are screened on the accounts and order book the candidate personally carried, the segment they sold into, and whether those relationships are portable to your product set — not on years of experience.",
      },
    ],
    related: ["it-software-recruitment", "real-estate-infra-recruitment", "bpo-shared-services-recruitment"],
  },
  {
    slug: "education-edtech-recruitment",
    icon: "book",
    name: "Education & EdTech",
    label: "education and EdTech",
    h1: "EdTech & Education Recruitment Agency in India — Academic, Counselling & Admissions Hiring",
    metaTitle: "EdTech Recruitment Agency India | Education & Academic Hiring",
    metaDescription:
      "Education and EdTech recruitment agency in India. Teachers and faculty, academic heads, admission counsellors, inside sales, curriculum and content, and school and university operations roles.",
    primaryKeyword: "EdTech recruitment agency",
    intro: [
      "Education hiring splits cleanly into two markets that share almost no candidates. The academic side — teachers, faculty, academic heads — is credential-led, session-bound and judged on subject depth and classroom ability. The commercial side — admission counsellors, inside sales, B2B school sales — is target-led, high-volume and high-attrition. Treating them as one sector is the commonest mistake in education recruitment, and it produces shortlists nobody wants.",
      "We work with K-12 schools and chains, CBSE, ICSE and IB institutions, coaching and test-prep brands, colleges and universities, skilling and vocational providers, and EdTech companies across K-12, test prep, upskilling and study-abroad. The screen changes with the board and the model: an IB school wants PYP or DP training and inquiry-based teaching; a test-prep brand wants rank-producing results and selection-ratio evidence; an EdTech sales floor wants call discipline and conversion numbers.",
      "Academic hiring also has an unforgiving calendar. Faculty must be in place before the session starts, which means the real hiring window runs from February to May for most Indian boards. We plan academic mandates against that calendar rather than against a requisition date.",
    ],
    rolesByFunction: [
      {
        label: "Teaching & faculty",
        roles:
          "Pre-primary, primary and secondary teachers by subject, PGT and TGT, special educators, IB PYP/MYP/DP faculty, college lecturers and assistant professors",
      },
      {
        label: "Academic leadership",
        roles:
          "Principals and vice principals, academic coordinators and heads, deans and HODs, examination controllers, academic quality and accreditation leads",
      },
      {
        label: "Admissions & counselling",
        roles:
          "Admission counsellors, career and study-abroad counsellors, inside sales and tele-counselling, admissions managers, front-office and enquiry desk",
      },
      {
        label: "EdTech sales & growth",
        roles:
          "Business development associates, inside sales teams, B2B school and institution sales, partnership and channel managers, revenue operations",
      },
      {
        label: "Curriculum & content",
        roles:
          "Curriculum designers, subject-matter experts, instructional designers, content writers and editors, assessment and question-bank developers, video faculty",
      },
      {
        label: "Student success & operations",
        roles:
          "Student success and retention managers, batch and schedule operations, learning operations, placement and training coordinators",
      },
      {
        label: "Institutional operations",
        roles:
          "School and campus administrators, transport and hostel operations, facilities, accounts and fee management, school HR",
      },
      {
        label: "Leadership",
        roles:
          "Cluster and chain academic directors, heads of admissions, growth and revenue heads, CXO mandates (via executive search)",
      },
    ],
    skills: [
      {
        group: "What we verify on the academic side",
        items:
          "Board and curriculum experience (CBSE, ICSE, IB, state, Cambridge), B.Ed and subject qualification, CTET or state TET where applicable, NET/SET and PhD for higher education, demo-class performance and board results produced",
      },
      {
        group: "What we verify on the commercial side",
        items:
          "Monthly conversion and revenue numbers personally achieved, call and lead volumes handled, CRM discipline, and segment experience (K-12 parents, working professionals, study abroad) — these do not transfer freely",
      },
      {
        group: "Signals we treat as red flags",
        items:
          "A board claimed but never taught, missing TET or NET where the role requires it, EdTech sales numbers quoted at team level rather than individual, and gaps across session boundaries with no explanation",
      },
    ],
    challenges: [
      {
        title: "The academic calendar is the real deadline",
        description:
          "A subject teacher hired in July is a lost term. Academic mandates are planned to close before the session begins, with demo classes scheduled in batches rather than one at a time, and a buffer for the candidates who accept and then stay where they are.",
      },
      {
        title: "EdTech sales attrition is the highest we handle",
        description:
          "Inside sales floors in EdTech routinely see 60%+ annual attrition and heavy drop-off in the first 30 days. These are run as continuous bulk hiring with weekly drives, and we measure ourselves on 30-day and 90-day survival rather than on offers released.",
      },
      {
        title: "Salary bands lag the general market",
        description:
          "Teaching salaries, particularly outside premium chains, sit well below what the same qualification earns in corporate roles, so the pool is defined by people who actively want to teach. We position on that rather than pretending the band is competitive, and we tell clients when a band simply cannot be filled.",
      },
      {
        title: "Credential verification is routinely skipped and routinely fails",
        description:
          "Degree, B.Ed and TET validity, and in higher education UGC eligibility, are verified at screening. Discovering a missing credential after a teacher is in front of a class is an institutional risk, not an administrative one.",
      },
    ],
    talentHubs: [
      {
        city: "Delhi NCR",
        slug: "delhi-ncr",
        note: "Largest pool of CBSE and IB faculty, coaching and test-prep talent, plus most EdTech head offices in Gurugram and Noida.",
      },
      {
        city: "Bengaluru",
        slug: "bengaluru",
        note: "EdTech product, content and inside-sales talent at scale, and a deep international-school faculty market.",
      },
      {
        city: "Mumbai & Pune",
        slug: "pune",
        note: "Strong higher-education and IB faculty markets; Pune in particular for university and skilling-sector hiring.",
      },
      {
        city: "Hyderabad & Chennai",
        slug: "hyderabad",
        note: "Test-prep and engineering-entrance coaching depth, and a large pool of science and maths faculty.",
      },
      {
        city: "Kota, Jaipur & Indore",
        slug: "jaipur",
        note: "Coaching and test-prep heartland — the main supply market for rank-producing faculty, who relocate readily for the right band.",
      },
      {
        city: "Kochi & Lucknow",
        slug: "lucknow",
        note: "Growing private school and skilling markets; local-language and regional-board experience is usually required.",
      },
    ],
    hiringNotes: [
      { label: "Typical notice period", value: "30 days for commercial roles; academic staff usually move only at session boundaries" },
      { label: "Hiring window", value: "February–May for most Indian boards; plan faculty mandates inside it" },
      { label: "Realistic time to offer", value: "1–2 weeks for counsellors and inside sales, 3–6 weeks for faculty and academic leadership" },
      { label: "Attrition", value: "60%+ on EdTech inside-sales floors; under 15% for school faculty mid-session" },
      { label: "Expected hike", value: "15–25% in academic roles; EdTech sales moves are driven by incentive structure more than fixed pay" },
    ],
    faqs: [
      {
        question: "Can you hire a full teaching faculty before the session starts?",
        answer:
          "Yes, provided we start inside the hiring window. We work backwards from your session start date, batch demo classes so your academic head assesses several candidates in a day rather than across weeks, and build in a buffer for the candidates who accept and then stay put — which happens more in teaching than in any other sector we handle.",
      },
      {
        question: "Do you verify B.Ed, TET and NET credentials?",
        answer:
          "Yes, at screening rather than after selection. Degree and B.Ed validity, CTET or state TET where the role requires it, and NET/SET or PhD status for higher-education roles are confirmed before a profile reaches you, along with the specific boards and grades the candidate has actually taught.",
      },
      {
        question: "Can you run high-volume EdTech inside sales hiring?",
        answer:
          "Yes, and it has to be run as a continuous pipeline rather than a set of vacancies. We hold weekly drives, screen on individual conversion numbers and call discipline rather than team figures, and report on 30-day and 90-day retention — because offers released is a meaningless metric on a floor with 60% attrition.",
      },
      {
        question: "Do you recruit for curriculum, content and instructional design?",
        answer:
          "Yes. Curriculum designers, subject-matter experts, instructional designers, assessment developers and video faculty are screened on a work sample as well as an interview, because content ability simply does not show up on a CV. For video faculty we also assess on-camera delivery before submission.",
      },
    ],
    related: ["bpo-shared-services-recruitment", "it-software-recruitment", "healthcare-pharma-recruitment"],
  },
  {
    slug: "real-estate-infra-recruitment",
    icon: "building",
    name: "Real Estate & Infrastructure",
    label: "real estate and infrastructure",
    h1: "Real Estate Recruitment Agency in India — Projects, Sales, Civil & Procurement Hiring",
    metaTitle: "Real Estate Recruitment Agency India | Construction & Infra Hiring",
    metaDescription:
      "Real estate and infrastructure recruitment agency in India. Project and site engineers, planning and QS, civil and MEP, liaison and approvals, channel and direct sales, and facility management roles.",
    primaryKeyword: "real estate recruitment agency",
    intro: [
      "Real estate hiring is project-site hiring. The same developer may need a planning engineer in Gurugram, a site engineer in Pune and a liaison manager in Bengaluru in the same quarter, each requiring local knowledge the others do not have. Liaison and approvals in particular is the least transferable role in Indian business — the relationships and the process knowledge are municipal, not national.",
      "We recruit across residential and commercial developers, infrastructure and EPC contractors, co-working and managed office operators, REITs and investment platforms, facility management companies, and real estate consultancies and broking firms. Each has a different centre of gravity: a developer's cost is in projects and sales, an EPC contractor's is in planning, billing and claims, and an FM company's is in volume site staffing.",
      "On the sales side, the screen is numbers and inventory type. A candidate who sold affordable housing in a tier-2 city has not done the job of a luxury residential closer in South Mumbai, even though both CVs will say 'real estate sales'. We screen on ticket size, inventory sold, source mix (channel partner versus direct versus digital leads) and personal closure numbers.",
    ],
    rolesByFunction: [
      {
        label: "Projects & execution",
        roles:
          "Project managers, site and execution engineers (civil, structural), construction managers, MEP engineers, finishing and interiors execution",
      },
      {
        label: "Planning, QS & contracts",
        roles:
          "Planning engineers (Primavera, MS Project), quantity surveyors, billing and RA bill engineers, contracts and claims managers, tendering",
      },
      {
        label: "Design & technical",
        roles:
          "Architects, structural and MEP design engineers, BIM modellers and coordinators, landscape and urban design, sustainability and IGBC specialists",
      },
      {
        label: "Liaison, approvals & legal",
        roles:
          "Liaison managers for municipal and statutory approvals, RERA compliance, title and land acquisition, legal and documentation",
      },
      {
        label: "Sales & marketing",
        roles:
          "Direct and channel sales managers, CP relationship managers, pre-sales and CRM, digital and performance marketing, NRI sales desks",
      },
      {
        label: "Procurement & stores",
        roles:
          "Procurement and purchase managers, vendor development, site stores, material planning and reconciliation",
      },
      {
        label: "Facility & asset management",
        roles:
          "Facility managers, technical services (HVAC, electrical, plumbing), soft services, housekeeping and security supervision, property and lease management",
      },
      {
        label: "Leadership",
        roles:
          "Project heads and COOs, heads of sales, business heads for a city or region, CFO and CXO mandates (via executive search)",
      },
    ],
    skills: [
      {
        group: "What we verify on the project side",
        items:
          "Built-up area and project value personally executed, project type (high-rise, villa, commercial, industrial, roads, metro), tooling (AutoCAD, Revit, Primavera, SAP), and billing or claims value handled",
      },
      {
        group: "What we verify on the sales side",
        items:
          "Ticket size and inventory type sold, personal closure numbers for three years, channel-partner network held in the specific micro-market, and RERA and documentation familiarity",
      },
      {
        group: "Certifications and qualifications",
        items:
          "BE/B.Tech Civil and M.Tech Structures, B.Arch and COA registration, PMP for project managers, IGBC AP and LEED for green building, NEBOSH and IOSH for site safety, Primavera certification for planners",
      },
    ],
    challenges: [
      {
        title: "Liaison and approvals talent is municipal, not national",
        description:
          "A liaison manager who clears files in Gurugram cannot do the same in Pune. These are city-specific hires sourced from a small known pool, and any CV claiming multi-city liaison depth gets tested hard before it reaches you.",
      },
      {
        title: "Site postings are temporary and candidates know it",
        description:
          "A site closes and the team disperses. Candidates price that instability in, so offers for site-based roles must either beat the market or come with a clear onward path. We say so at briefing rather than running a search that stalls at the offer stage.",
      },
      {
        title: "Sales CVs inflate more than any other sector we handle",
        description:
          "Team numbers get quoted as personal numbers routinely. We ask for monthly closures, ticket size and source mix for the last three years, and we check the claim against the inventory the employer actually had to sell.",
      },
      {
        title: "Project cash-flow cycles disrupt hiring mid-search",
        description:
          "Approvals, funding or a RERA issue can freeze a project and a mandate with it. We plan around it by keeping the shortlist warm, and we are direct with clients about the reputational cost of offers withdrawn after acceptance.",
      },
    ],
    talentHubs: [
      {
        city: "Delhi NCR",
        slug: "delhi-ncr",
        note: "Largest developer and commercial real estate market in the north; the deepest pool for projects, liaison and luxury residential sales.",
      },
      {
        city: "Mumbai",
        slug: "mumbai",
        note: "Redevelopment and high-rise expertise, REIT and investment-side talent, and the highest ticket-size sales experience in the country.",
      },
      {
        city: "Bengaluru",
        slug: "bengaluru",
        note: "Commercial office and tech-park development, co-working operators, and strong facility and asset management talent.",
      },
      {
        city: "Pune & Hyderabad",
        slug: "hyderabad",
        note: "Fast residential and commercial expansion; good availability of execution and planning engineers at competitive bands.",
      },
      {
        city: "Chennai & Kochi",
        slug: "chennai",
        note: "Infrastructure and EPC contracting depth, plus a strong structural design and MEP pool.",
      },
      {
        city: "Jaipur, Lucknow & Indore",
        slug: "lucknow",
        note: "Tier-2 residential growth markets where sales teams and site engineers must be hired locally.",
      },
    ],
    hiringNotes: [
      { label: "Typical notice period", value: "30 days at site level, 60–90 days for corporate, planning and leadership roles" },
      { label: "Realistic time to offer", value: "2–3 weeks for site and sales roles, 5–8 weeks for liaison and project leadership" },
      { label: "Attrition", value: "25–35% in sales; moderate on the project side but spikes at project completion" },
      { label: "Expected hike", value: "20–30%; site allowance, accommodation and incentive structure often decide acceptance" },
      { label: "Verification", value: "Project value and personal sales numbers checked against the employer's actual portfolio" },
    ],
    faqs: [
      {
        question: "Can you hire a complete project team for a new site?",
        answer:
          "Yes. We sequence it the way sites actually staff up: project manager and planning first, then execution and QS, then MEP, finishing and stores timed to the construction schedule. Site-based roles are sourced from the surrounding region wherever possible, since candidates already living near the site are far more likely to stay through the project.",
      },
      {
        question: "Do you recruit liaison and approvals managers?",
        answer:
          "Yes, but strictly city by city. Liaison capability is tied to a specific municipal and statutory ecosystem, so we source within the city where the project sits and verify which authorities and which categories of approval the candidate has personally handled. A pan-India liaison claim is a signal to probe, not a credential.",
      },
      {
        question: "How do you verify real estate sales performance?",
        answer:
          "We ask for monthly closure numbers, average ticket size, inventory type and the split between channel-partner, direct and digital leads across the last three years, then sanity-check it against the inventory their employer actually had on sale. Team numbers presented as personal numbers is the most common issue in this sector and it is flagged on the shortlist.",
      },
      {
        question: "Can you supply facility management and site support staff at volume?",
        answer:
          "Yes. Technical services, housekeeping, security supervision and soft services staff are hired at volume, usually on our payroll as contract staffing with PF, ESIC and statutory compliance handled by us, so the principal-employer exposure is covered and documented monthly.",
      },
    ],
    related: ["manufacturing-recruitment", "hospitality-travel-recruitment", "bfsi-recruitment"],
  },
  {
    slug: "hospitality-travel-recruitment",
    icon: "cup",
    name: "Hospitality & Travel",
    label: "hospitality and travel",
    h1: "Hospitality Recruitment Agency in India — Hotels, F&B, QSR & Travel Hiring",
    metaTitle: "Hospitality Recruitment Agency India | Hotel, F&B & Travel Hiring",
    metaDescription:
      "Hospitality and travel recruitment agency in India. Front office, housekeeping, F&B service and production, chefs, QSR store teams, revenue and sales, and travel and aviation ground roles.",
    primaryKeyword: "hospitality recruitment agency India",
    intro: [
      "Hospitality hiring is judged on guest-facing behaviour as much as on skill, and behaviour does not survive a CV. Grooming, language, composure under pressure and service instinct are visible in a ten-minute conversation and invisible on paper, which is why every hospitality profile we submit has been spoken to, not just read.",
      "The practice covers hotels and resorts across star categories, standalone restaurants and bars, QSR and cloud-kitchen chains, catering and institutional food services, clubs, travel agencies and OTAs, and aviation ground and airport services. Property category changes the screen entirely: a five-star front office hire is assessed on brand standards and PMS depth, a QSR store manager on throughput, order accuracy and shift scheduling.",
      "Property location also dictates the pool. Resort and leisure destinations — Goa, Udaipur, Jaipur, Kerala, the hills — cannot be staffed locally at scale, so hospitality hiring there always involves relocation with accommodation, and we screen accordingly rather than discovering it at offer stage.",
    ],
    rolesByFunction: [
      {
        label: "Rooms division",
        roles:
          "Front office managers and executives, guest relations, reservations, housekeeping executives and managers, laundry and linen",
      },
      {
        label: "Food & beverage service",
        roles:
          "Restaurant and outlet managers, F&B service captains and stewards, bar managers and bartenders, banquet operations, room service",
      },
      {
        label: "Kitchen & production",
        roles:
          "Executive chefs, sous chefs, chef de partie and commis by cuisine, bakery and pastry, kitchen stewarding, central kitchen production",
      },
      {
        label: "QSR & cloud kitchen",
        roles:
          "Store and restaurant general managers, shift managers, cloud-kitchen operations, area and cluster managers, delivery operations",
      },
      {
        label: "Sales, revenue & marketing",
        roles:
          "Hotel and corporate sales, MICE and banquet sales, revenue managers, e-commerce and OTA distribution, digital and brand marketing",
      },
      {
        label: "Travel & tourism",
        roles:
          "Travel consultants and holiday advisors, visa and documentation, corporate travel desks, destination and operations managers, OTA support",
      },
      {
        label: "Aviation & airport services",
        roles:
          "Ground staff and customer service agents, ramp and baggage operations, lounge services, cargo handling, airport retail and F&B",
      },
      {
        label: "Leadership & support",
        roles:
          "General managers, hotel managers, cluster GMs, directors of operations, engineering and maintenance, hotel HR and training (via executive search for senior roles)",
      },
    ],
    skills: [
      {
        group: "What we assess in conversation",
        items:
          "Grooming and presentation, spoken English and a second language, guest-complaint handling with a real example, composure under pressure, and willingness to work split and rotational shifts",
      },
      {
        group: "Systems and credentials",
        items:
          "PMS platforms (Opera, IDS), POS systems, GDS for travel roles (Amadeus, Galileo, Sabre), IATA certification, HACCP and FSSAI food-safety training, hotel management diploma or degree from a recognised institute",
      },
      {
        group: "Signals we treat as red flags",
        items:
          "Star category claimed but never worked in, cuisine specialisation that does not match the kitchens on the CV, and relocation agreed without asking about accommodation",
      },
    ],
    challenges: [
      {
        title: "Resort and leisure properties cannot be staffed locally",
        description:
          "A property in Goa, Udaipur or Munnar needs people who will live on or near site. That means accommodation, food and a relocation conversation held honestly at screening. We source from hotel management institutes and from candidates already working in leisure destinations, who have accepted that life.",
      },
      {
        title: "Shift patterns drive most of the attrition",
        description:
          "Split shifts, late closes and six-day weeks are the reality, and candidates who have only worked corporate hours leave quickly. We screen explicitly on shift history, which is a better predictor of retention in this sector than any skill test.",
      },
      {
        title: "Seasonality means headcount must flex",
        description:
          "Peak season, wedding season and conference calendars need 30–50% more staff for a defined window. We run those as contract staffing on our payroll so the property is not carrying off-season cost.",
      },
      {
        title: "Chef hiring is cuisine-specific and reference-driven",
        description:
          "A continental sous chef is not an Indian sous chef. Chef mandates are run on cuisine specialisation, kitchen brigade size and a trial or tasting, plus references from previous kitchens — the only check in this sector that reliably predicts performance.",
      },
    ],
    talentHubs: [
      {
        city: "Delhi NCR",
        slug: "delhi-ncr",
        note: "Largest market for luxury hotels, banqueting and corporate travel; deep front office and F&B pool across Delhi, Gurugram and Aerocity.",
      },
      {
        city: "Mumbai",
        slug: "mumbai",
        note: "Five-star and luxury depth, standalone fine dining, OTA and travel head offices, and the strongest revenue-management talent.",
      },
      {
        city: "Bengaluru & Hyderabad",
        slug: "bengaluru",
        note: "Business hotels, QSR and cloud-kitchen expansion, and the fastest-growing restaurant markets in the country.",
      },
      {
        city: "Goa, Jaipur & Udaipur",
        slug: "jaipur",
        note: "Leisure and resort markets — staffed almost entirely through relocation with accommodation provided.",
      },
      {
        city: "Kochi & Kerala",
        slug: "kochi",
        note: "Major supply market for hospitality talent nationally and for cruise and overseas placements; strong institute pipeline.",
      },
      {
        city: "Chennai & Coimbatore",
        slug: "coimbatore",
        note: "Business hotels and a large catering and institutional food services market.",
      },
    ],
    hiringNotes: [
      { label: "Typical notice period", value: "15–30 days at operational level, 60 days for GMs and department heads" },
      { label: "Realistic time to offer", value: "Under a week for operational roles, 3–6 weeks for chefs and department heads" },
      { label: "Attrition", value: "40–60% at operational level; highest in QSR and delivery-led formats" },
      { label: "Expected hike", value: "15–25%; accommodation, meals and tips materially change the real offer value" },
      { label: "Peak staffing", value: "Season and wedding peaks run as contract staffing on our payroll" },
    ],
    faqs: [
      {
        question: "Can you staff a new hotel or restaurant before it opens?",
        answer:
          "Yes — pre-opening staffing is a specific skill and we plan it backwards from the soft-launch date. Department heads come first so they can select their own teams, then service and kitchen staff timed to training and trial service. For resort locations we build the accommodation and relocation conversation into screening from day one.",
      },
      {
        question: "Do you recruit chefs by cuisine?",
        answer:
          "Yes. Chef mandates are run on cuisine specialisation, brigade size handled, covers per service and kitchen type, with a trial or tasting arranged as part of selection and references taken from previous kitchens. A generic 'chef' search in this sector produces nothing useful.",
      },
      {
        question: "Can you staff a resort in a location with no local talent pool?",
        answer:
          "Yes, and it is a large part of what we do in this sector. We source from hotel management institutes and from candidates already working in leisure destinations, and we are explicit at screening about accommodation, food, distance from the nearest town and the realities of the posting — which is what prevents the joining drop-off that otherwise plagues resort hiring.",
      },
      {
        question: "Do you handle travel, OTA and airport ground roles?",
        answer:
          "Yes. Travel consultants, visa and documentation teams, corporate travel desks, OTA support and airport ground and lounge services are all part of the practice. GDS proficiency, IATA certification and rotational shift willingness are verified at screening, and airport roles are screened additionally for background-check and badging eligibility.",
      },
    ],
    related: ["retail-ecommerce-recruitment", "bpo-shared-services-recruitment", "real-estate-infra-recruitment"],
  },
  {
    slug: "automotive-recruitment",
    icon: "car",
    name: "Automotive",
    label: "automotive",
    h1: "Automotive Recruitment Agency in India — Design, Production, EV & Aftersales Hiring",
    metaTitle: "Automotive Recruitment Agency India | OEM, Auto Component & EV Hiring",
    metaDescription:
      "Automotive recruitment agency in India for OEMs, auto component makers and EV companies. Design and CAE, production and quality, PPAP and IATF, battery and powertrain, and dealership aftersales roles.",
    primaryKeyword: "automotive recruitment agency India",
    intro: [
      "Automotive is the one sector in India where a candidate's employer tells you most of what you need to know. The OEM, tier-1 and tier-2 tiers operate to visibly different standards of process discipline, and a tier-2 quality engineer stepping into a tier-1 role will usually struggle with the documentation rigour that an IATF audit demands. We screen on tier as well as on skill, because it predicts fit better than years of experience.",
      "The practice spans OEMs (passenger, commercial, two-wheeler and tractor), auto components, EV and battery companies, charging infrastructure, and the dealership and aftersales network. The EV transition has split the talent market in two: battery, BMS, motor and power-electronics skills command a clear premium and are available in very small numbers, while traditional engine and transmission experience is plentiful and repricing downward.",
      "Dealership and aftersales hiring runs on entirely separate logic — high volume, modest bands, local catchment, service-advisor and technician skills that come from ITI and OEM training schools rather than from engineering colleges. We run that as a volume practice, usually city by city, distinct from the OEM and component search work.",
    ],
    rolesByFunction: [
      {
        label: "Design & development",
        roles:
          "Design engineers (CATIA, NX, Creo), CAE and simulation (Ansys, Hypermesh, Abaqus), vehicle integration, NVH, durability and testing",
      },
      {
        label: "Production & manufacturing",
        roles:
          "Production engineers and managers, assembly line in-charge, press shop, weld shop, paint shop and machine shop, industrial engineering",
      },
      {
        label: "Quality & customer quality",
        roles:
          "QA and QC engineers, APQP and PPAP engineers, supplier quality, customer quality and warranty analysis, metrology and CMM",
      },
      {
        label: "EV, battery & powertrain",
        roles:
          "Battery pack and BMS engineers, cell testing, motor and power electronics, charging infrastructure, powertrain calibration, functional safety (ISO 26262)",
      },
      {
        label: "Sourcing & supply chain",
        roles:
          "Sourcing and vendor development engineers, localisation, cost engineering and should-costing, logistics and production planning",
      },
      {
        label: "Maintenance & tooling",
        roles:
          "Mechanical, electrical and robotics maintenance, tool room and die maintenance, CNC programming, utilities and automation",
      },
      {
        label: "Sales, dealership & aftersales",
        roles:
          "Area sales and dealer development managers, service advisors and managers, workshop and body-shop technicians, spare parts and warranty, customer care",
      },
      {
        label: "Leadership",
        roles:
          "Plant heads, heads of quality and R&D, programme managers, aftersales and network heads (via executive search)",
      },
    ],
    skills: [
      {
        group: "What we verify technically",
        items:
          "Tier of the employer (OEM, tier-1, tier-2), vehicle or component programmes worked on end to end, CAD and CAE tools used hands-on, line volumes and cycle time owned, and PPM and warranty numbers personally responsible for",
      },
      {
        group: "Standards and certifications",
        items:
          "IATF 16949, APQP, PPAP, FMEA, MSA and SPC as core quality tools, ISO 26262 functional safety and AUTOSAR for EV and electronics, Six Sigma Green and Black Belt, ARAI and ICAT homologation exposure",
      },
      {
        group: "Signals we treat as red flags",
        items:
          "EV experience that is a training course rather than a programme, quality tools listed without an audit ever faced, and a tier jump of two levels in one move",
      },
    ],
    challenges: [
      {
        title: "EV skills exist in numbers too small for the demand",
        description:
          "Battery pack, BMS, motor and power-electronics engineers with real programme experience number in the low thousands nationally and every OEM and startup is chasing the same people. These mandates are headhunted, carry a 30–50% premium and take six weeks or more; we say so at briefing rather than after a month of silence.",
      },
      {
        title: "Plant locations demand relocation to industrial towns",
        description:
          "Manesar, Chakan, Pithampur, Hosur, Sanand, Pantnagar — automotive plants sit outside cities, and relocation is a family decision. We screen on it before skill fit, which is the single biggest factor in whether an automotive offer is accepted.",
      },
      {
        title: "Programme cycles make demand spiky",
        description:
          "A new model programme needs design and development headcount for 18 to 24 months and then much less. Contract and contract-to-hire engagements let that demand be met without carrying the cost afterwards, and a large share of our automotive design work runs that way.",
      },
      {
        title: "Dealership hiring is a volume problem, not a search problem",
        description:
          "Service advisors, technicians and sales consultants are needed across dozens of outlets with high churn. That is ITI and OEM-training-school sourcing with local drives, priced per position, and run as a standing pipeline rather than as individual vacancies.",
      },
    ],
    talentHubs: [
      {
        city: "Delhi NCR & Manesar belt",
        slug: "delhi-ncr",
        note: "Largest OEM and component cluster in the north across Manesar, Gurugram, Faridabad, Bhiwadi and Neemrana.",
      },
      {
        city: "Pune & Chakan",
        slug: "pune",
        note: "Deepest design, CAE and quality talent in the country, plus commercial vehicle and tractor OEM presence.",
      },
      {
        city: "Chennai & Hosur",
        slug: "chennai",
        note: "India's largest auto manufacturing base — passenger, two-wheeler and commercial vehicle OEMs with a very deep production pool.",
      },
      {
        city: "Bengaluru",
        slug: "bengaluru",
        note: "EV startups, battery and power electronics, automotive software and ADAS — the centre of the EV talent market.",
      },
      {
        city: "Ahmedabad & Sanand",
        slug: "ahmedabad",
        note: "Growing OEM and component base in Gujarat with competitive salary bands and good staff-level availability.",
      },
      {
        city: "Indore & Pithampur",
        slug: "indore",
        note: "Central-India commercial vehicle and component belt; usually the most cost-effective plant hiring market.",
      },
    ],
    hiringNotes: [
      { label: "Typical notice period", value: "30 days at staff level, 60–90 days for managers and OEM-side roles" },
      { label: "Realistic time to offer", value: "2–3 weeks for production and quality, 5–8 weeks for EV and CAE specialists" },
      { label: "Attrition", value: "Low at engineer level (8–14%); very high in dealership service and sales roles" },
      { label: "Expected hike", value: "15–25% in traditional roles; 30–50% for genuine EV and battery experience" },
      { label: "Engagement model", value: "Contract or contract-to-hire for programme-based design and development ramp-ups" },
    ],
    faqs: [
      {
        question: "Can you find EV, battery and BMS engineers?",
        answer:
          "Yes, as a headhunt rather than a search. The pool with real programme experience is small and concentrated, mostly in Bengaluru, Pune and Chennai, so we map the OEMs, startups and cell and pack manufacturers, approach engineers directly and verify that their exposure is programme-level rather than a certification. Expect four to six weeks and a premium band.",
      },
      {
        question: "Do you screen for IATF and PPAP documentation experience?",
        answer:
          "Yes, and we check whether the candidate personally prepared and defended the documentation rather than working in a certified plant. For supplier quality and customer quality roles we also ask which customer audits they faced and what observations came out — that conversation separates genuine process discipline from job-title experience very quickly.",
      },
      {
        question: "Can you hire for dealership service and sales networks?",
        answer:
          "Yes, as a volume practice. Service advisors, workshop and body-shop technicians, spare parts staff and sales consultants are sourced through ITI institutes, OEM training schools and local drives, priced per position, and run as a standing city-wise pipeline because the churn in this layer is continuous.",
      },
      {
        question: "Do you supply contract engineers for a model programme?",
        answer:
          "Yes. Design, CAE and testing ramp-ups for an 18-to-24-month programme are best run as contract or contract-to-hire engagements with the engineers on our payroll and full statutory compliance handled by us, so the headcount releases cleanly when the programme closes.",
      },
    ],
    related: ["manufacturing-recruitment", "logistics-supply-chain-recruitment", "it-software-recruitment"],
  },
  {
    slug: "bpo-shared-services-recruitment",
    icon: "headset",
    name: "BPO & Shared Services",
    label: "BPO and shared services",
    h1: "BPO Recruitment Agency in India — Voice, Non-Voice, F&A and HRO Hiring at Volume",
    metaTitle: "BPO Recruitment Agency India | Voice, Non-Voice & GCC Hiring",
    metaDescription:
      "BPO and shared services recruitment agency in India. Voice and non-voice agents, customer support, F&A and record-to-report, HRO, procurement and GCC transition roles — hired at volume with low drop-off.",
    primaryKeyword: "BPO recruitment agency India",
    intro: [
      "BPO hiring is a throughput business, and the metric that matters is not offers released but how many people are still on the floor at day 90. A vendor that delivers 100 offers and 40 survivors has cost the client more than one that delivers 60 offers and 50 survivors. We report on 30-day and 90-day retention on every volume mandate, because that is the number operations actually cares about.",
      "The practice covers third-party BPO and BPM providers, captive and global capability centres, shared services for finance, HR and procurement, and customer-experience operations for e-commerce, BFSI and telecom clients. Volume agent hiring and specialist GCC hiring are completely different exercises: one is a sourcing and assessment pipeline run in batches, the other is a targeted search for process and domain expertise.",
      "For voice roles we assess communication directly, with a scored spoken-English and comprehension evaluation, plus the local-language ability the process actually needs. For non-voice and back-office roles we assess typing speed and accuracy, comprehension and tool familiarity. Neither can be inferred from a CV, so neither is.",
    ],
    rolesByFunction: [
      {
        label: "Voice processes",
        roles:
          "Inbound and outbound customer service, tele-sales and lead generation, collections calling, technical support voice, international and domestic processes",
      },
      {
        label: "Non-voice & digital",
        roles:
          "Chat and email support, social media support, back-office and data processing, content moderation, order management and claims processing",
      },
      {
        label: "Finance & accounting (F&A)",
        roles:
          "Accounts payable and receivable, record to report, general ledger and reconciliations, fixed assets, payroll processing, FP&A analysts",
      },
      {
        label: "HR outsourcing (HRO)",
        roles:
          "HR shared services, onboarding and employee lifecycle, payroll operations, HRIS support, recruitment process coordinators",
      },
      {
        label: "Procurement & supply chain services",
        roles:
          "Source to pay, procurement operations, vendor master management, contract administration, spend analytics",
      },
      {
        label: "Quality, training & workforce management",
        roles:
          "Quality analysts and managers, process trainers and communication trainers, workforce management and real-time analysts, MIS and reporting",
      },
      {
        label: "Transitions & process excellence",
        roles:
          "Transition managers, process excellence and Lean Six Sigma, automation and RPA analysts, SOP and documentation specialists",
      },
      {
        label: "Operations leadership",
        roles:
          "Team leaders, assistant managers, operations and delivery managers, site and centre heads, GCC leadership (via executive search)",
      },
    ],
    skills: [
      {
        group: "What we assess, not infer",
        items:
          "Scored spoken English and comprehension for voice roles, typing speed and accuracy for non-voice, local-language fluency where the process needs it, and rotational and night-shift willingness confirmed explicitly",
      },
      {
        group: "What matters for specialist roles",
        items:
          "ERP depth (SAP FICO, Oracle, Workday), process exposure at sub-process level rather than function level, Lean Six Sigma certification for process excellence, RPA tooling (UiPath, Automation Anywhere), and transition or migration experience",
      },
      {
        group: "Signals we treat as red flags",
        items:
          "Night-shift willingness agreed at interview and withdrawn at joining, process claimed at function level only, and a pattern of 4–6 month tenures across call centres",
      },
    ],
    challenges: [
      {
        title: "Offer-to-join drop-off is the real problem",
        description:
          "Volume BPO hiring sees 30–40% of candidates not turn up on day one, because they hold several offers at once. We over-pipeline deliberately, keep daily contact between offer and joining, and report the drop-off openly instead of quietly re-filling and billing twice.",
      },
      {
        title: "Night shifts and transport define the catchment",
        description:
          "International processes mean night shifts, which means transport, which means candidates must live inside the cab radius. That constraint narrows the real pool far more than any skill requirement, so we source by pin code against your transport routes.",
      },
      {
        title: "Communication cannot be screened on paper",
        description:
          "CVs tell you nothing about spoken English. Every voice candidate we submit has been scored on a structured communication assessment, which is why our client-side rejection rate at the voice round is a fraction of portal-sourced applicants.",
      },
      {
        title: "GCC specialist hiring competes with product companies",
        description:
          "A shared-services F&A or analytics specialist in Bengaluru or Hyderabad is being courted by product companies at higher bands. We position the GCC proposition properly — scope, global exposure, stability — rather than running a search that loses every offer on CTC.",
      },
    ],
    talentHubs: [
      {
        city: "Delhi NCR",
        slug: "delhi-ncr",
        note: "Largest domestic and international voice market in the country, with very deep availability across Noida, Gurugram and Ghaziabad.",
      },
      {
        city: "Bengaluru",
        slug: "bengaluru",
        note: "GCC and shared-services capital — F&A, HRO, procurement and analytics depth no other city matches.",
      },
      {
        city: "Hyderabad",
        slug: "hyderabad",
        note: "Fast-growing GCC market with strong non-voice, F&A and analytics supply and better retention than NCR.",
      },
      {
        city: "Pune",
        slug: "pune",
        note: "Strong international voice and non-voice market plus engineering and F&A shared services.",
      },
      {
        city: "Chennai & Coimbatore",
        slug: "chennai",
        note: "Large back-office and BFSI operations base; Coimbatore in particular offers low attrition at lower cost.",
      },
      {
        city: "Kolkata, Indore & Kochi",
        slug: "indore",
        note: "Cost-effective domestic voice and non-voice markets with growing capacity and genuine local-language depth.",
      },
    ],
    hiringNotes: [
      { label: "Typical notice period", value: "Immediate to 30 days at agent level; 30–60 days for team leaders and specialists" },
      { label: "Realistic time to offer", value: "2–5 days for volume agent roles, 3–5 weeks for F&A, HRO and process-excellence specialists" },
      { label: "Attrition", value: "40–70% a year at agent level — plan rolling batches, not one-off replacement hiring" },
      { label: "Offer-to-join drop", value: "30–40% market-wide; we over-pipeline and maintain daily contact to hold ours lower" },
      { label: "Reporting", value: "Every volume mandate reported on 30-day and 90-day retention, not just offers released" },
    ],
    faqs: [
      {
        question: "Can you hire 100+ agents for a new process?",
        answer:
          "Yes. Volume mandates are run as dated batches against your training calendar, with walk-in drives and scored communication assessments in the catchment covered by your transport routes. We deliberately over-pipeline for the 30–40% offer-to-join drop the sector sees, and we agree the batch sizes and dates with your operations and training teams before sourcing starts.",
      },
      {
        question: "How do you assess communication for voice roles?",
        answer:
          "With a structured, scored assessment covering spoken fluency, pronunciation, comprehension and listening, plus the specific local language the process needs. Scores are shared with the shortlist so your operations team can calibrate against their own benchmark. For premium international processes we can run your own assessment tool before submission.",
      },
      {
        question: "Do you recruit for GCC and shared services, not just third-party BPO?",
        answer:
          "Yes. F&A and record-to-report, HRO and payroll operations, procurement services, process excellence, RPA and transition roles are a distinct part of the practice, screened on sub-process depth and ERP exposure rather than on years. Centre leadership and transition mandates run through our executive search desk.",
      },
      {
        question: "How do you reduce the day-one no-show rate?",
        answer:
          "By treating the gap between offer and joining as part of the mandate. We maintain daily contact, confirm transport and shift logistics, flag candidates holding competing offers, and keep a warm standby list for each batch. We report the actual drop-off rather than silently re-filling, because the only number worth optimising is how many people are on the floor on day 90.",
      },
    ],
    related: ["it-software-recruitment", "bfsi-recruitment", "retail-ecommerce-recruitment"],
  },
];

export const industryBySlug = new Map(
  industryPages.map((industry) => [industry.slug, industry]),
);
