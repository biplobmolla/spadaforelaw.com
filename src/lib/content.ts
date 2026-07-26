import { firm } from "./firm-meta";

export { firm };

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/areas-of-practice" },
  { label: "Contact", href: "/contact" },
] as const;

export type PracticeServiceGroup = {
  id: string;
  title: string;
  intro?: string;
  services: string[];
};

export type PracticeDetail = {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  overview: string[];
  featured?: boolean;
  groups: PracticeServiceGroup[];
};

export const practiceAreas: PracticeDetail[] = [
  {
    id: "licensure",
    title: "Ohio Professional Licensure",
    shortTitle: "Licensure Defense",
    summary: "Protecting licenses before Ohio boards, commissions, and agencies.",
    featured: true,
    overview: [
      "Maintaining your professional credentials and reputation is essential. Even diligent practitioners can face allegations or legal challenges that threaten a license — and with it, a career.",
      "Spadafore Law provides comprehensive representation for physicians, nurses, healthcare providers, and other licensed professionals before all State of Ohio licensing boards, commissions, and agencies. Clients have included doctors, nurses, chiropractors, real estate agents, teachers, social workers, veterinary technicians, and many others.",
    ],
    groups: [
      {
        id: "licensure-matters",
        title: "Licensure matters handled",
        services: [
          "Licensure complaints",
          "Standard of care issues",
          "Criminal charges and convictions",
          "Investigations and investigative interviews",
          "Negotiation of consent agreements",
          "Consent agreement compliance or violations",
          "Fair hearings and due process proceedings",
          "Administrative appeals in the court of common pleas and appellate courts",
          "Disciplinary and sanction matters",
          "Substance abuse and mental health diversion programs",
        ],
      },
      {
        id: "common-allegations",
        title: "Common complaints and allegations",
        services: [
          "Professional misconduct — dishonesty, fraud, unethical behavior, conflicts of interest, or failure to meet professional standards",
          "Negligence — failure to meet professional duties, including judgment lapses or errors in services provided",
          "Ethical violations — breaches of professional boundaries or client confidentiality",
        ],
      },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare Law",
    shortTitle: "Healthcare",
    summary: "Counsel for smaller practices and individual healthcare providers in Ohio.",
    featured: true,
    overview: [
      "In a complex and changing healthcare environment, medical practices and professionals need counsel who can handle the legal issues that affect both clinical work and the business of medicine.",
      "Spadafore Law’s healthcare practice provides personalized advice, counseling, and assistance to smaller medical practices and individual physicians, nurses, and healthcare providers throughout Ohio — covering regulatory, transactional, operational, administrative, licensure, medical staff/employment, and litigation matters.",
    ],
    groups: [
      {
        id: "healthcare-services",
        title: "Healthcare services",
        services: [
          "Regulatory compliance",
          "Legal entity formation",
          "Corporate governance and bylaws",
          "Medical staff documents, peer review, credentialing, and privilege policies",
          "Employment, lease, joint venture, network, and insurance agreements",
          "Non-competition, confidentiality, and non-solicitation agreements",
          "Day-to-day patient, practice, and personnel counseling",
          "Mergers, acquisitions, and transactional matters",
          "Credentialing and clinical privilege matters",
          "Audits, investigations, administrative processes, and appeals",
          "Medical staff investigations, peer review, FPPE, and adverse actions",
          "Administrative fair hearings and appeals",
          "Medical board and National Practitioner Data Bank reporting",
          "CMS, OIG, ALJ hearings, and administrative appeals",
          "Credentialing, privilege, contract, and employment litigation",
        ],
      },
    ],
  },
  {
    id: "business-law",
    title: "Business Law",
    shortTitle: "Business",
    summary: "Practical counsel shaped around how your business actually operates.",
    overview: [
      "Spadafore Law’s business practice is focused on small businesses operating in Ohio — including sole proprietors, partnerships, closely held corporations, and limited liability companies, regardless of industry.",
      "Every business has its own circumstances, challenges, and goals. Spadafore Law works one-on-one to understand the inner workings of the business and its market, then provides practical, individualized advice for current and future needs.",
    ],
    groups: [
      {
        id: "business-services",
        title: "Business formation, operations, growth, and dissolution",
        intro:
          "Including, but not limited to, the following:",
        services: [
          "Business startups",
          "Choice of entity and entity formation",
          "Business/corporate governance",
          "Day-to-day management and operation issues",
          "Contracts and business agreements",
          "Sales and transactions",
          "Mergers and acquisitions",
          "Reorganizations",
          "Joint ventures and partnerships",
          "Franchising",
          "Financing",
          "Business valuation",
          "Stockholder/member buy-sell agreements, redemptions, and transactions",
          "Compliance and regulatory matters",
          "Owner, shareholder, member, manager, and partner disputes",
          "Real estate leasing and transactions",
          "Staff and employee matters",
          "Dissolutions and winding-up the business",
          "Business litigation, arbitration, and mediation",
        ],
      },
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate and Construction Law",
    shortTitle: "Real Estate & Construction",
    summary: "Transactional guidance and dispute resolution across the built environment.",
    overview: [
      "Spadafore Law provides real estate, title, and construction representation to property owners, project owners, entrepreneurs, small business owners, property managers, developers, contractors, subcontractors, construction managers, suppliers, architects, engineers, planners, designers, investors, lenders, servicers, sureties, receivers, buyers, sellers, landlords, and tenants.",
    ],
    groups: [
      {
        id: "real-estate-services",
        title: "Real estate services",
        services: [
          "Entity formation and ownership",
          "Joint ventures and partnership relationships",
          "Draft, review, consult, and negotiate real estate contracts, sales agreements, and options",
          "Purchases, sales, and transfers",
          "Title and title insurance matters",
          "Commercial and residential leasing",
          "Landlord-tenant matters",
          "Property management",
          "Land use, zoning, and easements",
          "Licensing and permitting",
          "Commercial and residential development",
          "Brokerage agreements",
          "Financing",
          "Franchising and commercial contracts",
          "Real estate taxes and assessments",
          "Condominium and homeowner associations",
          "Land-sale contracts",
          "Restrictive covenants",
        ],
      },
      {
        id: "construction-matters",
        title: "Construction matters",
        intro:
          "From the beginning of a project through the end — including contract preparation, licensing, bidding, liens, insurance, environmental issues, delay claims, design professional liability, construction defect litigation, and dispute resolution.",
        services: [
          "Business formation, operations, and management for construction clients",
          "Joint ventures and partnerships",
          "Client-specific documents and forms for day-to-day operations",
          "Contract drafting, consulting, and negotiation",
          "Ongoing project-specific advice and consultation",
          "Licensing and permitting issues",
        ],
      },
      {
        id: "re-disputes",
        title: "Disputes & litigation",
        intro:
          "Spadafore Law works with clients to identify problems early and manage risk — often resolving issues without litigation. When amicable resolution is not possible, the firm zealously represents clients in state and federal civil litigation, arbitrations, mediations, and administrative actions.",
        services: [
          "General real estate litigation and contract disputes",
          "Lease disputes",
          "Covenant enforcement for condominium, cooperative, and homeowners' associations",
          "Nuisance, code violations, eminent domain, and condemnation",
          "Evictions and landlord-tenant disputes",
          "Defaults, liens, and foreclosures",
          "General construction litigation and contract disputes",
          "Construction defect and workmanship disputes",
          "Delay disputes",
          "Bond or warranty disputes",
          "Compensation disputes",
          "Bidding disputes",
          "Construction and mechanics’ liens",
          "Mold, water damage, and environmental claims",
          "Notices of commencement, furnishing, liens, affidavits, payment applications, and releases",
        ],
      },
    ],
  },
  {
    id: "employment",
    title: "Employment Law",
    shortTitle: "Employment",
    summary: "Focused representation for employees and local small-to-medium businesses.",
    overview: [
      "Unlike most firms, Spadafore Law’s employment practice is focused on representing employees and small local businesses — providing advice, consultation, and representation across regulatory, personnel, labor, administrative, and litigation matters.",
    ],
    groups: [
      {
        id: "employment-areas",
        title: "Areas of representation",
        services: [
          "Regulatory compliance",
          "Personnel policies, employee handbooks, and employment agreements",
          "Hiring and employment contracts",
          "Non-compete and non-solicitation agreements",
          "Leaves of absence and accommodations",
          "Discipline and internal/employee investigations",
          "Employer-employee disputes",
          "Discrimination and wrongful termination claims",
          "Labor and union matters — contracts, fact-finding, mediation, grievance and arbitration",
          "State and federal labor and employment claims",
          "Harassment, tort, and Section 1983 claims",
          "Trade secret and confidentiality litigation",
          "Unemployment compensation matters",
          "Title IX claims",
        ],
      },
    ],
  },
  {
    id: "litigation",
    title: "Civil Litigation and Appellate Advocacy",
    shortTitle: "Civil Litigation",
    summary: "Trial and appellate advocacy when conflicts affect your business or career.",
    overview: [
      "When conflicts affect your business, real estate, finances, or professional life, you need counsel who can evaluate the factual and legal issues and chart the best course for your circumstances.",
      "Craig Spadafore has represented hundreds of individuals and businesses in state and federal trial courts, appellate courts, arbitration, mediation, administrative actions, and governmental or employer audits. Spadafore Law often resolves disputes through negotiation or ADR to limit cost and disruption — and will take a case to trial when informal resolution is not possible.",
      "Litigation counsel also includes proactive risk identification so clients can avoid disputes before they begin.",
    ],
    groups: [
      {
        id: "litigation-areas",
        title: "Litigation and disputes across",
        services: [
          "General civil litigation and appeals",
          "Business litigation — contracts, fiduciary duty, entity governance, vendor and ownership disputes, dissolutions, insurance",
          "Employment litigation — labor claims, harassment, discrimination, non-competes, trade secrets, Title IX, union matters",
          "Real estate and construction litigation — leases, title, boundaries, foreclosure, defects, mechanics’ liens, zoning",
          "Healthcare litigation — credentialing, peer review, audits, NPDB/board reporting, CMS/OIG, employment disputes",
          "Professional licensure defense — complaints, investigations, consent agreements, hearings, and appeals",
        ],
      },
    ],
  },
];

export const attorney = {
  name: "Craig Spadafore",
  role: "Attorney & Counselor at Law",
  portrait: "/craig-spadafore.jpg",
  stats: [
    { value: 17, suffix: "+", label: "Years of legal experience" },
    { value: 6, suffix: "", label: "Core practice areas" },
    { value: 7, suffix: "", label: "Court & bar admissions" },
    { value: 3, suffix: "×", label: "Super Lawyers Rising Star" },
  ],
  bio: [
    {
      id: "background",
      heading: "Background",
      body: "Craig Spadafore is a Columbus, Ohio attorney with over 17 years of legal experience across a diverse range of practice areas, including business matters and transactions, real estate and construction law, employment law, healthcare law, professional licensure, and civil litigation and appellate advocacy. He has worked at both midsize firms and larger regional firms, and has also worked in-house at a real estate title agency. His unique background and skill set make him a rarity in the legal profession — an experienced litigator with a strong foundation in business, real estate, employment, and healthcare matters.",
    },
    {
      id: "approach",
      heading: "Approach",
      body: "Craig strives to provide creative, individualized, and client-focused legal solutions in a diligent, efficient, and professional manner. He does this by offering his clients a more personalized and service-oriented approach than other firms, while individually tailoring his representation to meet each client’s unique needs and circumstances. Craig believes in earning his client’s trust by providing honest, straightforward, and understandable legal advice, while also responding quickly to client inquiries so that concerns and questions are answered and the client stays fully informed of the status of their legal matter.",
    },
    {
      id: "personal",
      heading: "Outside the Practice",
      body: "Craig is a C-bus native, a diehard Buckeye, and makes his home in Central Ohio. He is the proud father of two amazing young ladies. He lives with his daughters, his talented and lovely partner Juliana, a clingy Siberian Husky that never leaves his side, and an overly friendly cat. Most of his free time is dedicated to spending time with his family.",
    },
  ],
  interests: [
    "Traveling here and abroad",
    "Live music",
    "Playing guitar",
    "Gardening",
    "Hiking",
    "Canoeing & kayaking",
    "Camping",
    "Experimenting in the kitchen",
    "Craft beers",
    "Reading novels",
    "Movies",
    "Time with friends and family",
  ],
} as const;

export type CredentialGroup = {
  id: string;
  title: string;
  items: { primary: string; secondary?: string }[];
};

export const credentials: CredentialGroup[] = [
  {
    id: "education",
    title: "Education",
    items: [
      {
        primary: "The Ohio State University — Moritz College of Law",
        secondary: "Juris Doctor, cum laude, May 2006",
      },
      {
        primary: "The Ohio State University — University Honors Program",
        secondary:
          "Bachelor of Arts, summa cum laude with honors, June 2000",
      },
    ],
  },
  {
    id: "bar-admissions",
    title: "Bar Admissions",
    items: [
      { primary: "Ohio", secondary: "2006" },
      { primary: "U.S. District Court — Southern District of Ohio", secondary: "2006" },
      { primary: "U.S. District Court — Northern District of Ohio", secondary: "2009" },
      { primary: "U.S. Bankruptcy Court — Southern District of Ohio", secondary: "2009" },
      { primary: "U.S. Court of Appeals — Sixth Circuit", secondary: "2009" },
      { primary: "Kentucky", secondary: "2017" },
      { primary: "Pennsylvania", secondary: "2018 — currently inactive" },
    ],
  },
  {
    id: "title-licensure",
    title: "Real Estate Title Agent Licensure",
    items: [
      { primary: "Ohio" },
      { primary: "Kentucky" },
      { primary: "Indiana" },
      { primary: "Michigan" },
      { primary: "Pennsylvania" },
      { primary: "Florida" },
      { primary: "South Carolina" },
      {
        primary: "Experience in non-license states",
        secondary: "Illinois, Kentucky, and New York",
      },
    ],
  },
  {
    id: "associations",
    title: "Professional Associations",
    items: [
      { primary: "Ohio State Bar Association" },
      { primary: "Kentucky Bar Association" },
      { primary: "Columbus Bar Association" },
      { primary: "Pennsylvania Bar Association", secondary: "currently inactive" },
      { primary: "American Land Title Association" },
    ],
  },
  {
    id: "honors",
    title: "Honors and Awards",
    items: [
      { primary: "Super Lawyers Rising Star", secondary: "2014" },
      { primary: "Super Lawyers Rising Star", secondary: "2015" },
      { primary: "Super Lawyers Rising Star", secondary: "2016" },
    ],
  },
];

export const quote = {
  text: "The law is the last result of human wisdom acting upon human experience for the benefit of the public.",
  attribution: "Samuel Johnson",
} as const;
