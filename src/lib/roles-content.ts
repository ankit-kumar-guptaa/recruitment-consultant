/**
 * Role / designation hiring pages — /hire/<slug>.
 *
 * Batch 2 of docs/SEO-PAGE-PLAN.md. These carry the highest commercial intent
 * on the site: somebody searching "hire backend developer India" is an employer
 * with an open requisition, not a jobseeker.
 *
 * Every record is written role-first — what the person actually does, the
 * checklist we screen against, indicative salary bands by experience, a
 * realistic interview structure, and the specific reasons that role stays
 * open. Two roles in the same family (backend vs full stack, production vs
 * quality engineer) share a sector and almost no page copy, which is what
 * keeps this set clear of the thin-content gates in the plan.
 *
 * Salary bands are indicative metro ranges for 2026 and are labelled as such
 * on the page. They are a negotiating frame, not a quote.
 */

export type RolePage = {
  slug: string;
  /** Icon key from components/ui/Icon.tsx */
  icon: string;
  /** Role name as a hiring manager would write it in a requisition. */
  title: string;
  group: "Technology" | "Business" | "Industrial & Finance";
  h1: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  intro: string[];
  /** The JD outline — what this person owns day to day. */
  responsibilities: string[];
  /** What we screen on before a profile is submitted. */
  mustHave: { group: string; items: string }[];
  /** Indicative metro bands. Tier-2 runs materially lower; stated on the page. */
  salaryBands: { experience: string; band: string; note: string }[];
  /** A structure that actually selects, rather than four rounds of the same thing. */
  interview: { stage: string; detail: string }[];
  /** Why the role stays open. */
  pitfalls: { title: string; description: string }[];
  hiringNotes: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  /** Sibling role slugs. */
  related: string[];
  /** Industry practice slugs that hire this role most. */
  industries: string[];
};

