export type EntryType = "role" | "project" | "education";

export interface TimelineEntry {
  type: EntryType;
  dates: string;
  title: string;
  org: string;
  loc: string;
  bullets: string[];
  industries?: string[];
}

export const ENTRIES: TimelineEntry[] = [
  {
    type: "role",
    dates: "May 2026 – Present",
    title: "Account Manager",
    org: "Avalere Health",
    loc: "London, UK",
    bullets: [
      "Therapy areas: Dermatology and Oncology.",
      "Shape and align cross-functional strategic discussions at the EMEA regional level on competitor positioning, multi-product portfolio co-positioning, and product launches, driving strategy and asset development for pre-launch and mid-lifecycle products.",
      "Oversee the simultaneous creation of up to 10 EMEA marketing assets involving 4 internal teams, to ensure assets meet the strategic priorities and needs of the client and their market representatives.",
      "Engage weekly with the client and numerous EMEA country brand leads to understand regional/country nuances and ensure marketing assets are developed in line with agreed strategy, ensuring efficient budget use and higher rate of adoption.",
      "Manage key financial tasks for a £950k client portfolio including writing Scope of Works (SOWs), invoicing, monthly revenue recognition, weekly project finance health reviews, and various client-specific financial tasks.",
      "Types of assets: eDetails, leave pieces, emails, objection handlers, modular proactive messaging PPT decks, KOL presentations, HCP websites, two-pagers, internal launch PPT deck, workshops, interactive digital screen asset, patient guide, campaign launch videos, cardboard stools, digital and print banners, congress booth backwall panel.",
    ],
    industries: ["Pharmaceuticals"],
  },
  {
    type: "role",
    dates: "Apr 2025 – Apr 2026",
    title: "Account Executive",
    org: "Avalere Health",
    loc: "London, UK",
    bullets: [
      "Actively sought operational and process optimisations; designed an Excel tracker for smoother handover of tasks and consistency between assets, and volunteered to support implementation of a new Workfront platform.",
      "Only Account Executive in Global Marketing to be invited to a client pitch; presented the collaboration roadmap for a £559,000 RFP.",
      "Owned and led an internal 1.5-hour workshop on new client growth; commended by Growth Director for expanding the company’s list of target customers and key job titles and for increasing RFPs received.",
      "Awarded the “Trailblazer Award” by colleagues as someone who “made an impact from day one — diving in headfirst, finding their rhythm fast, and making waves along the way.”",
    ],
    industries: ["Pharmaceuticals"],
  },
  {
    type: "role",
    dates: "Nov 2024 – Present",
    title: "Marketing Campaign Manager (Freelance)",
    org: "Freelance",
    loc: "London, UK",
    bullets: [
      "Develop key communication pillars in line with client strategy, then translate them into Instagram posts and ad campaigns for Canada’s largest wooden box manufacturer.",
    ],
    industries: ["Manufacturing"],
  },
  {
    type: "role",
    dates: "Jun 2023 – Nov 2024",
    title: "Client Portfolio Executive",
    org: "MHA (UK member firm of Baker Tilly International)",
    loc: "London, UK",
    bullets: [
      "Led division’s B2B marketing strategies by independently creating and re-designing targeted documents including 35 pitch presentations, 10 case studies, 3 articles, & 1 newsletter, using PowerPoint and Canva.",
      "Established client acquisition/BD funnel by creating Excel database as CRM for prospective clients, networking with relevant parties at conferences, conducting introductory calls, participating in C-suite pitches with Partner and Director, and managing onboarding process; contributed to division’s £200,000 y-o-y revenue growth.",
      "Managed 20 audits across 3 Financial Services clients by overseeing 7 senior subject matter experts, finalising and delivering reports, and presenting summary packs to C-suite; established strong client relationships.",
    ],
    industries: ["Financial Services", "Professional Services"],
  },
  {
    type: "project",
    dates: "Feb – May 2023",
    title: "Pricing & Promotion Strategy — Virtual Anatomy Product (GB & Ireland)",
    org: "Siemens Healthineers",
    loc: "London, UK",
    bullets: [
      "Created project framework as team leader; narrowed target market to medical university sector by quantifying market size and growth trends, then established product, pricing, and promotion questions to be answered.",
      "Designed and led interviews of 12 professors to elucidate university processes for teaching anatomy and purchasing educational tools; used findings to refine product development and pricing recommendations (e.g., institutional license vs. per-device license).",
    ],
    industries: ["Medical Technology"],
  },
  {
    type: "project",
    dates: "May – Jul 2022",
    title: "Market Entry Plan — Novel Payment Product",
    org: "Izipay",
    loc: "Lima, Peru",
    bullets: [
      "Created market entry plan for a novel Peruvian payment product by identifying target industries, quantifying market sizes, forecasting revenues, and conducting due diligence; efforts contributed to the team’s recommendation to tailor product development for converting customers of competitors in the Lottery & Betting industry.",
    ],
    industries: ["Financial Technology"],
  },
  {
    type: "education",
    dates: "Jan 2022 – May 2023",
    title: "MSc International Business & CEMS (global rotational management degree)",
    org: "LSE, Ivey Business School, University of Cologne",
    loc: "UK, Canada, Germany",
    bullets: [
      "GPA 3.9. Recipient of $10,000 Richard Ivey MSc Excellence Award for academic merit, leadership, and past experience.",
    ],
  },
  {
    type: "project",
    dates: "Sep – Nov 2021",
    title: "Brand & Strategy Repositioning — Canadian College",
    org: "Borealis Creative",
    loc: "Toronto, ON, Canada",
    bullets: [
      "Advised on the brand and strategy repositioning of a Canadian college to move the consumer perspective towards the breadth and depth of their offerings, to complement their well-known and highly respected offerings.",
      "Analysed 108 discussion board participants’ input by observing trends in the responses and consolidating key data; determined existing consumer perspectives and qualities as a baseline for recommendations to build on.",
    ],
    industries: ["Education", "Consulting"],
  },
  {
    type: "project",
    dates: "Jan – Jun 2021",
    title: "Environmental Impact Assessment — Mosquito Net Reuse (AMF)",
    org: "180 Degrees Consulting",
    loc: "London, ON, Canada",
    bullets: [
      "Quantified and qualified the environmental impact of mosquito nets (MN) distributed in Africa by the Against Malaria Foundation (AMF) that are misused for fishing, using a bottom-up approach.",
      "Utilised Excel to estimate excess annual fish biomass caught with AMF MN compared to typical nets; measured implications with consideration of the over-fishing of juveniles, limiting fish population regrowth and increasing future risk of lost food source for local communities.",
    ],
    industries: ["Non-Profit Organisation"],
  },
  {
    type: "project",
    dates: "Jan – Apr 2021",
    title: "Digital Marketing Recommendations — Novel Prostate Cancer Drug",
    org: "Bayer",
    loc: "Toronto, ON, Canada",
    bullets: [
      "Analysed the target market/user base, financial feasibility, and functionalities of 3 non-traditional digital platforms for targeting and educating Health Care Providers about client’s prostate cancer drug in accordance with Canadian pharmaceutical advertising regulations, contributing to a 3-stage digital strategy recommendation.",
    ],
    industries: ["Pharmaceuticals"],
  },
  {
    type: "education",
    dates: "Sep 2020 – Sep 2021",
    title: "Master of Management of Applied Science",
    org: "Western University",
    loc: "London, ON, Canada",
    bullets: [
      "GPA 3.9. Graduated with Distinction — overall average over 80% and no grade below 70% across entire program.",
    ],
  },
  {
    type: "project",
    dates: "Sep – Dec 2020",
    title: "IP Commercialisation Plan — Diabetic Retinopathy Detection Device",
    org: "Graduate Student Innovation Scholar (GSIS)",
    loc: "London, ON, Canada",
    bullets: [
      "Winner of $500 Pitch Competition; presented majority of team’s commercialisation plan to judges.",
      "Analysed market size, competition, and distribution of an assigned IP for a 3-person team’s commercialisation plan covering industry analysis, competitive landscape, barriers to entry, go-to-market strategy, and financials.",
    ],
    industries: ["Medical Technology"],
  },
  {
    type: "education",
    dates: "Sep 2016 – Apr 2020",
    title: "Bachelor of Medical Science (Honours)",
    org: "Western University",
    loc: "London, ON, Canada",
    bullets: [
      "GPA 3.9 — Dean’s Honour List.",
      "Graduated with Distinction — overall average over 80% and no grade below 70% across entire program.",
    ],
  },
];

