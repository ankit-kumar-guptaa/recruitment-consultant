import type { BlogArtVariant } from "@/components/ui/Artwork";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type Post = {
  slug: string;
  art: BlogArtVariant;
  category: string;
  readingTime: string;
  published: string;
  updated: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  blocks: Block[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const posts: Post[] = [
  {
    slug: "recruitment-agency-fees-india",
    art: "salary",
    category: "Market Insights",
    readingTime: "8 min read",
    published: "2026-06-18",
    updated: "2026-09-12",
    title: "What recruitment agencies charge in India in 2026",
    metaTitle: "Recruitment Agency Charges in India 2026 | Fees Explained",
    metaDescription:
      "How recruitment agency fees work in India: contingency percentages, retained search milestones, contract staffing markups and RPO retainers — plus what actually moves the number.",
    excerpt:
      "Contingency percentages, retained milestones and contract-staffing markups explained — plus what actually drives the number up or down.",
    blocks: [
      {
        type: "p",
        text: "Almost every first conversation with a new client includes the same question, usually within the first five minutes: what will this cost? It is a fair question and it deserves a straight answer, so here is how recruitment agency fees actually work in India, what the ranges look like, and which parts are genuinely negotiable.",
      },
      {
        type: "callout",
        title: "The short version",
        text: "Permanent hiring is charged as a percentage of the candidate's annual CTC, paid after they join. Executive search is a staged retainer. Contract staffing is a monthly markup on CTC. RPO is a fixed monthly fee. Only the first of those carries no financial risk for you at all.",
      },
      { type: "h2", text: "1. Contingency recruitment: a percentage of annual CTC" },
      {
        type: "p",
        text: "This is the default model for permanent roles and the one most employers mean when they say \"recruitment agency fees\". You pay nothing to start the search and nothing if you do not hire. When a candidate the agency introduced joins, you are invoiced a percentage of that candidate's fixed annual CTC.",
      },
      {
        type: "p",
        text: "The percentage moves with how hard the role is to fill, not with how much work the client thinks it involves. Junior and high-volume roles sit at the lower end because the talent pool is deep and a single search can produce several placements. Niche technical skills, regulated roles and anything requiring relocation sit higher because the pool is small and the outreach is slow.",
      },
      {
        type: "ul",
        items: [
          "What is included: sourcing, screening, shortlisting, interview coordination, offer support and the replacement guarantee.",
          "What is usually extra: formal third-party background verification, psychometric testing, and candidate travel for interviews.",
          "When it is invoiced: after the candidate joins, not after they accept. An acceptance that never turns into a joining is not a placement.",
        ],
      },
      { type: "h3", text: "What actually moves the percentage" },
      {
        type: "table",
        head: ["Factor", "Pushes the fee down", "Pushes the fee up"],
        rows: [
          ["Seniority", "Junior and mid-level roles", "Leadership and specialist roles"],
          ["Volume", "Several roles in the same family", "A single one-off mandate"],
          ["Exclusivity", "Exclusive mandate", "Four agencies racing the same role"],
          ["Skill scarcity", "Widely available skills", "Niche stack, regulated licence, rare domain"],
          ["Location", "Metro with a deep talent pool", "Tier-3 site or relocation required"],
          ["Guarantee length", "Standard guarantee period", "Extended guarantee"],
        ],
      },
      {
        type: "p",
        text: "The two levers most employers underuse are volume and exclusivity. Committing three roles instead of one, or giving a single agency a clean 30-day exclusive window, changes the economics of the search for the agency and that should be reflected in your rate. If it is not, ask.",
      },
      { type: "h2", text: "2. Retained executive search: staged fees" },
      {
        type: "p",
        text: "Leadership mandates do not work on contingency, and any firm that offers to run your CFO search on a no-win-no-fee basis is telling you it will not do the research. Mapping a market, approaching senior people confidentially and assessing them properly takes weeks of senior consultant time before there is anything to show you.",
      },
      {
        type: "p",
        text: "Retained search is therefore billed in stages — typically a portion at engagement, a portion on shortlist delivery and the balance on placement. The total is still expressed as a percentage of first-year compensation, but it is higher than contingency because the scope is different: market mapping, competency-based assessment, written candidate reports, detailed referencing and a market intelligence summary you keep whether or not you hire.",
      },
      {
        type: "callout",
        title: "Worth knowing",
        text: "On a retained search the intelligence has value on its own. Even if you decide not to hire, you end up with a map of who is doing that job at your competitors, what they are being paid, and why they would or would not move. Several clients have used that to restructure a role rather than fill it.",
      },
      { type: "h2", text: "3. Contract staffing: a monthly markup" },
      {
        type: "p",
        text: "For contract and temporary staff there is no one-time placement fee. You pay the worker's CTC plus a monthly markup that covers payroll processing, the employer's statutory contributions, compliance and the agency's margin. The worker is on the agency's payroll, so PF, ESIC, professional tax, challans and returns are the agency's responsibility.",
      },
      {
        type: "p",
        text: "Markups fall as headcount rises — running payroll for sixty people is not sixty times the work of running it for one. If you are being quoted the same markup for a 5-person project team and a 200-person warehouse ramp-up, that is a conversation worth having.",
      },
      {
        type: "ul",
        items: [
          "Ask what the markup includes. Statutory employer contributions are sometimes quoted inside it and sometimes on top, which makes a big difference to the comparison.",
          "Ask about conversion terms upfront. If you may want to move someone to your own payroll later, agree the conversion fee and minimum contract period before deployment, not after.",
          "Ask what compliance documents you receive each month. PF and ESIC challans, wage registers and returns are what a principal-employer audit will ask for.",
        ],
      },
      { type: "h2", text: "4. RPO: a fixed monthly retainer" },
      {
        type: "p",
        text: "If you are hiring continuously rather than occasionally, paying a percentage on every placement gets expensive quickly. RPO replaces that with a fixed monthly fee for a recruiter or a team embedded in your process, working in your ATS under your employer brand.",
      },
      {
        type: "p",
        text: "The honest threshold is somewhere around twenty hires a year in a repeatable role family. Below that, contingency almost always works out cheaper and you should be suspicious of anyone who tells you otherwise. Above it, the cost per hire on RPO usually lands well below a percentage model, and you also get a pipeline that keeps building between requisitions instead of resetting each time.",
      },
      { type: "h2", text: "What to ask before you sign anything" },
      {
        type: "ol",
        items: [
          "Is the fee calculated on fixed CTC or total CTC including variable pay and joining bonus? This single definition can change the invoice by fifteen percent.",
          "How long is the replacement guarantee, and does it start from the offer date or the joining date?",
          "Does the guarantee give a replacement, a refund, or a credit note? They are not the same thing.",
          "What happens if the candidate resigns during notice period and never joins? No joining should mean no invoice.",
          "Is there an ownership period on introduced candidates, and how long is it?",
          "Are background verification, assessments and candidate travel inside the fee or billed separately?",
          "For contract staffing: are statutory employer contributions inside the markup or on top of it?",
        ],
      },
      {
        type: "p",
        text: "Get the answers in writing before the search starts. A good agency will offer them without being asked, because ambiguity at the start of a mandate is what produces an argument at the end of it.",
      },
      { type: "h2", text: "The cost of not using an agency" },
      {
        type: "p",
        text: "It is worth putting the fee next to the alternative rather than next to zero. A role that stays open for three months costs you the output of that role for three months, plus the time your managers spend screening, plus whatever a rushed hire costs when it does not work out. Agency fees look expensive as a line item and much less so as a comparison.",
      },
      {
        type: "p",
        text: "That is not an argument for using an agency on everything. If you have a strong in-house team and a deep applicant flow for a role, use them. The case for an agency is strongest where your own pipeline is thin, the skill is scarce, the search has to be confidential, or the position has already been open longer than it should be.",
      },
    ],
    faqs: [
      {
        question: "What is the average recruitment agency fee in India?",
        answer:
          "Permanent recruitment is charged as a percentage of the candidate's annual CTC, invoiced after they join, and the percentage varies with the seniority and scarcity of the role. Retained executive search is higher and billed in stages, contract staffing is a monthly markup on CTC, and RPO is a fixed monthly retainer. Ask for the exact figure in writing before the search begins.",
      },
      {
        question: "Do recruitment agencies charge upfront in India?",
        answer:
          "Not on contingency permanent hiring — you are invoiced only after your chosen candidate joins. Retained executive search does carry a staged fee starting at engagement, because the research work happens before any shortlist exists. Reputable agencies never charge the candidate anything at all.",
      },
      {
        question: "Is the fee calculated on fixed CTC or total CTC?",
        answer:
          "It depends on the agreement, which is exactly why it should be defined in writing. A fee on total CTC including variable pay and joining bonus can be meaningfully higher than the same percentage on fixed CTC. Clarify this before the search, not on the invoice.",
      },
      {
        question: "Can recruitment agency fees be negotiated?",
        answer:
          "Yes, and the two strongest levers are volume and exclusivity. Committing several roles, or giving one agency a clean exclusive window, changes the economics of the search and should be reflected in the rate. Guarantee length and payment terms are also commonly negotiated.",
      },
    ],
    related: ["contract-vs-permanent-hiring", "cut-time-to-hire"],
  },

  {
    slug: "cut-time-to-hire",
    art: "hiring",
    category: "Hiring Strategy",
    readingTime: "6 min read",
    published: "2026-07-22",
    updated: "2026-09-02",
    title: "How to cut time-to-hire without lowering the bar",
    metaTitle: "How to Reduce Time-to-Hire in India Without Lowering the Bar",
    metaDescription:
      "Most hiring delays are process problems, not candidate shortages. Seven fixes that cut time-to-hire — clearer briefs, tighter panels, faster feedback and a realistic offer window.",
    excerpt:
      "Most delays are not caused by a shortage of candidates. They are caused by unclear briefs, slow feedback loops and interview panels that keep changing.",
    blocks: [
      {
        type: "p",
        text: "When a role has been open for eleven weeks, the explanation you usually hear is that there is no talent in the market. Occasionally that is true. Far more often the pipeline was fine and the process leaked — candidates went cold waiting for feedback, the panel changed halfway, or the offer arrived a week after a competitor's.",
      },
      {
        type: "p",
        text: "Here is where the time actually goes, and what to do about each part, without dropping your standards to get a faster close.",
      },
      { type: "h2", text: "1. Write the brief for one job, not two" },
      {
        type: "p",
        text: "The most common cause of a stalled search is a job description that describes two different people. A backend engineer who is also a data scientist. A sales head who will also run marketing. A finance controller with a compliance background who is also comfortable building dashboards.",
      },
      {
        type: "p",
        text: "Each of those exists. None of them exists at the budget attached. Before sourcing starts, separate must-haves from nice-to-haves and be ruthless about it: if you would reject a candidate for not having it, it is a must-have; everything else goes in the second list. A brief with more than five must-haves is usually two jobs.",
      },
      { type: "h2", text: "2. Fix the panel before the first interview" },
      {
        type: "p",
        text: "Name every interviewer and every round before the first candidate is submitted. Adding a round in week three because a stakeholder wants a look resets the clock for everyone already in process, and it is the single most reliable way to lose your strongest candidate — who by definition has other options.",
      },
      {
        type: "ul",
        items: [
          "Three rounds is enough for most roles. Four is the ceiling for anything below leadership.",
          "Block recurring interview slots in the panel's calendar for the duration of the search, rather than finding time per candidate.",
          "Give every interviewer a defined thing to assess, so rounds do not overlap and nobody has to be re-interviewed.",
        ],
      },
      { type: "h2", text: "3. Give feedback in 48 hours, always" },
      {
        type: "p",
        text: "Feedback latency is the largest single component of time-to-hire in most processes, and it is entirely within your control. A candidate waiting six days for a verdict is a candidate talking to somebody else, and the recruiter chasing that feedback cannot tell them anything useful in the meantime.",
      },
      {
        type: "callout",
        title: "A rule worth adopting",
        text: "Feedback within 48 working hours of every round, even if the feedback is \"we are still deciding\". Silence is what loses candidates, not a slow decision honestly communicated.",
      },
      { type: "h2", text: "4. Screen for intent, not just skill" },
      {
        type: "p",
        text: "A technically perfect candidate who is using your offer as leverage with their current employer costs you more time than a candidate who was never qualified. Intent should be tested early: why are they actually looking, what has changed, what would make them stay where they are, and what has their employer done the last time they resigned.",
      },
      {
        type: "p",
        text: "Notice period, current and expected compensation and counter-offer risk belong in the first screening call, not in the offer conversation. That is the whole point of a screening call.",
      },
      { type: "h2", text: "5. Compress the offer window" },
      {
        type: "p",
        text: "Decide the compensation band before the search starts, and get approval for it before the final round rather than after. The gap between a final interview and a signed offer is where good candidates most often disappear, and almost all of it is internal approval time.",
      },
      {
        type: "table",
        head: ["Stage", "Typical drift", "Target"],
        rows: [
          ["Brief to first shortlist", "2–4 weeks", "48 working hours"],
          ["Shortlist to first interview", "1–2 weeks", "3–5 working days"],
          ["Between rounds", "5–10 days", "48 working hours"],
          ["Final round to offer", "1–2 weeks", "48–72 hours"],
          ["Offer to acceptance", "1 week", "48 hours"],
        ],
      },
      { type: "h2", text: "6. Keep the offer warm until the joining date" },
      {
        type: "p",
        text: "In India, notice periods of 60 to 90 days are normal, and a lot can happen in three months. The counter-offer arrives in week two. The competing process that was behind yours catches up. The candidate's manager makes promises. A signed offer is not a joined employee.",
      },
      {
        type: "ol",
        items: [
          "Contact in the first week after acceptance — send the welcome pack and introduce their future manager.",
          "A short call at the midpoint of notice period, ideally from the hiring manager rather than HR.",
          "Documentation and system access confirmed two weeks before the joining date.",
          "A check-in in the final week, because that is when resignations from the new offer actually happen.",
        ],
      },
      { type: "h2", text: "7. Measure the right number" },
      {
        type: "p",
        text: "Time-to-hire measured from requisition approval to offer acceptance hides the two stages that hurt most: how long the role waited before anyone started, and how long it took the accepted candidate to actually join. Measure requisition raised to joined, break it into stages, and look at where the days sit rather than at the total.",
      },
      {
        type: "p",
        text: "Once you can see the stages, the fix is usually obvious and usually free. It is almost never \"post the job on another portal\".",
      },
    ],
    faqs: [
      {
        question: "What is a good time-to-hire in India?",
        answer:
          "For most mid-level roles, four to six weeks from requisition to offer acceptance is a healthy benchmark, plus the notice period before joining. Leadership and niche technical roles run longer because of market mapping and confidentiality. If a standard role is taking more than eight weeks, the cause is usually process latency rather than candidate supply.",
      },
      {
        question: "Why do candidates drop out late in the process?",
        answer:
          "Nearly always because of silence or delay. Feedback that takes a week, an unexpected extra interview round, or an offer that arrives after a competitor's. Late drop-outs are a symptom of process speed, not of candidate seriousness.",
      },
      {
        question: "How do we reduce offer drop-outs during notice period?",
        answer:
          "Test counter-offer risk during the first screening call, and then keep structured contact between acceptance and joining — a welcome pack in week one, a manager call at the midpoint of notice, documentation confirmed two weeks out and a check-in in the final week.",
      },
    ],
    related: ["recruitment-agency-fees-india", "contract-vs-permanent-hiring"],
  },

  {
    slug: "contract-vs-permanent-hiring",
    art: "resume",
    category: "Employer Guide",
    readingTime: "7 min read",
    published: "2026-08-14",
    updated: "2026-09-16",
    title: "Contract staffing vs permanent hiring: which fits the role?",
    metaTitle: "Contract Staffing vs Permanent Hiring in India | Employer Guide",
    metaDescription:
      "When to hire permanent and when to use contract staffing in India — a practical framework covering cost over 12 months, compliance, speed, retention and contract-to-hire.",
    excerpt:
      "A practical framework for deciding when to add headcount, when to hire on contract, and what each option really costs over 12 months.",
    blocks: [
      {
        type: "p",
        text: "The choice between contract staffing and permanent hiring is usually framed as a cost question. It is really a certainty question: how confident are you that this role, at this scope, will still exist and still be worth funding twelve months from now?",
      },
      {
        type: "p",
        text: "Answer that honestly and the model usually picks itself. Here is the framework we use with clients, and the numbers behind it.",
      },
      { type: "h2", text: "Start with certainty, not cost" },
      {
        type: "table",
        head: ["Situation", "Usually best fit", "Why"],
        rows: [
          ["Core role, indefinite need", "Permanent", "Retention and institutional knowledge matter more than flexibility"],
          ["Project with a defined end date", "Contract", "Headcount ends when the project does, with no exit cost"],
          ["Seasonal or festive peak", "Contract", "Scale up and down without changing the permanent headcount plan"],
          ["Covering notice period or maternity leave", "Contract", "Fills a known gap for a known duration"],
          ["New site or new function, scope unclear", "Contract-to-hire", "Learn the real headcount before committing to it"],
          ["Scarce skill, long-term need", "Permanent", "Contract terms rarely attract the scarcest candidates for long"],
          ["Budget frozen but work is not", "Contract", "Often sits under opex rather than headcount approval"],
        ],
      },
      { type: "h2", text: "What each model actually costs over twelve months" },
      {
        type: "p",
        text: "Permanent hiring has a one-time cost — the agency fee, if you use one — and then the ongoing CTC plus your own employer contributions, plus the internal cost of running payroll and compliance for that person.",
      },
      {
        type: "p",
        text: "Contract staffing has no placement fee but a monthly markup on CTC that covers payroll, statutory employer contributions and compliance. Over a full year the markup usually exceeds a one-time placement fee. Over three or six months it usually does not — and that is the actual comparison, because a contract role that runs three months should be compared against three months of permanent employment plus the cost of exiting.",
      },
      {
        type: "callout",
        title: "The comparison people get wrong",
        text: "Comparing a 12-month contract markup against a one-time permanent fee and concluding that contract is expensive. If the need genuinely lasts twelve months, hire permanent. Contract is for when it does not — and the saving is the exit you never have to run.",
      },
      { type: "h2", text: "Compliance: who carries what" },
      {
        type: "p",
        text: "This is the part that catches employers out. Under contract staffing through a proper agency, the worker is on the agency's payroll. The agency is responsible for wages, PF, ESIC, professional tax and statutory filings, and gives you the challans and registers to prove it.",
      },
      {
        type: "p",
        text: "You remain the principal employer for workplace and working-conditions obligations, so a portion of responsibility stays with you by law. Any agency that tells you contract staffing removes your compliance exposure entirely is either being careless or hoping you will not check. Ask for the monthly compliance pack and read it.",
      },
      {
        type: "ul",
        items: [
          "Agency's responsibility: wages, payslips, PF, ESIC, professional tax, TDS, returns, wage and attendance registers, full and final settlement.",
          "Your responsibility as principal employer: workplace safety, working conditions and hours, and keeping the agency's compliance records on file for audits.",
          "Get in writing: what the markup includes, whether statutory employer contributions sit inside or on top of it, and what documents you receive each month.",
        ],
      },
      { type: "h2", text: "Speed, and why contract usually wins it" },
      {
        type: "p",
        text: "Contract roles close faster, for two reasons. The approval path is shorter because it is usually opex rather than a headcount addition, and the candidate pool includes people who are immediately available — between assignments, on short notice, or actively choosing contract work.",
      },
      {
        type: "p",
        text: "For an urgent gap, that difference is often several weeks. If a project is already slipping, a contractor starting in ten days beats a permanent hire starting in ninety.",
      },
      { type: "h2", text: "Contract-to-hire: the option most people forget" },
      {
        type: "p",
        text: "If the real problem is uncertainty — about the scope, the volume, or the person — contract-to-hire resolves it without forcing a decision early. The person joins on the agency's payroll, works in your team, and converts to your payroll on pre-agreed terms once you know you want to keep them.",
      },
      {
        type: "ol",
        items: [
          "Agree the conversion fee and the minimum period on contract before deployment, not after you have decided you want them.",
          "Be transparent with the candidate that conversion is the intent, or you will lose the good ones at month four.",
          "Treat them as part of the team from day one — the conversion decision is much easier when you have actually seen their work in context.",
        ],
      },
      { type: "h2", text: "Where contract staffing is the wrong answer" },
      {
        type: "p",
        text: "Two situations. First, roles that need deep institutional knowledge built over years — you will keep paying to rebuild what walks out at the end of each assignment. Second, genuinely scarce senior skills, where the strongest candidates have permanent options and a contract term reads as a lack of commitment.",
      },
      {
        type: "p",
        text: "There is also a cultural cost to watch. A team where contract staff are visibly treated as second class will have an attrition problem among the contract staff and a morale problem among everybody else. If you use contract headcount, use it properly: same induction, same tools, same meetings.",
      },
      { type: "h2", text: "A quick decision test" },
      {
        type: "ol",
        items: [
          "Will this role still exist, at this scope, in twelve months? If clearly yes, hire permanent.",
          "Is there a defined end date or a seasonal peak? If yes, hire on contract.",
          "Is the scope genuinely unclear? Use contract-to-hire and decide with evidence.",
          "Is the skill scarce and the need long-term? Hire permanent, and pay properly.",
          "Is speed the binding constraint? Contract will usually start weeks earlier.",
        ],
      },
      {
        type: "p",
        text: "If you are still torn after that, the answer is normally contract-to-hire. It is the only option that lets you change your mind cheaply.",
      },
    ],
    faqs: [
      {
        question: "Is contract staffing cheaper than permanent hiring?",
        answer:
          "Over a short assignment, usually yes — there is no placement fee and no exit cost. Over a full year the monthly markup typically exceeds a one-time permanent placement fee. The right comparison is against the actual duration of the need, plus the cost of exiting a permanent hire you no longer need.",
      },
      {
        question: "Who is the legal employer in contract staffing?",
        answer:
          "The staffing agency. The worker is on the agency's payroll and the agency handles wages, PF, ESIC, professional tax and statutory filings. The client remains the principal employer for workplace and working-conditions obligations, so a portion of responsibility stays with the client by law.",
      },
      {
        question: "Can a contract employee be converted to permanent?",
        answer:
          "Yes — that is contract-to-hire, and it is the most common path when scope or volume is uncertain. Agree the conversion fee and the minimum period on contract before deployment so there are no disputes later, and be transparent with the candidate that conversion is the intent.",
      },
      {
        question: "How quickly can contract staff be deployed?",
        answer:
          "Considerably faster than permanent hires in most cases. The approval path is shorter and the candidate pool includes people available immediately or on short notice. For a standard profile in a city we already cover, deployment within one to two weeks is normal.",
      },
    ],
    related: ["recruitment-agency-fees-india", "cut-time-to-hire"],
  },
];

export const postBySlug = new Map(posts.map((post) => [post.slug, post]));