export const rolePages: RolePage[] = [
  {
    slug: "backend-developer",
    icon: "chip",
    title: "Backend Developer",
    group: "Technology",
    h1: "Hire Backend Developers in India — Screened, Shortlisted in 48 Hours",
    metaTitle: "Hire Backend Developers in India | Java, Node, Python, Go",
    metaDescription:
      "Hire backend developers in India. Java, Spring Boot, Node.js, Python, Golang and .NET engineers, technically screened on system design and shipped production code. Shortlists in 48 hours.",
    primaryKeyword: "hire backend developer India",
    intro: [
      "A backend hire is the one role where a wrong decision keeps costing you after the person leaves. Their schema choices, their API contracts and their error handling outlive them, and the next engineer inherits all of it. So the screen that matters is not years of experience in a language — it is whether they have owned a service in production and been woken up by it.",
      "We recruit backend engineers across Java and Spring Boot, Node.js and TypeScript, Python, Golang and .NET, for product companies, GCCs, IT services firms and funded startups. The same candidate is a good hire at one and a poor hire at another: a services background gives breadth and client handling, a product background gives depth and ownership, and we screen for whichever one your team actually needs.",
      "Every profile arrives with a screening note covering the stack they have genuinely shipped in versus what the CV claims, the request volume and data size they have worked at, their database and query depth, current and expected CTC, notice period and buyout position, and whether they are live in other processes.",
    ],
    responsibilities: [
      "Design, build and own HTTP or gRPC services and the data models behind them",
      "Write and review production code, with tests, against an agreed definition of done",
      "Model data and tune queries — schema design, indexing, migrations, N+1 elimination",
      "Integrate third-party APIs, payment gateways and internal services with sane retries and idempotency",
      "Instrument services for logging, metrics and tracing, and act on what they show",
      "Carry on-call or support rotation for the services they own",
      "Review peers' pull requests and raise the floor on code quality in the team",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "Production ownership of at least one service, working knowledge of one relational database beyond basic CRUD, REST or gRPC API design, Git workflow discipline, and the ability to explain a bug they fixed end to end",
      },
      {
        group: "Strongly preferred",
        items:
          "Caching (Redis), a message queue (Kafka, RabbitMQ, SQS), containerised deployment, one cloud provider hands-on, and unit plus integration testing as a habit rather than an afterthought",
      },
      {
        group: "What we probe hardest",
        items:
          "System design at the level claimed, concurrency and transaction handling, what they did when a release went wrong, and whether the scale on the CV was theirs or their employer's",
      },
    ],
    salaryBands: [
      { experience: "0–2 years", band: "₹4.5–8 LPA", note: "Fresher to junior; expect to invest in mentoring" },
      { experience: "3–5 years", band: "₹9–18 LPA", note: "The deepest and most competitive part of the market" },
      { experience: "6–9 years", band: "₹18–32 LPA", note: "Senior and lead; design ownership expected" },
      { experience: "10+ years", band: "₹32–55 LPA+", note: "Principal and architect; premium for high-scale product experience" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "Stack depth, a recent project walked through end to end, scale handled, notice period and compensation reality. Profiles that cannot survive this never reach you.",
      },
      {
        stage: "2 · Coding round (60–90 min)",
        detail:
          "A practical task close to your domain, not a puzzle. Reading and extending existing code predicts on-the-job performance far better than an algorithm sprint.",
      },
      {
        stage: "3 · System design (45–60 min)",
        detail:
          "Design a service they would plausibly build on your team, with the trade-offs made explicit. Scaled to the level you are hiring at.",
      },
      {
        stage: "4 · Engineering manager round (45 min)",
        detail:
          "Ownership, how they handle disagreement on technical decisions, incident behaviour, and what they want next. This is where most mis-hires are caught.",
      },
    ],
    pitfalls: [
      {
        title: "Four interview rounds spread over three weeks",
        description:
          "Strong backend candidates are in three processes at once and hold a counter-offer within a day of resigning. Compressing your rounds into one week does more for your hit rate than widening the salary band.",
      },
      {
        title: "A requisition that lists eleven technologies",
        description:
          "A JD asking for Java, Node, Python, Kafka, Kubernetes and React filters out the specialists and attracts the generalists who have touched all six and mastered none. We will push back at briefing on which three actually matter.",
      },
      {
        title: "Screening on a framework instead of fundamentals",
        description:
          "A strong Spring engineer picks up NestJS in a fortnight. Rejecting on framework keyword match shrinks a shortlist for no gain, and it is the commonest reason a backend role stays open for a quarter.",
      },
      {
        title: "No budget line for a notice-period buyout",
        description:
          "Service-company engineers carry 90-day notice and many employers refuse buyouts. If joining date matters, decide the buyout position before the search starts, not after you have selected someone.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "48 working hours for mainstream stacks; 4–6 days for Golang and Rust" },
      { label: "Realistic time to offer", value: "2–4 weeks at mid-level, 5–8 weeks for architects" },
      { label: "Typical notice period", value: "60–90 days in services, 30 days in product companies and startups" },
      { label: "Expected hike", value: "25–40% on a lateral move" },
      { label: "Engagement", value: "Permanent, contract-to-hire, or contract for a defined delivery push" },
    ],
    faqs: [
      {
        question: "How quickly can you share backend developer profiles?",
        answer:
          "For mainstream stacks — Java, Node.js, Python, .NET — a screened shortlist reaches you within 48 working hours of the brief being agreed. Niche stacks such as Golang, Rust, Elixir or Scala are headhunted from a known pool and take four to six days for a first set of three to four genuinely qualified people.",
      },
      {
        question: "Do you run the technical screen or do we?",
        answer:
          "Both, and in that order. We run a structured conversation on stack depth, system design at the stated level, database ability and testing discipline, and send a written note with each CV. Where you want a coding assessment, we schedule yours or run one on your platform before submission so your engineers only interview people worth their time.",
      },
      {
        question: "What does it cost to hire a backend developer through you?",
        answer:
          "A percentage of the candidate's annual CTC, invoiced on joining, with no upfront or retainer fee for standard permanent mandates, and a 90-day replacement guarantee. The percentage depends on the band and the volume of roles; send us the requisition and we will put a number against it before any search starts.",
      },
      {
        question: "Can you hire backend engineers for a remote or hybrid team?",
        answer:
          "Yes, and remote widens the pool to tier-2 cities where the same skill costs 20–30% less. The trade-off is a higher counter-offer risk, because a remote candidate keeps interviewing. We manage that by keeping the process tight and staying in contact through the notice period.",
      },
    ],
    related: ["full-stack-developer", "devops-engineer", "data-engineer"],
    industries: ["it-software-recruitment", "bfsi-recruitment", "retail-ecommerce-recruitment"],
  },
  {
    slug: "frontend-developer",
    icon: "layers",
    title: "Frontend Developer",
    group: "Technology",
    h1: "Hire Frontend Developers in India — React, Angular & TypeScript Engineers",
    metaTitle: "Hire Frontend Developers in India | React, Angular, TypeScript",
    metaDescription:
      "Hire frontend developers in India. React, Next.js, Angular, Vue and TypeScript engineers screened on real component work, accessibility and Core Web Vitals. Shortlists in 48 hours.",
    primaryKeyword: "hire frontend developer India",
    intro: [
      "Frontend is the easiest engineering role to hire badly, because a portfolio looks the same whether the person built the interface or assembled a template. The gap shows up later, in a bundle nobody can shrink, a component tree nobody can extend and an interface that fails on a mid-range Android phone — which is what most of your Indian users are holding.",
      "We screen frontend engineers on what they actually built: component composition and state decisions, how they handled forms and validation, what they did about loading and error states, whether they have ever measured a Core Web Vital, and whether accessibility is something they practise or something they have heard of. React and Next.js dominate the market, with Angular strong in enterprise and BFSI, and Vue in a smaller pocket.",
      "We cover product companies, agencies and D2C brands, and the right profile differs sharply. An agency background brings speed and pixel discipline across many short projects; a product background brings design-system thinking and the patience to maintain code for years. We ask which one you are hiring for before we source.",
    ],
    responsibilities: [
      "Build and maintain interfaces from design files, down to the interaction details",
      "Own component architecture, state management and the shared design-system pieces",
      "Integrate REST or GraphQL APIs with real loading, empty and error states",
      "Keep the app fast — bundle size, code splitting, image handling, Core Web Vitals",
      "Make interfaces accessible: semantic markup, keyboard paths, focus management, contrast",
      "Test what matters: component tests plus end-to-end flows for critical journeys",
      "Work directly with design and backend, and push back when a design will not hold up on a small screen",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "Strong JavaScript fundamentals (not just framework syntax), one modern framework at depth, CSS layout ability including flexbox and grid, responsive work on real devices, and Git discipline",
      },
      {
        group: "Strongly preferred",
        items:
          "TypeScript used properly rather than as `any` everywhere, a state-management approach they can defend, component testing, build tooling familiarity, and some measured performance work",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether they built or assembled, how they decide what becomes a shared component, what they do about accessibility, and whether they have ever profiled a slow page rather than guessing",
      },
    ],
    salaryBands: [
      { experience: "0–2 years", band: "₹4–7.5 LPA", note: "Large supply at this level; screen hard on fundamentals" },
      { experience: "3–5 years", band: "₹8–16 LPA", note: "Sweet spot for most product teams" },
      { experience: "6–9 years", band: "₹16–28 LPA", note: "Senior and lead, design-system ownership" },
      { experience: "10+ years", band: "₹28–45 LPA+", note: "Frontend architect; rarer than the equivalent backend role" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "Framework depth, a feature they built walked through in detail, what they owned versus what the team owned, plus compensation and notice reality.",
      },
      {
        stage: "2 · Build task (take-home or paired, 2–3 hours)",
        detail:
          "A small component or screen built from a design, with an API call and error handling. Reviewing the code they submit tells you more than any quiz.",
      },
      {
        stage: "3 · Code review conversation (45 min)",
        detail:
          "Walk through their submission: why this state shape, why this component boundary, what breaks at 300 rows. This separates builders from assemblers immediately.",
      },
      {
        stage: "4 · Team and design round (30–45 min)",
        detail:
          "How they work with designers, how they handle an impossible spec, and whether they will say no to a design that cannot be made accessible.",
      },
    ],
    pitfalls: [
      {
        title: "Judging on a portfolio instead of code",
        description:
          "Polished screenshots prove nothing about maintainability. Always review code the candidate wrote this week, not a site they shipped two years ago with four other people.",
      },
      {
        title: "A design-heavy JD given to an engineer",
        description:
          "Teams often write a frontend JD that quietly expects UI design, UX research and Figma ownership too. Those are different people. We flag it at briefing because it is the main reason frontend offers get declined after round three.",
      },
      {
        title: "Ignoring device reality",
        description:
          "If your users are on mid-range Android phones on patchy networks, a candidate who has only ever optimised for a MacBook is a risk. We screen specifically for people who have shipped under those constraints.",
      },
      {
        title: "Framework-exact filtering",
        description:
          "A strong React engineer is productive in Vue within weeks. Insisting on an exact framework match halves your pool and buys very little, except in large legacy Angular codebases where it genuinely matters.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "48 working hours; React and Angular pools are deep in every metro" },
      { label: "Realistic time to offer", value: "2–3 weeks at mid-level, 4–6 weeks for lead and architect" },
      { label: "Typical notice period", value: "30–60 days; shorter than backend on average" },
      { label: "Expected hike", value: "25–35% on a lateral move" },
      { label: "Engagement", value: "Permanent, contract for a redesign or launch push, or contract-to-hire" },
    ],
    faqs: [
      {
        question: "Can you screen frontend candidates on code rather than CV?",
        answer:
          "Yes, and we recommend it. We run a structured screen on fundamentals and project ownership, then coordinate a short build task — a component or screen from a design, with an API call and error states. Reviewing what they submit, and talking through their decisions, is the only screen that reliably separates engineers who build from ones who assemble.",
      },
      {
        question: "React, Angular or Vue — does the match have to be exact?",
        answer:
          "Rarely. A strong engineer moves between React, Vue and Svelte in two to three weeks, so insisting on an exact match mostly shrinks your shortlist. Angular is the exception: large enterprise Angular codebases have conventions that take longer to absorb, so for those we do source Angular-first.",
      },
      {
        question: "Do you hire frontend engineers who can handle accessibility and performance?",
        answer:
          "Yes, and we screen for it explicitly because almost no CV mentions it. We ask what they have done about keyboard navigation, focus management and contrast, and whether they have ever measured and improved a Core Web Vital rather than assuming. The pool that answers well is smaller, so tell us at briefing if it is a requirement rather than a preference.",
      },
      {
        question: "Can you supply frontend engineers on contract for a launch?",
        answer:
          "Yes. A redesign or launch push is a good fit for contract or contract-to-hire, with the engineer on our payroll and statutory compliance handled by us. Contract frontend availability is better than backend, and notice periods in this part of the market are shorter, so a contract engineer can usually start within two to three weeks.",
      },
    ],
    related: ["full-stack-developer", "backend-developer", "qa-engineer"],
    industries: ["it-software-recruitment", "retail-ecommerce-recruitment", "education-edtech-recruitment"],
  },
  {
    slug: "full-stack-developer",
    icon: "network",
    title: "Full Stack Developer",
    group: "Technology",
    h1: "Hire Full Stack Developers in India — End-to-End Product Engineers",
    metaTitle: "Hire Full Stack Developers in India | MERN, Java & Python Stacks",
    metaDescription:
      "Hire full stack developers in India. MERN, Next.js, Java and Python engineers who ship a feature end to end — screened on both halves of the stack, not just the one on the CV.",
    primaryKeyword: "hire full stack developer India",
    intro: [
      "'Full stack' is the most over-claimed title in Indian hiring. Most candidates are strong on one side and functional on the other, which is fine — a genuinely balanced engineer is rare and priced accordingly. The mistake is paying for balance and discovering it is not there, so we screen both halves separately and tell you which side is real.",
      "A full stack hire earns its keep in a small team shipping a product: one person takes a feature from schema to screen without a handoff, which removes most of the coordination cost that slows a five-person team down. In a large team with specialists, the same hire often underperforms both specialists and is the wrong call.",
      "The common stacks are MERN and Next.js with Node, Java with React, Python with Django or FastAPI plus React, and .NET with Angular. We cover all of them, and we are explicit about where a candidate's second language is weaker — because that is exactly what you will be living with.",
    ],
    responsibilities: [
      "Take a feature from data model through API to interface, including the tests",
      "Design schemas and endpoints, and build the screens that consume them",
      "Own deployment of their own work — CI, environment config, basic cloud operations",
      "Debug across the whole path: browser, network, service, database",
      "Make pragmatic build-versus-buy calls on auth, payments, search and notifications",
      "Keep the codebase coherent on both sides rather than optimising only their stronger half",
      "In a startup, often also carry on-call, light infrastructure and some product decisions",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "Genuine depth on one side and working competence on the other, at least one feature they built end to end and can walk through, relational data modelling, API design, and deployment of their own code",
      },
      {
        group: "Strongly preferred",
        items:
          "TypeScript across both halves, one cloud provider hands-on, Docker, CI pipeline experience, authentication and authorisation implemented rather than copied, and testing on both sides",
      },
      {
        group: "What we probe hardest",
        items:
          "Which half is real — asked symmetrically, so a frontend engineer who learned Express cannot pass as balanced — plus how they decided build versus buy on something that mattered",
      },
    ],
    salaryBands: [
      { experience: "0–2 years", band: "₹5–9 LPA", note: "Usually one strong side and one learning side at this level" },
      { experience: "3–5 years", band: "₹10–20 LPA", note: "The band most startups actually hire in" },
      { experience: "6–9 years", band: "₹20–35 LPA", note: "Senior; often doubling as a de facto tech lead" },
      { experience: "10+ years", band: "₹35–60 LPA+", note: "Founding engineer and CTO-track profiles" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen (both halves)",
        detail:
          "We question the backend and the frontend symmetrically and report which side is genuinely strong — the single most useful thing in a full stack shortlist.",
      },
      {
        stage: "2 · End-to-end task (4–6 hours, take-home)",
        detail:
          "A small feature with a schema, an endpoint and a screen. One task exposes both halves and how they join them, which two separate tests never do.",
      },
      {
        stage: "3 · Walkthrough and extension (60 min)",
        detail:
          "They present their submission, then extend it live with a new requirement. How they handle the change matters more than the original code.",
      },
      {
        stage: "4 · Founder or EM round (45 min)",
        detail:
          "Judgement, ownership and comfort with ambiguity. In a small team this round carries more weight than any technical one.",
      },
    ],
    pitfalls: [
      {
        title: "Hiring full stack when you needed a specialist",
        description:
          "If your interface is the product, hire a frontend engineer. If your problem is data volume, hire a backend engineer. Full stack is the right answer for small teams shipping breadth, and the wrong one for depth.",
      },
      {
        title: "Accepting 'full stack' at face value",
        description:
          "Most candidates are 80/20. Unless both halves are tested in the same exercise, you will find out which side is thin in month two, on the half you cared about most.",
      },
      {
        title: "Paying a premium and still getting specialists' scope",
        description:
          "Balanced engineers cost more than either specialist. That premium only pays back if the role genuinely spans both sides; if the work splits, two specialists give you more for the same money.",
      },
      {
        title: "A startup JD that is really four roles",
        description:
          "Full stack plus DevOps plus product plus on-call is a real job in a five-person team, but it has to be said out loud. We spell it out in the brief, because candidates who discover it in month one leave by month four.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "48–72 working hours; the balanced pool is smaller than either specialism" },
      { label: "Realistic time to offer", value: "3–4 weeks; the end-to-end task adds a few days and is worth it" },
      { label: "Typical notice period", value: "30 days in startups, 60–90 days in services" },
      { label: "Expected hike", value: "30–40%; this title commands a premium in the startup market" },
      { label: "Engagement", value: "Permanent for core team; contract-to-hire works well for an MVP build" },
    ],
    faqs: [
      {
        question: "How do you verify someone is genuinely full stack?",
        answer:
          "By questioning both halves symmetrically in the screen and then setting one task that spans them — a schema, an endpoint and a screen that consumes it. A frontend engineer who has used Express will produce a working but revealing backend, and vice versa. Our shortlist note states plainly which side is strong and which is functional.",
      },
      {
        question: "Should we hire one full stack engineer or two specialists?",
        answer:
          "If the team is small and the work is broad, one balanced engineer removes handoffs and usually ships faster. If the product's difficulty sits clearly on one side — heavy data volume, or an interface that is the product — two specialists give you more depth for the same budget. We will say which we think fits after the briefing rather than just filling the requisition as written.",
      },
      {
        question: "Which stack should we hire for?",
        answer:
          "Whatever your team can maintain. MERN and Next.js have the deepest and youngest pool, Java with React has the deepest senior pool, and Python with React sits in between and dominates in data-heavy products. Hiring a stack nobody on your team knows costs you more in review capacity than it saves in salary.",
      },
      {
        question: "Can a full stack engineer start on a contract basis?",
        answer:
          "Yes, and for an MVP or a fixed-scope build it is often the better structure: contract-to-hire with a three or six month initial term, the engineer on our payroll with statutory compliance handled by us, and conversion to permanent if it works out on both sides.",
      },
    ],
    related: ["backend-developer", "frontend-developer", "devops-engineer"],
    industries: ["it-software-recruitment", "education-edtech-recruitment", "retail-ecommerce-recruitment"],
  },
  {
    slug: "devops-engineer",
    icon: "shield",
    title: "DevOps Engineer",
    group: "Technology",
    h1: "Hire DevOps Engineers in India — Cloud, Kubernetes & CI/CD Specialists",
    metaTitle: "Hire DevOps Engineers in India | AWS, Kubernetes, Terraform",
    metaDescription:
      "Hire DevOps and SRE engineers in India. AWS, Azure and GCP, Kubernetes, Terraform and CI/CD specialists screened on real production incidents, not certifications alone.",
    primaryKeyword: "hire DevOps engineer India",
    intro: [
      "DevOps is the role where certifications most often stand in for experience. The market is full of candidates holding an AWS Solutions Architect badge who have never been paged at 3 am, and the difference only becomes visible during your first real outage. So our screen is built around incidents: what broke, what they did, what they changed so it would not happen again.",
      "The title also covers three different jobs. Some teams want a build-and-release engineer to own pipelines; some want a cloud infrastructure engineer to own Terraform and networking; some want an SRE to own reliability, SLOs and on-call. The salary bands and the candidate pools differ, so we pin down which one you mean before sourcing — that one conversation saves a fortnight.",
      "Cost is an underrated part of the job in India. A DevOps engineer who can take 30% off a cloud bill usually pays for their own salary, and we screen for people who have actually done it rather than listing 'cost optimisation' on a CV.",
    ],
    responsibilities: [
      "Own CI/CD pipelines, build reproducibility and release and rollback mechanics",
      "Provision and manage cloud infrastructure as code — Terraform, CloudFormation or Pulumi",
      "Run container orchestration: Kubernetes clusters, Helm charts, autoscaling, resource limits",
      "Own observability — metrics, logs, traces, alerts that fire on symptoms rather than noise",
      "Harden the platform: secrets management, IAM least privilege, network policy, patching",
      "Carry on-call, run incident response and write the postmortems",
      "Keep the cloud bill honest — rightsizing, reserved capacity, storage lifecycle, idle cleanup",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "Hands-on production work in at least one cloud, Linux fundamentals, strong scripting in Bash or Python, a CI tool they have owned end to end, and at least one real incident they can narrate",
      },
      {
        group: "Strongly preferred",
        items:
          "Kubernetes in production rather than on a laptop, Terraform state and module discipline, Prometheus and Grafana or an equivalent stack, a service mesh or ingress at depth, and demonstrated cloud cost reduction",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether certifications are backed by production exposure, how they handle a failed deploy at peak traffic, and what they have automated away that used to be manual",
      },
    ],
    salaryBands: [
      { experience: "0–2 years", band: "₹5–9 LPA", note: "Usually pipeline and monitoring support rather than ownership" },
      { experience: "3–5 years", band: "₹12–22 LPA", note: "In heavy demand; expect competing offers" },
      { experience: "6–9 years", band: "₹22–38 LPA", note: "Platform and SRE leads with on-call ownership" },
      { experience: "10+ years", band: "₹38–65 LPA+", note: "Principal SRE and platform architects; a thin pool" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "Which of the three DevOps jobs they have actually done, cloud and Kubernetes depth, scripting ability, and the incident conversation that separates operators from certificate holders.",
      },
      {
        stage: "2 · Practical troubleshooting (60 min)",
        detail:
          "A broken pipeline, a pod that will not schedule, or a service failing health checks. Watching them debug live is the single best predictor in this role.",
      },
      {
        stage: "3 · Infrastructure design (45–60 min)",
        detail:
          "Design the deployment, networking and observability for a service of yours, with cost and failure modes made explicit.",
      },
      {
        stage: "4 · On-call and ways of working (30–45 min)",
        detail:
          "How they run an incident, how they write a postmortem, how they push back on a risky release. Temperament matters as much as skill here.",
      },
    ],
    pitfalls: [
      {
        title: "Hiring a certificate rather than an operator",
        description:
          "An AWS or CKA certification proves study, not production judgement. The only screen that works is a specific incident — what broke, what they did in the first ten minutes, what they changed afterwards.",
      },
      {
        title: "Not deciding which DevOps job you are hiring for",
        description:
          "Build-and-release, cloud infrastructure and SRE are three different roles with different pools and different bands. A vague JD attracts all three and selects none of them well.",
      },
      {
        title: "Expecting one engineer to replace a platform team",
        description:
          "A single hire can own pipelines and a small cluster. They cannot also own security posture, cost governance, on-call rotation and a migration. Scoping that honestly up front prevents a resignation at month six.",
      },
      {
        title: "Underpaying against a market that reprices twice a year",
        description:
          "DevOps bands have moved faster than almost any other engineering skill in India. A band set a year ago is often 15–20% light, and the role simply will not close until it is corrected.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "3–5 working days; genuine production depth is scarcer than the CV volume suggests" },
      { label: "Realistic time to offer", value: "3–5 weeks; longer for SRE roles with strong coding requirements" },
      { label: "Typical notice period", value: "30–60 days; buyouts are more common in this segment" },
      { label: "Expected hike", value: "30–45%; one of the hottest bands in the market" },
      { label: "Engagement", value: "Permanent, or contract for a migration or cloud-landing-zone build" },
    ],
    faqs: [
      {
        question: "How do you tell a real DevOps engineer from a certified one?",
        answer:
          "By making them talk about an outage. What broke, what they saw first, what they did in the first ten minutes, who they woke up, and what they changed so it could not recur. Candidates whose experience is coursework cannot sustain that conversation past the second question, and it takes about five minutes to find out.",
      },
      {
        question: "Do we need Kubernetes experience specifically?",
        answer:
          "Only if you run Kubernetes. If you are on ECS, App Runner or plain VMs with a managed database, insisting on Kubernetes narrows your pool and raises your cost for capability you will not use. If you do run it, insist on production experience — Kubernetes learned on a laptop does not transfer to a cluster under load.",
      },
      {
        question: "Can a DevOps hire reduce our cloud bill?",
        answer:
          "Frequently, yes, and it is worth screening for directly. We ask candidates what they cut, how they found it and what it saved. Engineers who have taken 20–30% off a bill through rightsizing, storage lifecycle policies, reserved capacity and killing idle resources can often cover their own cost in the first year.",
      },
      {
        question: "Should we hire DevOps or SRE?",
        answer:
          "DevOps if the pain is release velocity and infrastructure provisioning. SRE if the pain is reliability — you need SLOs, error budgets, structured on-call and a culture of postmortems, which also means a higher coding bar and a higher band. We will recommend one after the briefing rather than sourcing to an ambiguous title.",
      },
    ],
    related: ["backend-developer", "data-engineer", "full-stack-developer"],
    industries: ["it-software-recruitment", "bfsi-recruitment", "telecom-recruitment"],
  },
  {
    slug: "data-engineer",
    icon: "layers",
    title: "Data Engineer",
    group: "Technology",
    h1: "Hire Data Engineers in India — Pipelines, Warehouses & Streaming",
    metaTitle: "Hire Data Engineers in India | Spark, Airflow, dbt, Snowflake",
    metaDescription:
      "Hire data engineers in India. Spark, Airflow, dbt, Snowflake, BigQuery and Kafka specialists screened on pipeline ownership and data quality, not dashboard work.",
    primaryKeyword: "hire data engineer India",
    intro: [
      "Data engineering is where job titles have drifted furthest from the work. Candidates arrive called data engineers who have written SQL against a warehouse somebody else built, or built dashboards, or trained models. The actual job — moving data reliably at a schedule, modelling it so analysts can trust it, and knowing within minutes when a pipeline has silently produced wrong numbers — is done by a much smaller group.",
      "We screen for pipeline ownership. Which sources, what volume, what orchestration, what happens when an upstream schema changes at 2 am, how data quality is tested, and how the warehouse is modelled. SQL ability is table stakes and is still where a surprising number of candidates fall over, so we test it directly rather than taking it on trust.",
      "The stack splits roughly into modern cloud warehouse work (Snowflake, BigQuery, Redshift with dbt and Airflow), big-data work (Spark, Hive, Databricks), and streaming (Kafka, Flink). These pools overlap less than employers expect, and a batch engineer moving to streaming is a real learning curve, not a weekend.",
    ],
    responsibilities: [
      "Build and own ingestion pipelines from applications, third-party APIs, files and change-data-capture streams",
      "Model the warehouse — staging, intermediate and mart layers that analysts can use without asking questions",
      "Orchestrate and schedule jobs with retries, backfills, idempotency and dependency management",
      "Write data quality tests and alerting so wrong numbers are caught before anybody reports on them",
      "Tune cost and performance: partitioning, clustering, file sizes, warehouse sizing, query rewriting",
      "Manage schema evolution and the contracts between producing services and the warehouse",
      "Support analysts and data scientists as consumers, including documentation and lineage",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "Strong SQL including window functions and query tuning, Python for data work, one orchestration tool owned in production, dimensional or layered warehouse modelling, and a pipeline they can describe end to end including its failure modes",
      },
      {
        group: "Strongly preferred",
        items:
          "dbt, Spark or Databricks, one cloud warehouse at depth, Kafka or another streaming source, infrastructure-as-code exposure, and data quality tooling such as Great Expectations or dbt tests",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether they built the pipeline or consumed it, what they do about late and duplicate data, how they handle a backfill, and whether cost has ever been their responsibility",
      },
    ],
    salaryBands: [
      { experience: "0–2 years", band: "₹5–9 LPA", note: "Often analysts transitioning in; screen SQL hard" },
      { experience: "3–5 years", band: "₹12–24 LPA", note: "The most competitive band in data today" },
      { experience: "6–9 years", band: "₹24–42 LPA", note: "Lead and platform ownership, including cost" },
      { experience: "10+ years", band: "₹42–70 LPA+", note: "Data architects and heads of data platform" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "Pipeline ownership, volumes and sources handled, orchestration tooling, warehouse modelling approach, and whether the title matches the work.",
      },
      {
        stage: "2 · SQL and modelling test (60–75 min)",
        detail:
          "Real queries against a messy schema, plus a modelling question. This filters more candidates than any other round, which is exactly why it goes early.",
      },
      {
        stage: "3 · Pipeline design (45–60 min)",
        detail:
          "Design ingestion and modelling for a source of yours, with scheduling, late data, idempotency and cost all addressed.",
      },
      {
        stage: "4 · Stakeholder round (30–45 min)",
        detail:
          "How they work with analysts and product, how they handle a request for a number they do not trust, and how they communicate a broken pipeline.",
      },
    ],
    pitfalls: [
      {
        title: "Hiring an analyst for an engineering job",
        description:
          "Candidates who have written SQL and built dashboards apply in large numbers for data engineering roles. They are often good hires for an analyst seat and the wrong hire here. The SQL-plus-pipeline-design pair of rounds catches it in a day.",
      },
      {
        title: "Assuming batch and streaming are the same skill",
        description:
          "Exactly-once semantics, watermarks and state management in a streaming system are a genuinely different discipline. If your requirement is streaming, say so at briefing and expect a smaller pool and a higher band.",
      },
      {
        title: "No clarity on who owns data quality",
        description:
          "If nobody owns the tests, the warehouse quietly stops being trusted and the role becomes firefighting. Candidates ask about this, and a vague answer loses you good people at the offer stage.",
      },
      {
        title: "A tool list instead of a problem statement",
        description:
          "A JD that reads 'Airflow, dbt, Snowflake, Spark, Kafka, Flink' selects for CV keyword coverage rather than engineering ability. We will ask at briefing which two tools are actually in your stack today.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "3–5 working days; genuine pipeline owners are scarcer than the applicant volume" },
      { label: "Realistic time to offer", value: "3–5 weeks; the SQL round should come first to save everybody time" },
      { label: "Typical notice period", value: "30–60 days; 90 days in services and GCC roles" },
      { label: "Expected hike", value: "30–45%; streaming and platform experience commands the top of that range" },
      { label: "Engagement", value: "Permanent, or contract for a warehouse migration or platform build" },
    ],
    faqs: [
      {
        question: "How do you separate data engineers from data analysts?",
        answer:
          "With two rounds, in order. A SQL and modelling test comes first, because it removes the largest group of mismatches quickly, then a pipeline design conversation that requires them to handle scheduling, late data, idempotency, backfills and cost. Analysts can usually pass the first and not the second, and that is exactly the line you are hiring across.",
      },
      {
        question: "Do you hire for Snowflake, BigQuery and Databricks specifically?",
        answer:
          "Yes, and the warehouse match matters more than most stack matches because the cost and performance models differ. A strong Snowflake engineer is productive on BigQuery within a few weeks, but their instincts about partitioning, clustering and warehouse sizing have to be relearned, so we source warehouse-first where your platform is already decided.",
      },
      {
        question: "Can you find engineers with real streaming experience?",
        answer:
          "Yes, but it is a headhunt rather than a search. Genuine Kafka or Flink production experience with exactly-once semantics and state management sits with a small group, concentrated in Bengaluru, Hyderabad and Pune. Expect four to six weeks, a shortlist of three to four, and a band at the top of the range.",
      },
      {
        question: "What does a data engineer cost compared with a backend engineer?",
        answer:
          "At the same experience level, typically 10–20% more in 2026, because demand has outrun supply faster on the data side. If your pipelines are simple and your volumes modest, a strong backend engineer with good SQL is often the better value hire, and we will say so rather than selling you the scarcer profile.",
      },
    ],
    related: ["backend-developer", "devops-engineer", "financial-analyst"],
    industries: ["it-software-recruitment", "bfsi-recruitment", "retail-ecommerce-recruitment"],
  },
  {
    slug: "qa-engineer",
    icon: "check",
    title: "QA Engineer",
    group: "Technology",
    h1: "Hire QA & Automation Engineers in India — SDETs and Test Specialists",
    metaTitle: "Hire QA Engineers in India | Automation, SDET, Selenium, Cypress",
    metaDescription:
      "Hire QA and automation engineers in India. Selenium, Cypress, Playwright, API and performance testing specialists, plus SDETs who write framework code rather than click through scripts.",
    primaryKeyword: "hire QA automation engineer India",
    intro: [
      "QA is the easiest engineering role to fill on paper and the easiest to fill badly. 'Automation testing' on a CV covers everything from recording Selenium scripts that break weekly to designing a test framework other engineers build on. Those are different jobs at different bands, and the gap is invisible until your suite is red for a month and everybody starts ignoring it.",
      "We screen on what their automation actually looks like: how the framework is structured, how they handle waits and flakiness, whether they test APIs as well as UI, and whether anybody other than them can add a test. A suite that only its author can maintain is a liability, and candidates who have built one tell you so without realising.",
      "Manual QA still has a real place — exploratory testing, domain-heavy flows in BFSI and insurance, release sign-off — and we recruit for it. But we are direct about the difference: if you want a suite in CI, you need someone who writes code, and the salary band has to reflect that.",
    ],
    responsibilities: [
      "Own the test strategy for a product area: what is automated, what stays manual, what is not worth testing",
      "Build and maintain automation for UI and API layers in a framework others can extend",
      "Keep the suite trustworthy — hunt flakiness, keep runtime sane, keep it wired into CI",
      "Write and maintain test data and environment setup so runs are repeatable",
      "Do exploratory testing on new features, not just regression on old ones",
      "Report defects that developers can reproduce from the ticket alone",
      "Own release sign-off and, where relevant, performance and load testing",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "One automation tool used to build rather than just run tests, a programming language they can actually write in, API testing ability, defect reports that stand on their own, and a clear view of what should not be automated",
      },
      {
        group: "Strongly preferred",
        items:
          "Framework design experience, CI integration, Playwright or Cypress alongside Selenium, performance testing with JMeter or k6, SQL for data verification, and some mobile or cross-browser coverage",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether they wrote the framework or inherited it, how they deal with a flaky test — a candidate who answers 'add a sleep' is screened out here — and whether their suite survived them going on leave",
      },
    ],
    salaryBands: [
      { experience: "0–2 years", band: "₹3.5–6.5 LPA", note: "Largely manual at this level; automation is aspirational" },
      { experience: "3–5 years", band: "₹7–14 LPA", note: "Real automation ability starts here and is well paid" },
      { experience: "6–9 years", band: "₹14–24 LPA", note: "SDET and QA lead, framework and strategy ownership" },
      { experience: "10+ years", band: "₹24–40 LPA+", note: "QA architect and head of quality engineering" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "What they automated and what they inherited, which layers they test, language ability, and the flakiness question that sorts this role faster than anything else.",
      },
      {
        stage: "2 · Coding and framework round (60–75 min)",
        detail:
          "Write a test for a real flow and explain the framework structure. For SDET roles this should be a proper coding round, not a tool quiz.",
      },
      {
        stage: "3 · Test design (45 min)",
        detail:
          "Given a feature, what do they test, in what order, and what do they consciously leave untested. Judgement is the scarce skill in QA, not tool knowledge.",
      },
      {
        stage: "4 · Team round (30 min)",
        detail:
          "How they raise a defect developers will not argue with, and how they behave when release pressure meets a failing suite.",
      },
    ],
    pitfalls: [
      {
        title: "Paying manual rates for automation work",
        description:
          "A genuine SDET is an engineer and costs like one. Budgeting at manual-QA bands and expecting a maintainable framework in CI is the single commonest reason these roles stay open for months.",
      },
      {
        title: "Tool-matching instead of skill-matching",
        description:
          "Someone strong in Selenium with Java picks up Playwright in a fortnight. Insisting on an exact tool match shrinks your pool for very little, and in QA the pool of genuinely strong people is already small.",
      },
      {
        title: "No definition of done for the suite",
        description:
          "If nobody has decided what coverage means or who fixes a red build, the hire inherits an impossible job. Candidates with good judgement ask this in round one, and a vague answer loses them.",
      },
      {
        title: "Treating QA as the last gate rather than part of the team",
        description:
          "Teams that hand finished features to QA at the end get slow, adversarial testing. The good candidates have seen both models and will choose the one where they are involved from the start.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "48 working hours for manual and mid-level automation; 4–5 days for SDET" },
      { label: "Realistic time to offer", value: "2–3 weeks; 4–5 weeks for SDET and QA lead" },
      { label: "Typical notice period", value: "30–90 days; QA sits heavily in services with 90-day notice" },
      { label: "Expected hike", value: "25–35%; SDET moves from manual-heavy roles can be higher" },
      { label: "Engagement", value: "Permanent, or contract for a release cycle or automation backlog push" },
    ],
    faqs: [
      {
        question: "What is the difference between a QA engineer and an SDET for hiring purposes?",
        answer:
          "An SDET is an engineer who happens to work on testing: they design the framework, write code other people extend, and are hired and paid on a developer band. A QA engineer executes and extends tests, often mixing manual and automated work, at a lower band. Deciding which you need before the search starts is the most useful thing you can do for this requisition.",
      },
      {
        question: "Do you screen automation skill or take it from the CV?",
        answer:
          "We screen it. Candidates are asked whether they built or inherited their framework, how it is structured, how they handle waits and flakiness, and whether a colleague could add a test without them. We also test API-layer testing separately, because UI-only automation is much more common than CVs suggest.",
      },
      {
        question: "Should we still hire manual QA?",
        answer:
          "Yes, for exploratory testing, for domain-heavy flows where the risk is a misunderstood rule rather than a broken button — insurance, lending, payroll — and for release sign-off. What manual QA cannot give you is a regression suite in CI. Mixing the two expectations into one JD at one band is what leaves the role open.",
      },
      {
        question: "Can you supply QA engineers on contract for a release cycle?",
        answer:
          "Yes, and QA is one of the easiest roles to staff this way. Notice periods are shorter at the junior and mid levels, availability is good in NCR, Pune, Bengaluru and Chennai, and the engineer sits on our payroll with statutory compliance handled by us for the duration of the engagement.",
      },
    ],
    related: ["frontend-developer", "backend-developer", "quality-engineer"],
    industries: ["it-software-recruitment", "bfsi-recruitment", "bpo-shared-services-recruitment"],
  },
  {
    slug: "sales-manager",
    icon: "target",
    title: "Sales Manager",
    group: "Business",
    h1: "Hire Sales Managers in India — B2B, Enterprise & Channel Sales",
    metaTitle: "Hire Sales Managers in India | B2B, Enterprise & Channel Sales",
    metaDescription:
      "Hire sales managers in India. B2B, enterprise, inside sales and channel sales managers screened on quota attainment they personally owned, deal size and territory, not CV prose.",
    primaryKeyword: "hire sales manager India",
    intro: [
      "Sales is the role where references and numbers matter more than interviews, because a good salesperson will interview well by definition. Selling themselves is the job. So our screen is arithmetic: what was the quota, what did they close against it for each of the last three years, what was the average deal size, how long was the cycle, and what share of the pipeline did they create themselves.",
      "Transferability is the other half. A candidate who sold a ₹50,000 SaaS subscription to a startup founder has not done the job of selling an eight-month enterprise deal through a procurement committee, even though both CVs say 'B2B sales'. We match on deal size, cycle length, buyer persona and whether they hunt or farm — and we say plainly when the match is partial.",
      "We recruit across SaaS and technology sales, industrial and technical sales, BFSI distribution, healthcare and pharma institutional sales, real estate, and channel and distribution networks. Each has its own definition of a good month, and a consultant who does not know yours will send you plausible CVs that waste your time.",
    ],
    responsibilities: [
      "Own a number — a territory, segment or product quota — and the pipeline that has to produce it",
      "Generate pipeline personally rather than only working inbound leads",
      "Run the full cycle: qualification, discovery, proposal, negotiation, close",
      "Manage, coach and hold accountable a team of executives where the role is a people-management one",
      "Keep the CRM honest, so the forecast means something",
      "Build and manage channel partners or distributors where the model requires it",
      "Feed the market back into product and pricing — why deals are lost, what competitors are doing",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "Three years of quota attainment they can state numerically, average deal size and cycle length in the same range as yours, evidence of self-generated pipeline, and CRM discipline",
      },
      {
        group: "Strongly preferred",
        items:
          "Experience selling to your buyer persona, a transferable network in your segment, a structured sales methodology, team-management track record for people-leader roles, and local-language fluency where the territory needs it",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether the numbers were personal or the team's, what they did in a year they missed, whether the network is genuinely portable to your product, and how much of their success was the brand rather than them",
      },
    ],
    salaryBands: [
      { experience: "3–5 years", band: "₹6–12 LPA fixed", note: "Plus 20–40% variable; individual contributor quota" },
      { experience: "6–9 years", band: "₹12–22 LPA fixed", note: "Plus 30–50% variable; team or large-territory ownership" },
      { experience: "10–14 years", band: "₹22–40 LPA fixed", note: "Regional or national sales manager" },
      { experience: "15+ years", band: "₹40 LPA+", note: "Sales head and CRO track, usually via executive search" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "The numbers conversation — quota, attainment, deal size, cycle, pipeline source — plus whether the network is portable to your product. Most candidates do not survive this unchanged.",
      },
      {
        stage: "2 · Hiring manager deep dive (60 min)",
        detail:
          "Walk through their two largest closed deals and one lost one, in detail. The lost deal is where you learn how they actually think.",
      },
      {
        stage: "3 · Live pitch or role-play (45 min)",
        detail:
          "Sell your product back to you after a short prep, or run a discovery call with a realistic objection. Nothing else exposes the gap between talking about selling and selling.",
      },
      {
        stage: "4 · References, taken seriously (before offer)",
        detail:
          "Two former managers, asked about attainment against quota and how they behaved in a bad quarter. In sales hiring this is not a formality; it is the single highest-value round.",
      },
    ],
    pitfalls: [
      {
        title: "Team numbers presented as personal numbers",
        description:
          "The most common inflation in Indian sales CVs. We ask for individual attainment, then cross-check it against the territory and team size, and we flag the claim on the shortlist when it does not reconcile.",
      },
      {
        title: "Hiring a farmer for a hunter's job",
        description:
          "Somebody who grew existing accounts at a market-leading brand may have never cold-started a territory. Both are valuable; they are not interchangeable, and this mismatch causes most sales mis-hires inside six months.",
      },
      {
        title: "A variable structure nobody believes",
        description:
          "If the on-target earnings assume 150% attainment, candidates discount the variable entirely and compare only fixed pay. A credible, achievable structure wins more offers than a bigger headline number.",
      },
      {
        title: "Skipping references because the interview went well",
        description:
          "Interviewing well is the skill being hired. References with two former managers, asked specifically about quota attainment, are the correction for that and should never be dropped under time pressure.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "48 working hours; the pool is deep in every metro" },
      { label: "Realistic time to offer", value: "2–4 weeks including a proper reference check" },
      { label: "Typical notice period", value: "30–60 days; sales notice is often negotiable" },
      { label: "Attrition", value: "25–35% a year; plan on a pipeline, not a one-off hire" },
      { label: "Expected hike", value: "20–30% on fixed; the variable structure usually decides acceptance" },
    ],
    faqs: [
      {
        question: "How do you verify a sales candidate's numbers?",
        answer:
          "We ask for quota and attainment year by year, average deal size, cycle length and the share of pipeline they sourced themselves, then sanity-check it against the employer's actual product, pricing and territory size. Where the arithmetic does not reconcile — a claimed number larger than the territory could plausibly produce — it is flagged in writing on the shortlist, and we always recommend taking references before the offer.",
      },
      {
        question: "Will a candidate's client network transfer to us?",
        answer:
          "Sometimes, and far less often than the CV implies. A network transfers when the buyer persona, the price point and the problem are similar; it does not transfer when the candidate was carried by a market-leading brand or when your product sells to a different function entirely. We test this explicitly rather than letting it be assumed.",
      },
      {
        question: "Can you hire a full sales team rather than one manager?",
        answer:
          "Yes. Team builds are run as a sequenced mandate — the manager first so they can help select their own executives, then the executives in a batch, which also improves retention because they join together into a defined structure. For high-volume inside sales we price per position rather than as a percentage of CTC.",
      },
      {
        question: "What is a realistic fixed-to-variable split?",
        answer:
          "For individual contributors in India, 70:30 to 80:20 fixed to variable is normal; for senior and team-leading roles, 60:40 is common. What matters more than the ratio is whether the target is achievable: candidates talk to each other, and a structure where nobody hit target last year is known in the market and costs you offers.",
      },
    ],
    related: ["digital-marketing-manager", "operations-manager", "hr-manager"],
    industries: ["it-software-recruitment", "bfsi-recruitment", "real-estate-infra-recruitment"],
  },
  {
    slug: "digital-marketing-manager",
    icon: "bolt",
    title: "Digital Marketing Manager",
    group: "Business",
    h1: "Hire Digital Marketing Managers in India — Performance, SEO & Growth",
    metaTitle: "Hire Digital Marketing Managers in India | Performance & SEO",
    metaDescription:
      "Hire digital marketing managers in India. Performance marketing, SEO, content and CRM specialists screened on spend managed, CAC and ROAS they personally owned.",
    primaryKeyword: "hire digital marketing manager India",
    intro: [
      "Digital marketing hiring goes wrong when the title hides which of five jobs you are buying. Performance marketing, SEO and content, lifecycle and CRM, social and brand, and marketing analytics are different skill sets with different bands, and almost nobody is genuinely strong in more than two. A JD that asks for all five produces a shortlist of generalists who will own none of them well.",
      "We screen on numbers the candidate personally controlled: monthly spend managed, CAC and ROAS by channel, the revenue or lead volume attributed to their work, and what they changed to move it. Agency-side candidates often have breadth across many accounts but have never owned a P&L number; in-house candidates have the number but narrower channel exposure. Both are useful, for different roles.",
      "Business model matters more here than in most roles. D2C performance marketing, B2B SaaS demand generation, lead generation for high-ticket services, and marketplace growth run on different metrics and different time horizons. Someone excellent at ₹40 lakh a month of D2C spend may be the wrong hire for a six-month B2B sales cycle.",
    ],
    responsibilities: [
      "Own acquisition targets — spend, CAC, ROAS or qualified leads — against a budget",
      "Plan and run paid campaigns across Google, Meta and the platforms relevant to the business",
      "Own the organic side where in scope: SEO strategy, content calendar, technical fixes with engineering",
      "Build and measure the funnel: landing pages, conversion-rate testing, attribution",
      "Run lifecycle marketing — email, WhatsApp, push, retention and win-back",
      "Report honestly on what worked, including the experiments that failed",
      "Brief and manage agencies, freelancers and in-house designers",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "Monthly spend they personally managed, CAC or ROAS numbers they owned, hands-on platform work rather than only agency oversight, analytics ability in GA4, and a specific experiment they ran with its result",
      },
      {
        group: "Strongly preferred",
        items:
          "Experience in your business model, SQL or spreadsheet modelling at depth, landing-page and CRO work, marketing automation tooling, and SEO fundamentals even in a paid-heavy role",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether the results were theirs or the brand's, whether they can explain a metric moving without reciting a dashboard, and whether the spend scale matches yours in either direction",
      },
    ],
    salaryBands: [
      { experience: "2–4 years", band: "₹5–10 LPA", note: "Channel execution, usually one or two platforms" },
      { experience: "5–8 years", band: "₹12–24 LPA", note: "Manager owning spend and targets across channels" },
      { experience: "9–12 years", band: "₹24–40 LPA", note: "Head of growth or marketing, team and budget ownership" },
      { experience: "13+ years", band: "₹40 LPA+", note: "CMO track, usually via executive search" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "Which of the five marketing jobs they actually do, spend managed, CAC and ROAS owned, and whether the business model matches yours.",
      },
      {
        stage: "2 · Numbers deep dive (60 min)",
        detail:
          "Walk through their last twelve months: what the number was, what they changed, what happened. Candidates who only recite dashboards become obvious here.",
      },
      {
        stage: "3 · Plan exercise (take-home, 3–4 hours)",
        detail:
          "Give them your real budget and target and ask for a 90-day plan with channel mix, assumptions and what they would kill first. Assumptions matter more than the plan.",
      },
      {
        stage: "4 · Cross-functional round (30–45 min)",
        detail:
          "How they work with sales on lead quality, with product on the funnel, and with finance on budget. In-house marketing fails on these seams more often than on channel skill.",
      },
    ],
    pitfalls: [
      {
        title: "One JD for five different jobs",
        description:
          "Performance plus SEO plus content plus social plus analytics in one requisition selects for breadth over depth, and the hire will be mediocre at whichever one you actually needed. We will ask at briefing which single metric this person owns.",
      },
      {
        title: "Crediting the brand's results to the candidate",
        description:
          "Running ₹2 crore a month at a household-name brand is a different skill from building acquisition at an unknown one. Both are real; only one of them tells you whether they can start from nothing.",
      },
      {
        title: "A spend scale mismatch in either direction",
        description:
          "Someone used to ₹5 lakh a month will drown at ₹50 lakh, and someone used to ₹1 crore often cannot operate with ₹3 lakh and no creative team. Match the scale, not just the channel.",
      },
      {
        title: "No agreement on what a qualified lead is",
        description:
          "In lead-generation businesses, marketing and sales usually disagree about lead quality. Good candidates ask about this in the first round, and a company with no answer loses them.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "48–72 working hours; deepest pools in Bengaluru, Mumbai and NCR" },
      { label: "Realistic time to offer", value: "3–4 weeks including the plan exercise" },
      { label: "Typical notice period", value: "30–60 days" },
      { label: "Attrition", value: "20–30% a year; higher in agency-to-in-house moves" },
      { label: "Expected hike", value: "25–35%; growth roles at funded startups go higher" },
    ],
    faqs: [
      {
        question: "Should we hire a generalist marketing manager or a performance specialist?",
        answer:
          "If one channel carries most of your acquisition, hire the specialist and buy the rest from an agency. If you need someone to own a mixed funnel end to end and brief agencies, hire the generalist and accept less depth in each channel. What does not work is paying for a generalist and expecting specialist depth on the one metric that matters to the business.",
      },
      {
        question: "How do you verify marketing performance claims?",
        answer:
          "We ask for monthly spend managed, CAC and ROAS by channel, the attributed revenue or lead volume, and one specific experiment with its result, then test whether those numbers are plausible for that employer's size and category. The take-home plan exercise is the second check: candidates who have genuinely owned a number produce realistic assumptions, and the ones who have not produce a slide deck.",
      },
      {
        question: "Does the candidate need experience in our industry?",
        answer:
          "Business model matters much more than industry. D2C, B2B SaaS, high-ticket lead generation and marketplaces run on different metrics and cycle lengths, and that is the match worth insisting on. Within a model, a strong performance marketer moves between categories quickly.",
      },
      {
        question: "Can you hire an SEO specialist rather than a general marketer?",
        answer:
          "Yes, and we screen SEO roles separately because the skill splits again into technical, content and link acquisition. We ask for a site they grew, what they changed, and how they measured it against seasonality and algorithm updates — the last part being where most SEO claims come apart.",
      },
    ],
    related: ["sales-manager", "operations-manager", "financial-analyst"],
    industries: ["retail-ecommerce-recruitment", "education-edtech-recruitment", "it-software-recruitment"],
  },
  {
    slug: "hr-manager",
    icon: "users",
    title: "HR Manager",
    group: "Business",
    h1: "Hire HR Managers in India — HRBP, Talent Acquisition & HR Operations",
    metaTitle: "Hire HR Managers in India | HRBP, TA & HR Operations",
    metaDescription:
      "Hire HR managers in India. HR business partners, talent acquisition leads and HR operations managers screened on headcount supported, compliance depth and what they actually owned.",
    primaryKeyword: "hire HR manager India",
    intro: [
      "HR is a title that covers four largely separate careers: business partnering, talent acquisition, HR operations and payroll, and learning and development. A generalist in a 60-person company does all four; in a 2,000-person company they are four teams. Hiring an HRBP when you needed an operations and compliance person, or the reverse, is the most frequent mis-hire we see in this function.",
      "We screen on what the person owned, not the headcount of the company they sat in. Which population did they support, what was their actual decision authority, did they handle an exit or a POSH complaint themselves or escalate it, did they run payroll input or own the output, and what compliance filings have they personally been responsible for.",
      "Compliance deserves particular attention in India, because the exposure is real: PF, ESIC, professional tax, gratuity, maternity benefit, POSH committee constitution, contract-labour obligations and state shops-and-establishments rules. A candidate who has only worked where a vendor handled all of it is not the person to hire if that is the gap you are filling.",
    ],
    responsibilities: [
      "Partner with business leaders on org structure, performance and workforce planning",
      "Own the employee lifecycle: onboarding, confirmation, transfers, exits and the paperwork behind each",
      "Run or oversee talent acquisition, including agency and vendor management",
      "Keep statutory compliance clean — PF, ESIC, PT, gratuity, POSH, labour registers and returns",
      "Own payroll inputs and coordinate with finance on the monthly cycle",
      "Handle employee relations, grievances and disciplinary processes, including documentation",
      "Run performance and compensation cycles, and manage the HRMS as the system of record",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "Clear ownership of at least one of the four HR tracks, headcount actually supported, Indian statutory compliance exposure, HRMS hands-on, and documentation discipline on employee relations matters",
      },
      {
        group: "Strongly preferred",
        items:
          "MBA in HR or equivalent, multi-location or multi-state exposure, experience in your industry's shift and compliance pattern, POSH committee experience, and comfort handling an exit or disciplinary case independently",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether they owned the outcome or coordinated with a vendor who did, how they handled a difficult exit, and whether their compliance knowledge is current or inherited from a previous decade",
      },
    ],
    salaryBands: [
      { experience: "3–5 years", band: "₹5–10 LPA", note: "Executive to assistant manager; usually one track" },
      { experience: "6–9 years", band: "₹11–20 LPA", note: "Manager; HRBP for a business unit or site HR lead" },
      { experience: "10–14 years", band: "₹20–35 LPA", note: "Senior manager, head of HR for a mid-size company" },
      { experience: "15+ years", band: "₹35 LPA+", note: "CHRO track, usually via executive search" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "Which HR track they genuinely own, population supported, compliance exposure, HRMS experience, and whether they have handled a contentious exit themselves.",
      },
      {
        stage: "2 · Case conversation (45–60 min)",
        detail:
          "A real situation from your company — a performance exit, a POSH complaint, a retention problem in one team — and what they would do, in order, with documentation.",
      },
      {
        stage: "3 · Compliance and systems round (30–45 min)",
        detail:
          "Specific questions on PF, ESIC, PT, gratuity and POSH obligations for your headcount and states. This round cannot be bluffed and should not be skipped.",
      },
      {
        stage: "4 · Business leader round (30–45 min)",
        detail:
          "Whether they can hold a line with a demanding business head, and whether they default to policy or to judgement. Credibility with the business is the whole job in HRBP roles.",
      },
    ],
    pitfalls: [
      {
        title: "Hiring a partner when you needed an operator",
        description:
          "HRBPs are hired for influence and judgement; HR operations people are hired for accuracy and compliance. Both call themselves HR managers. Deciding which gap you are filling before the search starts is most of the work.",
      },
      {
        title: "Assuming compliance knowledge is current",
        description:
          "Indian labour compliance has moved, and candidates who have worked in companies where a vendor handled everything often have decade-old knowledge. We ask specific, current questions rather than accepting 'yes, I handle compliance'.",
      },
      {
        title: "Underestimating the first employee-relations case",
        description:
          "An HR manager's credibility is set by how they handle the first difficult exit or complaint. Candidates who have always escalated those upward will escalate yours too, and there may be nobody above them to escalate to.",
      },
      {
        title: "Expecting one person to also be the recruiter",
        description:
          "In a growing company, HR management and high-volume recruiting compete for the same hours, and recruiting always loses because it has no deadline. Either split the roles or resource hiring externally — which is usually cheaper than a second salary.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "48 working hours; the generalist pool is deep in every metro" },
      { label: "Realistic time to offer", value: "2–4 weeks; longer where the compliance bar is high" },
      { label: "Typical notice period", value: "30–60 days; 90 days at senior levels" },
      { label: "Attrition", value: "15–20% a year; lower than most business functions" },
      { label: "Expected hike", value: "20–30% on a lateral move" },
    ],
    faqs: [
      {
        question: "Should we hire an HR generalist or a specialist?",
        answer:
          "Under roughly 150 employees, a strong generalist who can cover partnering, operations and compliance is usually the right call, with recruiting resourced externally. Above that, the tracks start to need separate owners, and a generalist stretched across all four becomes the bottleneck for every one of them. We will say which structure fits after the briefing.",
      },
      {
        question: "How do you test statutory compliance knowledge?",
        answer:
          "With specific questions tied to your headcount, states and industry: PF and ESIC applicability and thresholds, professional tax by state, gratuity eligibility and computation, POSH committee constitution, and contract-labour obligations where relevant. Candidates whose compliance was handled by a vendor cannot sustain this conversation, and that is exactly what you need to know before offering.",
      },
      {
        question: "Can an HR manager also run our recruiting?",
        answer:
          "Only at low volume. Recruiting is the task with no hard deadline, so it is the one that slips when an employee-relations issue or a payroll cycle lands. If you are hiring more than three or four people a month, the economics favour keeping the HR manager on partnering, operations and compliance and resourcing the hiring externally.",
      },
      {
        question: "Do you hire HR for manufacturing and plant locations?",
        answer:
          "Yes, and it is a genuinely different profile: contract-labour management, union or works-committee handling, shift rostering, statutory registers and factory inspections. A corporate HRBP, however strong, is usually the wrong hire for a plant, so we source from candidates with plant experience in a comparable sector.",
      },
    ],
    related: ["operations-manager", "sales-manager", "accountant"],
    industries: ["manufacturing-recruitment", "hospitality-travel-recruitment", "bpo-shared-services-recruitment"],
  },
  {
    slug: "accountant",
    icon: "file",
    title: "Accountant",
    group: "Industrial & Finance",
    h1: "Hire Accountants in India — Tally, GST, TDS & Month-End Close",
    metaTitle: "Hire Accountants in India | Tally, GST, TDS & Reconciliation",
    metaDescription:
      "Hire accountants in India. Tally, Zoho and SAP-trained accountants screened on GST and TDS filings, reconciliation and month-end close they personally handled.",
    primaryKeyword: "hire accountant India",
    intro: [
      "Accounting is the highest-volume commercial role we recruit for, and the one where a bad hire is discovered latest. Errors surface at the next GST filing, the next audit or the next reconciliation, by which time they have compounded. So the screen is almost entirely practical: which filings have they personally prepared, which reconciliations do they close, and what do they do when the bank statement and the ledger disagree.",
      "The band and the screen depend on what you actually need. Transaction-level data entry in Tally, a standalone accountant closing the books for a small company, GST and TDS compliance ownership, and a senior accountant running month-end for a multi-entity group are four different roles that all carry the title 'accountant'.",
      "Software familiarity matters less than people assume, with one exception. Tally to Zoho or Busy is a week; anything to SAP or Oracle is a genuine learning curve, and if you run SAP you should source SAP-experienced candidates rather than hoping someone picks up FICO on the job.",
    ],
    responsibilities: [
      "Record purchases, sales, expenses, journals and bank entries accurately and on time",
      "Reconcile bank accounts, debtors, creditors, GST input credit and inter-company balances",
      "Prepare and file GST returns, TDS returns and challans within statutory deadlines",
      "Run the month-end close: provisions, prepayments, depreciation, schedules for review",
      "Manage accounts payable and receivable, including vendor and customer follow-up",
      "Support statutory and internal audit with schedules, vouchers and explanations",
      "Maintain fixed-asset registers and inventory valuation where applicable",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "Hands-on accounting software, GST and TDS working knowledge, bank and ledger reconciliation ability, Excel at a practical level, and an answer to what they do when two records disagree",
      },
      {
        group: "Strongly preferred",
        items:
          "B.Com or M.Com, CA Inter or CMA Inter for senior seats, your ERP specifically, audit-support experience, multi-entity or multi-state GST exposure, and e-invoicing and e-way bill familiarity",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether they prepared the filing or only entered the data, whether the close was theirs or a consultant's, and how they handle a deadline they are going to miss",
      },
    ],
    salaryBands: [
      { experience: "0–2 years", band: "₹2.4–4.2 LPA", note: "Data entry and basic reconciliation; large supply" },
      { experience: "3–5 years", band: "₹4.2–7.5 LPA", note: "Independent accountant; GST and TDS ownership" },
      { experience: "6–9 years", band: "₹7.5–13 LPA", note: "Senior accountant or accounts manager running the close" },
      { experience: "10+ years", band: "₹13–22 LPA", note: "Finance manager without a CA qualification" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "Software used, filings personally prepared, reconciliations owned, close involvement, and whether a consultant did the work they are claiming.",
      },
      {
        stage: "2 · Practical test (45–60 min)",
        detail:
          "Entries in your software, a bank reconciliation with deliberate mismatches, and a GST computation. This single round decides most accountant hires.",
      },
      {
        stage: "3 · Compliance questions (20–30 min)",
        detail:
          "GST return types and due dates, TDS sections and rates for common payments, and what happens on a late filing. Current, specific, and not bluffable.",
      },
      {
        stage: "4 · Reporting-line round (20–30 min)",
        detail:
          "How they flag a problem upward, how they handle pressure to post something they are unsure about, and how organised their documentation is.",
      },
    ],
    pitfalls: [
      {
        title: "Hiring on software familiarity rather than accuracy",
        description:
          "Tally proficiency is easy to claim and easy to teach. Accuracy and the instinct to reconcile are neither. A practical test with deliberate mismatches tells you more in forty minutes than three interviews.",
      },
      {
        title: "Assuming the candidate did the compliance work",
        description:
          "In many small companies a CA firm prepares the returns and the in-house accountant only supplies data. Both CVs read the same. If you need the filing owned in-house, test for it specifically.",
      },
      {
        title: "Pricing a compliance-owning seat at data-entry rates",
        description:
          "An accountant who owns GST, TDS and the month-end close for a multi-entity business is not a ₹3 lakh hire. Budgeting at the bottom of the band and expecting the top of the scope is why these roles churn.",
      },
      {
        title: "No segregation of duties in a small team",
        description:
          "One person recording, approving and paying is a fraud risk regardless of how good they are. Candidates with good training ask about this, and a company with no answer is a signal to them too.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "24–48 working hours; the deepest pool of any role we recruit for" },
      { label: "Realistic time to offer", value: "1–2 weeks; the practical test is the only step worth not rushing" },
      { label: "Typical notice period", value: "15–30 days" },
      { label: "Attrition", value: "20–30% at junior levels; much lower from senior accountant upward" },
      { label: "Expected hike", value: "15–25%; location matters more than in most roles" },
    ],
    faqs: [
      {
        question: "Can you supply accountants at short notice?",
        answer:
          "Yes. This is the deepest pool we recruit for and a screened shortlist usually reaches you within 24 to 48 working hours, with candidates available on 15 to 30 days' notice. For an audit or year-end crunch we can also place accountants on contract through our own payroll with statutory compliance handled by us.",
      },
      {
        question: "Does the candidate need experience in our accounting software?",
        answer:
          "Only for SAP and Oracle. Tally, Zoho Books, Busy, Marg and QuickBooks are close enough that a competent accountant is productive in a week. SAP FICO and Oracle are different — the transaction structure and controls take months to absorb — so if you run either, source for it specifically rather than planning to train.",
      },
      {
        question: "Should we hire an accountant or a CA?",
        answer:
          "An accountant for the transaction layer, reconciliation, GST and TDS filing and the month-end close. A CA when you need statutory judgement, audit interface, tax structuring or management reporting that drives decisions. Hiring a CA to do data entry is expensive and they leave; hiring an accountant to make judgement calls is a risk.",
      },
      {
        question: "How do you test accounting accuracy before we interview?",
        answer:
          "We ask which filings and reconciliations they personally prepared and what they do when a bank statement and the ledger disagree, and we recommend a short practical test as your first round — entries in your software, a reconciliation with deliberate mismatches and a GST computation. It is the single most predictive step in hiring for this role.",
      },
    ],
    related: ["chartered-accountant", "financial-analyst", "hr-manager"],
    industries: ["manufacturing-recruitment", "retail-ecommerce-recruitment", "bpo-shared-services-recruitment"],
  },
  {
    slug: "financial-analyst",
    icon: "target",
    title: "Financial Analyst",
    group: "Industrial & Finance",
    h1: "Hire Financial Analysts in India — FP&A, Modelling & Business Finance",
    metaTitle: "Hire Financial Analysts in India | FP&A, Modelling, Business Finance",
    metaDescription:
      "Hire financial analysts in India. FP&A, business finance and modelling specialists screened on models they built, variance analysis they owned and decisions their work drove.",
    primaryKeyword: "hire financial analyst India",
    intro: [
      "A financial analyst is hired to change decisions, not to produce reports. That distinction is the whole screen. Plenty of candidates can assemble a monthly pack; far fewer can explain why gross margin moved 180 basis points, which three things caused it and what the business should do differently next quarter.",
      "We screen on models they built from scratch rather than maintained, the variance analysis they owned, the forecast accuracy they were held to, and a specific decision their work changed. We also test Excel and SQL properly, because 'advanced Excel' on a CV means anything from pivot tables to a working three-statement model, and the difference decides whether the hire is useful in month one.",
      "The role splits by context. Corporate FP&A runs budgets, forecasts and board reporting; business finance partners a unit on pricing and unit economics; investment and transaction analysis runs valuation and diligence. The pools differ, the bands differ, and so does the kind of person who thrives — so we pin down which one you mean before sourcing.",
    ],
    responsibilities: [
      "Build and maintain the budget, forecast and rolling plan, including the assumptions behind them",
      "Run month-end variance analysis against plan and explain the drivers, not just the numbers",
      "Build financial models — three-statement, unit economics, scenario and sensitivity",
      "Produce management and board reporting that leads with the decision, not the data",
      "Partner with business owners on pricing, cost and investment cases",
      "Track and improve forecast accuracy, and own the data pipeline the reporting depends on",
      "Support fundraising, diligence or lender reporting where relevant",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "A model they built themselves and can walk through, variance analysis with drivers rather than descriptions, genuinely strong Excel, and one decision their analysis changed",
      },
      {
        group: "Strongly preferred",
        items:
          "CA, MBA Finance, CFA or equivalent, SQL for self-serve data access, BI tooling (Power BI, Tableau, Looker), ERP reporting experience, and exposure to your business model's unit economics",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether they built or inherited the model, whether they can explain a variance without reading from the deck, and whether anyone acted on their work",
      },
    ],
    salaryBands: [
      { experience: "0–2 years", band: "₹5–9 LPA", note: "Analyst; reporting and model support" },
      { experience: "3–5 years", band: "₹9–18 LPA", note: "Senior analyst owning a forecast or business unit" },
      { experience: "6–9 years", band: "₹18–32 LPA", note: "FP&A manager or business finance lead" },
      { experience: "10+ years", band: "₹32–55 LPA+", note: "Head of FP&A and finance director track" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "Which flavour of analyst they are, models built versus maintained, Excel and SQL depth, and a decision their work drove.",
      },
      {
        stage: "2 · Modelling test (2–3 hours, take-home)",
        detail:
          "Build a small model from a realistic brief with messy inputs. How they structure assumptions and handle ambiguity matters more than the output.",
      },
      {
        stage: "3 · Walkthrough and stress test (60 min)",
        detail:
          "They present the model, you break an assumption and ask what happens. This separates modellers from people who have used models.",
      },
      {
        stage: "4 · Business partner round (30–45 min)",
        detail:
          "How they deliver unwelcome analysis to a business head, and whether they can summarise a complex result in two sentences. Communication is the limiting skill in this role.",
      },
    ],
    pitfalls: [
      {
        title: "Hiring a reporter and expecting an analyst",
        description:
          "Producing the pack and explaining the business are different skills. Ask for the driver behind a variance in the first interview; candidates who describe rather than explain are easy to identify and easy to hire by mistake.",
      },
      {
        title: "Taking 'advanced Excel' on trust",
        description:
          "The phrase covers everything from pivot tables to a clean three-statement model with circularity handled. A short modelling test removes the ambiguity, and candidates who are genuinely strong welcome it.",
      },
      {
        title: "No data access for the analyst",
        description:
          "An analyst who has to request every extract from engineering spends their week waiting. Candidates ask about this, and companies that cannot answer lose the better ones at offer stage.",
      },
      {
        title: "Confusing FP&A with accounting",
        description:
          "Accountants record what happened; analysts explain what it means and what to do. Both are needed and they are not substitutes, and a JD that mixes them attracts neither group well.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "3–4 working days; good modellers are scarcer than the applicant volume" },
      { label: "Realistic time to offer", value: "3–4 weeks including the modelling test" },
      { label: "Typical notice period", value: "30–60 days; 90 days in large corporates" },
      { label: "Attrition", value: "15–25% a year" },
      { label: "Expected hike", value: "25–35%; CA and CFA qualified candidates command a premium" },
    ],
    faqs: [
      {
        question: "What is the difference between an accountant and a financial analyst for us?",
        answer:
          "An accountant produces accurate records and meets statutory deadlines. An analyst takes those records and tells you why margin moved, what the forecast should be and which decision to change. Companies often hire the first and expect the second, which is the commonest source of frustration in small finance teams.",
      },
      {
        question: "Do you test modelling skill?",
        answer:
          "We screen for it and recommend testing it. We ask for a model they built from scratch, make them walk through its structure and assumptions, and establish whether anyone acted on the output. As your round, a two to three hour take-home model from a deliberately messy brief, followed by a stress-test conversation, is the most predictive step available.",
      },
      {
        question: "Do we need a CA or CFA for this role?",
        answer:
          "Not always. For business finance and FP&A in a growing company, modelling ability and commercial judgement matter more than the qualification, and a strong MBA Finance or experienced analyst often outperforms a qualified candidate with no modelling history. For technical accounting judgement, lender reporting or transaction work, the qualification earns its premium.",
      },
      {
        question: "Can you find analysts with SQL as well as Excel?",
        answer:
          "Yes, and it is worth asking for. An analyst who can query the warehouse themselves does not queue behind engineering for every extract, which roughly doubles their useful output. The pool is smaller, mostly from startups and GCCs, so tell us at briefing whether it is a requirement or a preference.",
      },
    ],
    related: ["chartered-accountant", "accountant", "data-engineer"],
    industries: ["bfsi-recruitment", "it-software-recruitment", "retail-ecommerce-recruitment"],
  },
  {
    slug: "operations-manager",
    icon: "network",
    title: "Operations Manager",
    group: "Business",
    h1: "Hire Operations Managers in India — Process, SLA and Team Ownership",
    metaTitle: "Hire Operations Managers in India | Process & SLA Ownership",
    metaDescription:
      "Hire operations managers in India for service delivery, back office, e-commerce and BPO operations. Screened on SLAs, team size, cost per unit and process improvement they personally drove.",
    primaryKeyword: "hire operations manager India",
    intro: [
      "'Operations manager' means almost nothing until you say what is being operated. Service delivery operations in a BPO, fulfilment operations in e-commerce, branch operations in BFSI and clinical operations in a hospital chain are different jobs with different metrics. The one thing they share is accountability for a number that is measured daily, which is also the right basis for the screen.",
      "We ask for the numbers the candidate owned: team size including contract staff, the SLA or TAT they were held to and how often they met it, volume processed, cost per unit or per transaction, and one process change they made with the measured result. Candidates who have coordinated rather than owned cannot produce those figures, and they come up with narrative instead.",
      "Span of control and the type of workforce matter as much as the metric. Managing 15 specialists is not managing 300 frontline staff with 60% attrition, and a manager who has only done one of those will struggle at the other. We match both, and we say so when the match is approximate.",
    ],
    responsibilities: [
      "Own the daily operating metric — SLA, TAT, throughput, uptime or productivity",
      "Manage supervisors and frontline teams, including rostering, shrinkage and attrition",
      "Monitor and improve quality, error rates and rework",
      "Control operating cost per unit and manage budget against plan",
      "Run process improvement and automation, with before-and-after numbers",
      "Own client or internal-stakeholder reporting and governance reviews",
      "Handle escalations, incidents and business continuity for the operation",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "A daily metric they personally owned, team size and workforce type comparable to yours, cost or productivity accountability, and a process improvement with measured before-and-after numbers",
      },
      {
        group: "Strongly preferred",
        items:
          "Lean or Six Sigma certification used rather than framed, workforce-management and rostering experience, the systems you run (ERP, WMS, CRM or ticketing), and client-facing governance experience",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether they owned the number or reported it, what they did in their worst month, and how they handled attrition rather than complaining about it",
      },
    ],
    salaryBands: [
      { experience: "3–5 years", band: "₹5–10 LPA", note: "Assistant manager; a shift or a sub-process" },
      { experience: "6–9 years", band: "₹11–20 LPA", note: "Manager owning a site, process or P&L line" },
      { experience: "10–14 years", band: "₹20–35 LPA", note: "Senior or regional operations manager" },
      { experience: "15+ years", band: "₹35 LPA+", note: "Head of operations and COO track" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "What they operated, the metric they owned, team size and workforce type, cost accountability, and one improvement with real numbers.",
      },
      {
        stage: "2 · Metrics deep dive (60 min)",
        detail:
          "Walk through twelve months of their operating metric, including the bad months. The bad months are where you learn whether they diagnose or deflect.",
      },
      {
        stage: "3 · Site or floor conversation (45–60 min)",
        detail:
          "Where possible, walk them through your operation and ask what they would change in the first 30 days. Specificity here predicts performance better than any case study.",
      },
      {
        stage: "4 · People-management round (30–45 min)",
        detail:
          "How they manage supervisors, how they handle an underperformer, and how they think about attrition. In frontline-heavy operations this is the deciding round.",
      },
    ],
    pitfalls: [
      {
        title: "Ignoring the workforce-type mismatch",
        description:
          "Managing a small specialist team and managing hundreds of frontline staff with high churn require different instincts. A manager from the first world is often overwhelmed by the second, and the CV gives no warning.",
      },
      {
        title: "Accepting ownership claims without numbers",
        description:
          "Many candidates report a metric rather than own it. Asking for twelve months of actuals, including the misses, resolves it in one conversation and is the most useful hour in this process.",
      },
      {
        title: "A Six Sigma belt with no project behind it",
        description:
          "Certification is common and cheap. We ask for one project, its baseline, what changed and what the measured result was. Candidates who cannot produce that are certified, not capable.",
      },
      {
        title: "Hiring for stability when you need a turnaround",
        description:
          "Running a stable operation well and fixing a broken one are different temperaments. If the operation is in trouble, say so in the brief — some of the best candidates specifically want that, and they will not take a role described as steady-state.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "48–72 working hours; the pool is deep but match quality varies widely" },
      { label: "Realistic time to offer", value: "3–4 weeks; longer where a site visit is part of selection" },
      { label: "Typical notice period", value: "30–60 days; 90 days at senior levels" },
      { label: "Attrition", value: "15–25% at manager level; far higher in the teams they manage" },
      { label: "Expected hike", value: "20–30% on a lateral move" },
    ],
    faqs: [
      {
        question: "How do you match operations experience to our business?",
        answer:
          "On three things: the metric (SLA, TAT, throughput, uptime, productivity), the workforce type and span of control, and the systems the operation runs on. Industry familiarity matters less than those three. A fulfilment manager moves into a BPO delivery role more easily than a BPO manager with a 15-person specialist team moves into a 300-person fulfilment centre.",
      },
      {
        question: "Can you hire operations managers for tier-2 and tier-3 locations?",
        answer:
          "Yes, and we usually source from the surrounding region rather than the metros, because a candidate who already lives in that belt is far more likely to stay. Where the local pool genuinely lacks the seniority, we are explicit about that at briefing and build the relocation and family conversation into screening before submitting anyone.",
      },
      {
        question: "Do you screen for Lean or Six Sigma certification?",
        answer:
          "We record it, but we screen on the project behind it: baseline, intervention, measured result. Certification without a project is common and tells you little. A candidate who can walk through a change that cut handling time or error rate by a stated percentage is worth more than a Black Belt who cannot.",
      },
      {
        question: "Can you supply supervisors and frontline teams as well as the manager?",
        answer:
          "Yes, and sequencing matters: hire the manager first so they can help select their own supervisors, then recruit the frontline layer in batches against your training calendar. Frontline volume hiring is priced per position rather than as a percentage of CTC, and can run on our payroll as contract staffing where you want the headcount to flex.",
      },
    ],
    related: ["warehouse-manager", "sales-manager", "hr-manager"],
    industries: ["bpo-shared-services-recruitment", "logistics-supply-chain-recruitment", "retail-ecommerce-recruitment"],
  },
  {
    slug: "production-engineer",
    icon: "factory",
    title: "Production Engineer",
    group: "Industrial & Finance",
    h1: "Hire Production Engineers in India — Line, Shift & Plant Operations",
    metaTitle: "Hire Production Engineers in India | Line & Shift Operations",
    metaDescription:
      "Hire production engineers in India for auto, engineering, chemical and FMCG plants. Screened on machines run, volumes, OEE and rejection numbers they personally owned.",
    primaryKeyword: "hire production engineer India",
    intro: [
      "A production engineer is hired to make a line run to plan, shift after shift. The screen that works is therefore entirely concrete: which machines, what cycle time, what volume per shift, what OEE, what rejection rate, and what they did on the day the line stopped. Candidates who have genuinely run a line answer those in numbers within a minute. Candidates who have shadowed one answer in paragraphs.",
      "The sub-sector matters more than the title. Discrete manufacturing — auto components, engineering, white goods — runs on cycle time, changeover and PPM. Process manufacturing — chemicals, food, pharma — runs on batch yield, utilities and GMP or GLP discipline. A strong engineer from one is not a drop-in for the other, and we match on equipment and process rather than on the words 'production engineer'.",
      "The constraint that decides whether this mandate closes is almost never skill. It is relocation. Plants sit in industrial estates an hour or more from any city — Manesar, Chakan, Pithampur, Hosur, Sanand — and candidates accept and then withdraw once family, schooling and spouse employment are properly considered. We have that conversation at screening, before you have invested four weeks.",
    ],
    responsibilities: [
      "Run the shift to the production plan: manpower allocation, machine readiness, material availability",
      "Own the line's output, cycle time and OEE, and escalate what blocks them",
      "Control rejection and rework, and drive the corrective actions when PPM moves",
      "Coordinate with maintenance on breakdowns, preventive schedules and changeovers",
      "Enforce safety and 5S on the floor, including PPE compliance and near-miss reporting",
      "Maintain production records, shift reports and the documentation audits ask for",
      "Train operators and contract staff, and manage the daily discipline that keeps throughput stable",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "Hands-on floor experience in a comparable process, machines and volumes they can name, OEE or rejection numbers they owned, shift-handling experience, and safety discipline that is practised rather than recited",
      },
      {
        group: "Strongly preferred",
        items:
          "BE or diploma in Mechanical, Production or Chemical, exposure to the audit standard you operate to (IATF, ISO, GMP), lean tools used on a real project, SAP PP or an equivalent ERP, and automation or PLC familiarity",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether the numbers were theirs or the plant's, what happened in their last breakdown, and whether relocation has been discussed with family rather than agreed in an interview",
      },
    ],
    salaryBands: [
      { experience: "0–2 years", band: "₹2.4–4.5 LPA", note: "GET and diploma trainee; large supply from the local belt" },
      { experience: "3–5 years", band: "₹4.5–8 LPA", note: "Shift engineer owning a line" },
      { experience: "6–9 years", band: "₹8–16 LPA", note: "Production manager or section head" },
      { experience: "10+ years", band: "₹16–30 LPA+", note: "Plant operations lead; plant head roles run higher" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "Machines, processes, volumes, OEE and rejection numbers, shift pattern, audit standards faced, plus the relocation and family conversation.",
      },
      {
        stage: "2 · Technical round with the plant team (45–60 min)",
        detail:
          "Take them through your line on paper or in person and ask what they would check first on a slow shift. Floor instinct shows immediately.",
      },
      {
        stage: "3 · Problem-solving round (30–45 min)",
        detail:
          "A real rejection or downtime problem from your plant and how they would approach root cause. Structure matters more than the answer.",
      },
      {
        stage: "4 · Plant visit (same day where possible)",
        detail:
          "Let them see the location, the shift pattern and the township. This is the step that prevents the acceptance-then-withdrawal pattern that plagues plant hiring.",
      },
    ],
    pitfalls: [
      {
        title: "Relocation agreed in the interview and refused at home",
        description:
          "The most common cause of a failed plant offer in India. We screen on family situation, schooling and spouse employment before submitting, and we recommend a plant visit before the offer rather than after.",
      },
      {
        title: "Matching on job title rather than process",
        description:
          "A chemical process engineer and an auto-component production engineer share a title and little else. Matching on equipment and process keeps the shortlist small and the interview-to-offer ratio high.",
      },
      {
        title: "Metro bands applied to plant locations",
        description:
          "A band set against Pune or NCR salaries will overpay in Pithampur and underpay for anyone who has to relocate into it. We benchmark against the local industrial belt and tell you where your band actually sits.",
      },
      {
        title: "No clarity on shift rotation",
        description:
          "Candidates will not raise it, and then decline at the offer stage. State the rotation, the night-shift frequency and the transport arrangement in the brief; the ones who accept on that basis stay.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "48–72 working hours in established industrial belts" },
      { label: "Realistic time to offer", value: "2–3 weeks locally, 5–8 weeks where relocation is required" },
      { label: "Typical notice period", value: "30 days at engineer level, 60–90 days for managers" },
      { label: "Attrition", value: "8–15% at engineer level; low by Indian standards" },
      { label: "Expected hike", value: "15–25%; relocation and accommodation support often matter more" },
    ],
    faqs: [
      {
        question: "Can you hire production engineers for a plant far from any city?",
        answer:
          "Yes — most of our manufacturing mandates are outside metros. We search the surrounding industrial belt first, because an engineer already living in that region is far more likely to join and stay, then widen to candidates who have worked in a comparable plant town. The family and schooling conversation happens at screening, not after selection.",
      },
      {
        question: "How do you assess floor experience rather than paper experience?",
        answer:
          "By making the candidate talk through their own line in numbers: which machines, what cycle time, what volume per shift, what OEE and rejection rate they owned, what happened in the last breakdown and the last changeover. Engineers who have run a line answer in specifics within a minute; the conversation sorts itself out very quickly.",
      },
      {
        question: "Do you also supply operators and ITI trades?",
        answer:
          "Yes, as a separate volume mandate. Machine operators, fitters, welders, electricians and helpers are sourced through local ITI and trade-institute networks and field drives, usually on our payroll as contract staffing with PF, ESIC, minimum wages and CLRA registers handled by us. Engineer-level hiring runs as a permanent search alongside it.",
      },
      {
        question: "Can you support a new plant commissioning?",
        answer:
          "Yes, and it is a staged plan rather than a set of vacancies. Production and maintenance leadership first, then shift engineers, then operators and contract staff timed to trial runs and validation. We build that sequence with you and can hold the operator layer on our payroll until the plant stabilises.",
      },
    ],
    related: ["quality-engineer", "operations-manager", "warehouse-manager"],
    industries: ["manufacturing-recruitment", "automotive-recruitment", "healthcare-pharma-recruitment"],
  },
  {
    slug: "quality-engineer",
    icon: "shield",
    title: "Quality Engineer",
    group: "Industrial & Finance",
    h1: "Hire Quality Engineers in India — QA, QC, APQP & Supplier Quality",
    metaTitle: "Hire Quality Engineers in India | QA, QC, APQP & IATF",
    metaDescription:
      "Hire quality engineers in India. QA and QC, APQP and PPAP, supplier quality and customer quality engineers screened on audits they personally faced and PPM they owned.",
    primaryKeyword: "hire quality engineer India",
    intro: [
      "Quality is the one plant role where the consequence of a bad hire is external. A production mistake costs you a shift; a quality mistake reaches your customer, triggers a complaint, and in the auto chain can cost you the business. So the screen is built around audits and documentation: which standard, which customer, which audit did they personally stand in front of, and what observations came out of it.",
      "The distinction that matters most is between working in a certified plant and owning the certification. Thousands of CVs list IATF 16949 because the employer held it. Far fewer candidates have prepared the documentation, defended it and closed the observations. We ask directly, and the answer separates the shortlist in two questions.",
      "Within quality, incoming and in-process QC, supplier quality, customer quality and warranty, and NPD quality with APQP and PPAP are different jobs. Supplier quality in particular needs someone who can sit in a vendor's plant and hold a line with their management — a different temperament from an in-process inspector, and a different band.",
    ],
    responsibilities: [
      "Own in-process and final inspection, and the sampling plans behind them",
      "Drive rejection and PPM reduction with structured root cause — 8D, 5-why, fishbone",
      "Prepare and maintain quality documentation: control plans, FMEA, MSA, SPC, work instructions",
      "Run APQP and PPAP for new parts and manage the customer approval route",
      "Handle customer complaints and warranty analysis, including the corrective-action response",
      "Audit suppliers, develop their process capability and approve or reject their submissions",
      "Face internal, customer and certification audits and close the observations raised",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "Audit standard worked to and personally faced, PPM or rejection numbers they owned, structured root-cause ability demonstrated on a real problem, measuring-instrument and gauge knowledge, and documentation discipline",
      },
      {
        group: "Strongly preferred",
        items:
          "IATF 16949 or the standard you operate to, core tools (APQP, PPAP, FMEA, MSA, SPC) used rather than listed, CMM and metrology experience, Six Sigma Green Belt with a real project, and supplier-audit exposure",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether they prepared the documentation or filed it, which audits they personally attended, and whether a customer complaint they handled actually closed",
      },
    ],
    salaryBands: [
      { experience: "0–2 years", band: "₹2.4–4.5 LPA", note: "Inspection and documentation support" },
      { experience: "3–5 years", band: "₹5–9.5 LPA", note: "Quality engineer owning a line or a supplier set" },
      { experience: "6–9 years", band: "₹9.5–18 LPA", note: "Quality manager; audit and customer-facing ownership" },
      { experience: "10+ years", band: "₹18–32 LPA+", note: "Head of quality; premium for OEM customer-quality background" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "Standards and audits personally faced, PPM owned, core tools used, instruments handled, and whether the documentation was theirs.",
      },
      {
        stage: "2 · Core tools round (45–60 min)",
        detail:
          "Walk through a control plan and an FMEA they wrote, and a PPAP they submitted. Candidates who only maintained documents cannot sustain this.",
      },
      {
        stage: "3 · Problem round (45 min)",
        detail:
          "A live rejection or customer complaint from your plant, worked through to root cause and corrective action. Structure and evidence, not a guess.",
      },
      {
        stage: "4 · Floor and stakeholder round (30–45 min)",
        detail:
          "Whether they can stop a line against production pressure, and whether they can hold a line with a supplier's management. Backbone is part of the specification here.",
      },
    ],
    pitfalls: [
      {
        title: "Certified plant mistaken for certified candidate",
        description:
          "Working somewhere that holds IATF is not the same as preparing and defending the documentation. Two specific questions — which audit did you attend, which observations did you close — resolve it before you spend an interview slot.",
      },
      {
        title: "Hiring an inspector for a supplier-quality job",
        description:
          "Supplier quality means travelling to a vendor's plant and holding a position against their management. An in-process inspector, however accurate, is often the wrong temperament, and the role will quietly stop being done.",
      },
      {
        title: "Audit-deadline hiring left too late",
        description:
          "A quality engineer needed before a customer audit is a two-week search at best. Starting four weeks out gives you a real choice; starting one week out gives you whoever is free.",
      },
      {
        title: "No authority to stop the line",
        description:
          "If quality cannot halt production, the role is decorative and good candidates work that out in the interview. Be explicit about the authority the role carries — it is a genuine attraction for the people worth hiring.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "48–72 working hours in established industrial belts" },
      { label: "Realistic time to offer", value: "2–3 weeks; 4–6 weeks for customer-quality and head-of-quality roles" },
      { label: "Typical notice period", value: "30 days at engineer level, 60–90 days for managers" },
      { label: "Attrition", value: "8–15% at engineer level" },
      { label: "Expected hike", value: "15–25%; OEM customer-quality experience commands a premium" },
    ],
    faqs: [
      {
        question: "How do you verify IATF or ISO audit experience?",
        answer:
          "We ask which audits the candidate personally attended, what their role in the audit was, which observations were raised against their area and how those were closed. Candidates whose exposure was only working in a certified plant cannot answer past the second question. The answer goes on the shortlist note in writing.",
      },
      {
        question: "Can you hire a quality engineer before a customer audit?",
        answer:
          "Yes, and audit-driven mandates run on a compressed timeline with a shortlist inside 48 hours. We filter specifically for candidates who have personally faced that standard and that customer rather than for people who have worked in a certified plant, which is a much smaller and more useful pool. Starting three to four weeks before the audit gives you a real choice.",
      },
      {
        question: "What is the difference between supplier quality and in-process quality for hiring?",
        answer:
          "In-process quality is about inspection discipline, sampling and reaction time on your own floor. Supplier quality is about travelling to vendors, auditing their process capability and holding a position against their management, often while they are also your commercial partner. Different skill, different temperament, different band — and mixing them in one JD leaves the role open.",
      },
      {
        question: "Do you recruit quality roles outside automotive?",
        answer:
          "Yes. Pharma and food plants run to GMP, GLP and HACCP rather than IATF, with validation and documentation practices of their own, and we source quality engineers for those standards specifically. The screening logic is the same — which audits did you personally face — but the pools barely overlap, so we never cross-submit between them.",
      },
    ],
    related: ["production-engineer", "qa-engineer", "operations-manager"],
    industries: ["automotive-recruitment", "manufacturing-recruitment", "healthcare-pharma-recruitment"],
  },
  {
    slug: "warehouse-manager",
    icon: "truck",
    title: "Warehouse Manager",
    group: "Industrial & Finance",
    h1: "Hire Warehouse Managers in India — Fulfilment, 3PL & Distribution",
    metaTitle: "Hire Warehouse Managers in India | Fulfilment & 3PL Operations",
    metaDescription:
      "Hire warehouse and fulfilment centre managers in India. Screened on throughput, SKU count, square footage, WMS experience and the contract workforce they actually managed.",
    primaryKeyword: "hire warehouse manager India",
    intro: [
      "A warehouse manager is accountable every single day, and the backlog from a bad Monday does not clear by Friday. So the screen is operational and numeric: square footage, SKU count, daily inbound and outbound volumes, team size including contract labour, the WMS they ran, and the SLA they were held to with penalties attached.",
      "Workforce management is the part most employers under-weight. A fulfilment centre runs on 100 to 400 contract staff with very high churn, which means the manager's real skill is daily manpower planning, contractor handling and statutory discipline — not racking layout. A manager who has only run a small, stable, in-house team usually struggles with that, and the CV gives no warning.",
      "Location is the other hard constraint. Warehousing parks sit 30 to 60 km outside the cities they serve — Bhiwandi, Luhari, Chakan, Sriperumbudur, Panvel — so we source from the towns within an honest commute of the site rather than from the metro core, and we ask about site transport before anybody is submitted.",
    ],
    responsibilities: [
      "Run daily inbound, putaway, picking, packing and dispatch to the committed SLA",
      "Plan manpower by shift against volume forecasts, including contract labour and peak ramps",
      "Own inventory accuracy — cycle counts, reconciliation, shrinkage and damage control",
      "Manage the WMS as the system of record, and the exceptions it throws",
      "Control cost per unit: manpower productivity, packaging consumption, space utilisation",
      "Keep safety, housekeeping and statutory compliance in order, including contract-labour registers",
      "Handle returns and reverse logistics, and report to client or internal stakeholders",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "Square footage, SKU count and daily volumes they personally ran, team size including contract staff, hands-on WMS experience, inventory accuracy numbers, and shift and peak handling",
      },
      {
        group: "Strongly preferred",
        items:
          "Your WMS specifically (SAP EWM, Manhattan, Blue Yonder, Unicommerce), 3PL or e-commerce fulfilment background matching your model, contract-labour compliance exposure, and cost-per-unit accountability",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether they managed contract labour or only staff, what they did in the last peak, how they handled a shrinkage problem, and whether the commute to your site is realistic for them",
      },
    ],
    salaryBands: [
      { experience: "0–2 years", band: "₹2.4–4.2 LPA", note: "Shift or zone in-charge rather than site ownership" },
      { experience: "3–5 years", band: "₹4.5–9 LPA", note: "Warehouse manager for a single site" },
      { experience: "6–9 years", band: "₹9–17 LPA", note: "Large site or multi-site cluster ownership" },
      { experience: "10+ years", band: "₹17–30 LPA+", note: "Regional operations and network roles" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "Site size, SKU count, daily volumes, team and contract-labour size, WMS used, SLA and penalty exposure, and commute reality for your location.",
      },
      {
        stage: "2 · Operations deep dive (45–60 min)",
        detail:
          "Walk through a normal day and their worst week. The worst week tells you how they plan manpower and how they escalate.",
      },
      {
        stage: "3 · Site walk (60 min, on location)",
        detail:
          "Walk your floor and ask what they would change in the first 30 days. Nothing else distinguishes a manager from a coordinator this quickly.",
      },
      {
        stage: "4 · Compliance and people round (30 min)",
        detail:
          "Contractor handling, statutory registers, safety discipline and how they manage attrition in the contract layer.",
      },
    ],
    pitfalls: [
      {
        title: "Commute dismissed at interview and fatal by month three",
        description:
          "A two-hour one-way commute to a peripheral site ends in a resignation whatever the candidate says in the interview. We screen honestly on where they live and whether site transport exists, and we source from the surrounding towns rather than the city centre.",
      },
      {
        title: "Staff management mistaken for contract-labour management",
        description:
          "Running 20 permanent employees and running 300 contract staff with 60% annual churn are different jobs. Ask for the contract headcount they personally managed, not the total headcount of the site.",
      },
      {
        title: "No plan for peak before peak arrives",
        description:
          "Festive and sale peaks need two to three times baseline headcount at a known date. Managers who have run a peak talk about the ramp plan unprompted; the ones who have not talk about hiring when it happens.",
      },
      {
        title: "Ignoring principal-employer compliance exposure",
        description:
          "Contract labour brings CLRA, PF, ESIC and minimum-wage obligations that fall back on the principal employer. A manager who has never maintained those registers leaves you exposed, and the exposure surfaces at inspection.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "48 working hours in major warehousing belts; 3–4 days elsewhere" },
      { label: "Realistic time to offer", value: "2–3 weeks; the site walk is worth keeping in the process" },
      { label: "Typical notice period", value: "15–30 days; among the shortest of any manager role" },
      { label: "Attrition", value: "15–20% at manager level; 60%+ in the contract layer below" },
      { label: "Expected hike", value: "15–25%; site transport and shift allowance decide many offers" },
    ],
    faqs: [
      {
        question: "Can you hire for a warehouse 50 km outside the city?",
        answer:
          "Yes, and that is the normal case rather than the exception. We source from the towns and villages within an honest commute radius of the site instead of the metro core, we ask whether site transport is provided, and for managerial roles we look first at candidates already working in that belt — they have solved the commute question and are far more likely to stay.",
      },
      {
        question: "Does the candidate need our specific WMS?",
        answer:
          "It helps but it is rarely decisive, with one exception: SAP EWM and Manhattan are deep systems where experience genuinely transfers into productivity from week one. For Unicommerce, Increff and similar platforms, a manager who has run any WMS properly picks up yours in a couple of weeks, so we would not shrink the shortlist over it.",
      },
      {
        question: "Can you supply the warehouse workforce as well as the manager?",
        answer:
          "Yes. Pickers, packers, loaders, forklift operators and delivery associates are hired at volume through local field drives and institute networks, on our payroll as contract staffing, with PF, ESIC, minimum wages, CLRA registers and monthly statutory documentation handled by us. Most clients hire the manager permanently and flex the layer below.",
      },
      {
        question: "How do you prepare for peak season hiring?",
        answer:
          "By agreeing the ramp calendar weeks in advance — batch sizes, start dates, training capacity and the buffer needed for the attrition that always happens mid-peak. Peak headcount runs as contract staffing with defined start and end dates, so it ramps down cleanly instead of becoming permanent cost.",
      },
    ],
    related: ["operations-manager", "production-engineer", "sales-manager"],
    industries: ["logistics-supply-chain-recruitment", "retail-ecommerce-recruitment", "manufacturing-recruitment"],
  },
  {
    slug: "chartered-accountant",
    icon: "crown",
    title: "Chartered Accountant",
    group: "Industrial & Finance",
    h1: "Hire Chartered Accountants in India — Controllership, Tax & Audit",
    metaTitle: "Hire Chartered Accountants in India | CA for Finance & Tax Roles",
    metaDescription:
      "Hire chartered accountants in India for controllership, taxation, statutory reporting, audit and FP&A leadership. Screened on Ind AS depth, audit interface and what they personally signed off.",
    primaryKeyword: "hire chartered accountant India",
    intro: [
      "A CA is expensive, so the first useful question is whether the work actually needs one. Transaction processing, reconciliation and routine GST and TDS filing do not; a qualified candidate hired to do them is bored within a quarter and gone within a year. Statutory judgement, Ind AS application, tax positions, audit interface and management reporting that drives decisions — those do.",
      "We screen on what the candidate personally signed off rather than the size of the firm they trained in. Which financial statements did they prepare, which Ind AS did they actually apply, who did they face in the audit and what did they argue, which notices did they respond to, and what did they decide rather than escalate. Big Four training is a useful signal of rigour; it is not evidence of in-house ownership.",
      "The in-house market splits into controllership and reporting, direct and indirect tax, business finance and FP&A, and internal audit and risk. A fresh CA from practice can move into any of them; an experienced one has usually specialised, and moving across costs a year of productivity. We match on the track, not just on the qualification.",
    ],
    responsibilities: [
      "Own the books and the statutory financial statements, including Ind AS application and disclosures",
      "Manage the statutory, tax and internal audit cycles and the queries that come with them",
      "Own direct and indirect tax compliance, positions, assessments and notices",
      "Run the month-end and year-end close with the schedules and controls behind it",
      "Produce management reporting that leads with the decision, including variance explanation",
      "Maintain internal financial controls and work with auditors on their documentation",
      "Support banking, lender reporting, due diligence and fundraising as required",
    ],
    mustHave: [
      {
        group: "Non-negotiable",
        items:
          "CA qualified with membership in good standing, financial statements they prepared, Ind AS applied rather than studied, audit interface handled personally, and the specific track you are hiring for",
      },
      {
        group: "Strongly preferred",
        items:
          "Your industry's accounting particulars, ERP depth (SAP FICO, Oracle, NetSuite), consolidation and multi-entity experience, team-management track record, and transaction or diligence exposure where relevant",
      },
      {
        group: "What we probe hardest",
        items:
          "Whether they owned or assisted, how many attempts and when they qualified relative to the role's seniority expectations, and whether the practice-to-industry transition has actually happened yet",
      },
    ],
    salaryBands: [
      { experience: "Fresher (0–1 year)", band: "₹8–14 LPA", note: "Wide spread; Big Four and top-rank candidates at the upper end" },
      { experience: "2–5 years", band: "₹14–26 LPA", note: "Manager level; controllership or tax specialisation forming" },
      { experience: "6–9 years", band: "₹26–45 LPA", note: "Financial controller and head of tax" },
      { experience: "10+ years", band: "₹45–80 LPA+", note: "Finance director and CFO track, usually via executive search" },
    ],
    interview: [
      {
        stage: "1 · Consultant screen",
        detail:
          "Track, statements prepared, Ind AS genuinely applied, audit interface, notices handled, and whether their experience is practice or industry.",
      },
      {
        stage: "2 · Technical round (60 min)",
        detail:
          "Live treatment questions on your actual accounting issues — revenue recognition, leases, provisions, deferred tax — with their reasoning exposed, not just the conclusion.",
      },
      {
        stage: "3 · Case or reporting exercise (2–3 hours)",
        detail:
          "Review a messy trial balance or build a reporting pack from imperfect data. How they handle incomplete information is the real test.",
      },
      {
        stage: "4 · Leadership and judgement round (45 min)",
        detail:
          "How they handle pressure to take an aggressive position, how they manage a team through close, and how they present bad news to a board.",
      },
    ],
    pitfalls: [
      {
        title: "Hiring a CA for work that does not need one",
        description:
          "Transaction processing and routine filing do not require a qualified candidate. A CA in that seat is expensive, under-used and gone within the year. An accountant plus a retained CA firm is usually the better structure, and we will say so.",
      },
      {
        title: "Mistaking practice experience for in-house ownership",
        description:
          "Auditing twenty companies is not the same as closing one set of books every month with a board waiting. The transition is real and takes six months. If you need immediate ownership, hire someone who has already made it.",
      },
      {
        title: "Ignoring the track",
        description:
          "A tax specialist put into controllership, or a controller into business finance, loses a year. At six-plus years of experience, specialisation is real and should be matched rather than assumed away.",
      },
      {
        title: "Budgeting against the fresher band for a controller",
        description:
          "CA bands in India widen very fast with experience, and the controllership market has repriced sharply. A band set two years ago is frequently 20–25% light and the search will not close until it is corrected.",
      },
    ],
    hiringNotes: [
      { label: "Shortlist turnaround", value: "3–5 working days; faster for freshers, slower for specialised tracks" },
      { label: "Realistic time to offer", value: "3–6 weeks; 6–10 weeks for controller and head-of-finance roles" },
      { label: "Typical notice period", value: "60–90 days; among the longest of any role we recruit for" },
      { label: "Attrition", value: "15–25% in the first three years post-qualification, then much lower" },
      { label: "Expected hike", value: "25–40%; practice-to-industry moves often more" },
    ],
    faqs: [
      {
        question: "Do we need a CA or would an experienced accountant do?",
        answer:
          "An accountant for the transaction layer, reconciliation, GST and TDS filing and the month-end close. A CA when you need statutory judgement, Ind AS application, tax positions, audit interface and reporting that drives decisions. A common and cheaper structure for smaller companies is a strong senior accountant in-house plus a retained CA firm for the judgement, and we will recommend that where it fits.",
      },
      {
        question: "Should we hire from practice or from industry?",
        answer:
          "From practice if you have a finance structure to absorb and train them, and you want audit rigour; expect about six months before full productivity. From industry if you need immediate ownership of a close, an ERP and a board pack. The transition from practice to in-house is real work, and pretending otherwise is why some of these hires do not survive the first year-end.",
      },
      {
        question: "How do you assess technical depth beyond the qualification?",
        answer:
          "By asking what they personally signed off: which financial statements they prepared, which Ind AS they actually applied and how, who they faced in the audit and what they argued, which notices they drafted the response to. The qualification tells you they passed; those questions tell you what they have owned.",
      },
      {
        question: "What is a realistic timeline to hire a financial controller?",
        answer:
          "Six to ten weeks to offer, plus a 60 to 90 day notice period, so three to five months from brief to joining is the honest answer. If the seat is currently empty, plan interim cover — we can place a contract CA or a senior accountant through our own payroll while the permanent search runs.",
      },
    ],
    related: ["financial-analyst", "accountant", "operations-manager"],
    industries: ["bfsi-recruitment", "manufacturing-recruitment", "it-software-recruitment"],
  },
];

export const roleBySlug = new Map(rolePages.map((role) => [role.slug, role]));

/** Role pages grouped for the /hire hub, in the order the hub renders them. */
export const roleGroups = ["Technology", "Business", "Industrial & Finance"] as const;