export const INDUSTRIES: string[] = Array.from(new Set(ENTRIES.flatMap((entry) => entry.industries ?? [])));

export interface SkillGroup {
  group: string;
  story: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    group: "Client & Account Management",
    story:
      "Honed through management of a £950k EMEA client portfolio - as evidenced by being the only Account Executive invited to present in a pitch.",
    items: ["Client Relationship Management", "Account Strategy & Growth", "C-Suite Pitching & RFPs", "EMEA Stakeholder Management"],
  },
  {
    group: "Industries",
    story: "The same range named above — proof that strategy skills transfer across sectors.",
    items: ["Financial Technology", "Health Technology", "Professional Services", "Financial Services", "Pharmaceuticals", "Not-for-Profit", "Education"],
  },
  {
    group: "Go-to-Market & Strategy",
    story: "Sharpened across healthcare, fintech, and NGO work — from EMEA regional positioning to a bottom-up Excel model on mosquito nets.",
    items: ["Go-to-Market Planning", "Competitor & Market Positioning", "Pricing & Promotion Strategy", "Business Development Funnels", "EMEA Regional Level"],
  },
  {
    group: "Commercial & Financial",
    story: "Built writing SOWs and running monthly revenue recognition to keep a £950k+ portfolio financially healthy, week after week.",
    items: ["Scope of Work (SOW) Drafting", "Invoicing & Revenue Recognition", "Portfolio Budget Management (£950k+)"],
  },
  {
    group: "Production & Tools",
    story: "The toolkit behind 35+ pitch decks, a rebuilt BD database, and this page itself — built with Bun, React, Tailwind CSS, and shadcn/ui via Claude Code.",
    items: ["Cross-functional Project Management", "Excel", "PowerPoint", "Canva", "Workfront", "CRM Database Design", "Claude Code"],
  },
  {
    group: "Languages & Culture",
    story: "Picked up living and working across Canada, Peru, Germany, and the UK.",
    items: ["English (Native)", "French (B1)", "Spanish (A1)", "Lived in Canada, Peru, Germany & UK"],
  },
];
